<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryContract extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_contracts';
    public $incrementing = false;
    protected $casts = [ 
        'event' => 'json', 
        'capita' => 'json', 
        'pgp' => 'json', 
        'ips' => 'json', 
        'conditional_alerts' => 'json' 
    ];
    protected $fillable = [
        'customer_id',
        'name',
        'description',
        'population_type_id',
        'fee_collecting',
        'event',
        'capita',
        'pgp',
        'ips',
        'conditional_alerts',
        'state'
    ];
    protected $hidden = [];

}
