<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Auth;
use \App\Models\CustomerQuote;

class CustomersQuotesController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $sign = isset($request->sign) ? $request->sign : '';

            $query = new CustomerQuote();
            if ($search!='') {
                $query = $query->whereRaw("status = true" )
                    ->with(["stakeholderInfo"=>function($query)use($search){
                    $query->where("firstname", $search);
                }])
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('status', true)->orderBy($ordername, $ordertype);
            }
            $sql=$query->toSql();
            $data=[];  
            if ($page) {
              $data=$query->paginate(15);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data, "sql"=>$sql ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction(); 
        try {
            
            $data = json_decode($request->data, true);
            $customer_quotes=CustomerQuote::create($data);
            $this->CreateLog(Auth::id(), 'customers-quotes', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro creado correctamente" 
            ], 200);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([ 
                "store" => false, 
                "message" => "Error al intentar crear el registro" 
            ], 400);
        }     
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
