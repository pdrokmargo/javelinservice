<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class ViewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //Delete views table, then create, then populate.
      Schema::dropIfExists('views');      
      Schema::create('views', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('link');
            $table->string('icon');
            $table->string('description');
            $table->integer('view_parent_id')->default(0);
            $table->boolean('have_child');
            $table->string('load_children');
            $table->boolean('show_menu')->default(true);
        });

    DB::table('views')->insert([
    /*01*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Organización',              'link' => '',                       'icon' => 'business',               'description' => '', 'load_children' => '', 'show_menu' => true ], 
    /*02*/['view_parent_id' => 0, 'have_child' => false,    'title' => 'Terceros',                  'link' => 'stakeholders',           'icon' => 'supervised_user_circle', 'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*03*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Gestión Farmaceútica',                   'link' => '',                       'icon' => 'local_pharmacy',         'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*04*/['view_parent_id' => 0, 'have_child' => false,    'title' => 'Productos',                 'link' => 'product',                'icon' => 'donut_small',            'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*05*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Logística',                 'link' => '',                       'icon' => 'local_shipping',         'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*06*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Compras',                   'link' => '',                       'icon' => 'add_shopping_cart',      'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*07*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Ventas',                    'link' => '',                       'icon' => 'flare',                  'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*08*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Dispensación',              'link' => '',                       'icon' => 'store_mall_directory',   'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*09*/['view_parent_id' => 0, 'have_child' => true,     'title' => 'Seguridad',                 'link' => '',                       'icon' => 'fingerprint',            'description' => '', 'load_children' => '', 'show_menu' => true ],
    /*10*/['view_parent_id' => 0, 'have_child' => false,    'title' => 'Configuración',             'link' => 'configuration',          'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => false ],
    /*11*/['view_parent_id' => 0, 'have_child' => false,    'title' => 'Mi perfil',                 'link' => 'my-profile',             'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => false ],
    /* 01 */
          ['view_parent_id' => 1, 'have_child' => false,    'title' => 'Empresas',                  'link' => 'company',                'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],      
          ['view_parent_id' => 1, 'have_child' => false,    'title' => 'Centros de Operaciones',    'link' => 'operations-centres',     'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],        
          ['view_parent_id' => 1, 'have_child' => false,    'title' => 'Centros de Costos',         'link' => 'costs-centres',          'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 1, 'have_child' => false,    'title' => 'Bodegas',                   'link' => 'warehouse',              'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 1, 'have_child' => false,    'title' => 'Puntos de dispensación',    'link' => 'delivery-points',        'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
    /* 03 */
          ['view_parent_id' => 3, 'have_child' => false,    'title' => 'Medicamentos',              'link' => 'pharmaceutical-drug',    'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 3, 'have_child' => false,    'title' => 'MiPRES Proveedor',          'link' => 'mipres-supplier',    'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 3, 'have_child' => false,    'title' => 'MiPres Dispensación',       'link' => 'mipres-delivery',    'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 3, 'have_child' => false,    'title' => 'MiPres Admin',       'link' => 'mipres-admin',    'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
    /* 05 */
      ['view_parent_id' => 5, 'have_child' => false, 'title' => 'Ingresos',                     'link' => 'inventory-movement-entry',     'icon' => '',     'description' => '', 'load_children' => '', 'show_menu' => true ],
      ['view_parent_id' => 5, 'have_child' => false, 'title' => 'Salidas',                      'link' => 'inventory-movement-out',       'icon' => '',     'description' => '', 'load_children' => '', 'show_menu' => true ],
      ['view_parent_id' => 5, 'have_child' => false, 'title' => 'Ajustes de inventario',        'link' => 'inventory-adjustments',        'icon' => '',     'description' => '', 'load_children' => '', 'show_menu' => true ],
      ['view_parent_id' => 5, 'have_child' => false, 'title' => 'Auditoría de inventario',      'link' => 'inventory-audit',              'icon' => '',     'description' => '', 'load_children' => '', 'show_menu' => true ],
      ['view_parent_id' => 5, 'have_child' => false, 'title' => 'Existencias',                  'link' => 'stocks',                       'icon' => '',     'description' => '', 'load_children' => '', 'show_menu' => true ],

    /* 06 */    
          ['view_parent_id' => 6, 'have_child' => false,    'title' => 'Cotización a proveedores',  'link' => 'suppliers-quotes',       'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
          ['view_parent_id' => 6, 'have_child' => false,    'title' => 'Orden de compra',           'link' => 'suppliers-orders',       'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
    /* 07 */ 
         ['view_parent_id' => 7, 'have_child' => false,     'title' => 'Cotización a clientes',     'link' => 'customers-quotes',       'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 7, 'have_child' => false,     'title' => 'Remisiones',                'link' => 'remission-goods',        'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 7, 'have_child' => false,     'title' => 'Facturación',               'link' => 'billing',      'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
    /* 08 */ 
         ['view_parent_id' => 8, 'have_child' => false,     'title' => 'Contratos de dispensación', 'link' => 'delivery-contracts',     'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 8, 'have_child' => false,     'title' => 'Afiliados',                 'link' => 'affiliates',             'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 8, 'have_child' => false,     'title' => 'Dispensación',                 'link' => 'delivery',             'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 8, 'have_child' => false,     'title' => 'Entregas Programadas',                 'link' => 'scheduled-deliveries',             'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
    /* 09 */ 
         ['view_parent_id' => 9, 'have_child' => false,     'title' => 'Usuarios',                  'link' => 'users',                  'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 9, 'have_child' => false,     'title' => 'Perfiles de Usuario',       'link' => 'user-profiles',          'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],
         ['view_parent_id' => 9, 'have_child' => false,     'title' => 'Logs',                      'link' => 'audit',                  'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ],

      //    ['view_parent_id' => 9, 'have_child' => false,     'title' => 'Logs',                      'link' => 'audit',                  'icon' => '',                       'description' => '', 'load_children' => '', 'show_menu' => true ]

    ]);
    }
}
