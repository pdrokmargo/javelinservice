<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class CompanyController extends Controller
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

	       	$query = new \App\Models\Company();
	       	if ($search!='') {
	        	$query = $query->whereRaw("delete = false and nit like ? or lower(companies.name) like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search))
	            ->orderBy($ordername, $ordertype);
	        } else {
                $query=$query->where('delete', false)->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
              $data=$query->paginate(30);
            } else {
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
			
			$geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
				->where('department_id', $data['department_id'])
				->where('city_id', $data['city_id'])
				->first();
			
			$data['state'] = true;
			$data['geolocation_id'] = $geoLocation->id;

			$id = \App\Models\Company::create($data)->id;
			
			$this->CreateLog($request->user()->id, 'company', 1, $id);
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
	    $data = \App\Models\Company::find($id);
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
			$data = json_decode($request->data, true);
			$geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
				->where('department_id', $data['department_id'])
	        	->where('city_id', $data['city_id'])
				->first();
				
			$data['state'] = true;
			$data['geolocation_id'] = $geoLocation->id;
				
		    $data_old = \App\Models\Company::find($id);
		    $data_old->fill($data);
		    $data_old->save();

			$this->CreateLog($request->user()->id, 'company', 2, $id);
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
    public function destroy(Request $request,$id)
    {
		DB::beginTransaction();
		try 
		{
			$data = \App\Models\Company::find($id);
			$data->delete = true;
			$data->save();
			$this->CreateLog($request->user()->id, 'company', 3,'');
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
