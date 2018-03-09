<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DeliveryPoint extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_points';
    protected $casts = ['delivery_contracts'=>'json'];
    public $with = array('warehouses', 'delivery_points_groups');
    public $incrementing = false;
    protected $fillable = [
        'warehouse_id',
        'name',
        'description',
        'state',
        'installed',
        'delivery_point_group_id',
        'delivery_contracts',
        'users'
    ];
    protected $hidden = [];
    protected $appends = array('assigned_contracts', 'assigned_users');
    public function getAssignedContractsAttribute()
    {
        $contracts = array();
        if(!empty($this->delivery_contracts)){
            foreach ($this->delivery_contracts as $dc)
            {
                $contract = \App\Models\DeliveryContract::find($dc['delivery_contract_id']);  
                if(!$dc['event'])  {$contract->event = null;}else{$contract->event = json_decode($contract->event, true);}
                if(!$dc['capita'])  {$contract->capita = null;}else{$contract->capita = json_decode($contract->capita, true);}
                if(!$dc['pgp'])  {$contract->pgp = null;}else{$contract->pgp = json_decode($contract->pgp, true);}
                $contracts = array_add($contracts, 'contracts', $contract);
            } 
         }
         return $contracts;
    }
    public function getAssignedUsersAttribute()
    {
        $usrs = array();
        if(!empty($this->users)){
            foreach ($this->users as $us)
            {
                $usr = \App\Models\User::find($us['user_id']);  
                $usrs = array_add($usrs, 'usrs', $us);
            } 
         }
         return $usrs;
    }
    public function warehouses()
	{
		 return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
    
    public function delivery_points_groups()
   	{
   		return $this->belongsTo('App\Models\CollectionsValues', 'delivery_point_group_id'); 
   	}
}
