<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperationscentresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operationscentres', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('code');
            $table->string('description');
            $table->integer('operationscentregroup_id');
            $table->string('address');
            $table->string('phone_number');
            $table->integer('geolocation_id');
            $table->integer('company_id');
            $table->boolean('state');

            //$table->foreign('geolocation_id')->references('id')->on('geolocations');
            //$table->foreign('company_id')->references('id')->on('companies');
            //$table->foreign('operationscentregroup_id')->references('id')->on('collections_values');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operationscentres');
    }
}
