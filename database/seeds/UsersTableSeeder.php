<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'id' => '7ddc0553-0b27-49f1-a1b7-445777a72d0e',
                'firstname' => 'Pedro', 
                'lastname' => 'Camargo Cotes', 
                'username' => 'pdrokmargo', 
                'email' => 'pdro_kmargo@hotmail.com', 
                'password' => bcrypt('123456'), 
                'user_profile_id' => '1',
                'company_default_id' => '1'
            ],
            [
                'id' => '1a4318ab-b672-438e-a244-69ca14a81fb5',
                'firstname' => 'Oscar', 
                'lastname' => 'Lechuga', 
                'username' => 'oscar.lechuga', 
                'email' => 'oscar@myecolombia.com.co',
                'password' => bcrypt('111111'), 
                'user_profile_id' => '6',
                'company_default_id' => '1'
            ]
        ]);
    }
}
