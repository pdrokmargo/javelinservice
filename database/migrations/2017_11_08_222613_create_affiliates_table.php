<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAffiliatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('affiliates', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('document_type_id');
            $table->integer('document_number');
            $table->string('eps');
            $table->integer('affiliate_regime_id');//pending to relate
            $table->string('firstname');
            $table->string('middlename')->default('');
            $table->string('lastname');
            $table->integer('gender_id');//pending to relate
            $table->integer('affiliate_type_id');//pending to relate
            $table->date('birthday');
            $table->string('address');
            $table->integer('phone_number');
            $table->integer('mobile_number');
            $table->string('attendant_name');
            $table->integer('attendant_phone_number');
            $table->integer('attendant_mobile_number');
            $table->integer('geolocation_id');
            $table->integer('affiliate_condition_id');//penging to relate
            $table->integer('public_health_condition_id');//pending to relate

            $table->boolean('state');
            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('affiliates');
    }
}
