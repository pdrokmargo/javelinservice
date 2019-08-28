<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;

class StocksProductsController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'warehouse_id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            // $company_id = $request->user()->company_default_id;
            if(!isset($request->warehouse) || $request->warehouse == ''){
                $stocks = \App\Models\StocksProducts::whereRaw('set_stock > 0 or fraction_stock > 0')->orderBy($ordername, $ordertype)->paginate(15);     
            }else{
                $stocks = \App\Models\StocksProducts::whereRaw('warehouse_id = ? and (set_stock > 0 or fraction_stock > 0)', $request->warehouse)->orderBy($ordername, $ordertype)->paginate(15); 
            }
            

            
            return response()->json(['status'=>'success', "message"=>'', "data" => $stocks ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        } 
    }

    public function show(Request $request, $id)
    {
        try {
            $stocks = \App\Models\StocksProducts::where('product_id', $id)->orderBy('expiration_date', 'ASC')->get();     
            return response()->json(['status'=>'success', "message"=>'', "data" => $stocks ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        } 
    }

    
}
