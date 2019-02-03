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
            ['up_code' => 'SUPER_ADMIN',    'up_description' => 'Super Admin', 'up_state' => true, 'delete' => false],
            ['up_code' => 'ADMIN',          'up_description' => 'Admin',       'up_state' => true, 'delete' => false],
            ['up_code' => 'EMPLOYEE',       'up_description' => 'Empleado',    'up_state' => true, 'delete' => false],
            ['up_code' => 'CLIENT',         'up_description' => 'Cliente',     'up_state' => true, 'delete' => false],
            ['up_code' => 'PROVIDER',       'up_description' => 'Proveedor',   'up_state' => true, 'delete' => false],
            ['up_code' => 'REGENT',         'up_description' => 'Regente',     'up_state' => true, 'delete' => false],
            ['up_code' => 'AUDITOR',        'up_description' => 'Auditor',     'up_state' => true, 'delete' => false]
        ]);
    }
}
