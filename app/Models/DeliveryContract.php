<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryContract extends Model
{
    public $timestamps = false;
    protected $table = 'delivery_contracts';
    protected $fillable = [
        'contract_type_id',
        'value',
        'validity',
        'level_care_id',
        'state'
    ];
    protected $hidden = [];
}
