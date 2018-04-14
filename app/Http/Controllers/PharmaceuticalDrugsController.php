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
            $ordername = isset($request->ordername) ? $request->ordername : 'id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $query = \App\Models\PharmaceuticalDrug::from('pharmaceutical_drugs as pd')
            ->join('collections_values as df', 'df.id', '=', 'pd.dosage_form_id')
            ->join('collections_values as ra', 'ra.id', '=', 'pd.routes_administration_id')
            ->select(DB::raw('pd.id, pd.name, ra.value as routes_administration, df.value as dosage_form, pd.state, pd.is_pos'));
            
            //$query = $query->append(['concentration']);            

            /*
            $query = DB::table('pharmaceutical_drugs as pd')
            ->join('collections_values as df', 'df.id', '=', 'pd.dosage_form_id')
            ->join('collections_values as ra', 'ra.id', '=', 'pd.routes_administration_id')
            ->select(DB::raw('pd.id, pd.name, ra.value as routes_administration, df.value as dosage_form, pd.state, pd.is_pos'));
            */

            if ($search!='') {
                $query=$query->whereRaw("delete = false and (lower(pd.name) like ? or pd.code like ? or (case when pd.state=true then 'activo' else 'inactivo' end) like ?)", array($search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('delete', false)->orderBy($ordername, $ordertype);
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
                "message" => "Registro almacenado correctamente" 
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
        $pd = \App\Models\PharmaceuticalDrug::find($id);
        $ai = \App\Models\ActiveIngredientsPharmaceuticalDrugs::where('pharmaceutical_drug_id','=',$id)->get();
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
