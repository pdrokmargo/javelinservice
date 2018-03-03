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
                'country_id' => 7, 
                'department_id' => 8, 
                'city_id' => 11,
                'dane_code' => 1
            ],
        ]);
    }
}
