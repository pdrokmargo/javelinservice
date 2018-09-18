<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;


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
            
            /*$data = json_decode($request->data, true);
            $supplier_quote = \App\Models\SupplierQuotes::create(array(
                'supplier_id' => $data['supplier_id'],
                'created_at' => $data['created_at'],
                'expire_at' => $data['expire_at'],                
                'payment_condition_id' => $data['payment_condition_id'],
                'products' => $data['products'],
                'notes' => isset($data['notes']) ? $data['notes'] : '',
                'status' => $data['status']
            ));*/
            $quote = new \App\Models\SupplierQuotes;
            $quote->create($request->all());
            $this->CreateLog($request->user()->id, 'quotes', 1,'');
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
}