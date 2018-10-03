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

        $to = new \DateTime($data['to']);
        $from = new \DateTime($data['from']);

        $rs = \App\Models\StocksProducts::/*where('expiration_date','>=',$from)
        ->where('expiration_date','<=',$to)
        ->where('warehouse_id', $data['warehouse_id'])
        ->*/with(['products' => function($query) {
            $query->select('sku');
        }])->get();

        return response()->json([
            "data" => $rs 
        ], 200);
    }

    
}
