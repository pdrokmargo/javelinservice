<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UsersController extends Controller
{
    public function change_password(Request $request, $username)
    {
       try {
         
          $pass = json_decode($request->data, true);
          $user = \App\Models\User::where('email',$username)->orWhere('username',$username)->first();
          $user->password = bcrypt($pass["password1"]);
          $user->save();
          return response()->json(['status'=>'success', 
                                          "message"=>'La contraseña ha sido cambiada satisfactoriamente!', 
                                          "data" => true ], 200);

       } catch (Exception $e) {
          return 'Error:'.$e->getMessage();
       }
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if(isset($request->all))
            {
                $data = \App\Models\User::all();
                return response()->json([ "data" => $data ], 200);
            }

            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'u.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;

            $query = DB::table('users as u')
            ->leftJoin('users_privileges as uc', function($join){
              $join->on('u.company_default_id', '=', 'uc.company_id');
              $join->on('u.id', '=', 'uc.user_id');
            })->leftJoin('companies as c', 'c.id', '=', 'u.company_default_id')
            ->leftJoin('user_profiles as up', 'uc.user_profile_id', '=', 'up.id')
            ->select(DB::raw('u.id, u.firstname, u.lastname, u.username, u.email, u.password, u.status, u.last_access, u.url_profile_photo, u.company_default_id, up.up_description as user_profile, c.name as company'));

            if ($search!='') {
                $query=$query->whereRaw("concat(lower(u.firstname), ' ', lower(u.lastname)) like ? or lower(u.username) like ? or 
                    lower(up.up_description) like ? or lower(c.name) like ? 
                    or (case when u.status=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search))->orderBy($ordername, $ordertype);
            }else{
                $query=$query->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  

            return response()->json(['status'=>'success', 
                                        "message"=>'', 
                                        "data" => $data ], 200);

        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }
    }

    public function indexType(Request $request, $type)
    {
        try {

            if(isset($request->all))
            {
                $data = \App\Models\User::all();
                return response()->json([ "data" => $data ], 200);
            }

            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'u.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;

            $query = DB::table('users as u')
            ->leftJoin('users_privileges as uc', function($join){
              $join->on('u.company_default_id', '=', 'uc.company_id');
              $join->on('u.id', '=', 'uc.user_id');
            })->leftJoin('companies as c', 'c.id', '=', 'u.company_default_id')
            ->leftJoin('user_profiles as up', 'uc.user_profile_id', '=', 'up.id')
            ->select(DB::raw('u.id, u.firstname, u.lastname, u.username, u.email, u.password, u.status, u.last_access, u.url_profile_photo, u.company_default_id, up.up_description as user_profile, c.name as company'));

            $query = $query->whereRaw('up.up_description = ?',[$type]);

            

            if ($search!='') {
                $query=$query->whereRaw("concat(lower(u.firstname), ' ', lower(u.lastname)) like ? or lower(u.username) like ? or 
                    lower(up.up_description) like ? or lower(c.name) like ? 
                    or (case when u.status=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search))->orderBy($ordername, $ordertype);
            }else{
                $query=$query->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            }else{
              $data=$query->get();
            }  

            return $query->toSql();

            return response()->json(['status'=>'success', 
                                        "message"=>'', 
                                        "data" => $data ], 200);

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

            $data = json_decode($request->data,true);
            $data["password"] = bcrypt($data["password"]);
            $id = \App\Models\User::create([
                
                'user_profile_id' => 0,        
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'], 
                'username' => $data['username'],
                'email' => $data['email'],
                'password' => $data['password'],
                'status' => $data['status'],
                'company_default_id' => $data['usersprivileges'][0]['company_id']

            ])->id;

            
            
            //guardamos las empresas
            foreach ($data['usersprivileges'] as $item) {
               \App\Models\UsersPrivileges::create(
                    [ 
                        'user_id' => $id, 
                        'company_id' => $item['company_id'], 
                        'user_profile_id' => $item['user_profile_id'] 
                    ]
                );    
            }     
            //$this->CreateLog($request->user()->id, 'user', 1,'');
            DB::commit();
            return response()->json([
                "status"=>"success",  
                "message" => "El usuario se ha registrado satisfactoriamente.", 
                "data" => $id 
            ], 200 );    

        } catch (Exception $e) {
            DB::rollback();
            return 'Error: ' . $e->getMessage();
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
        $user = \App\Models\User::with('usersprivileges')->find($id);        
        return response()->json(['status'=>'success', "message"=>'', "data" => $user ], 200
        );
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
           
            $user = \App\Models\User::find($id);
            $data = json_decode($request->data, true);            
            $user->fill(array(
                            'firstname' => $data['firstname'],
                            'lastname' => $data['lastname'], 
                            'username' => $data['username'],
                            'email' => $data['email'],                            
                            'status' => $data['status'],
                            'company_default_id' => $data['company_default_id'],
                            ));
            $user->save();

            DB::table('users_privileges')->where('user_id', $id)->delete();

            foreach ($data['usersprivileges'] as $key => $item) {
               \App\Models\UsersPrivileges::create(
                    array(
                        'user_id' => $id,
                        'company_id' => $item['company_id'],
                        'user_profile_id' => $item['user_profile_id']    
                    )
                );    
            }                   
                
            $this->CreateLog($request->user()->id, 'users', 2,'');

            DB::commit();
            return response()->json(["status"=>"success",  
                                    "message" => "El usuario se ha actualizado satisfactoriamente.", "data" => \App\Models\User::find($id)->load('usersprivileges')], 200 );  

       } catch (Exception $e) {
            DB::rollback();
            return 'Error: ' . $e->getMessage();
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
        $user = \App\Models\User::find($id);
        $user->delete();
        $this->CreateLog($request->user()->id, 'users', 3 ,json_encode($user));
        return response()->json(["status"=>"success",  
                                    "message" => "El usuario se ha eliminado satisfactoriamente.", "data" => true ], 200);
    }

    public function chenge_company(Request $request, $id)
    {
      try {
        
        $data = json_decode($request->data, true);   
        $user = \App\Models\User::with('usersprivileges')->find($id);
        $user->company_default_id = $data['company_id'];
        $user->save();

        return response()->json(["status"=>"success",  
                                  "message" => "La usuario ha cambiado su empresa satisfactoriamente.", "data" => $user ], 200);

      } catch (Exception $e) {
        return 'Error: ' . $e->getMessage();
      }
    }
    
}
