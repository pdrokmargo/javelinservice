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

        /*$to = new \DateTime($data['to']);
        $to = $to->format('d/m/Y');

        $from = new \DateTime($data['from']);
        $from = $from->format('d/m/Y');*/

        $rs = \App\Models\StocksProducts::
        //where('expiration_date','>=',$from)
        //->where('expiration_date','<=',$to)->
        where('warehouse_id', $data['warehouse_id'])
        ->with(['products' => function($query) {
            $query->select('id', 'code', 'name', 'sku', 'description','units');
        }])->get();

        return response()->json([
            "data" => $rs
        ], 200);
    }

    
}