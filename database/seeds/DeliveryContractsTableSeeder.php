<?php

use Illuminate\Database\Seeder;

class DeliveryContractsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('delivery_contracts')->insert([
            [
                "id"                    => "8d2ffac0-d0f1-11e8-bbf2-d575979ccc1e",
                "customer_id"           => "415df760-a1a8-4631-827b-73376dfb53e4",
                "name"                  => "Nombre contrato de dispensación",
                "description"           => "m Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik",
                "population_type_id"    => 72, 
                "delivery_points"       => '[{"id":"dcaf7460-d0f0-11e8-afb0-17b061a62e2e","warehouse_id":"d09e0580-c199-11e8-96b5-9fefccf7c7c3","company_id":1,"name":"Nombre punto de dispensaci\u00f3n 001","description":" as opposed to using 'Content here, content here', making it look","token":"Qg1rSjxg","delivery_point_group_id":74,"delivery_contracts":"[]","users":[{"user_id":"dae8a3b0-d0ec-11e8-b200-6f8262d6c226"},{"user_id":"c9a33790-d0eb-11e8-a8cf-51f38edfaf33"}],"installed":true,"state":true,"delete":false,"assigned_contracts":[],"assigned_users":[{"id":"dae8a3b0-d0ec-11e8-b200-6f8262d6c226","firstname":"User002","lastname":"User002","username":"userUser002","email":"user002@email.com","company_default_id":2,"user_profile_id":6,"status":true,"delete":false,"last_access":null,"url_profile_photo":null,"created_at":"2018-10-16 02:40:33","updated_at":"2018-10-16 02:40:33","usercompany":{"id":16,"user_id":"dae8a3b0-d0ec-11e8-b200-6f8262d6c226","user_profile_id":6,"company_id":2,"company":{"id":2,"name":"Asaudir","nit":"789798789","description":"sdsdfdsf","address":"Calle ","phone_number":"234345345","email":"pdro_kmargo@sdsdd.com","tax_regime_id":15,"big_contributor":true,"selfholder":true,"economic_activity":"fsdfsdfds","website":"r43rewg","state":true,"big_contributor_resolution":"45345","geolocation_id":1,"withholding_income_sales_id":21,"withholding_income_purchases_id":21,"withholding_vat_sales_id":21,"withholding_vat_purchases_id":21,"withholding_ica_sales_id":21,"withholding_ica_purchases_id":21,"delete":false,"geolocation":{"id":1,"country_id":7,"department_id":8,"city_id":11,"dane_code":1,"department":{"id":8,"collection_id":4,"parent_id":7,"code":"atlantico","value":"Atl\u00e1ntico"},"city":{"id":11,"collection_id":5,"parent_id":8,"code":"barranquilla","value":"Barranquilla"}}},"userprofile":{"id":6,"up_description":"Regente","up_state":true,"delete":false,"privileges":[]}}},{"id":"c9a33790-d0eb-11e8-a8cf-51f38edfaf33","firstname":"Usuario001","lastname":"Apellido001","username":"usuario01User","email":"usuario001@email.com","company_default_id":2,"user_profile_id":6,"status":true,"delete":false,"last_access":null,"url_profile_photo":null,"created_at":"2018-10-16 02:32:55","updated_at":"2018-10-16 02:32:55","usercompany":{"id":14,"user_id":"c9a33790-d0eb-11e8-a8cf-51f38edfaf33","user_profile_id":6,"company_id":2,"company":{"id":2,"name":"Asaudir","nit":"789798789","description":"sdsdfdsf","address":"Calle ","phone_number":"234345345","email":"pdro_kmargo@sdsdd.com","tax_regime_id":15,"big_contributor":true,"selfholder":true,"economic_activity":"fsdfsdfds","website":"r43rewg","state":true,"big_contributor_resolution":"45345","geolocation_id":1,"withholding_income_sales_id":21,"withholding_income_purchases_id":21,"withholding_vat_sales_id":21,"withholding_vat_purchases_id":21,"withholding_ica_sales_id":21,"withholding_ica_purchases_id":21,"delete":false,"geolocation":{"id":1,"country_id":7,"department_id":8,"city_id":11,"dane_code":1,"department":{"id":8,"collection_id":4,"parent_id":7,"code":"atlantico","value":"Atl\u00e1ntico"},"city":{"id":11,"collection_id":5,"parent_id":8,"code":"barranquilla","value":"Barranquilla"}}},"userprofile":{"id":6,"up_description":"Regente","up_state":true,"delete":false,"privileges":[]}}}],"warehouses":{"id":"d09e0580-c199-11e8-96b5-9fefccf7c7c3","warehouse_type_id":20,"company_id":1,"name":"Bodega Ci\u00e9naga","description":"hfgsdfhsfj","geolocation_id":1,"state":true,"delete":false,"geolocation":{"id":1,"country_id":7,"department_id":8,"city_id":11,"dane_code":1,"department":{"id":8,"collection_id":4,"parent_id":7,"code":"atlantico","value":"Atl\u00e1ntico"},"city":{"id":11,"collection_id":5,"parent_id":8,"code":"barranquilla","value":"Barranquilla"}}},"delivery_points_groups":{"id":74,"collection_id":30,"parent_id":0,"code":"zonaatlantico","value":"Zona Atl\u00e1ntico"},"delivery_point_id":"dcaf7460-d0f0-11e8-afb0-17b061a62e2e","event":true,"capita":true,"pgp":true}]',
                "pharmadrugs"           => '"[{\"id\":\"222eb1a2-3704-4c27-b01d-7888e828b812\",\"name\":\"Acetaminof\u00e9n\",\"routes_administration\":\"Oral\",\"dosage_form\":\"Tableta\",\"state\":true,\"is_pos\":true,\"concentration\":\"500 und\",\"pharmadrug_id\":\"222eb1a2-3704-4c27-b01d-7888e828b812\",\"event\":true,\"capita\":false,\"pgp\":false,\"fare\":\"1000\"}]"',
                "event"                 => '"{\"budget\":\"1\",\"percent_alert\":\"2\",\"percent_unable\":\"3\",\"perauth\":true,\"perauth_length\":\"10\",\"perauth_char_type\":75,\"contract_number\":\"Nombre del contrato 001\",\"contract_expiration_date\":\"2018-10-31T05:00:00.000Z\",\"contract_start_date\":\"2018-10-01T05:00:00.000Z\"}"',
                "capita"                => "{}",
                "pgp"                   => "{}",
                "ips"                   => '[{"id":71,"collection_id":28,"parent_id":0,"code":"hospitaluniversitario","value":"Hospital Universitario"}]',
                "conditional_alerts"    => '[]',
                'state'                 => true,
            ]
        ]);
    }
}
