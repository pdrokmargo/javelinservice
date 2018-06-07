<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('stakeholder_info_id'); 
            $table->integer('supplier_class_id');
            $table->decimal('global_discount',12,2)->default(0);
            $table->integer('payment_condition_id');
            $table->boolean('purchase_order')->default(false);

            $table->decimal('credit_limit', 12, 2)->nullable();
            
            $table->integer('days_early_payment')->nullable();
            $table->decimal('discount_early_payment',12,2)->nullable();
            $table->integer('payment_method_id');
            $table->integer('days_grace')->nullable();
            $table->json('bank_accounts')->nullable();//array banks accounts
            /*json structure:array
                integer:bank_account_id
            */
            $table->json('sales_contact');
            /*json structure
                string:name_sales_contact
                string:phone_sales_contact
                string:email_sales_contact
            */
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
        Schema::dropIfExists('suppliers');
    }
}
