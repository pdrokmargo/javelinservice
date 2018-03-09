<?php

use Illuminate\Database\Seeder;

class UserProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_profiles')->insert([
            ['up_description' => 'Super Admin', 'up_state' => true],
            ['up_description' => 'Admin', 'up_state' => true],
            ['up_description' => 'Empleado', 'up_state' => true],
            ['up_description' => 'Cliente', 'up_state' => true],
            ['up_description' => 'Proveedor', 'up_state' => true],
            ['up_description' => 'Regente', 'up_state' => true]
        ]);
    }
}
