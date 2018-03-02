<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class UsersPrivileges extends Model
{
    public $timestamps = false;
    protected $table = 'users_privileges';
    public $with = array('company', 'userprofile');
    protected $fillable = ['user_id', 'company_id', 'user_profile_id'];

	public function company()
	{
		 return $this->belongsTo('App\Models\Company', 'company_id'); 
	}

	public function userprofile()
	{
		 return $this->belongsTo('App\Models\UserProfile', 'user_profile_id'); 
	}
}
