<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRemissionGoodsDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remissions_goods_details', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('remission_goods_id');
            $table->uuid('product_id');
            $table->integer('units');
            $table->boolean('fraction');
            $table->string('batch');
            $table->string('location');
            $table->date('expiration_date');
            $table->double('unit_price');

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
        Schema::dropIfExists('remissions_goods_details');
    }
}


