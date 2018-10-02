<?php

namespace App\Http\Controllers;

use Validator;
use App\ActiveIngredients;
use Illuminate\Http\Request;

class StacksProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = json_decode($request->data, true);

        $to = date_format(new \DateTime($data['to']),'Y-m-d');
        $from = date_format(new \DateTime($data['from']),'Y-m-d');

        $data = new \App\Models\StocksProducts::where('expiration_date','>=',$from)
        ->where('expiration_date','<=',$to)
        ->where('warehouse_id', $data['warehouse_id'])
        ->with(['products' => function($query){
            $query->select('sku','name','units','delivery_fraction')
        }])->get();

        return response()->json([
            "data" => $data 
        ], 200);
    }

    
}
