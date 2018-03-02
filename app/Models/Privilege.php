<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Privilege extends Model
{
    protected $table = 'privileges';
    public $timestamps = false;
    public $with = array('views');
    protected $casts = ['actions' => 'json'];
    // protected $appends = array('actions');
    protected $fillable = [
        'view_id',
        'user_profile_id',        
        'actions'
    ];
    protected $hidden = [];
    public function views() {
        return $this->belongsTo('App\Models\View', 'view_id');
    }

    public function user_profile() {
        return $this->belongsTo('App\Models\UserProfile', 'user_profile_id');
    }

    // public function getActionsAttribute()
    // {
    //     return json_decode($this->actions, true);
    // }
}
