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
            // $table->date('created_at');
            $table->date('formuled_at');
            $table->date('delivered_at');
            $table->string('authorization')->nullable();
            $table->integer('ips_id');
            $table->integer('modality_id'); //related with collections
            $table->uuid('medical_diagnostic_id');
            $table->uuid('delivery_point_id');
            $table->string('notes')->default('');
            // agregar campo para saber qué auxiliar realizó el movimiento.
            // $table->boolean('status');
            $table->date('synced')->nullable();
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
        Schema::dropIfExists('deliveries');
    }
}
