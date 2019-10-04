<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

class CreateSyncsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('syncs', function (Blueprint $table) {
            $table->string('table_name');
            $table->string('key')->unique();
            $table->string('id'); //no matter if it is uuid or not.
            $table->boolean('synced')->default(false); 
            $table->boolean('isUuid')->default(true); 
            $table->datetime('date')->default(Carbon::now()); 
            $table->boolean('newFriend')->default(true); //if newFriend is true, a creation must be performed, otherwise must be an update. 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('syncs');
    }
}
