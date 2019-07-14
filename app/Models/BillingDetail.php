<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillingDetail extends Model
{
    use \App\Uuids;
    
    protected $table = 'billing_details';
    public $with = array('product');
    protected $appends = ['subtotal'];
    public $incrementing = false;
    protected $fillable = [
        'billing_id',
        'product_id',
        'quantity',
        'sales_price',
        'discount',
        'tax'
    ];
    protected $hidden = [];
    public function product() {
        return $this->hasOne('App\Models\Product', 'id','product_id');
    }
    public function getSubtotalAttribute()
    {
        $product = \App\Models\Product::where('id', $this->product_id)->first(); 
        return $product->averageunitcost*$this->units;
    }
}
