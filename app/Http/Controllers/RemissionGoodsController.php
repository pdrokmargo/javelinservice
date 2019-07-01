<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\RemissionGoods;
use DB;

class RemissionGoodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            // $company_id = $request->user()->company_default_id;
            $remission_goods = \App\Models\RemissionGoods::orderBy($ordername, $ordertype)->paginate(15); 

            return response()->json(['status'=>'success', "message"=>'', "data" => $remission_goods ], 200);

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

            $data = json_decode($request->data, true);
            
            //Consecutive assignment
            $remission_goods['document'] = \App\Models\Consecutive::where('document_name', 'remission_goods')->first();
            $data['consecutive_id'] = $remission_goods['document']['id'];
            $data['consecutive'] = \App\Models\RemissionGoods::where('consecutive_id', $data['consecutive_id'])->max('consecutive') + 1;
            if($data['consecutive'] == null){
                $data['consecutive'] = 1;
            }

            $data['inventory_movement_out_id'] = 180;

            $remission_goods = \App\Models\RemissionGoods::create($data);
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
        $remission_goods = \App\Models\RemissionGoods::find($id);
	    return response()->json(["status"=>"success", "message"=>"", "data" =>$remission_goods ], 200);
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

            $remission_goods = json_decode($request->data,true);
            
            //Consecutive assignment
            $remissiong_goods['document'] = \App\Models\Consecutive::where('document_name', 'remission_goods')->first();
            $data['consecutive_id'] = $remissiong_goods['document']['id'];
            $data['consecutive'] = \App\Models\RemissionGoods::where('consecutive_id', $data['consecutive_id'])->max('consecutive') + 1;
            if($data['consecutive'] == null){
                $data['consecutive'] = 1;
            }

            \App\Models\RemissionGoods::findOrFail($id)->update($remission_goods);

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
        DB::beginTransaction();
        try
        {
            $remission_goods = RemissionGoods::find($id);
            $remission_goods->delete();
            // $this->CreateLog($request->user()->id, 'customers-quotes', 3,'');
            DB::commit();
            return response()->json([ 
                "delete" => true, 
                "message" => "Registro eliminado correctamente" 
            ], 200);
        }
        catch (Exception $e) 
        {
            DB::rollback();
            return response()->json([ 
                "delete" => false, 
                "message" => "Error al intentar eliminar el registro" 
            ], 400);
        }
    }
}
