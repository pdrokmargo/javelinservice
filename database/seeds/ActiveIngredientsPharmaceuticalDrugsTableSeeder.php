<?php

use Illuminate\Database\Seeder;

class ActiveIngredientsPharmaceuticalDrugsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('active_ingredients_pharmaceutical_drugs')->insert([
            [ 
                'active_ingredient_id' => '708bf446-fd91-4578-ae22-756ca5522ce1', 
                'pharmaceutical_drug_id' => '222eb1a2-3704-4c27-b01d-7888e828b812'
            ],
        ]);
    }
}
