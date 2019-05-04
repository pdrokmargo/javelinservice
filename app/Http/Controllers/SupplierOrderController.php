<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Auth;
use \App\Models\SupplierOrder;

class SupplierOrderController extends Controller
{
    public function index(Request $request)
    {
        try {

           $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';           
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $sign = isset($request->sign) ? $request->sign : '';

            $query = new SupplierOrder();
            if ($search!='') {
                $query = $query->whereRaw("status = true" )
                    ->with(["stakeholderInfo"=>function($query)use($search){
                    $query->where("firstname", $search);
                }])
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('status', true)->orderBy($ordername, $ordertype);
            }
            $sql=$query->toSql();
            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data, "sql"=>$sql ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }
    }

    public function store(Request $request)
    {
        DB::beginTransaction(); 
        try {
            
            $data = json_decode($request->data, true);

            //Consecutive assignment
            $supplier_orders['document'] = \App\Models\Consecutive::where('document_name', 'supplier_orders')->first();
            $data['consecutive_id'] = $supplier_orders['document']['id'];
            $data['consecutive'] = \App\Models\SupplierOrder::where('consecutive_id', $data['consecutive_id'])->max('consecutive') + 1;
            if($data['consecutive'] == null){
                $data['consecutive'] = 1;
            }



            $supplier_orders=SupplierOrder::create($data);
            // $this->CreateLog(Auth::id(), 'suppliers-orders', 1,'');
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
	    $data = SupplierOrder::find($id);
	    return response()->json(["status"=>"success", "message"=>"", "data" =>$data ], 200);
    }

    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try
        {
            $data_new = json_decode($request->data,true);
            $data_old = SupplierOrder::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            // $this->CreateLog($request->user()->id, 'suppliers-orders', 2,'');
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
            $data = SupplierOrder::find($id);
            $data->delete();
            $this->CreateLog($request->user()->id, 'suppliers-orders', 3,'');
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

