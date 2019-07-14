<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Billing;

class BillingController extends Controller
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
            
            // $company_id = $request->user()->company_default_id;
            $billing = \App\Models\Billing::orderBy($ordername, $ordertype)->paginate(15); 

            return response()->json(['status'=>'success', "message"=>'', "data" => $billing ], 200);

      } catch (Exception $e) {
          return 'Error:'.$e->getMessage();
      } 
    }

    public function getBillingResolutions(Request $request){
        try {
            
            $billing_resolutions = \App\Models\Consecutive::where('document_name', 'sales_billing')->get(); 

            return response()->json(['status'=>'success', "message"=>'', "data" => $billing_resolutions ], 200);

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

            //Consecutive assignment
            // $billing['document'] = \App\Models\Consecutive::where('id', $billing['consecutive_id'])->first();
            // $data['consecutive_id'] = $billing['document']['id'];
            $data['consecutive'] = \App\Models\Billing::where('consecutive_id', $data['consecutive_id'])->max('consecutive') + 1;
            if($data['consecutive'] == null){
                $data['consecutive'] = 1;
            }

            $billing = \App\Models\Billing::create($data);
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro almacenado" 
            ], 200);
            
        } catch (Exception $e) {
            DB::rollback();
            return response()->json([ 
                "store" => false, 
                "message" => "Error al intentar almacenar el nuevo registro" 
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
        $billing = \App\Models\Billing::find($id);
	    return response()->json(["status"=>"success", "message"=>"", "data" =>$billing ], 200);
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
        DB::beginTransaction();
        try {

            $billing = json_decode($request->data,true);
            

            \App\Models\Billing::findOrFail($id)->update($billing);

            DB::commit();
            // $this->CreateLog($request->user()->id, 'inventory movement', 2,'');
            return response()->json([ 
                "update" => true, 
                "message" => "Registro actualizado correctamente" 
            ], 200);     


        } catch (Exception $e) {
            DB::rollback();
            return response()->json([ 
                "update" => false, 
                "message" => "Error al intentar actualizar el registro" 
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try
        {
            $billing = Billing::find($id);
            $billing->delete();
            // $this->CreateLog($request->user()->id, 'customers-quotes', 3,'');
            DB::commit();
            return response()->json([ 
                "delete" => true, 
                "message" => "Registro eliminado correctamente" 
            ], 200);
        }
        catch (Exception $e) 
        {
            DB::rollback();
            return response()->json([ 
                "delete" => false, 
                "message" => "Error al intentar eliminar el registro" 
            ], 400);
        }
    }
}
