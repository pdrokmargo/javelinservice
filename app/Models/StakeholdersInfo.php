<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StakeholdersInfo extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'stakeholders_info';
    protected $appends = array('fullname');
    public $incrementing = false;
    protected $fillable = [ 
        'id',
        'firstname',
        'middlename',
        'lastname',
        'second_surname',
        'businessname',
        'legalname',
        'document_type_id',
        'document_number',
        'geolocation_id',
        'person_type_id',
        'domiciled',
        'rut',
        'address',
        'phone_number',
        'email',
        'status'
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

    // public function getComercialStakeholdersInfoAttribute()
    // {
    //     return \App\Models\ComercialStakeholdersInfo::where('stakeholder_info_id', $this->id)->first(); 
    // }

    // public function getCustomerAttribute()
    // {
    //     return \App\Models\Customers::where('stakeholder_info_id', $this->id)->first(); 
    // }

    // public function getSupplierAttribute()
    // {
    //     return \App\Models\Supplier::where('stakeholder_info_id', $this->id)->first(); 
    // }

    // public function getEmployeeAttribute()
    // {
    //     return \App\Models\Employee::where('stakeholder_info_id', $this->id)->first(); 
    // }

    // public function getSalesRepresentativeAttribute()
    // {
    //     return \App\Models\SalesRepresentatives::where('stakeholder_info_id', $this->id)->first(); 
    // }

    // public function getIsCustomerAttribute()
    // {
    //     return $this->customer ? true : false;
    // }

    // public function getIsSupplierAttribute()
    // {
    //     return $this->supplier ? true : false;
    // }

    // public function getIsSellerAttribute()
    // {
    //     return $this->sales_representative ? true : false;
    // }

    // public function getIsEmployeeAttribute()
    // {
    //     return $this->employee ? true : false;
    // }

   
}
