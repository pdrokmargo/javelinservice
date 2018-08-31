<?php

use Illuminate\Database\Seeder;

class SuppliersQuotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers_quotes')->insert([
            [
                'id' => '1139aa41-6e58-4c62-a707-b52ea328d228', 
                'supplier_id' => '6930f51c-adf2-4629-9959-9ed9dc1bc62a', 
                'payment_condition_id' => 62,
                'products' => '[{"product_id":"b225b683-98c1-4e3d-be21-3230122ff718","sky":"Punto de dispensación que sólo controla No POS","name":"Acetaminofen","quantity":"30","unit_price":"100","discount":"10%","subtotal":"3000"}]',
                'notes' => 'Estos es un seeds',
                'created_at' => '08/30/2018',
                'expire_at' => '09/09/2018',
                'status' => true              
            ],
        ]);
    }
}
