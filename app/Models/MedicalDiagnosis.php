<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class MedicalDiagnosis extends Model
{
    use \App\Uuids;

    public $timestamps = false;
    protected $table = 'medical_diagnosis'; 
	public $incrementing = false;
}
