<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveriesDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deliveries_details', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('delivery_id');
            $table->uuid('product_id');
            $table->integer('requested_units');
            $table->integer('delivered_units');
            $table->integer('delivery_number');
            $table->integer('total_deliveries');
            $table->string('batch');
            $table->date('expiration_date');
            $table->date('synced')->nullable();
            $table->timestamps();
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
        Schema::dropIfExists('deliveries_details');
    }
}
