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
            $table->integer('company_id')->default(0);
            $table->string('name');
            $table->string('description')->default('');
            $table->integer('delivery_point_group_id');
            $table->json('delivery_contracts');
            /*json array:
                uuid: delivery_contract_id
                boolean: event
                boolean: capita
                boolean: pgp
            */
            $table->json('users');//Sólo de tipo regentes
            /*json array:
                uuid: user_id
            */
            $table->boolean('installed')->default(false);
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
