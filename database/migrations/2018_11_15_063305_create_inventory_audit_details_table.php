<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryAuditDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory_audit_details', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('inventory_audit_id');//From Collections
            $table->uuid('stock_product_id');
            $table->integer('physical_set_stock');
            $table->integer('physical_fraction_stock');

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
        Schema::dropIfExists('inventory_audit_details');
    }
}
