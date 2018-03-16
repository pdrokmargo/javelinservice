<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActiveIngredientsPharmaceuticalDrugs extends Model
{
    public $timestamps = false;
    protected $table = 'active_ingredients_pharmaceutical_drugs';    
    public $incrementing = false; 
    protected $fillable = [
        'active_ingredient_id',
        'pharmaceutical_drug_id',
        'measurement_unit_id',
        'concentration'
    ];
}
