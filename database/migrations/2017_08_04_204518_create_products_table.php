<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name')->nullable();
            $table->string('sku');
            $table->integer('product_type_id'); //from collections PRODUCT_TYPE
            $table->double('average_unit_cost');
            $table->string('description');
            $table->double('tax_percentage');
            $table->integer('security_time');
            $table->integer('covered_period');
            $table->integer('replacement_time');
            $table->integer('barcode')->nullable();
            $table->boolean('institutional_use');
            $table->boolean('batch_control');
            $table->boolean('serials_control');
            $table->boolean('comercial');
            $table->string('comercial_name');
            $table->date('lifetime')->nullable();
            $table->integer('units');
            $table->uuid('manufacturer_id')->nullable();
            // $table->uuid('supplier_id')->nullable();
            $table->uuid('importer_id')->nullable();
            $table->boolean('state')->default(true);
            $table->boolean('delete')->default(false);
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
        Schema::dropIfExists('products');
    }
}
