<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryMovementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_movements', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('consecutive_id');
            $table->integer('consecutive');

            $table->integer('operationcentre_id')->nullable();
            $table->uuid('warehouse_id');
            $table->integer('company_id');
            $table->date('date');
            // $table->integer('inventory_movement_type_id'); //Collection Values
            $table->integer('inventory_movement_entry_out_type_id'); //Collection Values
            $table->uuid('counterpart_transfer_id')->nullable(); //Defines source where items comes or goes.
            $table->string('observations');
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
        Schema::dropIfExists('inventory_movements');
    }
}
