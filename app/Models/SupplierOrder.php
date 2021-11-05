<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class SupplierOrder extends Model
{
    use \App\Uuids;
    
    protected $table = 'suppliers_orders';
    public $timestamps = false;
    public $with = array('warehouse', 'stakeholderInfo', 'supplierInfo', 'buyer', 'document');
    public $incrementing = false;
    public $appends = ['remaining'];
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [
        'consecutive_id',
        'consecutive', 
        'supplier_id',       
        'created_at',
        'expire_at',
        'fullfilled',        
        'estimate_delivery',
        'buyer_employee_id',
        'operationcentre_id',
        'warehouse_id',
        'payment_condition_id',
        'products',
        'notes',
        'status'
    ];
    protected $hidden = [];
    public function getRemainingAttribute()
    {
        $details_received = \App\Models\InventoryMovementDetail::with(['inventory_movement' => function ($query) {
            $query->where('document_fullfilled_id', $this->id);
        }]);
        Log::debug($details_received);
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
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','supplier_id');
    }

    public function warehouse()
	{
		 return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
    public function supplierInfo() {
        return $this->hasOne('App\Models\Supplier', 'stakeholder_info_id','supplier_id');
    }
    public function buyer()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'buyer_employee_id'); 
    }
    public function document()
    {
         return $this->belongsTo('App\Models\Consecutive', 'consecutive_id'); 
    }
}
