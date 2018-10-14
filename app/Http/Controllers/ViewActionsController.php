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

    private function order($item = null, $data, $menu, $poss,$log = ''){
        try {
            $log.="1-";
            if($item == null) { $item = $data[$poss]; $poss++; }
            $log.="2-";
            if(!in_array($item, $menu)) {
                $log.="3-";
                $menu[] = $item;
                $log.="4-";
                if($item->views['have_child']) {
                    $log.="1-";
                    foreach ($data as $view) {
                        $log.="6-";
                        if($item->views["id"] == $view->views['view_parent_id']) {
                            $log.="7-";
                            if($view->views['have_child']) {
                                $log.="8-";
                                $item = $view;
                                $log.="9-";
                                $poss++;
                                $log.="10-";
                                $this->order($item,$data,$menu,$poss, $log);
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
            
            return [
                "a" => $menu,
                "b" => $log
            ];
                        
        } catch (Exception $e) {
            echo $e;
        }
    }
}
