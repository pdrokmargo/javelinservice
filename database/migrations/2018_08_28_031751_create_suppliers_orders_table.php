<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuppliersOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers_orders', function (Blueprint $table) {
            $table->uuid('id');
            $table->date('created_at');
            $table->date('expire_at');
            $table->date('estimate_delivery');
            
            $table->uuid('buyer_employee_id');//from stakeholders with employee profile.
            $table->uuid('supplier_id');//from stakeholders with supplier profile.
            $table->integer('operationcentre_id');//from operationscentres with supplier profile.
            $table->uuid('warehouse_id');//from stakeholders with supplier profile.
            $table->integer('payment_condition_id');//from collections
            $table->json('products');
            // json array
            //      uuid: product_id
            //      string: sku
            //      string: name
            //      integer: quantity
            //      double: unit_price
            //      double: iva                 
            //      double: discount (%)
            //      double: subtotal
            //      
            $table->string('notes');
            $table->boolean('status');
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
        Schema::dropIfExists('suppliers_orders');
    }
}
