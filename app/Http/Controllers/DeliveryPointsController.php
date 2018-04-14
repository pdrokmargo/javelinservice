<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use DB;

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
            $query = $query->whereRaw("delete = false and company_id = ? and (lower(name) like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ? or (case when installed=true then 'instalado' else 'no instalado' end) like ?)", array($request->user()->company_default_id,$search, $search, $search, $search))
            ->orderBy($ordername, $ordertype);
        }else{
            $query=$query->where('delete',false)->where('company_id',$request->user()->company_default_id)->orderBy($ordername, $ordertype);
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
        DB::beginTransaction(); 
        try
        {
            $data = json_decode($request->data, true);
            $data["company_id"] = $request->user()->company_default_id;
            \App\Models\DeliveryPoint::create($data);
            $this->CreateLog($request->user()->id, 'delivery-points', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro almacenado correctamente" 
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
        $data = \App\Models\DeliveryPoint::with(['contract_point.delivery_contracts'])->where('id', $id)->first();        
        $data->append(['assigned_contracts','assigned_users']);
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
        DB::beginTransaction();
        try
        {
            $data_new = json_decode($request->data,true);
            $data_old = \App\Models\DeliveryPoint::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            DB::commit();
            $this->CreateLog($request->user()->id, 'delivery-points', 2,'');
            return response()->json([ 
                "update" => true, 
                "message" => "Registro actualizado correctamente" 
            ], 200);
        } 
        catch (Exception $e) 
        { 
            DB::rollback();
            return response()->json([ 
                "store" => false, 
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
            $data = \App\Models\DeliveryPoint::find($id);
            $data->delete = false;
            $data->save();
            DB::commit();
            $this->CreateLog($request->user()->id, 'delivery-points', 3,'');
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
    public function createProperty($name, $value){
        $this->{$name} = $value;
    }
}
