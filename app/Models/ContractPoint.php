<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContractPoint extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'contract_points';
    protected $fillable = [
        'delivery_contracts_id',
        'delivery_points_id',
        'config'
    ];
    protected $hidden = [];

    protected $casts = [
        'config' => 'json'
    ];

    public function delivery_ontracts()
    {
        return $this->hasMany('App\Models\DeliveryContract');
    }

    public function delivery_points()
    {
        return $this->belongsTo('App\Models\DeliveryPoint', 'delivery_points_id','id');
    }
}
