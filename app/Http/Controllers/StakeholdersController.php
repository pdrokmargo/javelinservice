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
            ->select(DB::raw("
                i.id, 
                concat(i.firstname,' ', i.middlename, ' ', i.lastname) as name,
                i.person_type_id,
                i.document_number,
                i.businessname,
                geolocation(geolocation_id),
                i.status
            "));
            
            if ($search!='') {
                $query = $query->whereRaw("(lower(firstname) like ? or lower(middlename) like ? or lower(lastname) like ? or lower(legalname) like ? or lower(businessname) like ? or document_number like ?)", array($search, $search, $search, $search, $search, $search))->orderBy($ordername, $ordertype);
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search_stake_holder(Request $request, $option)
    {
        try {
            
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';          
            $ordername = isset($request->ordername) ? $request->ordername : 'i.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            $option = $request->option ;
            $table = '';

            switch ($option) {
                case '1':
                    $table='customers';
                    break;
                case '2':
                    $table='suppliers';
                    break;
                case '3':
                    $table='employees';
                    break;
                case '4':
                    $table='makers';
                    break;
                 case '5':
                    $table='importers';
                    break;
                 case '6':
                    $table='health_record_holders';
                    break;       
            }
            
            $query = DB::table('stakeholders_info as i')
            ->join('geolocations as g', 'i.geolocation_id', '=', 'g.id')
            ->join('collections_values as c', 'g.country_id', '=', 'c.id')
            ->join('collections_values as d', 'g.department_id', '=', 'd.id')
            ->join('collections_values as cy', 'g.city_id', '=', 'cy.id')
            ->join($table . ' as x', 'i.id', '=', 'x.stakeholder_info_id')
            ->select(DB::raw("i.id, i.document_number, concat(i.firstname,' ', i.middlename, ' ', i.lastname) as name, concat(c.value, ', ', d.value, ', ', cy.value) as geolocation, i.businessname, i.legalname,i.document_type_id, i.status, person_type_id, x.id as x_id"));
                       
            
            if ($search!='') {
                $query = $query->whereRaw("i.status=true and lower(firstname) like ? or lower(middlename) like ? or lower(lastname) like ? or lower(legalname) like ? or lower(businessname) like ? or document_number like ?", array($search, $search, $search, $search, $search, $search))
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
            $stakeholders_info = $data["stakeholders_info"];
            $comercial_stakeholders_info = $data["comercial_stakeholders_info"];
            $customer = $data["customer"];
            $employee = $data["employee"];
            $supplier = $data["supplier"];
            $profile = [
                "is_supplier" => isset($data["profile"]["is_supplier"]) ? $data["profile"]["is_supplier"] : false,
                "is_employee" => isset($data["profile"]["is_employee"]) ? $data["profile"]["is_employee"] : false,
                "is_seller" => isset($data["profile"]["is_seller"]) ? $data["profile"]["is_seller"] : false,
                "is_maker" => isset($data["profile"]["is_maker"]) ? $data["profile"]["is_maker"] : false,
                "is_importer" => isset($data["profile"]["is_importer"]) ? $data["profile"]["is_importer"] : false,
                "is_customer" => isset($data["profile"]["is_customer"]) ? $data["profile"]["is_customer"] : false,
                "is_holder_sanitary" => isset($data["profile"]["is_holder_sanitary"]) ? $data["profile"]["is_holder_sanitary"] : false
            ];

            $stakeholder_info_id = \App\Models\StakeholdersInfo::create($stakeholders_info)->id;
            if ($stakeholders_info['person_type_id'] == 39) { $comercial_stakeholders_info['stakeholder_info_id'] = $stakeholder_info_id; \App\Models\ComercialStakeholdersInfo::create($comercial_stakeholders_info); }           
            if ($profile['is_supplier']) { $supplier['stakeholder_info_id'] = $stakeholder_info_id; \App\Models\Supplier::create($supplier); }
            if ($profile['is_employee']) { \App\Models\Employee::create([ 'stakeholder_info_id' => $stakeholder_info_id ]); }
            if ($profile['is_seller']) { \App\Models\SalesRepresentatives::create(['stakeholder_info_id' => $stakeholder_info_id ]); }
            if ($profile['is_maker']) { \App\Models\Maker::create(['stakeholder_info_id' => $stakeholder_info_id ]); }
            if ($profile['is_importer']) { \App\Models\Importer::create([ 'stakeholder_info_id' => $stakeholder_info_id ]); }
            if ($profile['is_holder_sanitary']) { \App\Models\HealthRecordHolder::create(['stakeholder_info_id' => $stakeholder_info_id ]); }
            if ($profile['is_customer']) 
            {
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
                
                $customer['stakeholder_info_id'] = $stakeholder_info_id;                
                \App\Models\Customers::create($customer);
            }
            $this->CreateLog($request->user()->id, 'stakeholders', 1,'');
            DB::commit();
            return response()->json([  "store" => true,  "message" => "Registro almacenado correctamente"  ], 200);

        } catch (Exception $e) {
            DB::rollback();
            return response()->json([  "store" => false,  "message" => "Error al intentar almacenar el nuevo registro"  ], 400);
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
        
        $stakeholders_info              = \App\Models\StakeholdersInfo::find($id);
        $comercial_stakeholders_info    = \App\Models\ComercialStakeholdersInfo::where('stakeholder_info_id',$id)->first();
        $customer                       = \App\Models\Customers::where('stakeholder_info_id',$id)->first();       
        $employee                       = \App\Models\Employee::where('stakeholder_info_id',$id)->first();
        $supplier                       = \App\Models\Supplier::where('stakeholder_info_id',$id)->first();

        $is_seller                      = \App\Models\SalesRepresentatives::where('stakeholder_info_id',$id)->first();
        $maker                          = \App\Models\Maker::where('stakeholder_info_id',$id)->first();
        $importer                       = \App\Models\Importer::where('stakeholder_info_id',$id)->first();
        $health_holder                  = \App\Models\HealthRecordHolder::where('stakeholder_info_id',$id)->first();

        $profile = [
            "is_customer"           => $customer        ? true : false,
            "is_supplier"           => $supplier        ? true : false,
            "is_seller"             => $is_seller       ? true : false,
            "is_employee"           => $employee        ? true : false,
            "is_maker"              => $maker           ? true : false,
            "is_importer"           => $importer        ? true : false,
            "is_holder_sanitary"    => $health_holder   ? true : false,
            
        ];

        return response()->json([
            'status' => 'success', 
            "message"=>'', 
            "data" => [
                "stakeholders_info"             => $stakeholders_info,
                "comercial_stakeholders_info"   => $comercial_stakeholders_info,
                "customer"                      => $customer,
                "employee"                      => $employee,
                "supplier"                      => $supplier,
                "profile"                       => $profile
            ]
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
        try {
            
            $data = json_decode($request->data,true);
            $geoLocation = \App\Models\Geolocation::where('country_id', $data['country_id'])
                ->where('department_id', $data['department_id'])
                ->where('city_id', $data['city_id'])
                ->first();  

            $customer = $data["customer"];
            $suppliers = $data["supplier"];
            $comercial_stakeholders_info = $data["comercial_stakeholders_info"];
            $stakeholders = \App\Models\StakeholdersInfo::find($id);
            if($geoLocation) {
                $data['geolocation_id'] = $geoLocation->id;
                $stakeholders->fill($data);
                $stakeholders->save();
            }
            
            

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
            $this->CreateLog($request->user()->id, 'stakeholders', 2,'');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_stake_holder(Request $request)
    {
        DB::beginTransaction(); 
        try {
            
            $data = json_decode($request->data,true);
            $geoLocation=\App\Models\Geolocation::where('country_id', $data['country_id'])
            ->where('department_id', $data['department_id'])
            ->where('city_id', $data['city_id'])
            ->first();  
            
            $customer = $data["customer"];
            $supplier = $data["supplier"];
            // $sales_representatives = $data["sales_representatives"];
            // $employees = $data["employees"];
            $id = $data['id'];
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
                if ($suplier_old) {
                    $suplier_old->fill($supplier);
                    $suplier_old->save();
                }else{
                    $supplier['stakeholder_info_id']=$id;
                    \App\Models\Supplier::create($supplier);
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
            $user = \App\Models\StakeholdersInfo::find($id);
            $data->delete = true;
            $data->save();    
            $this->CreateLog($request->user()->id, 'stakeholders', 3,'');
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
