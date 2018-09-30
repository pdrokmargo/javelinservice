<?php

namespace App\Http\Controllers;

use Validator;
use App\ActiveIngredients;
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
        $from = $request->from;
        $to = $reques->to;
        $warehouse_id = $request->warehouse_id;
        $data = new \App\Models\StocksProducts::whereBetween('expiration_date',[$from, $to])
        ->where('warehouse_id', $warehouse_id)
        ->with(['products' => function($query){
            $query->select('sku','name','units','delivery_fraction')
        }])->get();

        return response()->json([
            "data" => $data 
        ], 200);
    }

    
}
