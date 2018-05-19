<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Webpatser\Uuid\Uuid;
use DB;


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
            
            /*$query = DB::table('stakeholders_info as i')
            ->join('geolocations as g', 'i.geolocation_id', '=', 'g.id')
            ->join('collections_values as c', 'g.country_id', '=', 'c.id')
            ->join('collections_values as d', 'g.department_id', '=', 'd.id')
            ->join('collections_values as cy', 'g.city_id', '=', 'cy.id')
            ->join($table . ' as x', 'i.id', '=', 'x.stakeholder_info_id')
            ->select(DB::raw("i.id, i.document_number, concat(i.firstname,' ', i.middlename, ' ', i.lastname) as name, concat(c.value, ', ', d.value, ', ', cy.value) as geolocation, i.businessname, i.document_type_id, i.status"));
                        
            $query = $query->whereRaw("document_type_id = 14");

            if ($search!='') {
                $query = $query->whereRaw("lower(firstname) like ? or lower(middlename) like ? or lower(lastname) like ? or lower(businessname) like ? or document_number like ?", array($search, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->orderBy($ordername, $ordertype);
            }*/
            
            $query = DB::table('stakeholders_info as i')
            ->join($table . ' as x', 'i.id', '=', 'x.stakeholder_info_id')
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
                /*$destinationPath = public_path().'/customer_documents'; 
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
                }*/
                
                $customer['stakeholder_info_id'] = $stakeholder_info_id;                
                \App\Models\Customers::create($customer);
            }
            $this->CreateLog($request->user()->id, 'stakeholders', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true,  
                "message" => "Registro creado correctamentee"  
            ], 200);

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

        $department_id = \App\Models\CollectionsValues::where('id', $stakeholders_info["geolocation_id"])->first()->parent_id;
        $country_id   = \App\Models\CollectionsValues::where('id', $department_id)->first()->parent_id;

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
            ],
            "country_id"    => $country_id,
            "department_id" => $department_id
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
            $data = json_decode($request->data,true);
            $stakeholders_info = $data["stakeholders_info"];
            $comercial_stakeholders_info = $data["comercial_stakeholders_info"];
            $comercial_stakeholders_info["tax_regime_id"] = 0;
            $customer = $data["customer"];
            $employee = $data["employee"];
            $supplier = $data["supplier"];
            $profile = [
                "is_supplier"           => isset($data["profile"]["is_supplier"])           ? $data["profile"]["is_supplier"]           : false,
                "is_employee"           => isset($data["profile"]["is_employee"])           ? $data["profile"]["is_employee"]           : false,
                "is_seller"             => isset($data["profile"]["is_seller"])             ? $data["profile"]["is_seller"]             : false,
                "is_maker"              => isset($data["profile"]["is_maker"])              ? $data["profile"]["is_maker"]              : false,
                "is_importer"           => isset($data["profile"]["is_importer"])           ? $data["profile"]["is_importer"]           : false,
                "is_customer"           => isset($data["profile"]["is_customer"])           ? $data["profile"]["is_customer"]           : false,
                "is_holder_sanitary"    => isset($data["profile"]["is_holder_sanitary"])    ? $data["profile"]["is_holder_sanitary"]    : false
            ];

            $stakeholders_info_old = \App\Models\StakeholdersInfo::find($id);
            if($stakeholders_info_old)
            {
                $stakeholders_info_old->fill($stakeholders_info);
                $stakeholders_info_old->save();

                
                    $comercial_stakeholders_info_old = \App\Models\ComercialStakeholdersInfo::where('stakeholder_info_id',$id)->first();
                    if($comercial_stakeholders_info_old)
                    {
                        $comercial_stakeholders_info_old->fill($comercial_stakeholders_info);
                        $comercial_stakeholders_info_old->save();
                    } 
                    else 
                    {
                        if($comercial_stakeholders_info) {
                            $comercial_stakeholders_info['stakeholder_info_id'] = $id;
                            \App\Models\ComercialStakeholdersInfo::create($comercial_stakeholders_info);
                        }
                    }
                    if (!$profile['is_supplier'])
                    {
                        \App\Models\Supplier::where('stakeholder_info_id', $id)->delete();
                    }
                    else
                    {
                        $supplier['stakeholder_info_id'] = $id; 
                        \App\Models\Supplier::firstOrCreate([ 'stakeholder_info_id' => $id ], $supplier); 
                            
                    }
                    if (!$profile['is_employee']) 
                    { 
                        \App\Models\Employee::where('stakeholder_info_id', $id)->delete();
                    } 
                    else 
                    {
                        \App\Models\Employee::firstOrCreate([ 'stakeholder_info_id' => $id ], [ 'stakeholder_info_id' => $id ]);
                    }
                    if (!$profile['is_seller']) 
                    { 
                        \App\Models\SalesRepresentatives::where('stakeholder_info_id', $id)->delete();
                    } 
                    else 
                    {
                        \App\Models\SalesRepresentatives::firstOrCreate(['stakeholder_info_id' => $id ], ['stakeholder_info_id' => $id ]);
                            
                    }
                    if (!$profile['is_maker']) 
                    {
                        \App\Models\Maker::where('stakeholder_info_id', $id)->delete();    
                    } 
                    else 
                    {
                        \App\Models\Maker::firstOrCreate(['stakeholder_info_id' => $id ], ['stakeholder_info_id' => $id ]);
                    }
                    if (!$profile['is_importer']) 
                    { 
                        \App\Models\Importer::where('stakeholder_info_id', $id)->delete();
                    } else {
                        \App\Models\Importer::firstOrCreate([ 'stakeholder_info_id' => $id ], [ 'stakeholder_info_id' => $id ]);
                    }
                    if (!$profile['is_holder_sanitary']) 
                    { 
                        \App\Models\HealthRecordHolder::where('stakeholder_info_id', $id)->delete();
                    } else {
                        \App\Models\HealthRecordHolder::firstOrCreate(['stakeholder_info_id' => $id ], ['stakeholder_info_id' => $id ]);
                            
                    }
                    if($profile['is_customer'])
                    {
                        /*$destinationPath = public_path().'/customer_documents'; 
                        if (count($customer['institutional_sale_contract']) > 0) {
                            
                            Storage::delete($customer['institutional_sale_contract']);
                            
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
                        }*/
                        
                        $customer_old = \App\Models\Customers::where('stakeholder_info_id', $id)->first();
                        $customer_old->fill($customer);
                        $customer_old->save();
                    }
                    else
                    {
                        Storage::delete($customer['institutional_sale_contract']);

                        $customer_old = \App\Models\Customers::where('stakeholder_info_id', $id)->first();
                        if($customer_old)
                            $customer_old->delete();
                    }
                

                $this->CreateLog($request->user()->id, 'stakeholders', 2,'');
                DB::commit();
                return response()->json([ 
                    "update" => true, 
                    "message" => "Registro actualizado correctamente" 
                ], 200);
            }
            else
            {
                DB::rollback();
                return response()->json([ 
                    "update" => false, 
                    "message" => "Error al intentar actualizar el registro" 
                ], 400);
            }
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
