<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryContract extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_contracts';
    public $incrementing = false;
    protected $fillable = [
        'name',
        'population_type_id',
        'description',
        'contract_type_id',
        'value',
        'validity',
        'level_care_id',
        'state',
        
        //These fields have been deleted.
        /*'pharmadrug_monopoly',
        'pharmadrug_control',
        'cooled_products',*/
        'event'
    ];
    protected $hidden = [];

}
