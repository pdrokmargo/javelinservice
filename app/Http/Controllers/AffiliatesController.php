<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AffiliatesController extends Controller
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
            
            $query = DB::table('affiliates as a')
            ->join('delivery_contracts as dc', 'dc.id', '=', 'a.delivery_contract_id')
            // ->leftJoin('collections_values as cv', 'cv.id', '=', 'a.contracts_payment_method_id')
            ->select(DB::raw("a.id, a.document_number, a.delivery_contract_id, (a.firstname || ' ' || a.middlename || ' ' || a.lastname1 || ' ' || a.lastname2) as display_name, a.firstname, a.middlename, a.lastname1, a.lastname2, dc.name as contract, a.state"));

            if ($search != '') {
                $query = $query->whereRaw("(lower(a.firstname) || ' ' || lower(a.middlename) || ' ' || lower(a.lastname1) || ' ' || lower(a.lastname2)) like ? or lower(dc.name) like ?", array($search, $search))->orderBy($ordername, $ordertype);
            } else {
                $query = $query->orderBy($ordername, $ordertype);
            }    
            

            $data=[];  
            if ($page) {
              $data=$query->paginate(15);
            }else{
              $data=$query->get();
            }  

            foreach($data as $d){
                $d->delivery_contract = \App\Models\DeliveryContract::where('id', $d->delivery_contract_id)->first();
            }
            
            return response()->json([
                'status' => 'success', 
                "message" => '', 
                "data" => $data 
            ], 200);
            
        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        } 
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
        try
        {
            $data = json_decode($request->data, true);
            $exist = \App\Models\Affiliate::where('document_number', $data['document_number'])->first();
            if(!$exist){
                $af = \App\Models\Affiliate::create($data);
                $this->CreateLog($request->user()->id, 'affiliates', 1,'');
                \App\JavelinFriends\feed_syncs::save_sync($af->id, 'affiliates');
                DB::commit();
                return response()->json([ 
                    "store" => true, 
                    "message" => "Registro creado correctamente" 
                ], 200);
            }else{
                return response()->json([ 
                    "duplicated" => true, 
                    "message" => "Registro duplicado" 
                ], 200);
            }
            
        } 
        catch (Exception $e) 
        { 
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
        $data = \App\Models\Affiliate::find($id);        
        return response()->json([ "data" => $data ], 200);
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
        try
        {
            $data_new = json_decode($request->data,true);
            $data_old = \App\Models\Affiliate::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            $this->CreateLog($request->user()->id, 'affiliates', 2,'');
            \App\JavelinFriends\feed_syncs::update_sync($id, 'affiliates');
            DB::commit();
            return response()->json([ 
                "update" => true, 
                "message" => "Registro actualizado correctamente" 
            ], 200);
        } 
        catch (Exception $e) 
        { 
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
    public function destroy($id, Request $request)
    {
        DB::beginTransaction();
        try
        {
            $data = \App\Models\Affiliate::find($id);
            // $data->delete = true;
            $data->save();    
            $this->CreateLog($request->user()->id, 'affiliates', 3,'');
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
