<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use \App\Uuids;
    protected $table = 'deliveries';
    public $incrementing = false;
    public $timestamps = false;
    public $with = array('affiliate');
    protected $fillable = [
        'consecutive',
            'affiliate_id',
            'date',
            'formula_date',
            'delivery_date',
            'authorization',
            'ips_id',
            'modality_id',
            'medical_diagnostic_id',
            'delivery_point_id',
            'notes',
          //   'status',
            'synced'
    ];
    public function affiliate()
    {
         return $this->belongsTo('App\Models\Affiliate', 'affiliate_id'); 
    }
    public function delivery_point()
    {
         return $this->belongsTo('App\Models\DeliveryPoint', 'delivery_point_id'); 
    }
    public function medical_diagnosis()
    {
         return $this->belongsTo('App\Models\MedicalDiagnosis', 'medical_diagnostic_id'); 
    }
    public function modality()
    {
         return $this->belongsTo('App\Models\CollectionsValues', 'modality_id'); 
    }
    public function ips()
    {
         return $this->belongsTo('App\Models\CollectionsValues', 'ips_id'); 
    }
    public function details()
    {
         return $this->hasMany('App\Models\DeliveryDetail', 'delivery_id'); 
    }
}
