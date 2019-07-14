<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RemissionGoods extends Model
{
    use \App\Uuids;
    
    protected $table = 'remissions_goods';
    public $timestamps = false;
    public $with = array('stakeholderInfo', 'customerInfo', 'document', 'warehouse');
    public $incrementing = false;
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [
        'consecutive_id',
        'consecutive',
        'customer_id',
        'created_at',
        'inventory_movement_out_id',
        'warehouse_id',
        'products',
        'notes',
        'status'
    ];
    protected $hidden = [];
   
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','customer_id');
    }

    public function customerInfo() {
        return $this->hasOne('App\Models\Customers', 'stakeholder_info_id','customer_id');
    }
    public function document()
    {
         return $this->belongsTo('App\Models\Consecutive', 'consecutive_id'); 
    }

    public function warehouse()
    {
         return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
}
