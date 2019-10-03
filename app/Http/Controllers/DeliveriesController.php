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
        $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'consecutive';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $company_id = $request->user()->company_default_id;
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $deliveries = \App\Models\Delivery::where('delivery_point_id', json_decode($active_delivery_point->value, true)['delivery_point_id'])->orderBy($ordername, $ordertype)->paginate(15); 
            return response()->json(['status'=>'success', "message"=>'', "data" => $deliveries ], 200);

    }

    public function scheduled_deliveries($affiliate_id)
    {
        $deliveries = \App\Models\ScheduledDelivery::where('affiliate_id', $affiliate_id)->where('status',true)->whereNull('delivery_fulfillment_id')->paginate(15); 
        return response()->json(['status'=>'success', "message"=>'', "scheduled_deliveries" => $deliveries ], 200);
    }

    public function affiliate_deliveries($affiliate_id)
    {
        $deliveries = \App\Models\DeliveryDetail::with(['delivery' => function($query) use($affiliate_id) {$query->where('affiliate_id', $affiliate_id);}])->paginate(15); 
        $deliveries->load('delivery.delivery_point');
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
            $data["company_id"] = $request->user()->company_default_id;
            $data_details = $data['details'];
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $data['delivery_point_id'] = json_decode($active_delivery_point->value, true)['delivery_point_id'];
            //Consecutive assignment, temporary disabled, working only with the consecutive without document.
            // $doc['document'] = \App\Models\Consecutive::where('document_name', 'deliveries')->first();
            // $data['consecutive_id'] = $doc['document']['id'];
            $data['consecutive'] = \App\Models\Delivery::/*where('consecutive_id', $data['consecutive_id'])->*/max('consecutive') + 1;

            $delivery = \App\Models\Delivery::create($data);
            
            foreach ($data_details as $i)
            {
                $i["delivery_id"] = $delivery->id;
                foreach ($i["stockSelected"] as $s)
                {
                    $i["batch"] = $s['batch'];
                    $i["expiration_date"] = $s['expiration_date'];

                    var_dump($i);

                    /*
                    Here we define the scheduled deliveries
                    */

                    if($i["requested_units"] >= $i["delivered_units"] && $i["deliveryCovered"] == true && $i["scheduleddelivery_id"] == ''){
                        // it means there are stock and scheduled delivery must be created
                        $dn = ceil($i["requested_units"]/$i["delivered_units"]);
                        for ($i = 0; $i < $dn-1; $i++) {
                            $scheduled_delivery = '';
                            $scheduled_delivery["product_id"] = $i->product_id;
                            $scheduled_delivery["units"] = $i["delivered_units"];
                            $scheduled_delivery["delivery_source_id"] = $i["delivery_id"];
                            // $scheduled_delivery["delivery_fulfillment_id"] = null;
                            $scheduled_delivery["affiliate_id"] = $data["affiliate_id"];
                            $scheduled_delivery["type_id"] = 195; //196 pending, 195: scheduled
                            $scheduled_delivery["date"] = $data["created_at"];
                            \App\Models\ScheduledDelivery::create($scheduled_delivery);
                        }
                    }
                    if($i["requested_units"] >= $i["delivered_units"] && $i["deliveryCovered"] == false && $i["scheduleddelivery_id"] == ''){
                        // it means there are not enough stock and pending must be created
                            $pending = '';
                            $pending["product_id"] = $i->product_id;
                            $pending["units"] = $i["requested_units"] - $i["delivered_units"];
                            $pending["delivery_source_id"] = $i["delivery_id"];
                            // $scheduled_delivery["delivery_fulfillment_id"] = null;
                            $pending["affiliate_id"] = $data["affiliate_id"];
                            $pending["type_id"] = 196; //196 pending, 195: scheduled
                            $pending["date"] = $data["created_at"];
                            \App\Models\ScheduledDelivery::create($pending);
                    }

                    // $i["batch_units"] = $s['expiration_date'];
                    $delivery_detail=\App\Models\DeliveryDetail::create($i);
                    
                }
                // $delivery_detail=\App\Models\DeliveryDetail::create($i);
                
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
