<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveryPointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_points', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('warehouse_id');
            $table->string('name');
            $table->string('description');
            $table->integer('delivery_point_group_id');
            $table->json('delivery_contracts');
            /*json array:
                string: delivery_contract_name
                boolean: event
                boolean: capita
                boolean: pgp
            */
            $table->boolean('installed');
            $table->boolean('state');

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
        Schema::dropIfExists('delivery_points');
    }
}
