<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use \App\Uuids;
    protected $table = 'employees';
    public $timestamps = false;
    public $incrementing = false;
    protected $fillable = [
    	'id',
    	'stakeholder_info_id'
   	];
    // protected $hidden = [
    //     'stakeholder_info_id'
    // ];
   	
}
