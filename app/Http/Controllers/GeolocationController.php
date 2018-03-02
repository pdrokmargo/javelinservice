<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GeolocationController extends Controller
{
    public function index(Request $request){        
        $data = \App\Models\Geolocation::all();        
        return response()->json(['status'=>'success', "message"=>'', "data" => $data ],200);
    }
}
