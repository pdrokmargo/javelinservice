<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deliveries', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('consecutive');
            $table->uuid('affiliate_id');
            $table->date('date');
            $table->date('formula_date');
            $table->date('delivery_date');
            $table->string('authorization')->nullable();
            $table->uuid('ips_id');
            $table->integer('modality_id'); //related with collections
            $table->uuid('medical_diagnostic_id');
            $table->string('notes');
            $table->boolean('status');
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
        Schema::dropIfExists('deliveries');
    }
}
