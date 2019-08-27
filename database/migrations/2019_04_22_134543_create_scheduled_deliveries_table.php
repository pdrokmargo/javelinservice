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
            $table->uuid('delivery_source_id'); // # delivery where item was scheduled.
            $table->uuid('delivery_fulfillment_id')->nullable(); // # delivery where item was delivered. 0 means released. 
            $table->uuid('affiliate_id');
            $table->integer('type_id');//type of scheduled delivery related with collections
            $table->date('date');//this date must be at future
            $table->string('notes')->nullable();
            $table->boolean('status')->default(true);
            $table->date('synced')->nullable();
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
