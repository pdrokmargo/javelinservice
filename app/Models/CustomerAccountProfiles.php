<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class CustomerAccountProfiles extends Model
{
    public $timestamps = false;
    protected $table = 'customers_account_profiles';
    public $json;    
    public $incrementing = false;
    // protected $jsonColumns = ['branch_offices'];
    protected $fillable = [
		'id',
		'name',
		'pay_account_id',
		'advances_account_id',
		'order_account_id',
		'costcentre_account_id',
		'concept_account_id',
		'state'
    ];
}
