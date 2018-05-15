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
            $table->string('code')->nullable();
            $table->string('name');
            $table->string('sku')->nullable();
            $table->string('description');
            $table->string('comercial_name');
            $table->integer('units');
            $table->date('lifetime');
            $table->integer('delivery_fraction');
            $table->integer('barcode')->nullable();
            $table->string('cums');
            $table->double('cost')->nullable();
            $table->integer('content_unit_id'); //collection content_unit
            $table->boolean('batch_control');
            $table->boolean('serials_control');
            $table->boolean('institutional_use');
            $table->boolean('comercial');
            $table->uuid('manufacturer_id')->nullable();
            $table->uuid('supplier_id')->nullable();
            $table->uuid('importer_id');
            $table->uuid('sanitary_registration_holder_id');
            $table->string('sanitary_registration');
            $table->date('validity_sanitary_registration');
            $table->integer('product_profile_id');
            $table->integer('security_time');
            $table->integer('covered_period');
            $table->integer('replacment_time');
            $table->boolean('state')->default(true);
            $table->boolean('delete')->default(false);
            $table->json('pharmaceutical_drug');
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
