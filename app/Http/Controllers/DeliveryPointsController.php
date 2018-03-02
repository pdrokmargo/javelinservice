<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeliveryPointsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = isset($request->search) ? $request->search : '';
        $filter = isset($request->filter) ? $request->filter : '';
        $ordername = isset($request->ordername) ? $request->ordername : 'ID';
        $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
        $sign = isset($request->sign) ? $request->sign : '';

        if($sign == '1') {
            $sign = 'LIKE';
            $search = $search.'%';
        } else if($sign == '2') {
            $sign = '=';
        }

        if(!empty($filter)){
            $data = \App\Models\DeliveryPoint::where($filter,$sign,$search)
                ->orderBy($ordername, $ordertype)
                ->paginate(30);
        }else{
            $data = \App\Models\DeliveryPoint::orderBy($ordername, $ordertype)
                ->paginate(30);
        }
        return response()->json([ "data" => $data ], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = json_decode($request->data, true);
        \App\Models\DeliveryPoint::create($data);
        return response()->json([ "store" => true ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = \App\Models\DeliveryPoint::find($id);
        
        return response()->json([ "data" => $data ], 200);
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
        $data_new = json_decode($request->data,true);
        $data_old = \App\Models\DeliveryPoint::find($id);
        $data_old->fill($data_new);
        $data_old->save();
        return response()->json([ "update" => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = \App\Models\DeliveryPoint::find($id);
        $data->state = false;
        $data->save();
        return response()->json([ "destroy" => true], 200);
    }
}
