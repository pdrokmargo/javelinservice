<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(isset($request->all))
        {
            $data = \App\Models\View::all();
            return response()->json([ "data" => $data ], 200);
        }
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $data = DB::select("
                SELECT * FROM (
                    SELECT  
                        v.id,
                        v.title,
                        p.create,
                        p.read,
                        p.update,
                        p.delete,
                        p.extras,
                        v.have_child,
                        v.view_parent_id 
                    FROM privileges as p 
                    INNER JOIN views as v ON v.id = p.view_id 
                    WHERE p.user_profile_id = ?
                    
                    UNION ALL
                    
                    SELECT 
                        v.id, 
                        v.title, 
                        CASE WHEN sv.create THEN false ELSE null END as \"create\",
                        CASE WHEN sv.read THEN false ELSE null END as \"red\",
                        CASE WHEN sv.update THEN false ELSE null END as \"update\",
                        CASE WHEN sv.delete THEN false ELSE null END as \"delete\",
                        sv.extras,
                        v.have_child, 
                        v.view_parent_id  
                    FROM views AS v 
                    INNER JOIN view_actions as sv on sv.view_id = v.id
                    where v.id not in (select p.view_id from privileges as p where p.user_profile_id = ?)
                ) dum
                order by  id,view_parent_id
            ",[$id, $id]);
            return response()->json([ "data" => $data ], 200);
        }else{
            $data = DB::select("SELECT
                v.id,
                v.title,
                v.have_child,
                v.view_parent_id,
                CASE WHEN sv.create THEN false ELSE NULL END as \"create\",
                CASE WHEN sv.read THEN false ELSE NULL END as \"read\",
                CASE WHEN sv.update THEN false ELSE NULL END as \"update\",
                CASE WHEN sv.delete THEN false ELSE NULL END as \"delete\",
                sv.extras
                FROM views as v
                INNER JOIN view_actions as sv on sv.view_id = v.id");
        
            return response()->json([ "data" => $data ], 200);
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
        //
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
