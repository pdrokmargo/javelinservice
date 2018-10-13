<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserProfilesController extends Controller
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

            $query = new \App\Models\UserProfile();
            if ($search!='') {
                $query = $query->whereRaw("delete = false and up_description like ? or (case when up_state=true then 'activo' else 'inactivo' end) like ?", array($search, $search))
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
        try {
           
            $data = json_decode($request->data, true);
            $privileges = $data["privileges"];           
            $id = \App\Models\UserProfile::create(array(
                'up_description'=>$data['up_description'],
                'up_state'=>$data['up_state'],
                'delete' => false
            ))->id;
            foreach ($privileges as $p) {                
                \App\Models\Privilege::create(array(
                    'view_id'=>$p['view_id'],
                    'user_profile_id'=>$id,        
                    'actions'=>$p['actions'],
                ));
            }
            $this->CreateLog($request->user()->id, 'user-profiles', 1,'');

            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro creado correctamente" 
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
       try {
         
          $userprofile = \App\Models\UserProfile::find($id);
          $userprofile = $userprofile->load('privileges');
          return response()->json([
              "status"=>"success",
              "message"=>"",
              "data" => $userprofile
              ], 200
          );
        
       } catch (Exception $e) {
         return 'Error:'.$e->getMessage();
       }
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
            
            $data = json_decode($request->data, true);
            // $privileges = json_decode($data["privileges"], true);
            $privileges = $data["privileges"];
            $data_old=\App\Models\UserProfile::find($id);
            $data_old->fill(array(
                'up_description'=>$data['up_description'],
                'up_state'=>$data['up_state']
            ));
            $data_old->save();

            \App\Models\Privilege::where('user_profile_id',$id)->delete();
            foreach ($privileges as $p) {

                $view_id = $p["view_id"];
                // print_r($p);
                // print_r(json_encode($p['actions'], true));
                \App\Models\Privilege::create(array(
                    'user_profile_id' => $id,
                    'view_id' => $view_id,
                    'actions' =>$p['actions']
                ));
            } 

            $this->CreateLog($request->user()->id, 'user-profiles', 2,'');
            DB::commit();
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
    public function destroy(Request $request, $id)
    {
        DB::beginTransaction();
        try
        {
            $data = \App\Models\UserProfile::find($id);
            $data->delete = false;
            $data->save();


            $this->CreateLog($request->user()->id, 'userprofiles', 3, json_encode($data));
            
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
