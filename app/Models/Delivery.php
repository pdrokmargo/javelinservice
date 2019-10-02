<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use \App\Uuids;
    protected $table = 'deliveries';
    public $incrementing = false;
    public $timestamps = false;
    protected $with = array('affiliate','delivery_point', 'modality');
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
     //     return $this->hasMany('App\Models\DeliveryDetail', 'delivery_id'); 
         $deliveries_details = \App\Models\DeliveryDetail::where('delivery_id',$this->id)->get();
        $details = [];
        $i = 0;
        $empty = false;
        $detail = '';
        do {
            if(!$empty && sizeof($deliveries_details) > 0){
                $detail = clone $deliveries_details->first();
            }
            foreach ($deliveries_details as $d){
                if(!$empty && $d->product_id == $detail->product_id){
                    $stockSelected['batch'] = $detail->batch;
                    $stockSelected['expiration_date'] = $detail->expiration_date;
                    $stockSelected['iteration'] = $i;
                    $detail->stockSelected[] = $stockSelected;
                }
            }
            $details[] = $detail;
            foreach ($deliveries_details as $d){
                if($d->product_id == $detail->product_id){
                   unset($d);
                }
            }
            $deliveries_details = array_values($deliveries_details);
            if(sizeof($deliveries_details) == 0){
                $empty = true;
            }
            $i++;
        } while (sizeof($deliveries_details) != 0);
        $deliveries_details = $details;
    }
}
