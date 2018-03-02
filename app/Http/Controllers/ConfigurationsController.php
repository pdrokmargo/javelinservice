<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConfigurationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $company_id = $request->user()->company_default_id;
        $configurations = \App\Models\Configuration::where('company_id', $company_id)->get();
        return response()->json([
            "msg"=>"List Success",
            "user profiles"=>$configurations->toArray()
            ], 200
        );
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
        $company_id = $request->user()->company_default_id;
        $configurations = new \App\Models\Configuration();
        $configurations->description = $request->description;
        $configurations->company_id = $company_id;
        $configurations->save();
        return response()->json([
            "msg" => "Insert Success",
                "id" => $configurations->id
                ], 200
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $configuration = \App\Models\Configuration::find($id);
        $configuration = $configuration->load('configuration');
        return response()->json([
            "msg"=>"user profile Success",
            "user profile" => $configuration
            ], 200
        );
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
        $data = json_decode($request->data,true);
        foreach ($data as $key => $value) {
            $item = \App\Models\Configuration::where('code', $key)->first();
            $item->value = $value;
            //return response()->json([ "update" => $item ], 200);    
            $item->save();
        }
        return response()->json([ "update" => true ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $configuration = \App\Models\Configuration::find($id);
        $configuration->delete();
        return response()->json([
            "msg" => "Delete Success"], 200
        );
    }
}

