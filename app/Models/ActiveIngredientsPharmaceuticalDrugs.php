<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActiveIngredientsPharmaceuticalDrugs extends Model
{
    public $timestamps = false;
    protected $table = 'active_ingredients_pharmaceutical_drugs';    
    public $incrementing = false;
    protected $appends = array('measurement_unit','pharmaceutical_drug');
    protected $fillable = [
        'active_ingredient_id',
        'pharmaceutical_drug_id',
        'measurement_unit_id',
        'concentration'
    ];

    public function getMeasurementUnitAttribute()
    {
        return \App\Models\CollectionsValues::find($this->measurement_unit_id);
    }

    public function getPharmaceuticalDrugAttribute()
    {
        return \App\Models\PharmaceuticalDrug::find($this->pharmaceutical_drug_id);
    }
}
