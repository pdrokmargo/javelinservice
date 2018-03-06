<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use \App\Uuids;
    protected $table = 'warehouses';
    public $timestamps = false;
    public $incrementing = false;
    public $with = array('geolocation');
    protected $fillable = [
        'warehouse_type_id',
        'name',
        'description',
        'state',
        'geolocation_id',
        '$company_id'
    ];
    protected $hidden = [];

    public function geolocation()
    {
         return $this->belongsTo('App\Models\Geolocation', 'geolocation_id'); 
    }
}
