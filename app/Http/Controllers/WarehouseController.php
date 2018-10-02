<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class WarehouseController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'w.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $company_id = $request->user()->company_default_id;

            $query = DB::table('warehouses as w')
            ->join('geolocations as g', 'w.geolocation_id', '=', 'g.id')
            ->join('collections_values as c', 'g.city_id', '=', 'c.id')
            ->select(DB::raw('w.id, w.name, c.value as city, w.state'));

            if ($search!='') {
                $query = $query->where('w.delete', false)->whereRaw("w.company_id = ? and (w.name like ? or c.value like ? or (case when w.state=true then 'activa' else 'inactiva' end) like ?)", array($company_id, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('w.delete', false)->where('w.company_id', $company_id)->orderBy($ordername, $ordertype);
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

    public function select(Request $request)
    {
        try {
            $data = \App\Models\Warehouse::select(['id', 'name'])->get();
            return response()->json(["data" => $data ], 200);
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

            $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
                ->where('department_id', $data['department_id'])
                ->where('city_id', $data['city_id'])
                ->first();

            $company_id = $request->user()->company_default_id;

            $result=\App\Models\Warehouse::create(array(
                'warehouse_type_id' => $data['warehouse_type_id'],
                'name' => $data['name'],
                'description' => isset($data['description']) ? $data['description'] : '',
                'state' => $data['state'],
                'geolocation_id' => $geoLocation->id,
                'company_id' => $company_id
            ));

            $this->CreateLog($request->user()->id, 'warehouse', 1,'');
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
            $data = \App\Models\Warehouse::find($id);        
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
       } catch (Exception $e) {
           return 'Error: ' . $e->getMessage();
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

            $data = json_decode($request->data,true);

            $geoLocation = \App\Models\Geolocation::where('country_id', $data['country_id'])
                ->where('department_id', $data['department_id'])
                ->where('city_id', $data['city_id'])
                ->first();  

            $data_old = \App\Models\Warehouse::find($id);
            $data_old->fill(array(
                    'warehouse_type_id' => $data['warehouse_type_id'],
                    'name' => $data['name'],
                    'description' => $data['description'],
                    'state' => $data['state'],
                    'geolocation_id' => $geoLocation->id,
                    'company_id' => $data['company_id']
            ));
            $data_old->save();
            DB::commit();
            $this->CreateLog($request->user()->id, 'warehouse', 2,'');
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
    public function destroy($id)
    {
        DB::beginTransaction();
        try
        {
            $data = \App\Models\Warehouse::find($id);
            $this->CreateLog($request->user()->id, 'warehouse', 3,json_encode($data));
            $data->delete = true;
            $data->save();
            
            DB::commit();
            $this->CreateLog($request->user()->id, 'delivery-points', 3,'');
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
