<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActiveIngredientsPharmaceuticalDrugs extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'active_ingredients_pharmaceutical_drugs';    
    public $incrementing = false;
    protected $appends = array('measurement_unit','active_ingredient');
    protected $fillable = [
        'id',
        'active_ingredient_id',
        'pharmaceutical_drug_id',
        'measurement_unit_id',
        'concentration'
    ];

    public function getMeasurementUnitAttribute()
    {
        return \App\Models\CollectionsValues::find($this->measurement_unit_id);
    }

    public function getActiveIngredientAttribute()
    {
        return \App\Models\ActiveIngredient::find($this->active_ingredient_id);
    }
}
