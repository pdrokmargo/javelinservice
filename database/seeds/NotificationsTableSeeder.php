<?php

use Illuminate\Database\Seeder;

class NotificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notifications')->insert([
            [
                'user_id' => '1', 
                'url' => '#', 
                'caption' => 'Bienvenido', 
                'description' => 'Bienvenido al sistema.',
                'company_id' => 0
            ],
        ]);
    }
}
