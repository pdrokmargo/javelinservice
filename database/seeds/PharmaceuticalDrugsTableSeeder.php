<?php

use Illuminate\Database\Seeder;

class PharmaceuticalDrugsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pharmaceutical_drugs')->insert([
            [
                'id' => '222eb1a2-3704-4c27-b01d-7888e828b812', 
                'name' => 'Acetaminofén', 
                'concentration' => '500', 
                'dosage_form_id' => 90, 
                'routes_administration_id' => 35, 
                'is_controlled' => false, 
                'is_monopoly' => false, 
                'is_pos' => true, 
                'is_pos' => true, 
                'storage_condition_id' => 114
            ],
        ]);
    }
}
