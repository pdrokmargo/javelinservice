<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComercialStakeholdersInfo extends Model
{
    public $timestamps = false;
    protected $table = 'comercial_stakeholders_info';
    protected $casts = ['code' => 'json'];
    protected $fillable = [
        'id',
        'contact_person',
        'tax_regime_id',
        'big_contributor',
        'retention_for_rent',
        'codes',
        'stakeholder_info_id'
    ];
    protected $hidden = [];
}
