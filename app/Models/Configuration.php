<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    protected $table = 'configurations'; 
    public $timestamps = false;
    // protected $casts = [
    //     'options' => 'json',
    // ];
    protected $fillable = [
        'value',
        'company_id'
    ];
    protected $casts = [
        'value' => 'array'
    ];
    protected $hidden = [];
}
