<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Webpatser\Uuid\Uuid;

class StakeholdersController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'i.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;

            
            $query = DB::table('stakeholders_info as i')
            ->join('geolocations as g', 'i.geolocation_id', '=', 'g.id')
            ->join('collections_values as c', 'g.country_id', '=', 'c.id')
            ->join('collections_values as d', 'g.department_id', '=', 'd.id')
            ->join('collections_values as cy', 'g.city_id', '=', 'cy.id')
            ->select(DB::raw("i.id, i.document_number, concat(i.firstname,' ', i.middlename, ' ', i.lastname) as name, concat(c.value, ', ', d.value, ', ', cy.value) as geolocation, i.businessname, i.legalname,i.document_type_id, i.status"));
            

            
            
            if ($search!='') {
                $query = $query->whereRaw("lower(firstname) like ? or lower(middlename) like ? or lower(lastname) like ? or lower(legalname) like ? or lower(businessname) like ? or document_number like ?", array($search, $search, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
                $data=$query->paginate(30);
            }
            else
            {
                $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
            
        } catch (Exception $e) {
            return 'Error:'.$e->getMessage();
        }
       
    }

    public function custumers(Request $request)
    {
        try {
            
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';          
            $ordername = isset($request->ordername) ? $request->ordername : 'i.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;

            
            $query = DB::table('stakeholders_info as i')
            ->join('geolocations as g', 'i.geolocation_id', '=', 'g.id')
            ->join('collections_values as c', 'g.country_id', '=', 'c.id')
            ->join('collections_values as d', 'g.department_id', '=', 'd.id')
            ->join('collections_values as cy', 'g.city_id', '=', 'cy.id')
            ->select(DB::raw("i.id, i.document_number, concat(i.firstname,' ', i.middlename, ' ', i.lastname) as name, concat(c.value, ', ', d.value, ', ', cy.value) as geolocation, i.businessname, i.document_type_id, i.status"));
                        
            $query = $query->whereRaw("document_type_id = 14");

            if ($search!='') {
                $query = $query->whereRaw("lower(firstname) like ? or lower(middlename) like ? or lower(lastname) like ? or lower(businessname) like ? or document_number like ?", array($search, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->orderBy($ordername, $ordertype);
            } 

            $data=[];  
            if ($page) {
                $data=$query->paginate(30);
            }
            else
            {
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
            
            $data = json_decode($request->data,true);
                       
            $geoLocation = \App\Models\Geolocation::where('country_id', $data['country_id'])
            ->where('department_id', $data['department_id'])
            ->where('city_id', $data['city_id'])
            ->first();  


            $customer = $data["customer"];
            $supplier = $data["supplier"];
            // $sales_representatives = $data["sales_representatives"];
            // $employees = $data["employees"];
            $comercial_stakeholders_info = $data["comercial_stakeholders_info"];            
            $data['geolocation_id'] = $geoLocation->id;
            $id = \App\Models\StakeholdersInfo::create($data)->id;
            
            if ($data['person_type_id']==39)/*persona juridica*/ {
                $comercial_stakeholders_info['stakeholder_info_id']=$id;
                 \App\Models\ComercialStakeholdersInfo::create($comercial_stakeholders_info);
            }           

            if ($data['is_customer']) {
                $destinationPath = public_path().'/customer_documents'; 
                if (count($customer['institutional_sale_contract'])>0) {
                    foreach ($customer['institutional_sale_contract'] as $key => $item) {
                        $fileTemp = $item['contract_number'].'_file';
                        if ($request->hasFile($fileTemp)) {
                            if ($request->file($fileTemp)->isValid()) {
                                $fileExtension = $request->file($fileTemp)->getClientOriginalExtension();
                                $fileName = Uuid::generate()->string . '.' . $fileExtension;
                                $request->file($fileTemp)->move($destinationPath, $fileName);
                                $customer['institutional_sale_contract'][$key]['file'] ='/customer_documents/' . $fileName;
                                $customer['institutional_sale_contract'][$key]['is_file']=false;
                            }
                        } 
                    }                    
                } 
                             
                $customer['stakeholder_info_id']=$id;                
                \App\Models\Customers::create($customer);
            }
            
            if ($data['is_employee']) {
                \App\Models\Employee::create(array(
                    'stakeholder_info_id'=>$id
                ));
            }
           
            if ($data['is_supplier']) {
                $supplier['stakeholder_info_id']=$id;
                \App\Models\Supplier::create($supplier); 
            }            

            if ($data['is_seller']) {
                \App\Models\SalesRepresentatives::create(array(
                    'stakeholder_info_id'=>$id
                ));
            }

            if ($data['is_maker']) {
                \App\Models\Maker::create(array(
                    'stakeholder_info_id'=>$id
                ));
            }

            if ($data['is_importer']) {
                \App\Models\Importer::create(array(
                    'stakeholder_info_id'=>$id
                ));
            }

            if ($data['is_holder_sanitary']) {
                \App\Models\HealthRecordHolder::create(array(
                    'stakeholder_info_id'=>$id
                ));
            }

            DB::commit();

            return response()->json(["status"=>"success",  
                                    "message" => "El registro se ha guardado satisfactoriamente.", "data" => $id ], 200 ); 
            
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
        
        $data = \App\Models\StakeholdersInfo::with('geolocation')->find($id)->toArray();
        
        $customers = \App\Models\Customers::where('stakeholder_info_id',$id)->first();
        $suppliers = \App\Models\Supplier::where('stakeholder_info_id',$id)->first();
        $sales_representatives = \App\Models\SalesRepresentatives::where('stakeholder_info_id',$id)->first();
        $employees = \App\Models\Employee::where('stakeholder_info_id',$id)->first();
        $comercial_stakeholders_info = \App\Models\ComercialStakeholdersInfo::where('stakeholder_info_id',$id)->first();
        $maker = \App\Models\Maker::where('stakeholder_info_id',$id)->first();
        $importer = \App\Models\Importer::where('stakeholder_info_id',$id)->first();
        $health_holder = \App\Models\HealthRecordHolder::where('stakeholder_info_id',$id)->first();

        $data['is_customer']=  $customers ? true : false;
        $data['is_supplier']=  $suppliers ? true : false;
        $data['is_seller']= $sales_representatives ? true : false;
        $data['is_employee']=$employees ? true : false;
        $data['is_maker']=$maker ? true : false;
        $data['is_importer']=$importer ? true : false;
        $data['is_holder_sanitary']=$health_holder ? true : false;
        $data['comercial_stakeholders_info']=$comercial_stakeholders_info;
        $data['customer']=$customers;
        $data['supplier']=$suppliers;
        $data['employee']=$employees;
        $data['sales_representative']=$sales_representatives;
        $data['maker']=$maker;
        $data['importer']=$importer;
        $data['health_record_holder']=$health_holder;
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
        DB::beginTransaction(); 
        try {
            
            $data = json_decode($request->data,true);
            $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
            ->where('department_id', $data['department_id'])
            ->where('city_id', $data['city_id'])
            ->first();  

            $customer = $data["customer"];
            $suppliers = $data["supplier"];
            // $sales_representatives = $data["sales_representatives"];
            // $employees = $data["employees"];
            $comercial_stakeholders_info = $data["comercial_stakeholders_info"];
            $stakeholders=\App\Models\StakeholdersInfo::find($id);
            
            $data['geolocation_id']=$geoLocation->id;
            $stakeholders->fill($data);
            $stakeholders->save();

            if ($data['person_type_id']==39) {
                 $comercial=\App\Models\ComercialStakeholdersInfo::where('stakeholder_info_id', $id)->first(); 

                 if ($comercial) {
                      $comercial->fill($comercial_stakeholders_info);
                      $comercial->save();
                 }else{ 
                    $comercial_stakeholders_info['stakeholder_info_id']=$id;
                     \App\Models\ComercialStakeholdersInfo::create($comercial_stakeholders_info);
                }
            }           

            if ($data['is_customer']) {
                $customer_old = \App\Models\Customers::where('stakeholder_info_id', $id)->first(); 
                if ($customer_old) {
                    $customer_old->fill($customer);
                    $customer_old->save();
                }else{
                    $customer['stakeholder_info_id']=$id;
                    \App\Models\Customers::create($customer);
                }
            }
            
            if ($data['is_employee']) {
                $employee_old=\App\Models\Employee::where('stakeholder_info_id', $id)->first(); 
                if (!$employee_old) {
                    \App\Models\Employee::create(array(
                    'stakeholder_info_id'=>$id
                    ));
                }
                
            }
           
            if ($data['is_supplier']) {
                $suplier_old = \App\Models\Supplier::where('stakeholder_info_id', $id)->first();
                if (!$suplier_old) {
                   \App\Models\Supplier::create(array(
                    'stakeholder_info_id'=>$id
                    )); 
                }                
            }            

            if ($data['is_seller']) {
                $seller = \App\Models\SalesRepresentatives::where('stakeholder_info_id', $id)->first();
                if (!$seller) {
                   \App\Models\SalesRepresentatives::create(array(
                    'stakeholder_info_id'=>$id
                    ));
                }
            }

            if ($data['is_maker']) {
                $maker = \App\Models\Maker::where('stakeholder_info_id', $id)->first();
                if (!$maker) {
                    \App\Models\Maker::create(array(
                        'stakeholder_info_id'=>$id
                    ));
                }
            }

            if ($data['is_importer']) {
                $importer = \App\Models\Importer::where('stakeholder_info_id', $id)->first();
                if (!$importer) {
                  \App\Models\Importer::create(array(
                      'stakeholder_info_id'=>$id
                  ));                
                }
            }

            if ($data['is_holder_sanitary']) {
                $health_holder = \App\Models\HealthRecordHolder::where('stakeholder_info_id', $id)->first();
                if (!$health_holder) {
                    \App\Models\HealthRecordHolder::create(array(
                    'stakeholder_info_id'=>$id
                    ));
                }               
            }

            DB::commit();

            return response()->json(["status"=>"success",  
                                    "message" => "El registro se ha actualizado satisfactoriamente.", "data" => $id ], 200 ); 
            
        } catch (Exception $e) {
            DB::rollback();
            return 'Error: ' . $e->getMessage();
        }     
        // $data = json_decode($request->data, true);
        // /**/
        // $stakeholders = json_decode($data["stakeholders"],true);

        // $stakeholders_info = $stakeholders["stakeholders_info"];
        // $customers = $stakeholders["customers"];
        // $suppliers = $stakeholders["suppliers"];
        // $sales_representatives = $stakeholders["sales_representatives"];
        // $employees = $stakeholders["employees"];
        // $comercial_stakeholders_info = $stakeholders["comercial_stakeholders_info"];

        // $stakeholders_info_old = \App\Models\StakeholdersInfo::find($id);
        
        // $stakeholders_info_old->fill($stakeholders_info);
        // $stakeholders_info_old->save();

        // if($customers["stakeholders_info"]){
        //     $customers["stakeholder_info_id"] = $id;
        //     \App\Models\Customers::create($customers);
        // }else{
        //     if(isset($customers["id"]))
        //         \App\Models\Customers::where('id',$customers["id"])->delete();
            
        // }

        // if($suppliers["stakeholders_info"]){
        //     $suppliers["stakeholder_info_id"] = $id;
        //     \App\Models\Supplier::create($suppliers);
        // }else{
        //     if(isset($suppliers["id"]))
        //         \App\Models\Supplier::where('id',$suppliers["id"])->delete();
        // }
        // if($sales_representatives["stakeholders_info"]) {
        //     $sales_representatives["stakeholder_info_id"] = $id;
        //     \App\Models\SalesRepresentatives::create($sales_representatives);
        // }else{
        //     if(isset($sales_representatives["id"]))
        //         \App\Models\SalesRepresentatives::where('id',$sales_representatives["id"])->delete();
            
        // }
        // if($employees["stakeholders_info"]) {
        //     $employees["stakeholder_info_id"] = $id;
        //     \App\Models\Employee::create($employees);
        // } else {
        //     if(isset($employees["id"]))
        //         \App\Models\Employee::where('id',$employees["id"])->delete();
            
        // }
        // $comercial_stakeholders_info_old = \App\Models\ComercialStakeholdersInfo::find($comercial_stakeholders_info["id"]);
        // $comercial_stakeholders_info_old->fill($comercial_stakeholders_info);
        // $comercial_stakeholders_info_old->save();
        // $this->CreateLog($request->user()->id, 'stakeholders', 2,'');
        // return response()->json([ "update" => true], 200);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = \App\Models\StakeholdersInfo::find($id);
        $this->CreateLog($request->user()->id, 'stakeholders', 3,json_encode($user));
        $user->delete();
        return response()->json([ "destroy" => true], 200);
    }
}
