<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public $timestamps = false;
    protected $table = 'companies';
    public $with = array('geolocation');
    protected $fillable = ['name',
							'description',
							'address',
							'phone_number',
							'email',
							'tax_regime_id',
							'big_contributor',
							'selfholder',
							'economic_activity',
							'website',
							'state',
							'geolocation_id',
							'nit',
							'selfholder_resolution',
							'big_contributor_resolution',
							'withholding_income_sales_id',
							'withholding_income_purchases_id',
							'withholding_vat_sales_id',
							'withholding_vat_purchases_id',
							'withholding_ica_sales_id',
							'withholding_ica_purchases_id'];

	public function geolocation()
	{
		 return $this->belongsTo('App\Models\Geolocation', 'geolocation_id'); 
	}
	public function tax_regime()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'tax_regime_id'); 
	}
	public function withholding_income_sales()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_income_sales_id'); 
	}
	public function withholding_income_purchases()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_income_purchases_id'); 
	}
	public function withholding_vat_sales()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_vat_sales_id'); 
	}
	public function withholding_vat_purchases()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_vat_purchases_id'); 
	}
	public function withholding_ica_sales()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_ica_sales_id'); 
	}
	public function withholding_ica_purchases()
	{
		 return $this->belongsTo('App\Models\CollectionsValues', 'withholding_ica_purchases_id'); 
	}	
}
