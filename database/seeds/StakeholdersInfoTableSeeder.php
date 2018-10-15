<?php

use Illuminate\Database\Seeder;
use Webpatser\Uuid\Uuid;

class StakeholdersInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stakeholders_info')->insert([
            [
                'id' => '6930f51c-adf2-4629-9959-9ed9dc1bc62a', 
                'firstname' => 'Pedro', 
                'middlename' => 'Jose', 
                'lastname' => 'Camargo Cotes', 
                'businessname' => '', 
                'legalname' => '',
                'document_type_id' => 12, 
                'document_number' => '11431204', 
                'geolocation_id' => 11, 
                'address' => 'Calle 53 # 9D - 75', 
                'phone_number' => '30168418', 
                'email' => 'pdro_kmargo@hotmail.com',
                'person_type_id' => 38,
            ],
            [
                'id' => '415df760-a1a8-4631-827b-73376dfb53e4'/*Uuid::generate()->string*/, 
                'firstname' => '', 
                'middlename' => '', 
                'lastname' => '', 
                'businessname' => 'Nueva EPS', 
                'legalname' => 'Nueva EPS',
                'document_type_id' => 14, 
                'document_number' => '90000000', 
                'geolocation_id' => 11, 
                'address' => 'Calle 34 # 43 - 43', 
                'phone_number' => '49861', 
                'email' => 'nueva@hotmail.com',
                'person_type_id' => 39,
            ],
            [
                'id' => 'cccf1643-f51d-4689-931c-737a102009a0'/*Uuid::generate()->string*/, 
                'firstname' => 'Johan', 
                'middlename' => '', 
                'lastname' => 'Sanabria', 
                'businessname' => '', 
                'legalname' => '',
                'document_type_id' => 12, 
                'document_number' => '1045963789', 
                'geolocation_id' => 11, 
                'address' => 'Calle 32 # 42 - 42', 
                'phone_number' => '963852741', 
                'email' => 'johan@myecolombia.com.co',
                'person_type_id' => 38,
            ],

            [//manufacturer
                'id' => '453aad81-2d04-4fa5-8446-21de3d242c92'/*Uuid::generate()->string*/, 
                'firstname' => '', 
                'middlename' => '', 
                'lastname' => '', 
                'businessname' => 'Fabricante de med de prueba', 
                'legalname' => 'Fabricante de med de prueba',
                'document_type_id' => 14, 
                'document_number' => '900078984', 
                'geolocation_id' => 11, 
                'address' => 'Calle 32 # 42 - 42', 
                'phone_number' => '963852741', 
                'email' => 'manufacturer@myecolombia.com.co',
                'person_type_id' => 39,
            ],

            [//supplier
                'id' => 'dc9b5e0c-06a6-4170-8ef0-74bbffec6a02'/*Uuid::generate()->string*/, 
                'firstname' => '', 
                'middlename' => '', 
                'lastname' => '', 
                'businessname' => 'Proveedor de med de prueba', 
                'legalname' => 'Proveedor de med de prueba',
                'document_type_id' => 14, 
                'document_number' => '789456321', 
                'geolocation_id' => 11, 
                'address' => 'Calle 32 # 42 - 42', 
                'phone_number' => '23561478', 
                'email' => 'supplier@myecolombia.com.co',
                'person_type_id' => 39,
            ],

            [//importer
                'id' => 'a929763b-d7b1-47f1-8579-bb45b7ee48ed'/*Uuid::generate()->string*/, 
                'firstname' => '', 
                'middlename' => '', 
                'lastname' => '', 
                'businessname' => 'Importador de med de prueba', 
                'legalname' => 'Importador de med de prueba',
                'document_type_id' => 12, 
                'document_number' => '900078984', 
                'geolocation_id' => 11, 
                'address' => 'Calle 32 # 42 - 42', 
                'phone_number' => '85967485', 
                'email' => 'importer@myecolombia.com.co',
                'person_type_id' => 39,
            ],

            [//Sanitary Registration Holder
                'id' => '17f2f5ef-f1f6-4681-807f-e04f500122c1'/*Uuid::generate()->string*/, 
                'firstname' => '', 
                'middlename' => '', 
                'lastname' => '', 
                'businessname' => 'Importador de med de prueba', 
                'legalname' => 'Importador de med de prueba',
                'document_type_id' => 12, 
                'document_number' => '900078984', 
                'geolocation_id' => 11, 
                'address' => 'Calle 32 # 42 - 42', 
                'phone_number' => '85967485', 
                'email' => 'importer@myecolombia.com.co',
                'person_type_id' => 39,
            ],
        ]);
    }
}
