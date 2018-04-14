<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class OperationsCentreController extends Controller
{
    /**
	* Display a listing of the resource.
	*
	* @return \Illuminate\Http\Response
	*/
    public function index(Request $request)
    {
        try 
        {
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'o.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $company_id = $request->user()->company_default_id;
            $query = DB::table('operationscentres as o')
                    ->join('geolocations as g', 'o.geolocation_id', '=', 'g.id')
                    ->join('collections_values as c', 'g.city_id', '=', 'c.id')
                    ->join('collections_values as cg', 'o.operationscentregroup_id', '=', 'cg.id')
                    ->select(DB::raw('o.id, o.code, o.name, c.value as city, cg.value as group, o.state'));
         if ($search!='') {
            $query=$query->whereRaw("delete = false and company_id = ? and (lower(o.name) like ? or code like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ? or phone_number like ?)", array($company_id, $search, $search, $search, $search, $search))->orderBy($ordername, $ordertype);
         }else{
            $query=$query->where('delete', false)->where('company_id', $company_id)->orderBy($ordername, $ordertype);
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
        try {
        
        $data = json_decode($request->data, true);
        $company_id = $request->user()->company_default_id;

        $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
        ->where('department_id', $data['department_id'])
        ->where('city_id', $data['city_id'])
        ->first();	
       	
        $result=\App\Models\OperationsCentre::create(
        	array(
        			'name' => $data['name'],
              'code' => '', 
              'description' => $data['description'],
              'operationscentregroup_id' => $data['operationscentregroup_id'],
              'address' => $data['address'],
              'phone_number' => $data['phone_number'],
              'geolocation_id' => $geoLocation->id,
              'company_id' => $company_id,
              'state' => $data['state']
        	));

        $openrationCentres=\App\Models\OperationsCentre::find($result['id']);
        $code='';
        for ($i=strlen($openrationCentres->id);$i < 3 ; $i++) {
          $code .= '0';
        }
        $openrationCentres->code='cc'.$code.$result['id'];
        $openrationCentres->save();
        
        $this->CreateLog($request->user()->id, 'operations-centres', 1,'');

        return response()->json(['status'=>'success', 
        						  "message"=>'El centro de costo de operaciones se ha registrado satisfactoriamente.', 
        						  "data" => $openrationCentres ], 200);
        } catch (Exception $e) {
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
	    $data = \App\Models\OperationsCentre::find($id);
	    return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
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
        try {
          	
            $data = json_decode($request->data, true);
            $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
            ->where('department_id', $data['department_id'])
            ->where('city_id', $data['city_id'])
            ->first();	          	
            $data_old = \App\Models\OperationsCentre::find($id);
            $data_old->fill(array(
                'name' => $data['name'],
                'code' => $data['code'], 
                'description' => $data['description'],
                'operationscentregroup_id' => $data['operationscentregroup_id'],
                'address' => $data['address'],
                'phone_number' => $data['phone_number'],
                'geolocation_id' => $geoLocation->id,
                'company_id' => $data['company_id'],
                'state' => $data['state']
            ));

		        $data_old->save();

            $this->CreateLog($request->user()->id, 'operations-centres', 2,'');

    		    return response()->json(['status'=>'success', "message"=>'El centro de costo de operaciones fue actualizado satisfactoriamente.', "data" => true ], 200);      

        } catch (Exception $e) {
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
        try {
        	
        	$data = \App\Models\OperationsCentre::find($id);
	        $this->CreateLog($request->user()->id, 'company', 3,json_encode($data));
	        $data->state = false;
	        $data->save();

          $this->CreateLog($request->user()->id, 'operations-centres', 3,'');

	        return response()->json(['status'=>'success', "message"=>'', "data" => true ], 200);

        } catch (Exception $e) {
        	return 'Error: ' . $e->getMessage();
        }
    }
}
