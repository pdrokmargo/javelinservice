<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    protected $table = 'configurations'; 
    public $timestamps = false;
    protected $casts = [
        'value' => 'json',
    ];
    protected $fillable = [
        'id',
        'code',
        'display',
        'value',
        'company_id'
    ];
    protected $hidden = [];
}
