<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryAudit extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_audit';
    public $incrementing = false;
    protected $fillable = [
        'inventory_adjustment_type_id',
        'warehouse_id',
        'user_id',
        'description',
        'blinded_qty',
        'date',
        'audit_state_id'
    ];
}
