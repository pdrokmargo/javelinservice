<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class AuditController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        try {

            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';          
            $ordername = isset($request->ordername) ? $request->ordername : 'a.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $company_id = $request->user()->company_default_id;

            $query = DB::table('activity_logs as a')
            ->join('users as u', 'a.user_id', '=', 'u.id')
            ->join('views as v', 'a.view_id', '=', 'v.id')
            ->join('companies as c', 'a.company_id', '=', 'c.id')
            ->select(DB::raw("a.id, u.firstname, u.lastname, v.title as view, c.name as company, a.created_at as enter_date, (case when a.action=1 then 'Crear' else (case when a.action=2 then 'Actualizar' else 'Eliminar' end) end) as action, a.description"));

            if ($search!='') {
                $query = $query->whereRaw("a.company_id=? and (concat(u.firstname, ' ', u.lastname) like ? or v.title like ? or c.name like ? or a.description like ?)", array($company_id, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('a.company_id',$company_id)->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data], 200);
            
        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }        
    }

}
