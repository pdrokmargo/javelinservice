<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContractPoint extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $casts = [
        'config' => 'json'
    ];
    protected $table = 'contract_points';
    protected $fillable = [
        'delivery_contracts_id',
        'delivery_points_id',
        'config'
    ];
    protected $hidden = [];

    

    public function delivery_contracts()
    {
        return $this->belongsTo('App\Models\DeliveryContract', 'delivery_contracts_id', 'id');
    }

    public function delivery_points()
    {
        return $this->belongsTo('App\Models\DeliveryPoint', 'delivery_points_id','id');
    }
}
