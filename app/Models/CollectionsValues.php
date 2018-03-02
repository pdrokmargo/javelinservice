<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CollectionsValues extends Model
{
    public $timestamps = false;
    protected $table = 'collections_values';
    protected $fillable = [
        'collection_id',
        'code',
        'value',
        'parent_id'
    ];
    protected $hidden = [];
}
