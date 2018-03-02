<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveryContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_contracts', function (Blueprint $table) {
            $table->uuid('id');
            $table->uuid('customer_id'); // A customer stakeholder only
            $table->string('name');
            $table->string('description');
            $table->integer('population_type_id'); //Tipo de Población: Subsidiado, Contributivo
            $table->json('contracts');//It defines if the contract is per capita, per event, PGP or combinations between them.
            /*json structure
                json structure:event_contract
                    uuid:id
                    string:contract_number
                    date:contract_start_date
                    date:contract_expiration_date
                    json array: Delivery Points
                        uuid:delivery_point_id
                        json array: products
                            uuid:product_id
                            double:fare
                    double:budget
                    boolean:preauth
                    json:preauth_params
                        integer:length
                        string:char_type //Options: numérico, alfabético y alfanumérico
                json structure:capita_contract
                    uuid:id
                    string:contract_number
                    date:contract_start_date
                    date:contract_expiration_date
                    json array: Delivery Points
                        uuid:delivery_point_id
                        integer:affiliates_qty
                        double:capita_value
                        json array: products
                            uuid:product_id
                    integer:affiliates_total_qty
                    json:affiliates_qty_history_record
                        integer:affiliates_number
                        date:date
                    double:global_capita_value
                json structure:pgp_contract
                    uuid:id
                    string:contract_number
                    date:contract_start_date
                    date:contract_expiration_date
                    double:budget
                    boolean:pharmadrug_control
                    boolean:pharmadrug_monopoly
                    boolean:cooled_products
                    json array: Delivery Points
                        uuid:delivery_point_id
                        json Array:products
                            uuid: product_id
            */
            $table->boolean('fee_collecting');
            $table->boolean('event');
            $table->boolean('capita');
            $table->boolean('pgp');
            $table->uuid('ips_id'); //It comes from Red Adscrita stakeholders 
            $table->json('products'); // Productos que fueron contratados y son comunes a nivel general en todos los puntos y modalidades de contrato
            /*json structure: array
                uuid: product_id
            */
            $table->json('conditional_alerts'); //Esta opción no quiero que esté visible de momento
            /*json structure: array // Ejemplo: Contrato desactivado porque PGP supera el 60% del presupuesto.
                date:issue_date
                string: description
            */
            $table->boolean('state');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivery_contracts');
    }
}
