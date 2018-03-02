<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    public $timestamps = false;
    protected $table = 'activity_logs';
    protected $fillable = [
        'user_id',
        'view_id',
        'action',
        'description',
        'company_id',
        'created_at'
    ];
    protected $hidden = [];


    public function user() {
        return $this->belongsTo('App\Models\UserProfile', 'user_id');
    }

    public function view() {
        return $this->belongsTo('App\Models\View', 'view_id');
    }

    public function company() {
        return $this->belongsTo('App\Models\Company', 'company_id');
    }
}