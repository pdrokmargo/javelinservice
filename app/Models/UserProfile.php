<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $table = 'user_profiles';    
    public $timestamps = false;
    public $with = array('privileges');
    protected $fillable = [
        'up_description',
        'up_state'
    ];
    protected $hidden = [];
    public function privileges() {
        return $this->hasMany('App\Models\Privilege', 'user_profile_id')->orderBy('view_id', 'asc');
    }
    
}
