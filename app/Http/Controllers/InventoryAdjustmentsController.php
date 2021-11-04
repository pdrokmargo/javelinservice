<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class InventoryAdjustmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request  )
    {
        try {
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'adjustment_date';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            // $company_id = $request->user()->company_default_id;
            $inventory_adjustments = \App\Models\InventoryAdjustment::orderBy($ordername, $ordertype)->paginate(15); 

            return response()->json(['status'=>'success', "message"=>'', "data" => $inventory_adjustments ], 200);

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
        DB::beginTransaction(); 
        try {
            
            $inventory_adjustment = json_decode($request->data, true);
            $inventory_adjustment = \App\Models\InventoryAdjustment::create($inventory_adjustment);
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro almacenado" 
            ], 200);
            
        } catch (Exception $e) {
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
        $inventory_adjustment = \App\Models\InventoryAdjustment::find($id);
	    return response()->json(["status"=>"success", "message"=>"", "data" =>$inventory_adjustment ], 200);
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
        DB::beginTransaction();
        try {

            $inventory_adjustment = json_decode($request->data,true);
            

            \App\Models\InventoryAdjustment::findOrFail($id)->update($inventory_adjustment);

            DB::commit();
            // $this->CreateLog($request->user()->id, 'inventory movement', 2,'');
            return response()->json([ 
                "update" => true, 
                "message" => "Registro actualizado correctamente" 
            ], 200);     


        } catch (Exception $e) {
            DB::rollback();
            return response()->json([ 
                "update" => false, 
                "message" => "Error al intentar actualizar el registro" 
            ], 400);
        }
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
