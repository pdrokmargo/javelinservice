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
            /*22*/['name'=>'CONTENT_UNIT',    'description' => 'Unidad de contenido',       'syscollection' => true],
            /*23*/['name'=>'PHARMACEUTICAL_FORM',    'description' => 'Forma farmacéutica',       'syscollection' => true],
            /*24*/['name'=>'PRODUCT_TYPE',    'description' => 'Tipo de producto',       'syscollection' => true],
            /*25*/['name'=>'ROUTES_ADMINISTRATION',    'description' => 'vias de administración',       'syscollection' => true],
            /*26*/['name'=>'STORAGE_CONDITION',    'description' => 'condiciones de almacenamiento',       'syscollection' => true],
            /*27*/['name'=>'PAYMENT_CONDITION',    'description' => 'condiciones de pago',       'syscollection' => true],

        ]);
        
    }
}
