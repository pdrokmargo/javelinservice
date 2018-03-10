<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DeliveryPoint extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_points';
    protected $casts = ['delivery_contracts'=>'json', 'users' => 'json'];
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
       
         return $this->delivery_contracts;
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
