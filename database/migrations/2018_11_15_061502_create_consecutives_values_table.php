<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsecutivesValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consecutives_values', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('consecutive_id');
            $table->uuid('instance_id'); //Record which owns this consecutive
            $table->integer('current_value');
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
        Schema::dropIfExists('consecutives_values');
    }
}
