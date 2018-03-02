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
                'id' => Uuid::generate()->string, 
                'firstname' => 'Pedro', 
                'middlename' => 'Jose', 
                'lastname' => 'Camargo Cotes', 
                'businessname' => '', 
                'legalname' => '',
                'document_type_id' => 1, 
                'document_number' => '11431204', 
                'geolocation_id' => 1, 
                'address' => 'Calle 53 # 9D - 75', 
                'phone_number' => '30168418', 
                'email' => 'pdro_kmargo@hotmail.com',
                'person_type_id' => 1,
            ],
        ]);
    }
}
