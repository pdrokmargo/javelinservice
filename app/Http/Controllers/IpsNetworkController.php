<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IpsNetworkController extends Controller
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

        $id = \App\Models\Collections::where('name','IPS_NETWORK')->first()->id;
        $query = new \App\Models\CollectionsValues();
        $query->where('collection_id', $id);
        if ($search!='') {
            $query = $query->whereRaw("lower(code) like ? or lower(value) like ?", array($search, $search))->orderBy($ordername, $ordertype);
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
        $id = \App\Models\Collections::where('name','IPS_NETWORK')->first()->id;
        $data = json_decode($request->data, true);
        $data["collection_id"] = $id;
        \App\Models\CollectionsValues::create($data);
        return response()->json([ "store" => true ], 200);
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
        $data = \App\Models\CollectionsValues::find($id);        
        return response()->json([ "data" => $data ], 200);
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
