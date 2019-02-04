<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StakeholdersInfo extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'stakeholders_info';
    protected $appends = ['fullname'];
    public $incrementing = false;
    protected $fillable = [ 
        'id',
        'person_type_id',
        'rut',
        'document_type_id',
        'document_number',
        'firstname',
        'middlename',
        'lastname',
        'legalname',
        'geolocation_id',
        'second_surname',
        'businessname',
        'address',
        'phone_number',
        'email',
        'status',
        'delete'
    ];
    protected $hidden = [];

    public function getFullNameAttribute() {
        if($this->person_type_id==38){
            return $this->firstname . ($this->middlename!=null && $this->middlename!='' ? ' ' . $this->middlename : '') . ' ' . $this->lastname;
        }else{
            return $this->legalname;
        }
    }

    public function geolocation()
    {
         return $this->belongsTo('App\Models\Geolocation', 'geolocation_id'); 
    }  
}
