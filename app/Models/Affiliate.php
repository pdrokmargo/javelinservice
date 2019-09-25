<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Affiliate extends Model
{
    use \App\Uuids;

    public $incrementing = false;
    public $timestamps = false;
    protected $table = 'affiliates';
    protected $fillable = [
        'document_type_id',
        'document_number',
        'delivery_contract_id',
        'ips_network_id',
        //'contracts_payment_method_id',
        'firstname',
        'middlename',
        'lastname1',
        'lastname2',
        'gender_id',
        'affiliate_type',
        'birthday',
        'address',
        'phone_number',
        'mobile_number',
        'attendant_name',
        'attendant_phone_number',
        'attendant_mobile_number',
        'geolocation',
        'affiliate_condition_id',
        'public_health_condition_id',
        'affiliate_level',
        'state',
        'delete'
    ];

    public function getDisplayNameAttribute()
	{
        $fullname = $this->firstname;
        if($this->middlename != '' || $this->middlename != null){$fullname .= $this->middlename;}
        if($this->lastname1 != '' || $this->lastname1 != null){$fullname .= $this->lastname1;}
        if($this->lastname2 != '' || $this->lastname2 != null){$fullname .= $this->lastname2;}
		return $fullname;
	}
}
