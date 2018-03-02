<?php

use Illuminate\Database\Seeder;

class GeolocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('geolocations')->insert([
            [
                'country_id' => 1, 
                'department_id' => 1, 
                'city_id' => 1,
                'dane_code' => 1
            ],
        ]);
    }
}
