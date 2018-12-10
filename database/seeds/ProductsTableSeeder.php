<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'id' => 'b225b683-98c1-4e3d-be21-3230122ff718', 
                'code' => 'p1-aceta', 
                'name' => 'Acetaminofen', 
                'sku' => 'PD001', 
                'description' => 'description', 
                'comercial_name' => 'Dolex',
                'units' => 30, 
                'lifetime' => '1/01/2018',
                'delivery_fraction' => 1,
                'barcode' => 1234567890,
                'cums' => 'DFDFDF-01',
                'content_unit_id' => 120,
                'batch_control' => true,
                'serials_control' => false,
                'institutional_use' => false,
                'comercial' => true,
                'manufacturer_id' => '453aad81-2d04-4fa5-8446-21de3d242c92',
                'supplier_id' => 'dc9b5e0c-06a6-4170-8ef0-74bbffec6a02',
                'importer_id' => 'a929763b-d7b1-47f1-8579-bb45b7ee48ed',
                'sanitary_registration_holder_id' => '17f2f5ef-f1f6-4681-807f-e04f500122c1',
                'sanitary_registration' => '392484881746',
                'validity_sanitary_registration' => '01/01/2020',
                'product_profile_id' => 30,
                'security_time' => 10,
                'covered_period' => 20,
                'replacment_time' => 30,
                'pharmaceutical_drug' => '[{"id":"222eb1a2-3704-4c27-b01d-7888e828b812","name":"Acetaminofu00e9n","routes_administration":"Oral","dosage_form":"Tableta","state":true,"is_pos":true,"concentration":"500 und"}]',
                'state' => true,
            ],
        ]);
    }
}