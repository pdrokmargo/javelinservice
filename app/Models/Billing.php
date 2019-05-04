<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use \App\Uuids;
    
    protected $table = 'billing';
    public $timestamps = false;
    public $with = array('stakeholderInfo', 'customerInfo', 'document');
    public $incrementing = false;
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [
        'consecutive_id',
        'consecutive',
        'customer_id',
        'created_at',
        'expire_at',
        'customer_id',
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
    public function document()
    {
         return $this->belongsTo('App\Models\Consecutive', 'consecutive_id'); 
    }
}
