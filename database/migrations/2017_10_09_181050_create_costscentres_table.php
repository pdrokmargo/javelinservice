<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCostscentresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('costscentres', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('code');
            $table->string('description');
            $table->integer('costcentretype_id');  //Static collection Tipo de centro de costo: Título, Detalle.
            $table->boolean('root');
            
            //Si root es true se debe guardar operation_centres_id sino cost_centre_id
            $table->integer('operation_cost_centre_id')->nullable(); //Operation Centres 

            //Begin: Fields fillable if costcentretype_id corresponds to "Detalle"
            $table->integer('costcentregroup_id')->nullable(); //Dynamic collection
            //End: Fields fillable if costcentretype_id corresponds to "Detalle"

            $table->integer('company_id');

            $table->boolean('state');
            
            //$table->foreign('costcentregroup_id')->references('id')->on('collections_values');            
            //$table->foreign('$table->integer('costcentretype_id');')->references('id')->on('collections_values');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('costscentres');
    }
}
