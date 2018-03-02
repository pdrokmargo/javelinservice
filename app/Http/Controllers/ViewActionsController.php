<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ViewActionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
    	try {
    		
    		$data = \App\Models\ViewActions::all();            
        	return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);

    	} catch (Exception $e) {
    		return 'Error:'.$e->getMessage();
    	}
    }
}
