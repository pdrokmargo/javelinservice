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
                'delivery_contracts' => '
                { 
                    [{"delivery_contract_name":"Nueva EPS Evento y Cápita"}]
                }' 
            ],
        ]);
    }
}
