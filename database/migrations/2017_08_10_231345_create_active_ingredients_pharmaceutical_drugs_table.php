<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActiveIngredientsPharmaceuticalDrugsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('active_ingredients_pharmaceutical_drugs', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('active_ingredient_id');
            $table->uuid('pharmaceutical_drug_id');
            $table->integer('measurement_unit_id');
            $table->double('concentration'); 
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
        Schema::dropIfExists('active_ingredients_pharmaceutical_drugs');
    }
}
