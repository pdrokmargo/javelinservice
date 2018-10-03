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
      'warehouse_id',
      'product_id',
      'expiration_date',
      'batch',
      'set_stock',
      'fraction_stock'
    ];

    public function products() {
      return $this->hasOne('App\Models\Product', 'product_id');
  }

}
