<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ViewActions extends Model
{
    public $timestamps = false;
    protected $table = 'view_actions';
    public $with = array('views');
    // protected $appends = array('actions2');
    protected $casts = ['actions' => 'array'];
    protected $fillable = [
        'view_id',        
        'actions'
    ];
    protected $hidden = [];

    public function views() {
        return $this->belongsTo('App\Models\View', 'view_id');
    }

    // public function getActionsAttribute()
    // {
    //     return json_decode($this->actions, true);
    // }
}
