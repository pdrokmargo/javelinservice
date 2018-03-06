<?php

use Illuminate\Database\Seeder;

class ManufacturersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('makers')->insert([
            [
                'id' => '256af97f-c1f0-41d0-a32b-f8bfc14cb6fb', 'stakeholder_info_id' => '453aad81-2d04-4fa5-8446-21de3d242c92'
            ],
        ]);
    }
}
