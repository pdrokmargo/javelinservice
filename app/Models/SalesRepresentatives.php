<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesRepresentatives extends Model
{
    use \App\Uuids;
    public $timestamps = false;
    protected $table = 'sales_representatives';
    public $with = array('stakeholderInfo');
    public $incrementing = false;
    protected $fillable = [
        'id',            
        'stakeholder_info_id'
    ];
    protected $hidden = [];

    public function stakeholderInfo() {
        return $this->hasOne('App\Models\StakeholdersInfo', 'id','stakeholder_info_id');
    }

   
}
