<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class DeliveryContractsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';    		
        $ordername = isset($request->ordername) ? $request->ordername : 'id';
        $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
        $page = $request->page;
        $query = new \App\Models\DeliveryContract();
        if ($search!='') {
            $query = $query->whereRaw("delete = false and company_id = ? and (lower(name) like ? or lower(customers.stakeholderInfo.businessname) like ? or (case when state=true then 'activo' else 'inactivo' end) like ? or (case when installed=true then 'instalado' else 'no instalado' end) like ?)", array($request->user()->company_default_id,$search, $search, $search, $search))
            ->orderBy($ordername, $ordertype);
        }else{
            $query=$query->where('delete', false)->where('company_id', $request->user()->company_default_id)->orderBy($ordername, $ordertype);
        } 
        $data = [];  
        if ($page) {
          $data = $query->paginate(30);
        }else{
          $data = $query->get();
        } 
        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
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

            if(!empty($data['capita'])){
                $json = json_decode($data["capita"],true);
                $json["affiliates_qty_history_record"] = [];
                if(empty($json["detailed_capita"])){
                    $json["detailed_capita"] = [];
                }
                foreach ($json["detailed_capita"] as $key) {
                    $key["date"] = date('Y-m-d H:i:s');
                    $json["affiliates_qty_history_record"][] = $key;
                }
                $data["capita"] = json_encode($json);
            }else{
                $data['capita'] = '{}';
            }

            $data['description'] = $data['description'] ? $data['description'] : '';
            $data['event'] = $data['event'] ? $data['event'] : '{}';
            $data['pgp'] = $data['pgp'] ? $data['pgp'] : '{}';
            
            $data["company_id"] = $request->user()->company_default_id;
            $contract = \App\Models\DeliveryContract::create($data);

            $points = $contract->delivery_points;
            foreach ($points as $p) {
                \App\Models\ContractPoint::create([
                    "delivery_contracts_id" => $contract->id,
                    "delivery_points_id" => $p["id"],
                    "config" => json_encode([
                        "event" => $p["event"],
                        "capita" => $p["capita"],
                        "pgp" => $p["pgp"]
                    ])
                ]);
            }
            $this->CreateLog($request->user()->id, 'delivery-contracts', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true, 
                'message' => 'Registro guardado correctamente' 
            ], 200);
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
        $data = \App\Models\DeliveryContract::with(['contract_point.delivery_points'])->where('id',$id)->first();
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
            $data_old = \App\Models\DeliveryContract::find($id);

            if(!empty($data_new['capita'])){
                $json = json_decode($data_new["capita"],true);
                $json["affiliates_qty_history_record"] = [];
                if(empty($json["detailed_capita"])){
                    $json["detailed_capita"] = [];
                }
                foreach ($json["detailed_capita"] as $key) {
                    $key["date"] = date('Y-m-d H:i:s');
                    $json["affiliates_qty_history_record"][] = $key;
                }
                $data_new["capita"] = json_encode($json);
            }else{
                $data_new['capita'] = '{}';
            }

            $data_new['event'] = $data_new['event'] ? $data_new['event'] : '{}';
            $data_new['pgp'] = $data_new['pgp'] ? $data_new['pgp'] : '{}';
            
            $data_old->fill($data_new);
            $data_old->save();

            $points = $data_new['delivery_points'];        
            \App\Models\ContractPoint::where('delivery_contracts_id', '=', $data_old->id)->delete();

            foreach ($points as $p) {
                \App\Models\ContractPoint::create([
                    "delivery_contracts_id" => $data_old->id,
                    "delivery_points_id" => $p["id"],
                    "config" => json_encode([
                        "event" => $p["event"] || false,
                        "capita" => $p["capita"] || false,
                        "pgp" => $p["pgp"] || false
                    ])
                ]);
            }
            $this->CreateLog($request->user()->id, 'delivery-contracts', 2,'');
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
    public function destroy(Request $request, $id)
    {
        DB::beginTransaction();
        try
        {
            $data = \App\Models\DeliveryContract::find($id);
            $data->delete = true;
            $data->save();
            $this->CreateLog($request->user()->id, 'delivery-contracts', 3,'');
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
