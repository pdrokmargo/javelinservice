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
            $table->integer('barcode');
            $table->integer('cum_code');
            $table->double('regulated_price')->nullable();
            $table->double('cost')->nullable();
            $table->integer('content_unit_id'); //Unidades de Contenido: Can be mg, ml, etc.

            $table->boolean('batch_control');
            $table->boolean('serials_control');
            $table->boolean('institutional_use');
            $table->boolean('comercial');
            $table->boolean('is_regulated')->default(false);

            $table->uuid('manufacturer_id');
            $table->uuid('supplier_id');
            $table->uuid('importer_id');
            
            
            $table->uuid('sanitary_registration_holder_id');
            $table->integer('sanitary_registration');
            $table->date('validity_sanitary_registration');
            $table->integer('product_profile_id');
            $table->integer('security_time');
            $table->integer('covered_period');
            $table->integer('replacment_time');
            $table->boolean('state')->default(false);
            $table->json('pharmaceutical_drugs')->nullable();
            /*json structure:array
                pharmaceutical_drugs_structure
            */
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
