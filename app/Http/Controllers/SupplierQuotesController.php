<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

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

            $response = Response::json([
                'data' => $request,
            ], 201);
    
            return $response;
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
	    $data = \App\Models\SupplierQuotes::find($id);
	    return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
	}
}