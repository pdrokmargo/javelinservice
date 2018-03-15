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
                'id' => '011ecb81-6fa2-47ad-9fd0-e9d77a936536', 
                'customer_id' => '0deae636-66a2-4401-b784-6f7a2889dace', 
                'name' => 'Nueva EPS Evento', 
                'description' => '', 
                'population_type_id' => 73, 
                'fee_collecting' => false, 
                'delivery_points' => '[{"delivery_point_id":"", "event":true, "capita": true, "pgp":false}]',
                'pharmadrugs' => '[{"pharmaceutical_drug_id":"222eb1a2-3704-4c27-b01d-7888e828b812", "event":true, "fare":120 "capita": true, "pgp":false}]',
                'event' => '
                {
                    "contract_number" : "123456-4", 
                    "contract_start_date" : "01/01/2018", 
                    "contract_expiration_date" : "31/12/2018", 
                    "budget" : "400000000", 
                    "percent_alert" : "40", 
                    "percent_unable" : "60", 
                    "auth" : "true", 
                    "auth_length" : 6,
                    "auth_char_type" : 75}',
                'capita' => '{
                    "contract_number" : "123456-4", 
                    "contract_start_date" : "01/01/2018", 
                    "contract_expiration_date" : "31/12/2018", 
                    "percent_alert" : "40", 
                    "percent_unable" : "60", 
                    "affiliates_total_qty": 3000,
                    "affiliates_qty_history_record":[{"geolocation_id":1, "affiliates_number": 1000, "date": "01/01/2018"}],
                    "detailed_capita":[{"geolocation_id":1, "affiliates_number": 1000, "fare": 1800}]}',
                'pgp' => '{}',
                'ips' => '[
                    {"ips_id" : 69}, 
                    {"ips_id" : 70}, 
                    {"ips_id" : 71}]',
                'conditional_alerts' => '{}',
                'state' => true,
            ],
        ]);
    }
}
