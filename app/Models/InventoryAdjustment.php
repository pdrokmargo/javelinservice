<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryAdjustment extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_adjustments';
    public $incrementing = false;
    protected $with =array('stock', 'inventory_adjustment_type');
    protected $fillable = [
        'inventory_adjustment_type_id',
        'stock_product_id',
        'current_adjustment_value',
        'new_adjustment_value',
        'adjustment_date'
    ];

    public function stock()
    {
         return $this->belongsTo('App\Models\StocksProducts', 'stock_product_id'); 
    }
    public function inventory_adjustment_type()
    {
         return $this->belongsTo('App\Models\CollectionsValues', 'inventory_adjustment_type_id'); 
    }
}
