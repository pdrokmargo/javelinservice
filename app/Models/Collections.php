<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collections extends Model
{
    public $timestamps = false;
    protected $table = 'collections';
    protected $fillable = [
        'name',
        'description',
        'syscollection'
    ];
    protected $hidden = [];

    public function values() {
        return $this->hasMany('App\Models\CollectionsValues', 'collection_id');
    }    
}
