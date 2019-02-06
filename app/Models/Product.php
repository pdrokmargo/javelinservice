<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	use \App\Uuids;
    //public $timestamps = false;
    protected $table = 'products';    
    public $incrementing = false; 
    protected $fillable = [
		'id',
		'code',
		'name',
		'sku',
		'description',
		'comercial_name',
		'units',
		'lifetime',
		'delivery_fraction',
		'barcode',
		'cums',
		'cost',
		'content_unit_id',
		'batch_control',
		'serials_control',
		'institutional_use',
		'comercial',
		'manufacturer_id',
		'supplier_id',
		'importer_id',
		'sanitary_registration_holder_id',
		'sanitary_registration',
		'validity_sanitary_registration',
		'product_profile_id',
		'security_time',
		'covered_period',
		'replacment_time',
		'state',
		'pharmaceutical_drug',
		'delete'
	];


	protected $casts = [
		'pharmaceutical_drug' => 'array'
	];

	protected $appends = ['display_name', 'averageunitcost'];

	
	public function getDisplayNameAttribute()
	{
		if($this->comercial){
			return $this->comercial_name;
		}else{
			$item = json_encode($this->pharmaceutical_drug);
			$item = $item[0];
			return $this->item["name"];
		}
	}

	public function getAverageunitcostAttribute()
	{
		$entry_movements = \App\Models\InventoryMovementDetail::where('purchase_price', '<>', 0)->where('product_id', "{$this->id}")->get();
		$sum_purchase_price = 0;
		foreach ($entry_movements as $e){
			$sum_purchase_price += $e->purchase_price*$e->units;
		}
		$sum_units = $entry_movements->sum('units');
		$sum_units = is_numeric($sum_units) ? $sum_units : 0;
		return (int)(($sum_purchase_price)/$sum_units);
	}

	public function sanitary_registration_holder()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'sanitary_registration_holder_id'); 
	}


	public function supplier()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'supplier_id'); 
	}
	
	public function manufacturer()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'manufacturer_id'); 
	}
	
	public function importer()
	{
		 return $this->belongsTo('App\Models\StakeholdersInfo', 'importer_id'); 
    }
}
