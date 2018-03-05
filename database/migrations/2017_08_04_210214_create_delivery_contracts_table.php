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
            $table->boolean('fee_collecting');
            $table->json('event');//If it is different than null, there is an event contract
            // json structure:event_contract
            //         uuid:id
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         double:budget
            //         integer:percent_alert
            //         integer:percent_unable
            //         boolean:preauth
            //         integer:preauth_length
            //         string:preauth_char_type //Options: numérico, alfabético y alfanumérico
            //         json array: delivery_points
            //             uuid:delivery_point_id
            //             json array: products
            //                 uuid:product_id
            //                 double:fare
            $table->json('capita');//If it is different than null, there is a capita contract
            // json structure:capita_contract
            //         uuid:id
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         integer:percent_alert
            //         integer:percent_unable
            //         integer:affiliates_total_qty -> read only
            //         json:affiliates_qty_history_record
            //             integer:affiliates_number
            //             date:date
            //         json array: delivery_points
            //             uuid:delivery_point_id
            //             integer:affiliates_qty
            //             double:capita_value
            //             json array: products
            //                 uuid:product_id
            $table->json('pgp');//If it is different than null, there is a pgp contract
            // json structure:pgp_contract
            //         uuid:id
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         double:budget
            //         integer:percent_alert
            //         integer:percent_unable
            //         json array: Delivery Points
            //             uuid:delivery_point_id
            //             json Array:products
            //                 uuid: product_id
            $table->boolean('pharmadrug_control');
            $table->boolean('pharmadrug_monopoly');
            $table->boolean('cooled_products');
            $table->json('ips'); //It comes from ID:28 IPS_NETWORK collections values 
            /*json structure: array
                integer: ips_id
            */
            $table->json('conditional_alerts');
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
