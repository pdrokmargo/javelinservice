<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use \App\Uuids;
    protected $table = 'suppliers';
    public $timestamps = false;
    public $with = array('stakeholderInfo');
    public $incrementing = false;
    protected $casts = [
        'bank_accounts'=>'json', 
        'sales_contact'=>'json'
    ];
    protected $fillable = [
        'stakeholder_info_id',

        'supplier_class_id',
        'credit_limit',
        'global_discount',
        'payment_condition_id',
        'days_early_payment',
        'days_grace',
        'payment_method_id',
        'purchase_order',
        'bank_accounts',
        'sales_contact'
    ];
    protected $hidden = [];
   
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','stakeholder_info_id');
    }
}
