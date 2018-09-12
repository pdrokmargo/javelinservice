<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SupplierQuotesController extends Controller
{
    public function index(Request $request)
    {
        try {
          
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'w.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $company_id = $request->user()->company_default_id;

            $query = DB::table('suppliers_quotes as s')
            ->select(DB::raw('s.id, s.supplier_id, s.created_at, s.status'));

            if ($search!='') {
                $query = $query->where('s.delete', false)->whereRaw("s.id = ? and (s.supplier_id like ?  or (case when s.status=true then 'activa' else 'inactiva' end) like ?)", array($company_id, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('s.delete', false)->where('s.id', $id)->orderBy($ordername, $ordertype);
            }

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);

      } catch (Exception $e) {
          return 'Error:'.$e->getMessage();
      } 
    }
}