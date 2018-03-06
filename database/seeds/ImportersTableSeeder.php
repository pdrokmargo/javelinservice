<?php

use Illuminate\Database\Seeder;

class ImportersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('importers')->insert([
            [
                'id' => '31ff9e89-7c4e-4d5b-9952-b0224ab6b5c8', 'stakeholder_info_id' => 'a929763b-d7b1-47f1-8579-bb45b7ee48ed'
            ],
        ]);
    }
}
