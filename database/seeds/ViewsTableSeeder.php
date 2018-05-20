<?php

use Illuminate\Database\Seeder;

class ViewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    DB::table('views')->insert([        
    /*01*/['view_parent_id' => 0, 'have_child' => true,  'title' => 'Administración',            'link' => '',                    'icon' => 'settings',   'description' => '', 'load_children' => '', 'show_menu' => true ],    
    /*02*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Usuarios',                  'link' => 'users',               'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*03*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Perfiles de Usuario',       'link' => 'user-profiles',       'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*04*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Configuración',             'link' => 'configuration',       'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*05*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Auditoría',                 'link' => 'audit',               'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*06*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Mi perfil',                 'link' => 'my-profile',          'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => false],
    /*07*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Terceros',                  'link' => 'stakeholders',        'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*08*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Bodegas',                   'link' => 'warehouse',           'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*09*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Empresas',                  'link' => 'company',             'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],      
    /*10*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Centros de Operaciones',    'link' => 'operations-centres',  'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],        
    /*11*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Centros de Costos',         'link' => 'costs-centres',       'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*12*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Productos',                 'link' => 'product',             'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*13*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Medicamentos',              'link' => 'pharmaceutical-drug', 'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*14*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Contratos de dispensación', 'link' => 'delivery-contracts',  'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*15*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Puntos de dispensación',    'link' => 'delivery-points',     'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*16*/['view_parent_id' => 1, 'have_child' => false, 'title' => 'Afiliados',                 'link' => 'affiliates',          'icon' => '',           'description' => '', 'load_children' => '', 'show_menu' => true ]
        
    ]);
    }
}
