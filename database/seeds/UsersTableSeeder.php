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
                'user_profile_id' => '1'
            ],
        ]);
    }
}
