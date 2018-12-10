<?php

use Illuminate\Database\Seeder;

class ConsecutivesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consecutives')->insert([
            [
                'id' => '33edadc3-475e-4c9a-9840-1e16030fc1a0',
                'initial_value' => 1,
                'final_value' => 1000,
                'prefix' => 'EN',
                'document_name' => 'inventory_movement_entry',
                'description' => 'Entradas'
            ],
            [
                'id' => '3eb1658e-3869-417f-b5be-a7a100038130',
                'initial_value' => 1,
                'final_value' => 1000,
                'prefix' => 'SA',
                'document_name' => 'inventory_movement_out',
                'description' => 'Salidas'
            ],
        ]);
    }
}
