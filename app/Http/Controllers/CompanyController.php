<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
	        	$query = $query->whereRaw("nit like ? or lower(companies.name) like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search))
	            ->orderBy($ordername, $ordertype);
	        }else{
                $query=$query->orderBy($ordername, $ordertype);
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
        // print_r($data);
        $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
        ->where('department_id', $data['department_id'])
        ->where('city_id', $data['city_id'])
        ->first();	
       	
        $result=\App\Models\Company::create(
        	array(
        		'name'=>$data['name'],
				'description'=>$data['description'],
				'address'=>$data['address'],
				'phone_number'=>$data['phone_number'],
				'email'=>$data['email'],
				'tax_regime_id'=>$data['tax_regime_id'],
				'big_contributor'=>$data['big_contributor'],
				'selfholder'=>$data['selfholder'],
				'economic_activity'=>$data['economic_activity'],
				'website'=>$data['website'],
				'state'=>true,
				'geolocation_id'=>$geoLocation->id,
				'nit'=>$data['nit'],
				'selfholder_resolution'=>$data['selfholder_resolution'],
				'big_contributor_resolution'=>$data['big_contributor_resolution'],
				'withholding_income_sales_id'=>$data['withholding_income_sales_id'],
				'withholding_income_purchases_id'=>$data['withholding_income_purchases_id'],
				'withholding_vat_sales_id'=>$data['withholding_vat_sales_id'],
				'withholding_vat_purchases_id'=>$data['withholding_vat_purchases_id'],
				'withholding_ica_sales_id'=>$data['withholding_ica_sales_id'],
				'withholding_ica_purchases_id'=>$data['withholding_ica_purchases_id']
        	)
        );

        $this->CreateLog($request->user()->id, 'company', 1,'');

        return response()->json(['status'=>'success', 
        						  "message"=>'La empresa se ha registrado satisfactoriamente.', 
        						  "data" => $result ], 200);
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
	    $data = \App\Models\Company::find($id);
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
		    $data_old = \App\Models\Company::find($id);
		    $data_old->fill(array(
					    		'name'=>$data['name'],
								'description'=>$data['description'],
								'address'=>$data['address'],
								'phone_number'=>$data['phone_number'],
								'email'=>$data['email'],
								'tax_regime_id'=>$data['tax_regime_id'],
								'big_contributor'=>$data['big_contributor'],
								'selfholder'=>$data['selfholder'],
								'economic_activity'=>$data['economic_activity'],
								'website'=>$data['website'],
								'state'=>true,
								'geolocation_id'=>$geoLocation->id,
								'nit'=>$data['nit'],
								'selfholder_resolution'=>$data['selfholder_resolution'],
								'big_contributor_resolution'=>$data['big_contributor_resolution'],
								'withholding_income_sales_id'=>$data['withholding_income_sales_id'],
								'withholding_income_purchases_id'=>$data['withholding_income_purchases_id'],
								'withholding_vat_sales_id'=>$data['withholding_vat_sales_id'],
								'withholding_vat_purchases_id'=>$data['withholding_vat_purchases_id'],
								'withholding_ica_sales_id'=>$data['withholding_ica_sales_id'],
								'withholding_ica_purchases_id'=>$data['withholding_ica_purchases_id']
					    	));
		    $data_old->save();

		    $this->CreateLog($request->user()->id, 'company', 2,'');

		    return response()->json(['status'=>'success', "message"=>'La empresa fue actualizada satisfactoriamente.', "data" => true ], 200);      

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
        	
        	$data = \App\Models\Company::find($id);
	        $this->CreateLog($request->user()->id, 'company', 3,json_encode($data));
	        $data->state = false;
	        $data->save();

	        $this->CreateLog($request->user()->id, 'company', 3,'');

	        return response()->json(['status'=>'success', "message"=>'', "data" => true ], 200);

        } catch (Exception $e) {
        	return 'Error: ' . $e->getMessage();
        }
    }

}
