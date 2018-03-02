<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OperationsCentre extends Model
{
    public $timestamps = false;
    protected $table = 'operationscentres';
    public $with = array('operationscentregroup', 'geolocation', 'company');
    protected $fillable = [
    						'name',
    						'code',	
							'description',
                            'operationscentregroup_id',
							'address',
							'phone_number',
							'geolocation_id',
							'company_id',
							'state'];


    public function operationscentregroup()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'operationscentregroup_id'); 
	}
    public function geolocation()
	{
		 return $this->belongsTo('App\Models\Geolocation', 'geolocation_id'); 
	}
    public function company()
	{
		 return $this->belongsTo('App\Models\Company', 'company_id'); 
	}
}
