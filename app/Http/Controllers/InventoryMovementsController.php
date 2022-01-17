<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class InventoryMovementsController extends Controller
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
            $ordername = isset($request->ordername) ? $request->ordername : 'consecutive';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $company_id = $request->user()->company_default_id;
            if($request->inventory_movement_type == 1){
                $inventory_movements = \App\Models\InventoryMovement::where('company_id', $company_id)->whereBetween('inventory_movement_entry_out_type_id', [174, 179])->orderBy($ordername, $ordertype)->paginate(15); 
            }else{
                $inventory_movements = \App\Models\InventoryMovement::where('company_id', $company_id)->whereBetween('inventory_movement_entry_out_type_id', [180, 186])->orderBy($ordername, $ordertype)->paginate(15); 
            }
            

            
            return response()->json(['status'=>'success', "message"=>'', "data" => $inventory_movements ], 200);

      } catch (Exception $e) {
          return 'Error:'.$e->getMessage();
      } 
    }
    public function getRemaining(Request $request)
    {
        $details_received = \App\Models\InventoryMovementDetail::with(['inventory_movement' => function ($query) {
            $query->where('document_fullfilled_id', $this->id);
        }]);
        $details = json_decode($this->products,true);
        $details_out = [];
        foreach($details as $d){
            $d['units'] -= $details_received->where('product_id', $d['product_id'])->where('fraction', false)->sum('units');
            $d['purchase_price'] = $d['product']['averageunitcost'];
            if($d['units'] > 0){
                $details_out[] = $d;
            }
            
        }
        return $details_out;
    }
    public function indexTranfers(Request $request)
    {
        try {
          
            $search = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername = isset($request->ordername) ? $request->ordername : 'consecutive';
            $ordertype = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page = $request->page;
            
            $company_id = $request->user()->company_default_id;
            $active_delivery_point = \App\Models\Configuration::where('code', 'active_delivery_point')->first();
                $delivery_point = \App\Models\DeliveryPoint::where('id', $active_delivery_point->value['delivery_point_id'])->with('warehouses')->first(); 
                $inventory_movements = new \App\Models\InventoryMovement();
                $inventory_movements->setConnection('main');
                $inventory_movements = \App\Models\InventoryMovement::where('company_id', $company_id)->where('inventory_movement_entry_out_type_id', 182)->where('counterpart_transfer_id', $delivery_point->warehouses->id)->with('details', 'counterpart_transfer')->orderBy($ordername, $ordertype)->paginate(15); 
                foreach($inventory_movements as $im){
                    $im->remaining = $im->details;
                }
            return response()->json(['status'=>'success'.$active_delivery_point, "message"=>'', "data" => $inventory_movements ], 200);

            } catch (Exception $e) {
                return 'Error:'.$e->getMessage();
            } 
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $overflowUnits = false;
        $outMovement = false;
        $overflowProduct = "";
        DB::beginTransaction(); 

        try {
            
            $inventory_movement = json_decode($request->data, true);
            $inventory_movement_details = $inventory_movement['details'];
            
            $inventory_movement['company_id'] = $request->user()->company_default_id;
            $inventory_movement['user_id'] = $request->user()->id;
            if(isset($inventory_movement['observations']) == false){
                $inventory_movement['observations'] = '';
            }
            if(
                $inventory_movement['inventory_movement_entry_out_type_id'] >= 174 and 
                $inventory_movement['inventory_movement_entry_out_type_id'] <= 179
            ){//Entry
                $inventory_movement['document'] = \App\Models\Consecutive::where('document_name', 'inventory_movement_entry')->first();
            } else if(
                $inventory_movement['inventory_movement_entry_out_type_id'] >= 180 and 
                $inventory_movement['inventory_movement_entry_out_type_id'] <= 186
            ){//Out
                $inventory_movement['document'] = \App\Models\Consecutive::where('document_name', 'inventory_movement_out')->first();
            }
            $inventory_movement['consecutive_id'] = $inventory_movement['document']['id'];
            $inventory_movement['consecutive'] = \App\Models\InventoryMovement::where('consecutive_id', $inventory_movement['consecutive_id'])->max('consecutive') + 1;
            if($inventory_movement['consecutive'] == null){
                $inventory_movement['consecutive'] = 1;
            }
            $result=\App\Models\InventoryMovement::create($inventory_movement);
            foreach ($inventory_movement_details as $i)
            {
                $i["inventory_movements_id"] = $result->id;
                if(isset($i["purchase_price"]) == false || $i["fraction"] == true || $i["purchase_price"] == ""){
                    $i['purchase_price'] = 0;
                }
                $result_detail=\App\Models\InventoryMovementDetail::create($i);
                
            } 
            foreach ($inventory_movement_details as $detail){
                $stock_result = \App\Models\StocksProducts::whereRaw('warehouse_id = ? and product_id = ? and batch = ? and location = ?', [$inventory_movement['warehouse_id'], $detail['product_id'], $detail['batch'], $detail['location']])->first();
                if($stock_result != null){
                    if(isset($detail['purchase_price']) == true && $detail["fraction"] == false){
                        $stock_result->set_cost = $detail['purchase_price'];
                        $stock_result->fraction_cost = $stock_result->set_cost/$detail['product']['units'];
                    }elseif($detail["fraction"] == true ||  (isset($detail['purchase_price']) == true && $detail["purchase_price"] == "")){
                        $detail['purchase_price'] = 0;
                    }else{
                        $detail['purchase_price'] = 0;
                    }
                    if($detail['fraction'] == "true"){
                        if($inventory_movement['inventory_movement_entry_out_type_id'] >= 174 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 179){//Entry
                            $stock_result->fraction_stock += $detail['units'];
                        }elseif($inventory_movement['inventory_movement_entry_out_type_id'] >= 180 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 186){//Out
                            if($stock_result->fraction_stock - $detail['units'] >= 0){
                                $stock_result->fraction_stock -= $detail['units'];
                            }else{
                                $overflowUnits = true;
                                $overflowProduct = $detail['product']['display_name'];
                                break;
                            }
                        }
                    }else{
                        if($inventory_movement['inventory_movement_entry_out_type_id'] >= 174 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 179){//Entry
                            $stock_result->set_stock += $detail['units'];
                        }elseif($inventory_movement['inventory_movement_entry_out_type_id'] >= 180 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 186){//Out
                            if($stock_result->set_stock - $detail['units'] >= 0){
                                $stock_result->set_stock -= $detail['units'];
                            }else{
                                $overflowUnits = true;
                                $overflowProduct = $detail['product']['display_name'];
                                break;
                            }
                        }
                    }
                    $stock_result->save();
                }else{
                    $stock = new \App\Models\StocksProducts;
                    $stock->warehouse_id = $inventory_movement['warehouse_id'];
                    $stock->product_id = $detail['product_id'];
                    $stock->expiration_date = $detail['expiration_date'];
                    $stock->batch = $detail['batch'];
                    $stock->location = $detail['location'];
                    $stock->set_stock = 0;
                    $stock->set_cost = 0;
                    $stock->fraction_cost = 0;
                    $stock->fraction_stock = 0;
                    if(isset($detail['purchase_price']) == true){
                        $stock->set_cost = $detail['purchase_price'];
                        $stock->fraction_cost = $stock->set_cost/$detail['product']['units'];
                    }
                    
                    if($detail['fraction'] == "true"){
                        if($inventory_movement['inventory_movement_entry_out_type_id'] >= 174 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 179){//Entry
                            $stock->fraction_stock = $detail['units'];
                        }elseif($inventory_movement['inventory_movement_entry_out_type_id'] >= 180 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 186){//Out
                            $overflowUnits = true;
                            $overflowProduct = $detail['product']['display_name'];
                            break;
                        }
                    }else{
                        if($inventory_movement['inventory_movement_entry_out_type_id'] >= 174 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 179){//Entry
                            $stock->set_stock = $detail['units'];
                        }elseif($inventory_movement['inventory_movement_entry_out_type_id'] >= 180 and $inventory_movement['inventory_movement_entry_out_type_id'] <= 186){//Out
                            $overflowUnits = true;
                            $overflowProduct = $detail['product']['display_name'];
                            break;
                        }       
                    }
                    $stock->save();
                }
            }
            if($overflowUnits){
                DB::rollback();
                return response()->json([ 
                    "store" => false, 
                    "message" => "No hay suficientes unidades de ".$overflowProduct." para procesar una salida"
                ], 505);
            }else{
                DB::commit();
                return response()->json([ 
                    "store" => true, 
                    "inventory_movement_id" => $result->id,
                    "message" => "Registro creado correctamente" 
                ], 200);
            }
            
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
            $data = \App\Models\InventoryMovement::with('counterpart_transfer')->find($id);        
            return response()->json(['status'=>'success', "message"=>'', "data" => $data ], 200);
       } catch (Exception $e) {
           return 'Error: ' . $e->getMessage();
       }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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

            $inventory_movement = json_decode($request->data,true);
            $inventory_movement_details = json_decode($request->data_details,true);

            \App\Models\InventoryMovement::findOrFail($id)->update($inventory_movement);

            foreach ($inventory_movement_details as $i)
            {
                \App\Models\InventoryMovementDetail::where('inventory_movements_id', $id)->update($i);
            } 

            DB::commit();
            // $this->CreateLog($request->user()->id, 'inventory movement', 2,'');
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
        //
    }
}
