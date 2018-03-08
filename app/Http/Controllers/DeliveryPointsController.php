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
        $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';    		
        $ordername = isset($request->ordername) ? $request->ordername : 'id';
        $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
        $page = $request->page;

        $query = new \App\Models\DeliveryPoint();

        if ($search!='') {
            $query = $query->whereRaw("lower(name) like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ? or (case when installed=true then 'instalado' else 'no instalado' end) like ?", array($search, $search, $search, $search))
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

        foreach ($data as $value)
        {
            // return response()->json(['status'=>'success', "message"=>'', "data" => $value->delivery_contracts ], 200);
            
            if(!empty($value['delivery_contracts'])){
                foreach ($value['delivery_contracts'] as $dc)
                {
                    $contracts = \App\Models\DeliveryContract::find($dc['delivery_contract_id']);    
                    //return response()->json(['status'=>'success', "message"=>'', "data" => $dc['delivery_contract_id'], "data2" => $contracts->name ], 200);    
                    //$contracts = \App\Models\DeliveryContract::where('id', $dc['delivery_contract_id'])->first();
                    $dc = json_encode($dc);
                    $dc["delivery_contract_name"] = $contracts->name;
                    $dc = json_decode($dc, true);
                    
                    
                } 
            }else{

            }
               
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
