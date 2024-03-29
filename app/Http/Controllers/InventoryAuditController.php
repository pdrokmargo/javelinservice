<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\InventoryAudit;
use \App\Models\InventoryAuditDetail;
use DB;

class InventoryAuditController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $search     = isset($request->search) ? '%'.strtolower($request->search).'%' : '';
            $ordername  = isset($request->ordername) ? $request->ordername : 'date';
            $ordertype  = isset($request->ordertype) ? $request->ordertype : 'DESC';
            $page       = isset($request->page) ? $request->page : 1;
            
            $data = InventoryAudit::orderBy($ordername, $ordertype)->paginate(15); 

            return response()->json([
                'status'=>'success',
                "data" => $data 
            ], 200);

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
        DB::beginTransaction(); 
        try {
            $data = json_decode($request->data);
            $InventoryAudit = [
                'warehouse_id'      => $data->warehouse_id,
                'user_id'           => $data->user_id,
                'description'       => '',
                'blinded_qty'       => $data->blinded_qty,
                'date'              => $data->date,
                'audit_state_id'    => $data->audit_state_id
            ];

            $inventory_audit_id = InventoryAudit::create($InventoryAudit)->id;


            foreach ($data->details as $key => $value) {
                $InventoryAuditDetail = [
                    'inventory_audit_id'        => $inventory_audit_id,
                    'stock_product_id'          => $value->id,
                    'physical_set_stock'        => 0,
                    'physical_fraction_stock'   => 0,
                    'system_set_stock'          => $value->set_stock,
                    'system_fraction_stock'     => $value->fraction_stock
                ];
                InventoryAuditDetail::create($InventoryAuditDetail);
            }

            DB::commit();
            return response()->json([ 
                "store" => true, 
                "message" => "Registro almacenado",
                "id"    => $inventory_audit_id
            ], 200);

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
        $InventoryAudit = InventoryAudit::with(['details'])->find($id);
	    return response()->json([
            "status"    => "success", 
            "data"      => $InventoryAudit 
        ], 200);
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
            $InventoryAudit = InventoryAudit::find($id);
            if($InventoryAudit) {
                $data = json_decode($request->data);
                $_InventoryAudit = [
                    'inventory_adjustment_type_id' => '',
                    'warehouse_id'      => $data->warehouse_id,
                    'user_id'           => $data->user_id,
                    'description'       => '',
                    'blinded_qty'       => $data->blinded_qty,
                    'date'              => $data->date,
                    'audit_state_id'    => $data->audit_state_id
                ];
                $InventoryAudit->fill($_InventoryAudit);
                $InventoryAudit->save();
                $InventoryAuditDetail = InventoryAuditDetail::where('inventory_audit_id',$id)->delete();
                foreach ($data->details as $key => $value) {
                    $InventoryAuditDetail = [
                        'inventory_audit_id'        => $id,
                        'stock_product_id'          => $value->id,
                        'physical_set_stock'        => isset($value->physical_set_stock) ? $value->physical_set_stock : 0,
                        'physical_fraction_stock'   => isset($value->physical_fraction_stock) ? $value->physical_fraction_stock : 0,
                        'system_set_stock'          => $value->set_stock,
                        'system_fraction_stock'     => $value->fraction_stock
                    ];
                    InventoryAuditDetail::create($InventoryAuditDetail);
                }

                DB::commit();
                return response()->json([
                    "update" => true,
                    "message" => "Registro actualizado correctamente" 
                ], 200); 
            }

            return response()->json([
                "update" => false, 
                "message" => "Registro no encontrado" 
            ], 200);

        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                "update" => false, 
                "message" => "Error al intentar actualizar el registro" 
            ], 400);
        } 
    }

    public function cancel(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $InventoryAudit = InventoryAudit::find($id);
            if($InventoryAudit) {

                $InventoryAudit->audit_state_id = 191;
                $InventoryAudit->save();

                DB::commit();

                return response()->json([
                    "cancel" => true, 
                    "message" => "Auditoria cancelada" ,
                ], 200);
            }
            return response()->json([
                "cancel" => false, 
                "message" => "Registro no encontrado" 
            ], 200);

        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                "update" => false, 
                "message" => "Error al intentar cancelar la auditoria"
            ], 400);
        } 
    }

    public function finalize(Request $request, $id, $audit_state_id)
    {
        DB::beginTransaction();
        try {
            $InventoryAudit = InventoryAudit::find($id);
            if($InventoryAudit) {
                $data = json_decode($request->data);
                $_InventoryAudit = [
                    'description'       => isset($data->description) ? $data->description : '',
                    'audit_state_id'    => $audit_state_id
                ];
                $InventoryAudit->fill($_InventoryAudit);
                $InventoryAudit->save();

                /* Aquí debes llamar el detalle para luego insertar usando la línea de abajo */
                /* 175 Entrada por ajuste, 181 salida por ajuste    */
                // $inventory_audit_details = \App\Models\InventoryAuditDetail::where('inventory_audit_id', $id);
                // foreach($inventory_audit_details as $id){

                // }
                // app(\App\Http\Controllers\InventoryMovementsController::class)->getPrintReport();

                DB::commit();


                return response()->json([
                    "finalize" => true,
                    "message" => "Auditoria finalizada correctamente" 
                ], 200); 
            }

            return response()->json([
                "finalize" => false, 
                "message" => "Registro no encontrado" 
            ], 200);

        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                "finalize" => false, 
                "message" => "Error al intentar finalizar la auditoria" 
            ], 400);
        } 
    }

    public function auditar(Request $request, $id) {
        DB::beginTransaction();
        try {
            $InventoryAudit = InventoryAudit::find($id);
            if($InventoryAudit) {
                $data = json_decode($request->data);
                $_InventoryAudit = [
                    'audit_state_id'    => $data->audit_state_id
                ];
                $InventoryAudit->fill($_InventoryAudit);
                $InventoryAudit->save();
                $InventoryAuditDetail = InventoryAuditDetail::where('inventory_audit_id',$id)->delete();
                foreach ($data->details as $key => $value) {
                    $InventoryAuditDetail = [
                        'inventory_audit_id'        => $id,
                        'stock_product_id'          => $value->id,
                        'physical_set_stock'        => isset($value->physical_set_stock) ? $value->physical_set_stock : 0,
                        'physical_fraction_stock'   => isset($value->physical_fraction_stock) ? $value->physical_fraction_stock : 0,
                        'system_set_stock'          => $value->set_stock,
                        'system_fraction_stock'     => $value->fraction_stock
                    ];
                    InventoryAuditDetail::create($InventoryAuditDetail);
                }

                DB::commit();
                return response()->json([
                    "auditada" => true,
                    "message" => "Auditoria completada" 
                ], 200); 
            }

            return response()->json([
                "auditada" => false, 
                "message" => "Registro no encontrado" 
            ], 200);

        } catch (Exception $e) {
            DB::rollback();
            return response()->json([
                "auditada" => false, 
                "message" => "Error al intentar auditar" 
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
        
    }
}
