<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'customers';
    public $with = array('stakeholderInfo');
    protected $casts = [
        'purchases_contact'=>'json', 
        'institutional_sale_contract'=>'json', 
        'controlled_resolution'=>'json', 
        'monopoly_resolution'=>'json', 
        'debt_contact'=>'json', 
        'shipping_points'=>'json'
    ];
    public $incrementing = false;  
    protected $fillable = [
        'stakeholder_info_id',
        'customer_class_id',
        'debt_type_id',
        'credit_limit',
        'sales_representative_id',
        'global_discount',
        'payment_condition_id',
        'credit_limit_blocking',
        'days_early_payment',
        'days_grace',
        'purchases_contact',
        'debt_contact',
        'shipping_points',
        'institutional_sale_contract',
        'controlled_resolution',
        'monopoly_resolution',
        'late_payment_blocking',
    ];

    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','stakeholder_info_id');
    }

}
