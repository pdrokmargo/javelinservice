<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsecutivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consecutives', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('initial_value');
            $table->integer('final_value')->nullable();
            $table->string('prefix')->nullable();
            $table->string('document_name');
            $table->string('description')->nullable();
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
        Schema::dropIfExists('consecutives');
    }
}
