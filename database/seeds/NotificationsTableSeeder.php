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
                'user_id' => '7ddc0553-0b27-49f1-a1b7-445777a72d0e', 
                'url' => '#', 
                'caption' => 'Bienvenido', 
                'description' => 'Bienvenido al sistema.',
                'company_id' => 0
            ],
        ]);
    }
}
