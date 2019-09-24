<?php

use Illuminate\Database\Seeder;

class ConsecutivesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consecutives')->insert([
            [
                'id' => '33edadc3-475e-4c9a-9840-1e16030fc1a0',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'EN',
                'document_name' => 'inventory_movement_entry',
                'description' => 'Entradas'
            ],
            [
                'id' => '3eb1658e-3869-417f-b5be-a7a100038130',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'SA',
                'document_name' => 'inventory_movement_out',
                'description' => 'Salidas'
            ],
            [
                'id' => 'f53ae073-7fa4-40a6-be2b-4d9e4d105a01',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'CP',
                'document_name' => 'supplier_quotes',
                'description' => 'Cotizaciones de Proveedores'
            ],
            [
                'id' => '177230c0-fc1c-4046-b8d0-c4ce1d164d27',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'OC',
                'document_name' => 'supplier_orders',
                'description' => 'Órdenes de Proveedores'
            ],
            [
                'id' => '9c245af6-8b3d-4b40-81ef-7218b379d249',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'CC',
                'document_name' => 'customers_quotes',
                'description' => 'Cotizaciones de Clientes'
            ],
            [
                'id' => '8c532259-630e-4538-8563-e86d6ecbfdb4',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'RM',
                'document_name' => 'remission_goods',
                'description' => 'Remisiones'
            ],
            [
                'id' => '4bd43a9f-4005-4192-a40d-3faf17fe6606',
                'initial_value' => 1,
                'final_value' => 1000,
                'prefix' => 'FV',
                'document_name' => 'sales_billing',
                'description' => 'Facturas de Venta'
            ],
            [
                'id' => '33f809d6-302a-46a1-84ce-45c16fc817ba',
                'initial_value' => 1,
                'final_value' => null,
                'prefix' => 'DP',
                'document_name' => 'deliveries',
                'description' => 'Dispensaciones'
            ],
        ]);
    }
}
