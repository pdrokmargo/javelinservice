<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryAuditDetail extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_audit_details';
    public $incrementing = false;
    protected $fillable = [
        'inventory_audit_id',
        'stock_product_id', 
        'physical_set_stock',
        'physical_fraction_stock',
        'system_set_stock',
        'system_fraction_stock',
    ];

    //jesus
}
