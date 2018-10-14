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
            $menu = [];  
            $menu = $this->order(null, $data, $menu);   

        	return response()->json([
                'status'=>'success', 
                "message"=>'', 
                "data" => $menu 
            ], 200);

    	} catch (Exception $e) {
    		echo $e;
    	}
    }

    private function order($item = null, $data, $menu){
        try {
            if($item == null) { $item = $data[0]; }
            $menu[] = $item;
            if($item->views->have_child) {
                $menu = $this->order($item,$data,$menu);
            }
            return $menu;
        } catch (Exception $e) {
            echo $e;
        }
    }
}
