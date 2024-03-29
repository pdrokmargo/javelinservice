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
                $query = $query->whereRaw("delete = false and sku like ? or lower(name) like ? or lower(description) like ? or lower(comercial_name) like ? or (case when state=true then 'activo' else 'inactivo' end) like ?", array($search, $search, $search, $search, $search))
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
            // $data['pharmaceutical_drug'] = json_encode($data['pharmaceuticaldrug']);
            $is_new = \App\Models\Product::where('sku', $data["sku"])->first();
            if($is_new != null){
                return response()->json([ 
                    "store" => false, 
                    "message" => "No es posible crear el producto, el PLU ya existe! " 
                ], 500);
            }
            $product=\App\Models\Product::create($data);
            $data['product_detail']['product_id'] = $product->id;
            $pharma_product =\App\Models\PharmaceuticalDrugProduct::create(
                $data['product_detail']
            //     [
            //     'product_id' => '', 
            //     'pharmaceutical_drug_id' => '',
            //     'name' => '',
            //     'delivery_fraction' => 1,
            //     'invima_file_record' => '',
            //     'invima_file_record_consecutive' => '',
            //     'content_unit_id' => '',
            //     'packaging_unit_id' => '',
            //     'sanitary_registration_holder_id' => '',
            //     'laboratory_id' => '',
            //     'sanitary_registration' => '',
            //     'validity_sanitary_registration' => ''
            // ]
        );
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
            $data = $data->load('product_detail');
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
            // $data_new['pharmaceutical_drug'] = json_encode($data_new['pharmaceutical_drug']);
            $data_old = \App\Models\Product::find($id);
            $data_old->fill($data_new);
            $data_old->save();
            $data_old_pivot = \App\Models\PharmaceuticalDrugProduct::where('product_id', $id)->first();
            $data_old_pivot->fill($data_new['product_detail']);
            $data_old_pivot->save();
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
