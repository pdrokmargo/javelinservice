<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('nit');
            $table->string('description');
            $table->string('address');
            $table->integer('phone_number');
            $table->string('email');
            $table->integer('tax_regime_id');
            $table->boolean('big_contributor');
            $table->boolean('selfholder');
            $table->string('economic_activity');
            $table->string('website');
            $table->boolean('state');
            $table->string('big_contributor_resolution')->nullable();
            //$table->string('selfholder_resolution')->nullable();       

            $table->integer('geolocation_id');
            $table->integer('withholding_income_sales_id')->default(-1);//Acepta autorretenedor
            $table->integer('withholding_income_purchases_id')->default(-1);
            $table->integer('withholding_vat_sales_id')->default(-1);
            $table->integer('withholding_vat_purchases_id')->default(-1);
            $table->integer('withholding_ica_sales_id')->default(-1);//Acepta autorretenedor
            $table->integer('withholding_ica_purchases_id')->default(-1);
            
            //$table->foreign('geolocation_id')->references('id')->on('geolocations');
            //$table->foreign('tax_regime_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_income_sales_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_income_purchases_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_vat_sales_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_vat_purchases_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_ica_sales_id')->references('id')->on('collections_values');
            //$table->foreign('withholding_ica_purchases_id')->references('id')->on('collections_values');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}