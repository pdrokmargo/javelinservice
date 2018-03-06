<?php

use Illuminate\Database\Seeder;

class WarehousesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('warehouses')->insert([
            [
                'id' => 'b51edb72-be8e-47cc-aaa2-ce2b2f0910ea', 'warehouse_type_id' => 20, 'company_id' => 1, 'name' => 'Bodega Punto 46', 'description' => 'Almacenamiento mercancía para dispensación', 'geolocation_id' => 1, 'state' => true
            ],
        ]);
    }
}
