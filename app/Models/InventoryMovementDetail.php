<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryMovementDetail extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_movements_details';
    protected $with =array('product', 'inventory_movement');
    protected $appends = ['subtotal'];
    public $incrementing = false;
    protected $fillable = [
        'inventory_movements_id',
            'product_id',
            'units',
            'fraction',
            'batch',
            'location',
            'expiration_date',
            'purchase_price',
    ];
    public function product()
    {
         return $this->belongsTo('App\Models\Product', 'product_id'); 
    }
    public function inventory_movement()
    {
         return $this->belongsTo('App\Models\InventoryMovement', 'inventory_movements_id'); 
    }
    public function getSubtotalAttribute()
    {
        $product = \App\Models\Product::where('id', $this->product_id)->first(); 
        return $product->averageunitcost*$this->units;
    }


}
