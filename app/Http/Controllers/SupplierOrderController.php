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
            $supplier_quotes=SupplierOrder::create($data);
            $this->CreateLog(Auth::id(), 'suppliers-orders', 1,'');
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
}

