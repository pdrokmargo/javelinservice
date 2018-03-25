<?php

namespace App\Models;


use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, \App\Uuids;

    protected $table = 'users';
    protected $appends = array('usercompany');
    public $incrementing = false;

    //Allows to login by using email or username.
    public function findForPassport($username)
    {
        if($this->where('username', $username)->first() != null){
            return $this->where('username', $username)->first();
        }else{
            return $this->where('email', $username)->first();
        }
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname', 
        'username',
        'email',
        'password',
        'status',
        'company_default_id',
        'user_profile_id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    //ORM functions
    public function getUsercompanyAttribute() {
        return \App\Models\UsersPrivileges::where('user_id', $this->id)->where('company_id', $this->company_default_id)->first();        
    }

    public function usersprivileges() {
        return $this->hasMany('App\Models\UsersPrivileges', 'user_id');
    }

    public function notifications() {
        return $this->hasMany('App\Models\Notification', 'user_id');
    }
}
