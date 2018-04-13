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
            $table->uuid('delivery_contract_id');
            $table->integer('ips_network_id'); // to IPS_NETWORK in collection values
            $table->integer('contracts_payment_method_id');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('lastname1');
            $table->string('lastname2');
            $table->integer('gender_id');// to GENDER in collection_values
            $table->integer('affiliate_type');//to GENDER in collection_values
            $table->date('birthday');
            $table->string('address');
            $table->string('phone_number');
            $table->string('mobile_number');
            $table->string('attendant_name');
            $table->integer('attendant_phone_number');
            $table->integer('attendant_mobile_number');
            $table->json('geolocation');
            $table->integer('affiliate_condition_id');//to AFFILIATE_CONDITION in collection_values
            $table->integer('public_health_condition_id');//to PUBLIC_HEALTH_CONDITION in collection_values
            $table->integer('affiliate_level');
            $table->boolean('state');           
            $table->boolean('delete');   
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
