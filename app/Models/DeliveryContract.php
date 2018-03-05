<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryContract extends Model
{
    public $timestamps = false;
    protected $table = 'delivery_contracts';
    protected $fillable = [
        'name',
        'population_type_id',
        'description',
        'contract_type_id',
        'value',
        'validity',
        'level_care_id',
        'state',
        'pharmadrug_monopoly',
        'pharmadrug_control',
        'cooled_products',
        'event'
    ];
    protected $hidden = [];

    public function DeliveryPoints() {
        return $this->hasOne('App\Models\DeliveryPoint', 'id','delivery_contract_id');
    }
}
