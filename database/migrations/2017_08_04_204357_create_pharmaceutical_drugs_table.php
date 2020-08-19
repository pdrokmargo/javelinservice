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
            $table->string('atc');  
            $table->integer('dosage_form_id'); //Formas Farmacéuticas: Can be pills (Pastillas), tablets (tabletas), capsules (capsulas)
            $table->integer('routes_administration_id'); //Vías de Administración: Routes of Can be oral, intravenous (intravenosa)
            $table->boolean('is_controlled')->default(false);
            $table->boolean('is_monopoly')->default(false);
            $table->boolean('is_pos')->default(false);
            $table->boolean('is_regulated')->default(false);
            $table->double('regulated_price')->nullable();
            $table->integer('storage_condition_id')->default(114);//Default No requiere refrigrración //Condiciones de Almacenamiento: Routes of Can be refrigerado, etc.
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
        Schema::dropIfExists('pharmaceutical_drugs');
    }
}
