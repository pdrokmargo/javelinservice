<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consecutive extends Model
{
    use \App\Uuids;
    protected $table = 'consecutives';
    public $incrementing = false;

    protected $fillable = [
        'initial_value',
            'final_value',
            'prefix',
            'document_name',
            'description',
    ];
}
