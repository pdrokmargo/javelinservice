<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	use \App\Uuids;
    public $timestamps = false;
    protected $table = 'products';    
    public $incrementing = false; 
    protected $casts = ['pharmaceutical_drugs'=>'json'];
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
		'cum_code',
		'regulated_price',
		'cost',
		'content_unit_id',
		'batch_control',
		'serials_control',
		'institutional_use',
		'comercial',
		'is_regulated',
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
		'pharmaceutical_drug_id'
        ];
}
