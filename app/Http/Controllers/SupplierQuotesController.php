<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class SupplierQuotesController extends Controller
{
    public function index(Request $request)
    {

        /*$data =  \App\Models\SupplierQuotes::all();
        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);*/
        try {

           $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';           
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $sign = isset($request->sign) ? $request->sign : '';

            $query = new \App\Models\SupplierQuotes();
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
}