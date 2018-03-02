<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Maker extends Model
{
    use \App\Uuids;
    public $incrementing = false;
    protected $table = 'makers';
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
