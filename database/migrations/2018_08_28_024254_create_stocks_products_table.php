<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStocksProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks_products', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('warehouse_id');
            $table->uuid('product_id');
            $table->string('expiration_date');
            $table->string('batch');
            $table->integer('set_stock');
            $table->integer('fraction_stock');
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
        Schema::dropIfExists('stocks_products');
    }
}
