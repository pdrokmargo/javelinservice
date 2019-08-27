<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicalDiagnosisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_diagnosis', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('code'); // CIE-10 reference for medical diagnosis
            $table->longText('description');
            $table->string('genre');
            $table->integer('inferior_limit');
            $table->integer('superior_limit');
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
        Schema::dropIfExists('medical_diagnosis');
    }
}
