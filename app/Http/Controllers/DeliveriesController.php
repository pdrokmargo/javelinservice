<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use \App\Models\Delivery;

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
        $deliveries = \App\Models\ScheduledDelivery::where('affiliate_id', $affiliate_id)->where('status',true)->whereNull('delivery_fulfillment_id')->orderBy('consecutive', 'ASC')->paginate(15); 
        return response()->json(['status'=>'success', "message"=>'', "scheduled-deliveries" => $deliveries ], 200);
    }

    public function affiliate_deliveries($affiliate_id)
    {
        $deliveries = \App\Models\DeliveryDetail::with(['delivery.delivery_point' => function($query){$query->where('affiliate_id', $affiliate_id);}])->orderBy('consecutive', 'ASC')->paginate(15); 
        return response()->json(['status'=>'success', "message"=>'', "affiliate-deliveries" => $deliveries ], 200);
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
        $delivery = $delivery->load('details.product');
        $details = [];
        $i = 0;
        $empty = false;
        do {
            if(!$empty && $delivery->details->length > 0){
                $product_id = $delivery->details[0]->product_id;
            }
            foreach ($delivery->details as $d){
                if(!$empty && $d->product_id == $delivery->details[0]->product_id){
                    $stockSelected['batch'] = $delivery->details[0]['batch'];
                    $stockSelected['expiration_date'] = $delivery->details[0]['expiration_date'];
                    $delivery->details[$i]['stockSelected'][] = $stockSelected;
                }
            }
            $details[] = $delivery->details[0];
            foreach ($delivery->details as $d){
                if($d->product_id == $product_id){
                   unset($d);
                }
            }
            if($delivery->details->length == 0){
                $empty = true;
            }
            $i++;
        } while ($delivery->details->length != 0);

        
            $grouped = false;
            foreach ($details as $d){
                foreach ($delivery->details as $d2){
                    if($d->product_id == $d2->product_id){
                        $grouped = true;
                    }
                }
            }
            if($grouped){

            }
        
        do {
            $details = $delivery->details;
            $toRemove = [];
            $i = 0;
            $j = 0;
            foreach ($details as $d){
                foreach($delivery->details as $d2){
                    if($d->product_id == $d2->product_id && $i != $j){
                        $toRemove[] = $j;
                    }
                    $j++;
                }
    
                $i++;
            }
        } while ($i <= $delivery->details->length);

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
