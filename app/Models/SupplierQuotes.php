<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierQuotes extends Model
{
    use \App\Uuids;
    
    protected $table = 'suppliers_quotes';
    public $timestamps = false;
    public $with = array('stakeholderInfo');
    public $incrementing = false;
    protected $casts = [
        'products'=>'json'
    ];
    protected $fillable = [
        'supplier_id',
        'created_at',
        'expire_at',
        'payment_condition_id',
        'products',
        'notes',
        'status'
    ];
    protected $hidden = [];
   
    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','supplier_id');
    }
}
