<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PharmaceuticalDrugProduct extends Model
{
    use \App\Uuids;
    protected $table = 'pharmaceutical_drugs_products';   
    // protected $with = array('pharmaceuticaldrug'); 
    public $incrementing = false; 
    protected $fillable = [
		'id',
        'product_id',
        'pharmaceutical_drug_id',
        'name',
        'delivery_fraction',
        'invima_file_record',
        'invima_file_record_consecutive',
        'content_unit_id',
        'sanitary_registration_holder_id',
        'sanitary_registration',
        'validity_sanitary_registration'
    ];
    
    // public function pharmaceuticaldrug()
	// {
	// 	 return $this->belongsTo('App\Models\PharmaceuticalDrug', 'pharmaceutical_drug_id'); 
	// }
	
}
