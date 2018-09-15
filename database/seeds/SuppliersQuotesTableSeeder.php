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
                'supplier_id' => '7d38b260-693d-11e8-8b9b-01a462d432fa', 
                'payment_condition_id' => 62,
                'products' => '[{"product_id":"b225b683-98c1-4e3d-be21-3230122ff718","sky":"Punto de dispensación que sólo controla No POS","name":"Acetaminofen","quantity":"30","unit_price":"100","discount":"10%","subtotal":"3000"}]',
                'notes' => 'Estos es un seeds',
                'created_at' => '08/30/2018',
                'expire_at' => '09/09/2018',
                'status' => true              
            ],
            [
                'id' => '7dec04d6-ace2-4b4e-9285-33ad799a9359', 
                'supplier_id' => 'dc9b5e0c-06a6-4170-8ef0-74bbffec6a02', 
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
