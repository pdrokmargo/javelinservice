<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AffiliatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexindex(Request $request)
    {
        try {

            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $query = DB::table('affiliates as a')
            ->join('delivery_contracts as dc', 'dc.id', '=', 'a.delivery_contract_id')
            ->join('collections_values as cv', 'cv.id', '=', 'a.contracts_payment_method_id')
            ->select(DB::raw("a.id, (a.firstname || ' ' || a.middlename || ' ' || a.lastname1 || ' ' || a.lastname2) as name, dc.name as contract, cv.value as contracts_payment_method, a.state"));

            if ($search != '') {
                $query = $query->whereRaw("(lower(a.firstname) || ' ' || lower(a.middlename) || ' ' || lower(a.lastname1) || ' ' || lower(a.lastname2)) like ? or lower(dc.name) like ? or lower(cv.value) like ?", array($search, $search, $search))->orderBy($ordername, $ordertype);
            } else {
                $query = $query->orderBy($ordername, $ordertype);
            }          

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  
            
            return response()->json([
                'status' => 'success', 
                "message" => '', 
                "data" => $data 
            ], 200);
            
        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        } 
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
        //
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
