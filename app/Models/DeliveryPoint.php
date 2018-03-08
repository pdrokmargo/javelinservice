<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryPoint extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_points';
    protected $casts = ['delivery_contracts'=>'json'];
    public $with = array('warehouses', 'delivery_point_group');
    public $incrementing = false;
    protected $fillable = [
        'warehouse_id',
        'name',
        'description',
        'state',
        'installed',
        'delivery_point_group_id',
        'delivery_contracts'
    ];
    protected $hidden = [];
    public function warehouses()
	{
		 return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
    
    public function delivery_point_group()
   	{
   		return $this->belongsTo('App\Models\CollectionsValues', 'delivery_point_group_id'); 
   	}
}
