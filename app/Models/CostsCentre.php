<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CostsCentre extends Model
{
    public $timestamps = false;
    protected $table = 'costscentres';
    public $with = array('costcentretype','costcentregroup');
    protected $fillable = [	'name',
							'code',
							'description',
							'costcentretype_id',
							'root',
							'operation_cost_centre_id',
							'costcentregroup_id',
			   				'company_id',	
							'state'];

    public function costcentretype()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'costcentretype_id'); 
	}
 
	public function costcentregroup()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'costcentregroup_id'); 
	}

}
