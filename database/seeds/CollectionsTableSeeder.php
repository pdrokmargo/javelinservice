<?php

use Illuminate\Database\Seeder;

class CollectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('collections')->insert([
            /*1*/['name'=>'PRIVILEGES',          'description' => 'Privilegios',             'syscollection' => true],
            /*2*/['name'=>'GENDER',              'description' => 'Géneros',                 'syscollection' => true],
            /*3*/['name'=>'COUNTRIES',           'description' => 'Países',                  'syscollection' => true],
            /*4*/['name'=>'DEPARTAMENT',         'description' => 'Departamentos',           'syscollection' => true],
            /*5*/['name'=>'CITIES',              'description' => 'Ciudades',                'syscollection' => true],
            /*6*/['name'=>'TYPES_OF_DOCUMENTS',  'description' => 'Tipos de documento',      'syscollection' => true],
            /*7*/['name'=>'TAX_REGIME',          'description' => 'Régimen de impuestos',    'syscollection' => false],
            /*8*/['name'=>'PORTFOLIO_TYPE',      'description' => 'Tipo de cartera',         'syscollection' => false],
            /*9*/['name'=>'WAREHOUSE_TYPE',      'description' => 'Tipo de bodega',          'syscollection' => true],
            /*10*/['name'=>'WITHHOLDING_TYPE',    'description' => 'Tipo de retención',       'syscollection' => true],
            /*11*/['name'=>'OPERATIONS_CENTRE_GROUPS',    'description' => 'Grupos de centro de operaciones',       'syscollection' => true],
            /*12*/['name'=>'COSTS_CENTRE_GROUPS',    'description' => 'Grupos de centro de costos',       'syscollection' => true],
            /*13*/['name'=>'COSTS_CENTRE_TYPES',    'description' => 'Tipo de centro de costos',       'syscollection' => true],
            /*14*/['name'=>'SUPPLIERS_CLASS',    'description' => 'Clase de proveedores',       'syscollection' => true],
            /*15*/['name'=>'CUSTOMERS_CLASS',    'description' => 'Clase de clientes',       'syscollection' => true],
            /*16*/['name'=>'PERSONS_TYPE',    'description' => 'Tipos de persona',       'syscollection' => true],
            /*17*/['name'=>'STAKEHOLDERS_CLASS',    'description' => 'Clase de terceros',       'syscollection' => true],
            /*18*/['name'=>'BANKS',    'description' => 'Entidades financieras',       'syscollection' => true],
            /*19*/['name'=>'BANK_ACCOUNT_TYPE',    'description' => 'Tipo de cuentas bancarias',       'syscollection' => true],
            /*20*/['name'=>'UNITS_TYPE',    'description' => 'Tipo de unidades',       'syscollection' => true],
            /*21*/['name'=>'MEASUREMENT_UNIT',    'description' => 'Unidad de medida',       'syscollection' => true],
            /*22*/['name'=>'PACKAGING_UNIT',    'description' => 'Unidad de contenido',       'syscollection' => true],
            /*23*/['name'=>'PHARMACEUTICAL_FORM',    'description' => 'Forma farmacéutica',       'syscollection' => true],
            /*24*/['name'=>'PRODUCT_TYPE',    'description' => 'Tipo de producto',       'syscollection' => true],
            /*25*/['name'=>'ROUTES_ADMINISTRATION',    'description' => 'vias de administración',       'syscollection' => true],
            /*26*/['name'=>'STORAGE_CONDITION',    'description' => 'condiciones de almacenamiento',       'syscollection' => true],
            /*27*/['name'=>'PAYMENT_CONDITION',    'description' => 'condiciones de pago',       'syscollection' => true],
            /*28*/['name'=>'IPS_NETWORK',    'description' => 'Red Adscrita',       'syscollection' => true],
            /*29*/['name'=>'POPULATION_TYPE',    'description' => 'Tipo de Población',       'syscollection' => true],
            /*30*/['name'=>'DELIVERY_POINTS_GROUPS',    'description' => 'Grupos de Puntos de Dispensación',       'syscollection' => true],
            /*31*/['name'=>'PREAUTH_CHAR_TYPE',    'description' => 'Tipo de Caracteres de Autorización',       'syscollection' => true],
            /*32*/['name'=>'PAYMENT_METHOD',    'description' => 'Método de pago',       'syscollection' => true],
            /*33*/['name'=>'CONTENT_UNIT',    'description' => 'Unidad de contenido',       'syscollection' => true],
            /*34*/['name'=>'AFFILIATE_TYPE',    'description' => 'Tipo de afiliado',       'syscollection' => true],
            /*35*/['name'=>'AFFILIATE_CONDITION',    'description' => 'Condición del usuario',       'syscollection' => true],
            /*36*/['name'=>'PUBLIC_HEALTH_CONDITION',    'description' => 'Condición salud pública',       'syscollection' => true],
            /*37*/['name'=>'INVENTORY_MOVEMENT_TYPE',    'description' => 'Tipo de movimiento de inventario',       'syscollection' => true],
            /*38*/['name'=>'INVENTORY_ENTRY_TYPE',    'description' => 'Tipo de entrada de inventario',       'syscollection' => true],
            /*39*/['name'=>'INVENTORY_OUT_TYPE',    'description' => 'Tipo de salida de inventario',       'syscollection' => true],
            /*40*/['name'=>'INVENTORY_ADJUSTMENT_TYPE',    'description' => 'Tipo de salida de inventario',       'syscollection' => true],
        ]);
        
    }
}




