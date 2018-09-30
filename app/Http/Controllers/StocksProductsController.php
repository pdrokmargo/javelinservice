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
        $data = json_decode($request->data, true);
        $data = new \App\Models\StocksProducts::whereBetween('expiration_date',[$data['from'], $data['to']])
        ->where('warehouse_id', $data['warehouse_id'])
        ->with(['products' => function($query){
            $query->select('sku','name','units','delivery_fraction')
        }])->get();

        return response()->json([
            "data" => $data 
        ], 200);
    }

    
}
