<?php

namespace App\Http\Controllers;

use Validator;
use App\ActiveIngredients;
use Illuminate\Http\Request;

class ActiveIngredientsController extends Controller
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

        // $query = new \App\Models\ActiveIngredient();

        $query = '';
        if ($search!='') {
            $query = $query->whereRaw("lower(name) like ?", array($search))->orderBy($ordername, $ordertype);
        }else{
            $query=$query->orderBy($ordername, $ordertype);
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
        $data = json_decode($request->data, true);
        $exist = \App\Models\ActiveIngredient::where('name',$data["name"])->first();
        if($exist){
            return response()->json([ 
                "store" => false, 
                "message" => "El nombre del ingrediente ya se encuentra registrodo",
            ], 400);
        }
        
        $id = \App\Models\ActiveIngredient::create($data);
        return response()->json([ 
            "store" => true,
            "message" => "Registro creado correctamente" 
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param integre id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = \App\Models\ActiveIngredient::find($id);

        return response()->json([ "data" => $data ], 200);
    }
  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param integre id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data_new = json_decode($request->data,true);
        $data_old = \App\Models\ActiveIngredient::find($id);
        $data_old->fill($data_new);
        $data_old->save();
        return response()->json([ "update" => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param integre id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = \App\Models\ActiveIngredient::find($id);
        $data->state = false;
        $data->save();
        return response()->json([ "destroy" => true], 200);
    }
}
