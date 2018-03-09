<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('company_default_id')->default(0);
            $table->integer('user_profile_id');
            $table->boolean('status')->default(true);
            $table->date('last_access')->nullable();
            $table->string('url_profile_photo')->nullable();
            $table->rememberToken();
            $table->timestamps();

            $table->primary('id');
            //$table->foreign('company_default_id')->references('id')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
