<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'customers';
    public $with = array('stakeholderInfo');
    protected $casts = ['purchases_contact'=>'json', 'institutional_sale_contract'=>'json', 'controlled_resolution'=>'json', 'monopoly_resolution'=>'json', 'debt_contact'=>'json', 'shipping_points'=>'json'];
    public $incrementing = false;  
    protected $fillable = [
        'id',
        'stakeholder_info_id',
        'customer_class_id',
        'sales_representative_id',
        'purchases_contact',
        'global_discount',
        'debt_type_id',
        'payment_condition_id',
        'discount_early_payment_id',
        'days_early_payment',
        'credit_limit',
        'credit_limit_blocking',
        'late_payment_blocking',
        'days_grace',
        'institutional_sale_contract',
        'controlled_resolution',
        'monopoly_resolution',
        'debt_contact',
        'shipping_points'
    ];

    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','stakeholder_info_id');
    }

}
