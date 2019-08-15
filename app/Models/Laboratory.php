<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Laboratory extends Model
{
    use \App\Uuids;
    public $incrementing = false;
    protected $table = 'laboratories';
    public $timestamps = false;
    public $with = array('stakeholderInfo');
    protected $fillable = [
    	'id',
    	'stakeholder_info_id'    	
   	];

   	public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','stakeholder_info_id');
    }
}
