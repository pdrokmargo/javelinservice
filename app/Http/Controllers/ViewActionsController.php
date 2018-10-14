<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem as File;

class ViewActionsController extends Controller
{
    private $file_log;
    private $path;

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
            $this->writeLog('1');
            if($item == null) { $item = $data[$poss]; $poss++; }
            $this->writeLog('2');
            if(!in_array($item, $menu)) {
                $this->writeLog('3');
                $menu[] = $item;
                $this->writeLog('4');
                if($item->views['have_child']) {
                    $this->writeLog('4');
                    foreach ($data as $view) {
                        $this->writeLog('5');
                        if($item->views["id"] == $view->views['view_parent_id']) {
                            $this->writeLog('6');
                            if($view->views['have_child']) {
                                $this->writeLog('7');
                                $item = $view;
                                $this->writeLog('8');
                                $poss++;
                                $this->writeLog('9');
                                $this->order($item,$data,$menu,$poss);
                            }else {
                                $this->writeLog('10');
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

    public function writeLog($text){
        $this->path = public_path()."/logs.log";
        if(!($this->file_log)){
            $this->file_log = new File();
        }
        if(!file_exists($this->path)) {
            
            $this->file_log->put($this->path, "");
        }
        $hour = date('H:i:s');
        $text = "[$hour]: $text \n";        
        $this->file_log->append($this->path, $text);
    }
}
