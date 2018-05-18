<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComercialStakeholdersInfo extends Model
{
    use \App\Uuids;
    
    public $timestamps = false;
    protected $table = 'comercial_stakeholders_info';
    protected $casts = ['codes' => 'json'];
    protected $fillable = [
        'retention_for_rent',
        'big_contributor',
        'codes',
        'stakeholder_info_id',
        'tax_regime_id'
    ];
    protected $hidden = [];
}
