<?php

use Illuminate\Database\Seeder;

class DeliveryPointsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('delivery_points')->insert([
            [
                'id' => 'b225b683-98c1-4e3d-be21-3230122ff718', 
                'warehouse_id' => 'b51edb72-be8e-47cc-aaa2-ce2b2f0910ea', 
                'name' => 'Punto 46', 
                'description' => 'Punto de dispensación que sólo controla No POS', 
                'state' => true,
                'installed' => false,
                'delivery_point_group_id' => 74, 
                'company_id' => 1,
                'delivery_contracts' => '                 
                    [
                        {"delivery_contract_id":"011ecb81-6fa2-47ad-9fd0-e9d77a936536", "event":true, "capita":false, "pgp":false}
                    ]
                ' ,
                'users' => '
                    [
                        {"user_id":"1a4318ab-b672-438e-a244-69ca14a81fb5"}
                    ]
                '
            ],
        ]);
    }
}
