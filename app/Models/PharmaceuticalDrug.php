<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PharmaceuticalDrug extends Model
{
	use \App\Uuids;
    public $timestamps = false;
    protected $table = 'pharmaceutical_drugs'; 
    public $with = array('dosage_form');
    public $incrementing = false;
    protected $fillable = [
    		'id',
			'name',
			'code',
			'atc',
			'dosage_form_id',
			'routes_administration_id',
			'is_controlled',
			'is_monopoly',
			'is_pos',
			'is_regulated',
			'regulated_price',
			'storage_condition_id',
			'state'
    ];
    protected $hidden = [];

   	public function dosage_form()
   	{
   		return $this->belongsTo('App\Models\CollectionsValues', 'dosage_form_id'); 
   	}
}
