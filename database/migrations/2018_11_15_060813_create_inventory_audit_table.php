<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryAuditTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_audit', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('inventory_adjustment_type_id');//From Collections
            $table->uuid('warehouse_id');
            $table->uuid('user_id');
            $table->string('description');
            $table->boolean('blinded_qty');
            $table->date('date');
            $table->integer('audit_state_id'); //From Collections
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
        Schema::dropIfExists('inventory_audit');
    }
}
