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
}

