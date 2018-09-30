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

        $to = date_format(new DateTime($data['to']),'Y-m-d');
        $from = date_format(new DateTime($data['from']),'Y-m-d');

        return $from;
        
        
    }

    
}
