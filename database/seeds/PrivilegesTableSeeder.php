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
            ['view_id' => 1,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 2,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 3,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 4,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 5,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 6,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 7,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 8,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 9,    'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 10,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 11,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 12,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 13,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 14,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 15,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 16,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 17,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 18,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 19,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 20,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 21,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 22,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 23,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 24,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 25,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 26,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 27,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 28,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 29,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 30,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 31,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 32,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 33,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 34,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 35,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 36,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
            ['view_id' => 37,   'user_profile_id' => 1, 'actions' => '[{"action":"Crear", "status":true}, {"action":"Leer", "status":true}, {"action":"Actualizar", "status":true}, {"action":"Eliminar", "status":true}]'],
        ]);
    }
}