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

    private function order($item = null, $data, $menu, $poss){
        try {
            if($item == null) { $item = $data[$poss]; $poss++; }

            if(!in_array($item, $menu)) {
                $menu[] = $item;
                if($item->views['have_child']) {
                    foreach ($data as $view) {
                        if($item->views["id"] == $view->views['view_parent_id']) {
                            if($view->views['have_child']) {
                                $item = $view;
                                $poss++;
                                $this->order($item,$data,$menu,$poss);
                            }else {
                                $menu[] = $view;
                            }                        
                        }
                    }                
                }
            }
            if(count($menu) < count($data)) {
                $item = $data[$poss];
                $poss++; 
                $this->order($item,$data,$menu,$poss);
            }
            
            return $menu;
                        
        } catch (Exception $e) {
            echo $e;
        }
    }
}
