<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CollectionsController extends Controller
{
    public function Collections(Request $request){
        $data = json_decode($request->data,true);
        $rs = [];
        foreach ($data as $key => $value) {
            $arr = \App\Models\Collections::where('name',$value)->first();
            if($arr){
                $arr->load('values');
                $rs[$value] = $arr["values"];
            }
        }
        return response()->json($rs,200);
    }

    public function departamentos(Request $request){
        $rs = [];
        $pais_id = $request->pais_id;
        $arr = \App\Models\CollectionsValues::where('parent_id',$pais_id)->get();
        $rs["departamentos"] = $arr;
        return response()->json($rs,200);
    }

    public function ciudades(Request $request){
        $rs = [];
        $departamento_id = $request->departamento_id;
        $arr = \App\Models\CollectionsValues::where('parent_id',$departamento_id)->get();
        $rs["ciudades"] = $arr;
        return response()->json($rs,200);
    }

    public function medical_diagnostics(Request $request){
        $rs = [];
        // $departamento_id = $request->departamento_id;
        $arr = \App\Models\MedicalDiagnosis::get();
        $rs["medical_diagnostics"] = $arr;
        return response()->json($rs,200);
    }
    
}
