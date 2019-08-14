<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHealthSuppliesProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_supplies_products', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name')->nullable();
            $table->string('invima_file_record')->nullable();
            $table->uuid('sanitary_registration_holder_id');
            $table->string('sanitary_registration');
            $table->date('validity_sanitary_registration');
            $table->boolean('state')->default(true);
            $table->boolean('delete')->default(false);
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
        Schema::dropIfExists('health_supplies_products');
    }
}
