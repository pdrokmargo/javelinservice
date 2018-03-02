<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Geolocation extends Model
{
    public $timestamps = false;
    protected $table = 'geolocations';
    public $with = array('department', 'city');

    public function country()
    {
    	return $this->belongsTo('App\Models\CollectionsValues', 'contry_id'); 
    }

    public function department()
    {
    	return $this->belongsTo('App\Models\CollectionsValues', 'department_id'); 
    }

    public function city()
    {
    	return $this->belongsTo('App\Models\CollectionsValues', 'city_id'); 
    }
}
