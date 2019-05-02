<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScheduledDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scheduled_deliveries', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('consecutive');
            $table->uuid('product_id');
            $table->integer('units');
            $table->uuid('delivery_source_id');
            $table->uuid('delivery_fulfillment_id');
            $table->uuid('affiliate_id');
            $table->integer('type_id');//type of scheduled delivery related with collections
            $table->date('date');//this date must be at future
            $table->string('notes');
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
        Schema::dropIfExists('scheduled_deliveries');
    }
}
