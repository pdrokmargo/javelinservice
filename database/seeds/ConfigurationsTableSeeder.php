<?php

use Illuminate\Database\Seeder;

class ConfigurationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('configurations')->delete();
        // $delivery_point = new \App\Models\DeliveryPoint;
        // $delivery_point->setConnection('main');

        // Here goes the token assigned when delivery point is created. 
        // $delivery_point = \App\Models\DeliveryPoint::find('203830c0-5e66-11ea-94de-ad04bd0c1d1d');
        // $delivery_point = DB::connection('main')->table('delivery_points')->where('token', 'hZUbaSM2')->first();
        // dump($delivery_point);

        $syncs = \App\Models\Configuration::where('code', 'syncs')->first();
        DB::table('configurations')->insert([
            // [
            //     'code' => 'business',
            //     'display' => 'Empresa',
            //     'value' => '{"name":"M&E","nit":"900088884878","logo":null,"geolocation_id":1,"address":"Calle XX # XX - XX","phone_number":"3998855","tax_regime_id":17,"big_contributor":"true","selfholder":"true","economic_activity":"Medicamentos","website":"www.medicamentosyequipos.com"}',
            //     'company_id' => 1
            // ],
            [
                'code' => 'main_source',
                'display' => 'Fuente Principal',
                'value' => '{"source":"https://javelinservice.herokuapp.com"}',
                'company_id' => 1
            ],
            [
                'code' => 'mipresSecondToken',
                'display' => 'MiPres',
                'value' => '{"token":"R_OS94Vv4tVsTs8uJSpTGd8QsHB4SaDouAHcDV_3KE4="}',
                'company_id' => 1
            ],
            [
                'code' => 'role_mode',
                'display' => 'Rol Aplicativo',
                'value' => '{"key":"main_global"}', //delivery_point, main_global, main_local
                'company_id' => 1
            ],
            [
                'code' => 'active_delivery_point',
                'display' => 'Punto de Dispensación Activo',
                'value' => '{"delivery_point_id":""}',
                'company_id' => 1
            ],
            [
                'code' => 'last_sync',
                'display' => 'Última Sincronización',
                'value' => '{"date":""}',
                'company_id' => 1
            ],
            [
                'code' => 'syncs',
                'display' => 'Sincronización',
                'value' => '[{"table_name":"affiliates", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"products", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"active_ingredients", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"active_ingredients_pharmaceutical_drugs", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"collections", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"collections_values", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"companies", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"consecutives", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"contract_points", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"costscentres", "up":"true", "down":"true", "last_down": ""}, 
                {"table_name":"customers", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"comercial_stakeholders_info", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"deliveries", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"deliveries_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"delivery_contracts", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"delivery_points", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"employees", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"geolocations", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"health_record_holders", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"importers", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_adjustments", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_audit", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_audit_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_movements", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_movements_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"laboratories", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"makers", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"medical_diagnosis", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"oauth_clients", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"oauth_personal_access_clients", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"oauth_refresh_tokens", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"oauth_access_tokens", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"oauth_auth_codes", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"operationscentres", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"pharmaceutical_drugs", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"pharmaceutical_drugs_products", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"prices_contracts", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"privileges", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"products_contracts", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"remissions_goods", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"remissions_goods_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"sales_representatives", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"stakeholders_info", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"stocks_products", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"suppliers", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"suppliers_orders", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"suppliers_quotes", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"scheduled_deliveries", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"user_profiles", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"users", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"users_privileges", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"views", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"view_actions", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"warehouses", "up":"true", "down":"true"}]',
                'company_id' => 1
            ],
        ]);
    }
}
