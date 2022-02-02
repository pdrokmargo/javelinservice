<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use \App\Models\Delivery;
use \App\Models\ScheduledDelivery;

class DeliveriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'consecutive';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $company_id = $request->user()->company_default_id;
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $deliveries = \App\Models\Delivery::where('delivery_point_id', $active_delivery_point->value['delivery_point_id'])->orderBy($ordername, $ordertype)->paginate(15); 
            return response()->json(['status'=>'success', "message"=>'', "data" => $deliveries ], 200);
        }catch(Exception $e){
            return 'Error:'.$e->getMessage();
        }
       

    }

    public function scheduled_deliveries($affiliate_id)
    {
        $deliveries = \App\Models\ScheduledDelivery::where('affiliate_id', $affiliate_id)->where('status',true)->whereNull('delivery_fulfillment_id')->orderBy('consecutive', 'DESC')->paginate(15); 
        return response()->json(['status'=>'success', "message"=>'', "scheduled_deliveries" => $deliveries ], 200);
    }

    public function affiliate_deliveries($affiliate_id)
    {
        $deliveries = \App\Models\DeliveryDetail::with(['delivery' => function($query) use($affiliate_id) {$query->where('affiliate_id', $affiliate_id);}])->paginate(15); 
        $deliveries->load('delivery.delivery_point');
        $deliveries->load('delivery.delivery');
        return response()->json(['status'=>'success', "message"=>'', "affiliate_deliveries" => $deliveries ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeScheduledDeliveries(){

    }

    public function store(Request $request)
    {
        DB::beginTransaction(); 
        try
        {
            $data = json_decode($request->data, true);
            $data['company_id'] = $request->user()->company_default_id;
            $data_details = $data['details'];
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $data['delivery_point_id'] = $active_delivery_point->value['delivery_point_id'];
            $data['consecutive'] = \App\Models\Delivery::max('consecutive') + 1;

            //Create the delivery master
            $delivery = \App\Models\Delivery::create($data);

            //This is used to collect all stocks that must be reduced afterwards
            $stocks_used = [];

            // get active warehouse
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $delivery_point = \App\Models\DeliveryPoint::where('id', $active_delivery_point->value['delivery_point_id'])->first();

            
            
            //create_inventory_movement master
            $inventory_movement['document'] = \App\Models\Consecutive::where('document_name', 'inventory_movement_out')->first();
            $inventory_movement['consecutive_id'] = $inventory_movement['document']['id'];
            $inventory_movement['consecutive'] = \App\Models\InventoryMovement::where('consecutive_id', $inventory_movement['consecutive_id'])->max('consecutive') + 1;
            if($inventory_movement['consecutive'] == null){
                $inventory_movement['consecutive'] = 1;
            }
            $inventory_movement['company_id'] = $request->user()->company_default_id;
            $inventory_movement['warehouse_id'] = $delivery_point->warehouse_id;
            $inventory_movement['date'] = $delivery->date;
            $inventory_movement['inventory_movement_entry_out_type_id'] = 180;
            $inventory_movement['observations'] = '';
            
            $result_im=\App\Models\InventoryMovement::create($inventory_movement); // Here we define the inventory_movement model


            foreach ($data_details as $i)
            {
                $i["delivery_id"] = $delivery->id;
                foreach ($i["stockSelected"] as $s)
                {
                    $i["batch"] = $s['batch'];
                    $i["expiration_date"] = $s['expiration_date'];
                    $stocks_used[] = ['id','=',$s['id']];

                    //Here we create the inventory_movement out details
                    $imd["inventory_movements_id"] = $result_im->id;
                        $imd["product_id"] = $i['product_id'];
                        $imd["units"] = $i['delivered_units'];
                        $imd["fraction"] = true;
                        $imd["batch"] = $s['batch'];
                        $imd["location"] = $s['location'];
                        $imd["expiration_date"] = $s['expiration_date'];
                        $imd['purchase_price'] = 0;
                        $result_detail=\App\Models\InventoryMovementDetail::create($imd);
                }

                //reduce the stock here
                $stock_result = \App\Models\StocksProducts::where($stocks_used)->get();
                $units_to_reduce = $i["delivered_units"];
                foreach($stock_result as $stock){
                    if($stock->fraction_stock <= $units_to_reduce){
                        $units_to_reduce -= $stock->fraction_stock;
                        $stock->fraction_stock = 0;
                    }else{
                        $stock->fraction_stock -= $units_to_reduce;
                    }
                    $stock->save();
                }
                // $i["batch_units"] = $s['expiration_date']; // cool things to save the units used for each batch
                $delivery_detail=\App\Models\DeliveryDetail::create($i);

                /*
                    Here we define the scheduled deliveries
                    */

                    if($i["requested_units"] >= $i["delivered_units"] && $i["deliveryCovered"] == true && $i["scheduleddelivery_id"] == ''){
                        // it means there are stock and scheduled delivery must be created
                        $dn = ceil($i["requested_units"]/$i["delivered_units"]);
                        for ($j = 0; $j < $dn-1; $j++) {
                            $scheduled_delivery = new \App\Models\ScheduledDelivery;
                            $scheduled_delivery["product_id"] = $i["product_id"];
                            $scheduled_delivery["units"] = $i["delivered_units"];
                            $scheduled_delivery["delivery_source_id"] = $i["delivery_id"];
                            // $scheduled_delivery["delivery_fulfillment_id"] = null;
                            $scheduled_delivery["affiliate_id"] = $data["affiliate_id"];
                            $scheduled_delivery["type_id"] = 195; //196 pending, 195: scheduled
                            $scheduled_delivery["date"] = $data["date"];
                            $scheduled_delivery['consecutive'] = \App\Models\ScheduledDelivery::max('consecutive') + 1;
                            $scheduled_delivery->save();
                            // \App\Models\ScheduledDelivery::create($scheduled_delivery);
                        }
                    }
                    if($i["requested_units"] >= $i["delivered_units"] && $i["deliveryCovered"] == false && $i["scheduleddelivery_id"] == ''){
                        // it means there are not enough stock and pending must be created
                            $pending = new \App\Models\ScheduledDelivery;
                            $pending["product_id"] = $i["product_id"];
                            $pending["units"] = $i["requested_units"] - $i["delivered_units"];
                            $pending["delivery_source_id"] = $i["delivery_id"];
                            // $scheduled_delivery["delivery_fulfillment_id"] = null;
                            $pending["affiliate_id"] = $data["affiliate_id"];
                            $pending["type_id"] = 196; //196 pending, 195: scheduled
                            $pending["date"] = $data["date"];
                            $pending['consecutive'] = \App\Models\ScheduledDelivery::max('consecutive') + 1;
                            $pending->save();
                            // \App\Models\ScheduledDelivery::create($pending);
                    }
                
            }
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro creado correctamente" 
            ], 200);
        }
        catch (Exception $e) 
        { 
            DB::rollback();
            return response()->json([ 
                "store" => false, 
                "message" => "Error al intentar almacenar el nuevo registro" 
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $delivery = \App\Models\Delivery::find($id);
         $delivery->load('details.product');
        

	    return response()->json(["status"=>"success", "message"=>"", "data" =>$delivery ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}