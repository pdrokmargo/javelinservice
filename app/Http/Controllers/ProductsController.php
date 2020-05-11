<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
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
            $sign = isset($request->sign) ? $request->sign : '';

            $query = new \App\Models\Product();
            if ($search!='') {
                $query = $query->whereRaw("delete = false and code like ? or lower(name) like ? or lower(description) like ? lower(comercial_name) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search, $search))
                ->orderBy($ordername, $ordertype);
            }else{
                $query=$query->where('delete', false)->orderBy($ordername, $ordertype);
            } 
            $data=[];  
            if ($page) {
              $data=$query->paginate(15);
            }else{
              $data=$query->get();
            }  
            // $data = $data->load('stock');
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
            $data['pharmaceutical_drug'] = json_encode($data['pharmaceutical_drug']);
            $is_new = App\Models\Product::where('sku', $data["sku"])->first();
            if($is_new != null){
                return response()->json([ 
                    "store" => false, 
                    "message" => "No es posible crear el producto, el PLU ya existe! " 
                ], 500);
            }
            $product=\App\Models\Product::create($data);
            \App\JavelinFriends\feed_syncs::save_sync($product->id, 'products');
            DB::commit();
            
            return response()->json([ 
                "store" => true, 
                "message" => "Registro creado correctamente" 
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
        $data = \App\Models\Product::with(['manufacturer', 'importer'])->where('id',$id)->first();
        if($data->product_type_id == 30){
            $data = $data->load('product_detail.laboratory-stakeholderInfo');
        }
        return response()->json([ "data" => $data ], 200);
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
            $data_new = json_decode($request->data,true);
            $data_new['pharmaceutical_drug'] = json_encode($data_new['pharmaceutical_drug']);
            $data_old = \App\Models\Product::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            $this->CreateLog($request->user()->id, 'product', 2,'');
            \App\JavelinFriends\feed_syncs::update_sync($id, 'products');
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
            $data = \App\Models\Product::find($id);
            $data->delete = true;
            $data->save();
            $this->CreateLog($request->user()->id, 'product', 3,'');
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
