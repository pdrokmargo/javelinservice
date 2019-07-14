<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePharmaceuticalDrugsCounterpartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pharmaceutical_drugs_counterparts', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('product_id');
            $table->uuid('medical_diagnosis_id');
            $table->uuid('delivery_contract_id');
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
        //
    }
}
