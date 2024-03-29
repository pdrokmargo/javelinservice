<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MakerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {       
        $data =  \App\Models\Maker::all();
        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
    }

}
