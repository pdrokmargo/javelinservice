<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierOrder extends Model
{
    use \App\Uuids;
    
    protected $table = 'suppliers_orders';
    public $timestamps = false;
    public $with = array('stakeholderInfo');
    public $incrementing = false;
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [        
        'created_at',
        'expire_at',
        'estimate_delivery',
        'buyer_employee_id',
        'supplier_id',
        'operationcentre_id',
        'warehouse_id',
        'payment_condition_id',
        'products',
        'notes',
        'status'
    ];
    protected $hidden = [];
   
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','supplier_id');
    }

    public function warehouses()
	{
		 return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
}
