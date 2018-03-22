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
            $table->integer('company_id');
            $table->string('name');
            $table->string('description');
            $table->integer('population_type_id'); //Tipo de Población: Subsidiado, Contributivo
            $table->json('delivery_points');
            // json array
            //      uuid: delivery_point_id
            //      boolean: event
            //      boolean: capita
            //      boolean: pgp
            $table->json('pharmadrugs');
            // json array
            //      uuid: pharmaceutical_drug_id
            //      boolean: event
            //      decimal: fare
            //      boolean: capita
            //      boolean: pgp
            $table->json('event');//If it is different than null, there is an event contract
            // json structure:event_contract
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         double:budget
            //         integer:percent_alert
            //         integer:percent_unable
            //         boolean:auth
            //         integer:auth_length
            //         string:auth_char_type //Options: numérico, alfabético y alfanumérico from collections auth_char_type
            $table->json('capita');//If it is different than null, there is a capita contract
            // json structure:capita_contract
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         integer:percent_alert
            //         integer:percent_unable
            //         integer:affiliates_total_qty -> read only
            //         json array:affiliates_qty_history_record
            //             integer:geolocation_id
            //             integer:affiliates_number
            //             date:date
            //         json array:detailed_capita
            //             integer:geolocation_id
            //             integer:affiliates_number
            //             decimal:capita_fare
            $table->json('pgp');//If it is different than null, there is a pgp contract
            // json structure:pgp_contract
            //         string:contract_number
            //         date:contract_start_date
            //         date:contract_expiration_date
            //         double:budget
            //         integer:percent_alert
            //         integer:percent_unable
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
        Schema::dropIfExists('delivery_contracts');
    }
}
