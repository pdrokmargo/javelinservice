<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('stakeholder_info_id'); 
            $table->integer('customer_class_id')->nullable();
            $table->uuid('sales_representative_id');
            $table->json('purchases_contact')->nullable();
            /*json structure
                string:name_purchases_contact
                string:phone_purchases_contact
                string:email_purchases_contact
            */
            $table->decimal('global_discount')->default(0);
            $table->integer('debt_type_id'); 
            $table->integer('payment_condition_id')->nullable();    
            $table->decimal('discount_early_payment')->nullable();
            $table->integer('days_early_payment')->nullable();
            $table->decimal('credit_limit');
            $table->boolean('credit_limit_blocking')->nullable();
            $table->boolean('late_payment_blocking')->nullable();
            $table->integer('days_grace')->nullable();
            $table->json('institutional_sale_contract')->nullable();
            /*json structure
                integer:contract_number
                string:contracting_entity
                date:issue_date
                date:expiration_date
                file:attachment
            */
            $table->json('controlled_resolution')->nullable();
            /*json structure:array
                integer:resolution_number
                date:issue_date
                date:expiration_date
                json_array:pharmaceutical_drugs[ids every pharmadrug]
                integer:shipping_point_id
                boolean:state
            */
            $table->json('monopoly_resolution')->nullable();
            /*json structure:array
                integer:resolution_number
                date:issue_date
                date:expiration_date
                json_array:pharmaceutical_drugs[ids every pharmadrug]
                integer:shipping_point_id
                boolean:state
            */
            $table->json('debt_contact');
            /*json structure
                string:name_debt_contact
                string:phone_debt_contact
                string:email_debt_contact
            */
            
            $table->json('shipping_points')->nullable();//
            /*json structure:array
                string:name
                string:address
                string:contact_person
                integer:geolocations_id
                string:neighborhood
                string:phone_number1
                string:phone_number2
                string:email
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
        Schema::dropIfExists('customers');
    }
}
