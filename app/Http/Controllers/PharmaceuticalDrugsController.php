<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class PharmaceuticalDrugsController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'name';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'ASC';
            $page = $request->page;
            

            if($search !='') {
                $query=\App\Models\PharmaceuticalDrugProduct::whereRaw("(lower(name) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?)", array($search, $search, $search))->orderBy($ordername, $ordertype);
            }else{
                $query=\App\Models\PharmaceuticalDrugProduct::orderBy($ordername, $ordertype);
            }          
            
            $data=[];  
            if ($page) {
              $data=$query->paginate(15);
            }else{
              $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
            
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
            $id = \App\Models\PharmaceuticalDrug::create($data["drug"])->id;  
            foreach ($data["active_ingredients"] as $i) {
                $i["pharmaceutical_drug_id"] = $id;
                $i["active_ingredient_id"] = $i["id"];
                \App\Models\ActiveIngredientsPharmaceuticalDrugs::create($i);
            }
            $this->CreateLog($request->user()->id, 'pharmaceutical-drug', 1,'');
            DB::commit();
            return response()->json([
                "store" => true, 
                "message" => "Registro creado correctamente"
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
        $pd = \App\Models\PharmaceuticalDrugProduct::find($id);
        $ai = \App\Models\ActiveIngredientsPharmaceuticalDrugs::where('pharmaceutical_drug_id','=',$pd->pharmaceuticaldrug->id)->get();
        foreach ($ai as $item) {
            $item->append(['measurement_unit','active_ingredient']);
        }
        $data = [
            "model" => $pd,
            "active_ingredients" => $ai
        ];

        return response()->json([
            'status'=>'success', 
            "message"=>'', 
            "data" => $data 
        ], 200);
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
            $data_old = \App\Models\PharmaceuticalDrug::find($id);
            $data_old->fill($data_new["drug"]);
            $data_old->save();

            \App\Models\ActiveIngredientsPharmaceuticalDrugs::where('pharmaceutical_drug_id',$id)->delete();
            
            foreach ($data_new["active_ingredients"] as $i) {
                $i["pharmaceutical_drug_id"] = $id;
                $i["active_ingredient_id"] = $i["id"];
                \App\Models\ActiveIngredientsPharmaceuticalDrugs::create($i);
            }

            $this->CreateLog($request->user()->id, 'pharmaceutical-drug', 2,'');
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
            $data = \App\Models\PharmaceuticalDrug::find($id);
            $data->delete = true;
            $data->save();
            DB::commit();
            $this->CreateLog($request->user()->id, 'pharmaceutical-drug', 3,'');
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
