<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class CostsCentreController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'cc.id';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            if ($ordername=='operationcostcentres') 
            {
                $ordername=DB::raw("(case when root=true then 
                (select concat('cc-', c.name) 
                from costscentres as c
                where c.id=cc.operation_cost_centre_id) 
                else 
                (select concat('co-',o.name)
                from operationscentres as o
                where o.id=cc.operation_cost_centre_id) end)");
            }
          
            $page = $request->page;
            $company_id = $request->user()->company_default_id;
            $query =DB::table('costscentres as cc')
            ->join('collections_values as ct', 'ct.id', '=', 'cc.costcentretype_id')
            ->join('collections_values as cg', 'cg.id', '=', 'cc.costcentregroup_id')
            ->select(DB::raw("
                cc.id, 
                cc.code, 
                cc.name, 
                ct.value as costcentretype, 
                cg.value as costcentregroup, 
                cc.state,
                (case when root=true then 
                (select concat('cc-', c.name) from costscentres as c where c.id=cc.operation_cost_centre_id) else 
                (select concat('co-',o.name) from operationscentres as o where o.id=cc.operation_cost_centre_id) end) as operationcostcentres")); 
            
            if ($search!='') 
            {
                $query=$query->whereRaw("delete = false and company_id=? and (code like ? or lower(description) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?)", array($company_id, $search, $search, $search, $search))->orderBy($ordername, $ordertype);
            }
            else
            {
                $query=$query->where('delete', false)->where('company_id', $company_id)->orderBy($ordername, $ordertype);
            } 
            
            $data=[];  
            if ($page) 
            {
                $data=$query->paginate(30);
            }
            else
            {
                $data=$query->get();
            }  
            
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
        } 
        catch (Exception $e) 
        {
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
            $company_id = $request->user()->company_default_id;
            $operationCenter=explode('-',$data['operation_cost_centre_id']);
            $root = $operationCenter[0] == 'co';
            $result=\App\Models\CostsCentre::create(
                array(
                    'name' => $data['name'],
                'code' => 'cc000',
                'description' => isset($data['description']) ? $data['description'] : '',
                'costcentretype_id' => $data['costcentretype_id'],
                'root' => $root,
                'operation_cost_centre_id' => $operationCenter[1],
                'costcentregroup_id' => isset($data['costcentregroup_id']) ? $data['costcentregroup_id'] : DB::raw('null'),            
                'state' => $data['state'],
                'company_id' => $company_id
                )
            );
            $costsCentres=\App\Models\CostsCentre::find($result['id']);
            $code='';
            for ($i=strlen($costsCentres->id);$i < 3 ; $i++) {
            $code .= '0';
            }
            $costsCentres->code='cc'.$code.$result['id'];
            $costsCentres->save();
            $this->CreateLog($request->user()->id, 'costs-centres', 1,'');
            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro almacenado correctamente" 
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
	    $data = \App\Models\CostsCentre::find($id);
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
        try
        {
            $data = json_decode($request->data, true);
            $operationCenter=explode('-',$data['operation_cost_centre_id']);
            $root = $operationCenter[0] == 'co';
            $data_old = \App\Models\CostsCentre::find($id);
            $data_old->fill(array(
                'name' => $data['name'],
                'code' => $data['code'],
                'description' => $data['description'],
                'costcentretype_id' => $data['costcentretype_id'],
                'root' => $root,
                'operation_cost_centre_id' => $operationCenter[1],
                'costcentregroup_id' => $data['costcentregroup_id'],                  
                'state' => $data['state'],
                'company_id'=>$data['company_id']
            ));
            $data_old->save();
            $this->CreateLog($request->user()->id, 'costs-centres', 2,'');
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
    public function destroy(Request $request, $id)
    {
        DB::beginTransaction();
        try 
        {
            $data = \App\Models\CostsCentre::find($id);
            $this->CreateLog($request->user()->id, 'company', 3,json_encode($data));
            $data->state = false;
            $data->save();
            $this->CreateLog($request->user()->id, 'costs-centres', 3,'');
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

    public function operations_costs_centre(Request $request)
    {
      try {

        $company_id=$request->user()->company_default_id;
        $data=DB::select("select concat('cc-', c.id) as id, concat('cc-',c.name) as name, 1 as type 
                    from costscentres as c
                    where c.costcentretype_id=27 and c.company_id=?
                    union
                    select  concat('co-', o.id) as id, concat('co-',o.name) as name, 2 as type 
                    from operationscentres as o
                    where o.company_id=?", array($company_id, $company_id));

        return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);

      } catch (Exception $e) {
        return 'Error: ' . $e->getMessage();
      }
    }

}
