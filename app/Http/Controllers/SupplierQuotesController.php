<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Auth;
use \App\Models\SupplierQuotes;


class SupplierQuotesController extends Controller
{
    public function index(Request $request)
    {
        try {

           $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';           
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $sign = isset($request->sign) ? $request->sign : '';

            $query = new SupplierQuotes();
            /*if ($search!='') {
                $query = $query->whereRaw("status = true and code like ? or (case when status=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('status', false)->orderBy($ordername, $ordertype);
            } */

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }
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
            $supplier_quotes=SupplierQuotes::create($data);
            $this->CreateLog(Auth::id(), 'suppliers-quotes', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro creado correctamente" 
            ], 200);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([ 
                "store" => false, 
                "message" => "Error al intentar crear el registro" 
            ], 400);
        }     
    }

    public function show($id)
	{
	    $data = SupplierQuotes::find($id);
	    return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
    }

    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try
        {
            $data_new = json_decode($request->data,true);
            $data_old = SupplierQuotes::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            $this->CreateLog($request->user()->id, 'suppliers-quotes', 2,'');
            DB::commit();
            return response()->json([ 
                "update" => true, 
                "message" => "Registro actualizado correctamente" 
            ], 200);
        }
        catch (Exception $e) 
        {
            DB::rollback();
            return response()->json([ 
                "update" => false, 
                "message" => "Error al intentar actualizar el registro" 
            ], 400);
        }  
    }
    
    public function destroy(Request $request, $id)
    {
        DB::beginTransaction();
        try
        {
            $data = SupplierQuotes::find($id);
            $data->delete();
            /*$this->CreateLog($request->user()->id, 'suppliers-quotes', 3,'');*/
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