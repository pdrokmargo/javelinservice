<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerQuote extends Model
{
    use \App\Uuids;
    
    protected $table = 'customers_quotes';
    public $timestamps = false;
    public $with = array('stakeholderInfo', 'customerInfo');
    public $incrementing = false;
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [
        'customer_id',
        'created_at',
        'expire_at',
        'payment_condition_id',
        'products',
        'notes',
        'status'
    ];
    protected $hidden = [];
   
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','customer_id');
    }

    public function customerInfo() {
        return $this->hasOne('App\Models\Customers', 'stakeholder_info_id','customer_id');
    }
}
