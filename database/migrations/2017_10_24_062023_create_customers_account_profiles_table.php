<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersAccountProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   //Pending
        Schema::create('customers_account_profiles', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->integer('pay_account_id');
            $table->integer('advances_account_id');
            $table->integer('order_account_id');
            $table->integer('costcentre_account_id');
            $table->integer('concept_account_id');
            $table->boolean('state');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers_account_profiles');
    }
}
