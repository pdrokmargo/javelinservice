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
            $table->double('average_unit_cost')->default(0);
            $table->string('description')->default('');
            $table->double('tax_percentage')->default(0);
            $table->integer('security_time')->nullable();
            $table->integer('covered_period')->nullable();
            $table->integer('replacement_time')->nullable();
            $table->string('barcode')->nullable();
            $table->boolean('institutional_use')->default(false);
            $table->boolean('batch_control')->default(false);
            $table->boolean('serials_control')->default(false);
            $table->boolean('comercial')->default(false);
            $table->string('comercial_name')->nullable();
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
