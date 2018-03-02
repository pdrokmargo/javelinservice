<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStakerholdersInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stakeholders_info', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('firstname')->default('');
            $table->string('middlename')->default('');
            $table->string('lastname')->default('');
            $table->string('businessname')->default('');
            $table->string('legalname')->default('');
            $table->integer('document_type_id');
            $table->string('document_number');
            $table->integer('geolocation_id');
            $table->integer('person_type_id');
            $table->boolean('domiciled')->default(true);
            $table->boolean('rut')->default(true);
            $table->string('address');
            $table->string('phone_number');
            $table->string('email');
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('stakeholders_info');
    }
}
