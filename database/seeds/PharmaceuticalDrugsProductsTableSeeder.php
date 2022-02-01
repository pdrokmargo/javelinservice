<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PharmaceuticalDrugsProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pharmaceutical_drugs_products')->insert([
            ['id' => '5819cdaa-6ae1-4144-970a-e06c6192db32', 'product_id' => '5861dde4-d395-4501-93c6-6dfc4a837820', 'pharmaceutical_drug_id' => 'de414516-3e5d-4432-a50c-c8902821834a', 'name' => 'ABACAVIR 300MG TABLETA CAJA X 30 - SALUS PHARMA', 'delivery_fraction' => 1, 'validity_sanitary_registration' => Carbon::createFromFormat('d/m/Y', '03/16/2016')->toDateTimeString(), 'sanitary_registration' => '2011M-0011931', 'invima_file_record' => '20023949', 'invima_file_record_consecutive' => '1', 'laboratory_id' => '461c72a2-e006-47d3-b6d7-61ea197ac257', 'content_unit_id' => 120, 'packaging_unit_id' => 29]
        ]);
    }
}
