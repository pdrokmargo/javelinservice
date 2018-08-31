<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SupplierQuotesController extends Controller
{
    public function index(Request $request)    {       
        $data =  \App\Models\SupplierQuotes::all();
        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
    }
}