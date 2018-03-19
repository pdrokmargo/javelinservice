<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeliveryContractsController extends Controller
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

        $query = new \App\Models\DeliveryContract();

        if ($search!='') {
            $query = $query->whereRaw("lower(name) like ? or lower(customers.stakeholderInfo.businessname) like ? or (case when state=true then 'activo' else 'inactivo' end) like ? or (case when installed=true then 'instalado' else 'no instalado' end) like ?", array($search, $search, $search, $search))
            ->orderBy($ordername, $ordertype);
        }else{
            $query=$query->orderBy($ordername, $ordertype);
        } 

        


        $data = [];  
        if ($page) {
          $data = $query->paginate(30);
        }else{
          $data = $query->get();
        } 

        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
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
        $json = json_decode($data["capita"],true);
        $json["affiliates_qty_history_record"] = [];
        foreach ($json["detailed_capita"] as $key) {
            $key["date"] = date('Y-m-d H:i:s');
            $json["affiliates_qty_history_record"][] = $key;
        }
        $data["capita"] = json_encode($json);
        \App\Models\DeliveryContract::create($data);
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
        $data = \App\Models\DeliveryContract::find($id);
        
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
        $data_old = \App\Models\DeliveryContract::find($id);

        $json = json_decode($data_new["capita"],true);
        $json["affiliates_qty_history_record"] = [];
        foreach ($json["detailed_capita"] as $key) {
            $key["date"] = date('Y-m-d H:i:s');
            $json["affiliates_qty_history_record"][] = $key;
        }
        $data_new["capita"] = json_encode($json);

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
        $data = \App\Models\DeliveryContract::find($id);
        $data->state = false;
        $data->save();
        return response()->json([ "destroy" => true], 200);
    }
}
