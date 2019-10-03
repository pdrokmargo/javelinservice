<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduledDelivery extends Model
{
    use \App\Uuids;
    protected $table = 'scheduled_deliveries';
    public $incrementing = false;
    public $timestamps = false;
    protected $with = array('scheduled_delivery_type', 'product');
    protected $fillable = [
        'consecutive',
            'affiliate_id',
            'product_id',
            'units',
            'delivery_source_id',
            'delivery_fulfillment_id',
            'type_id',
            'date',
            'notes',
            'status'
    ];

    public function scheduled_delivery_type()
    {
         return $this->belongsTo('App\Models\CollectionsValues', 'type_id'); 
    }
    public function product()
    {
         return $this->belongsTo('App\Models\Product', 'product_id'); 
    }
}
