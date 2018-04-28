<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PharmaceuticalDrug extends Model
{
	use \App\Uuids;

    public $timestamps = false;
    protected $table = 'pharmaceutical_drugs'; 
	public $incrementing = false;
	protected $appends = ['concentration'];
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
		'state',
		'delete'
    ];
	protected $hidden = [];


	public function dosage_form()
	{
		return $this->belongsTo('App\Models\CollectionsValues', 'dosage_form_id'); 
	}
	
	

    public function getConcentrationAttribute()
    {
		$concentration = 0;
		$arrConcentration = \App\Models\ActiveIngredientsPharmaceuticalDrugs::where('pharmaceutical_drug_id',$this->id)->get();
		if($arrConcentration){
			
			$type = \App\Models\CollectionsValues::where('collection_id', $arrConcentration[0]["measurement_unit_id"])->first();
			$type=$type->value;

			foreach ($arrConcentration as $c) {
				$_c = 0;
				$concentration = $concentration + (float)$c->concentration;
			}
		}else{
			$arrConcentration = [];
		}
        return $concentration.' '.$arrConcentration[0]["measurement_unit_id"];
    }

}
