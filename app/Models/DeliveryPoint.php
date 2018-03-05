<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryPoint extends Model
{
    public $timestamps = false;
    protected $table = 'delivery_points';
    protected $fillable = [
        'warehouse_id',
        'name',
        'description',
        'delivery_contract_id',
        'state'
    ];
    protected $hidden = [];
    
}
