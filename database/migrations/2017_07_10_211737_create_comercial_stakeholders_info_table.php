<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComercialStakeholdersInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comercial_stakeholders_info', function (Blueprint $table) {
            $table->uuid('id');            
            $table->integer('tax_regime_id');
            $table->boolean('big_contributor');
            $table->boolean('retention_for_rent');
            $table->uuid('stakeholder_info_id'); 
            $table->json('codes');
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
        Schema::dropIfExists('comercial_stakeholders_info');
    }
}
