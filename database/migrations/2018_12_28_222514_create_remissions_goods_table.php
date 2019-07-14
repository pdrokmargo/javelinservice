<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRemissionsGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remissions_goods', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('consecutive_id');
            $table->integer('consecutive');

            $table->date('created_at');

            $table->uuid('inventory_movement_out_id');
            $table->uuid('warehouse_id');
            
            $table->uuid('customer_id');//from stakeholders with customer profile.
            // $table->integer('payment_condition_id');//from collections
            $table->json('products');
            // json array
            //      uuid: product_id
            //      string: sku
            //      string: name
            //      integer: units
            //      boolean: fraction
            //      string: batch
            //      string: location
            //      string: expiration_date
            //      double: unit_price
            //      double: discount (%)
            //      double: subtotal
            //      
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
        Schema::dropIfExists('remissions_goods');
    }
}
