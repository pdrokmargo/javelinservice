<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	use \App\Uuids;
    //public $timestamps = false;
    protected $table = 'products';    
    public $incrementing = false; 
    protected $fillable = [
		'id',
		'code',
		'name',
		'sku',
		'description',
		'comercial_name',
		'units',
		'lifetime',
		'delivery_fraction',
		'barcode',
		'cums',
		'cost',
		'content_unit_id',
		'batch_control',
		'serials_control',
		'institutional_use',
		'comercial',
		'manufacturer_id',
		'supplier_id',
		'importer_id',
		'sanitary_registration_holder_id',
		'sanitary_registration',
		'validity_sanitary_registration',
		'product_profile_id',
		'security_time',
		'covered_period',
		'replacment_time',
		'state',
		'pharmaceutical_drug',
		'delete'
	];

	protected $casts = [
        'pharmaceutical_drug' => 'array',
	];

	// protected $with = array('getPharmaceuticalDrugAttribute');

	public function getPharmaceuticalDrugAttribute(){
		// $drugs = \App\Models\PharmaceuticalDrug::find($this->attributes['pharmaceutical_drug'][0]['id']);
		return $this->attributes['pharmaceutical_drug'][0];
	}
	
	public function sanitary_registration_holder()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'sanitary_registration_holder_id'); 
	}
	
	public function supplier()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'supplier_id'); 
	}
	
	public function manufacturer()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'manufacturer_id'); 
	}
	
	public function importer()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'importer_id'); 
    }
}
