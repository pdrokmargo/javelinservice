<?php

use Illuminate\Database\Seeder;

class SuppliersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers')->insert([
            [
                'id' => 'f73bb925-0ee9-4fe9-afbd-c27f8113a627', 'stakeholder_info_id' => 'dc9b5e0c-06a6-4170-8ef0-74bbffec6a02'
            ],
        ]);
    }
}
