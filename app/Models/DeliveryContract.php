<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryContract extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'delivery_contracts';
    protected $casts = ['delivery_points'=>'json', 'pharmadrugs' => 'json', 'event' => 'json', 'capita' => 'json', 'pgp' => 'json', 'ips' => 'json', 'conditional_alerts' => 'json'];
    public $with = array('customers', 'delivery_points_groups');
    public $incrementing = false;
    protected $fillable = [
        'name',
        'population_type_id',
        'description',
        'contract_type_id',
        'value',
        'validity',
        'level_care_id',
        'state',
        'company_id',
        'delivery_points',
        'pharmadrugs',
        'event',
        'capita',
        'pgp',
        'ips',
        'conditional_alerts'
    ];
    protected $hidden = [];

    public function customers()
	{
		 return $this->belongsTo('App\Models\Warehouse', 'customer_id'); 
    }
    
    public function population_types()
   	{
   		return $this->belongsTo('App\Models\CollectionsValues', 'population_type_id'); 
   	}

}
