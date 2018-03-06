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
                'name' => 'Nueva EPS Evento y Cápita', 
                'description' => '', 
                'population_type_id' => 73, 
                'fee_collecting' => false, 
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
                    "auth_char_type" : 75, 
                    "delivery_points": 
                    [
                        {
                            "delivery_point_id": "b225b683-98c1-4e3d-be21-3230122ff718", 
                            "products": [
                                {
                                    "product_id": "54f09b52-16ac-45ba-a748-2eee493cca86",
                                    "fare": 2600
                                }
                            ]
                        }
                    ]
                }',
                'capita' => '{}',
                'pgp' => '{}',
                'pharmadrug_control' => false,
                'pharmadrug_monopoly' => false,
                'cooled_products' => false,
                'ips' => '[
                    {"ips_id" : 69}, 
                    {"ips_id" : 70}, 
                    {"ips_id" : 71 }
                ]',
                'conditional_alerts' => '{}',
                'state' => true,
            ],
        ]);
    }
}
