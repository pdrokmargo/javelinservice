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
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $company_id = $request->user()->company_default_id;
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            $deliveries = \App\Models\Delivery::where('delivery_point_id', $active_delivery_point->value['delivery_point_id'])->orderBy($ordername, $ordertype)->paginate(15); 
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
            $delivery_point_id = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
            
            $delivery = \App\Models\Delivery::create($data);
            $delivery['delivery_point_id'] = $delivery_point_id;
            foreach ($data_details as $i)
            {
                $i["delivery_id"] = $delivery->id;
                $delivery_detail=\App\Models\DeliveryDetail::create($i);
                
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
        //
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
