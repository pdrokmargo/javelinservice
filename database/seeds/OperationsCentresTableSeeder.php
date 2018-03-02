<?php

use Illuminate\Database\Seeder;

class OperationsCentresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('operationscentres')->insert([
            [//default operations centre
                'name' => 'Sede Principal', 
                'code' => 'pal',
                'description' => 'Sede principal desde donde se ejecutan las operaciones fundamentales', 
                'address' => 'Calle 99 # 99 - 99', 
                'phone_number' => 3889977, 
                'geolocation_id' => 1, //Barranquilla
                'operationscentregroup_id' => 25, //Default
                'company_id' => 1, //Google
                'state' => 'true'
            ],
        ]);
    }
}
