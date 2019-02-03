<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\InventoryAudit;

class InventoryAuditController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $search     = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername  = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype  = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page       = isset($request->page) ? $request->page : 1;
            
            $data = InventoryAudit::orderBy($ordername, $ordertype)->paginate(15); 

            return response()->json([
                'status'=>'success',
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
