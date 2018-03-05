<?php

use Illuminate\Database\Seeder;

class PrivilegesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('privileges')->insert([
            ['view_id' => 1, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 2, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 3, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 4, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 5, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 6, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 7, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 8, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 9, 'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 10, 'user_profile_id' => 1,'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 11, 'user_profile_id' => 1,'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 12, 'user_profile_id' => 1,'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 13, 'user_profile_id' => 1,'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 14, 'user_profile_id' => 1,'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
        ]);
    }
}
