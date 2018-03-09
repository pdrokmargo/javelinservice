<?php

use Illuminate\Database\Seeder;

class UsersPrivilegesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users_privileges')->insert([
            ['user_id' => '7ddc0553-0b27-49f1-a1b7-445777a72d0e', 'user_profile_id' => 1, 'company_id' => '1'],
            ['user_id' => '1a4318ab-b672-438e-a244-69ca14a81fb5', 'user_profile_id' => 7, 'company_id' => '1']        ]);
    }
}
