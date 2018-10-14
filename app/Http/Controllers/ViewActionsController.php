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
            $menu = $this->order(null, $data, $menu,0);   

        	return response()->json([
                'status'=>'success', 
                "message"=>'', 
                "data" => $menu 
            ], 200);

    	} catch (Exception $e) {
    		echo $e;
    	}
    }

    private function order($item = null, $data, $menu, $poo){
        try {
            if($item == null) { $item = $data[$poss]; $poss++; }
            $menu[] = $item;
            if($item->views['have_child']) {
                $poss++;
                foreach ($data as $view) {
                    if($item->views["id"] == $view->views['view_parent_id']) {
                        if($view->views['have_child']) {
                            $this->order($view,$data,$menu,$poss);
                        }else {
                            $menu[] = $view;
                        }                        
                    }
                }                
            } else {
                $item = $data[$poss]; $poss++;
                $this->order($view,$data,$menu,$poss);
            }
            return $menu;
        } catch (Exception $e) {
            echo $e;
        }
    }
}
