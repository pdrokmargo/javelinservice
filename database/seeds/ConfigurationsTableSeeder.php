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
                'value' => '{"source":"javelin.myecolombia.com.co"}',
                'company_id' => 1
            ],
            [
                'code' => 'active_delivery_point',
                'display' => 'Punto de Dispensación Activo',
                'value' => '{"delivery_point_id":"dcaf7460-d0f0-11e8-afb0-17b061a62e2e"}',
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
                'value' => '[{"table_name":"affiliates", "up":"true", "down":"true", "last_down":"", "last_down": ""}, 
                {"table_name":"products", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"active_ingredients", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"active_ingredients_pharmaceutical_drugs", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"collections", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"collections_values", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"companies", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"consecutives", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"contract_points", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"costscentres", "up":"false", "down":"true", "last_down": ""}, 
                {"table_name":"customers", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"comercial_stakeholders_info", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"deliveries", "up":"true", "down":"false", "last_down": ""},
                {"table_name":"deliveries_details", "up":"true", "down":"false", "last_down": ""},
                {"table_name":"delivery_contracts", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"delivery_points", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"employees", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"geolocations", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"health_record_holders", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"importers", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"inventory_adjustments", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_audit", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_audit_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_movements", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"inventory_movements_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"laboratories", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"makers", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"medical_diagnosis", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"oauth_clients", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"oauth_personal_access_clients", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"oauth_refresh_tokens", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"oauth_access_tokens", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"oauth_auth_codes", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"operationscentres", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"pharmaceutical_drugs", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"pharmaceutical_drugs_products", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"prices_contracts", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"privileges", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"products_contracts", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"remissions_goods", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"remissions_goods_details", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"sales_representatives", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"stakeholders_info", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"stocks_products", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"suppliers", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"suppliers_orders", "up":"false", "down":"false", "last_down": ""},
                {"table_name":"suppliers_quotes", "up":"false", "down":"false", "last_down": ""},
                {"table_name":"scheduled_deliveries", "up":"true", "down":"false", "last_down": ""},
                {"table_name":"user_profiles", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"users", "up":"true", "down":"true", "last_down": ""},
                {"table_name":"users_privileges", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"views", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"view_actions", "up":"false", "down":"true", "last_down": ""},
                {"table_name":"warehouses", "up":"false", "down":"true"}]',
                'company_id' => 1
            ],
        ]);
    }
}
