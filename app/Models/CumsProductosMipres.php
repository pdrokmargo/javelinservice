<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CumsProductosMipres extends Model
{
    public $timestamps = false;
    protected $table = 'cums_productos_mipres';
    public $incrementing = false;  
    protected $fillable = [
        'cums'
    ];
}
