<?php

use Illuminate\Database\Seeder;

class ActivitiesLogTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('activity_logs')->insert([
            /*01*/
            [ 
                'user_id' => 1, 
                'view_id' => 4, 
                'action' => 1, 
                'description' => 'Prueba', 
                'created_at' => '01/01/2017',
                'company_id' => 1
            ],
        ]);
    }
}
