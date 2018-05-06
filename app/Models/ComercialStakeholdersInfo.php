<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComercialStakeholdersInfo extends Model
{
    public $timestamps = false;
    protected $table = 'comercial_stakeholders_info';
    protected $casts = ['codes' => 'json'];
    protected $fillable = [
        'tax_regime_id',
        'retention_for_rent',
        'big_contributor',
        'codes',
        'stakeholder_info_id'
    ];
    protected $hidden = [];
}
