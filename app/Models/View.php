<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    protected $table = 'views';
    public $timestamps = false;
    protected $fillable = [
        'title',
        'link',
        'icon',
        'description',
        'view_parent_id',
        'have_child',
        'load_children'
    ];
    protected $hidden = [];

    public function actions() {
        return $this->hasOne('App\Models\ViewActions', 'view_id');
    }
}
