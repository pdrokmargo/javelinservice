<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
        'delivery_contracts'
    ];
    protected $hidden = [];
    protected $appends = array('delivery_contracts_full');
    
    public function getDeliveryContractsFullAttribute()
    {
        $contracts_ids = array();
        if(!empty($this->delivery_contracts)){
            foreach ($this->delivery_contracts as $dc)
            {
                $contracts_ids = array_add($contracts_ids, 'delivery_contract_id', $dc['delivery_contract_id']);
                //$contracts = \App\Models\DeliveryContract::find($dc['delivery_contract_id']);    
            //     $dc['delivery_contract_name'] = $contracts->name;//('delivery_contract_name', '');
            //     // $dc->delivery_contract_name = $contracts->name;
            //    // $dc = json_decode($dc, true);
                
                
            } 
         }
         return Illuminate\Support\Facades\DB::table('delivery_contracts')
         ->whereIn('id', $contracts_ids)
         ->get();
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
