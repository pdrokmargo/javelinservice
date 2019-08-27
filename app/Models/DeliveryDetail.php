<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryDetail extends Model
{
    use \App\Uuids;
    protected $table = 'deliveries_details';
    public $incrementing = false;
    protected $fillable = [
        'delivery_id',
            'product_id',
            'requested_units',
            'delivered_units',
            'batch',
            'expiration_date',
            'synced'
    ];

    public function product()
    {
         return $this->belongsTo('App\Models\Product', 'product_id'); 
    }
}
