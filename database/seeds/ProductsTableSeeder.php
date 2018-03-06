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
                'sku' => 'Punto de dispensación que sólo controla No POS', 
                'description' => '', 
                'comercial_name' => 'Dolex',
                'units' => 30, 
                'lifetime' => '01/01/2018',
                'delivery_fraction' => 1,
                'barcode' => 1234567890,
                'cum_code' => '01/01/2018',
                'regulated_price' => 130,
                'cost' => 100,
                'content_unit_id' => 29,
                'batch_control' => true,
                'serials_control' => false,
                'institutional_use' => false,
                'comercial' => true,
                'manufacturer_id' => '256af97f-c1f0-41d0-a32b-f8bfc14cb6fb',
                'supplier_id' => 'f73bb925-0ee9-4fe9-afbd-c27f8113a627',
                'importer_id' => '31ff9e89-7c4e-4d5b-9952-b0224ab6b5c8',
                'sanitary_registration_holder_id' => 'e8df838b-df99-4325-bd89-737380ecb236',
                'sanitary_registration' => '392484881746',
                'validity_sanitary_registration' => '01/01/2020',
                'product_profile_id' => 30,
                'security_time' => 10,
                'covered_period' => 20,
                'replacment_time' => 30,
                'pharmaceutical_drug_id' => '222eb1a2-3704-4c27-b01d-7888e828b812',
                'state' => true,

                
            ],
        ]);
    }
}