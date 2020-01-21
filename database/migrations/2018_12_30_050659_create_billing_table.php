<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('billing', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('consecutive_id');
            $table->integer('consecutive');

            $table->date('created_at');
            $table->date('expire_at');
            $table->dateTime('cancel_at')->nullable();
            
            $table->uuid('customer_id');//from stakeholders with customer profile.
            $table->integer('payment_condition_id');//from collections
     
            $table->string('notes')->nullable();
            $table->boolean('status');
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
        Schema::dropIfExists('billing');
    }
}
