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
            ['user_id' => 1, 'user_profile_id' => 1, 'company_id' => '1']
        ]);
    }
}
