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
                'firstname' => 'Pedro', 
                'lastname' => 'Camargo Cotes', 
                'username' => 'pdrokmargo', 
                'email' => 'pdro_kmargo@hotmail.com', 
                'password' => bcrypt('123456'), 
                'user_profile_id' => '1',
                'company_default_id' => '1'
            ],
            [
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
