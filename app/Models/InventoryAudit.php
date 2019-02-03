<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryAudit extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_audit';
    protected $with =array('warehouse', 'user', 'status');
    public $incrementing = false;
    protected $fillable = [
        'warehouse_id',
        'user_id',
        'description',
        'blinded_qty',
        'date',
        'audit_state_id'
    ];

    public function warehouse() {
        return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }

    public function user() {
        return $this->belongsTo('App\Models\User', 'user_id'); 
    }

    public function status() {
        return $this->belongsTo('App\Models\CollectionsValues', 'audit_state_id'); 
    }
    
    public function details() {
        return $this->hasMany('App\Models\inventory_audit_details', 'inventory_audit_id','id'); 
    }
}
