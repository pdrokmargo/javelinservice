<?php

use Illuminate\Database\Seeder;

class ViewActionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('view_actions')->insert([        
            /*01*/['view_id' => 1, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*02*/['view_id' => 2, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*03*/['view_id' => 3, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*04*/['view_id' => 4, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*05*/['view_id' => 5, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],            
            /*07*/['view_id' => 7, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*08*/['view_id' => 8, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*09*/['view_id' => 9, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*10*/['view_id' => 10, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*11*/['view_id' => 11, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*12*/['view_id' => 12, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
            /*13*/['view_id' => 13, 'actions' => '[{"action":"Crear", "status":false}, {"action":"Leer", "status":false}, {"action":"Actualizar", "status":false}, {"action":"Eliminar", "status":false}]'],
        ]);
    }
}
