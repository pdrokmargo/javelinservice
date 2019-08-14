
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePharmaceuticalDrugsProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pharmaceutical_drugs_products', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('product_id');
            $table->uuid('pharmaceutical_drug_id');
            $table->string('name')->nullable();
            $table->integer('delivery_fraction');
            $table->string('invima_file_record');
            $table->string('invimia_file_record_consecutive');
            $table->integer('content_unit_id'); //collection content_unit
            $table->uuid('sanitary_registration_holder_id');
            $table->string('sanitary_registration');
            $table->date('validity_sanitary_registration');
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
        Schema::dropIfExists('pharmaceutical_drugs_products');
    }
}
