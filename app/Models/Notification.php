<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    public $timestamps = false;
    protected $table = 'notifications'; 
    protected $fillable = ['dirty','updated_at'];
    protected $hidden = [];
}
