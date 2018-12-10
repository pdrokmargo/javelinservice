<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryMovementsDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_movements_details', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('inventory_movements_id');
            $table->uuid('product_id');
            $table->integer('units');
            $table->boolean('fraction');
            $table->string('batch')->nullable();
            $table->string('location')->nullable();
            $table->string('expiration_date')->nullable();
            $table->double('purchase_price');
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
        Schema::dropIfExists('inventory_movements_details');
    }
}
