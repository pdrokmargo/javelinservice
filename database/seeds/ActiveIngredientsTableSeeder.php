<?php

use Illuminate\Database\Seeder;

class ActiveIngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('active_ingredients')->insert([
            [ 
                'id' => '708bf446-fd91-4578-ae22-756ca5522ce1', 
                'name' => 'Acetaminofen'
            ],
        ]);
    }
}