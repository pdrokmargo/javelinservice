<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePharmaceuticalDrugsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pharmaceutical_drugs', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->string('code')->nullable();
            $table->double('concentration');            
            $table->integer('dosage_form_id'); //Formas Farmacéuticas: Can be pills (Pastillas), tablets (tabletas), capsules (capsulas)
            $table->integer('routes_administration_id'); //Vías de Administración: Routes of Can be oral, intravenous (intravenosa)
            $table->string('ATC');
            $table->boolean('is_controlled');
            $table->boolean('is_monopoly');
            $table->boolean('is_pos');
            $table->integer('storage_condition_id'); //Condiciones de Almacenamiento: Routes of Can be refrigerado, etc.
            $table->text('active_principle')->nullable();
            $table->boolean('state')->default(true);
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
        Schema::dropIfExists('pharmaceutical_drugs');
    }
}
