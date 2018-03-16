<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActiveIngredient extends Model
{
    use \App\Uuids;
    
    public $timestamps = false;
    protected $table = 'active_ingredients';    
    public $incrementing = false; 
    protected $fillable = [
      'id',
      'name'
    ];

}
