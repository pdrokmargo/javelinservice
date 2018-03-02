<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBanksAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   //Pending
        Schema::create('banks_accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('bank_id');
            $table->integer('account_number');
            $table->integer('bank_account_id'); //chart_accounts
            $table->json('checkbook')->nullable();//if handle checkbook, must be saved following info
            /*json structure
                integer:initial_number
                integer:final_number
                integer:next_number
            */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banks_accounts');
    }
}
