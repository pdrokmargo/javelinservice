<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryMovement extends Model
{
    use \App\Uuids;
    protected $table = 'inventory_movements';

    protected $with = array('warehouse', 'details', 'inventory_movement_type','document');
    protected $appends = ['total', 'remaining'];
    public $remaining = [];
    public $incrementing = false;
    protected $fillable = [
          'consecutive_id',
          'consecutive',
          'warehouse_id',
          'company_id',
          'date',
          'document_fullfilled_id',
          'inventory_movement_entry_out_type_id',
          'counterpart_transfer_id',
          'observations'
    ];
    public function getRemainingAttribute()
    {
         return $this->remaining;
    }
    public function setRemainingAttribute($value)
    {
          $this->remaining = $value;
    }
    public function getTotalAttribute()
    {
        $details = \App\Models\InventoryMovementDetail::where('inventory_movements_id', $this->id)->get(); 
        return $details->sum('subtotal');
    }
    public function document()
    {
         return $this->belongsTo('App\Models\Consecutive', 'consecutive_id'); 
    }
    public function warehouse()
    {
         return $this->belongsTo('App\Models\Warehouse', 'warehouse_id'); 
    }
    public function inventory_movement_type()
    {
         return $this->belongsTo('App\Models\CollectionsValues', 'inventory_movement_entry_out_type_id'); 
    }
    public function details()
    {
         return $this->hasMany('App\Models\InventoryMovementDetail', 'inventory_movements_id'); 
    }
}
