<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StocksProducts extends Model
{
    use \App\Uuids;
    
    public $timestamps = false;
    protected $table = 'stocks_products';    
    public $incrementing = false; 
    protected $fillable = [
      'id',
      'warehouse_id',
      'product_id',
      'expiration_date',
      'batch',
      'location',
      'set_stock',
      'fraction_stock'
    ];
    protected $with = array('product', 'warehouse');

    public function product()
    {
         return $this->belongsTo('App\Models\Product', 'product_id'); 
    }
    public function warehouse()
    {
         return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }

    public function products() {
      return $this->hasOne('App\Models\Product', 'id','product_id');
  }

}
