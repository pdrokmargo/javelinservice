<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            [//default company
                'name' => 'Google Colombia Limitada', 
                'nit' => '900214217', 
                'description' => 'Empresas dedicada a la creación de iniciativas tecnológicas', 
                'address' => 'Calle 99 # 99 - 99', 
                'phone_number' => 3999999, 
                'email' => 'nuestroemail@google.com',
                'tax_regime_id' => -1,
                'big_contributor' => 'true',
                'selfholder' => 'true',
                'economic_activity' => 'Otras actividades empresariales', 
                'website' => 'www.google.com.co', 
                'state' => 'true',
                'big_contributor_resolution' => '984854564',
                'geolocation_id' => -1,
                'withholding_income_sales_id' => -1,
                'withholding_income_purchases_id' => -1,
                'withholding_vat_sales_id' => -1,
                'withholding_vat_purchases_id' => -1,
                'withholding_ica_sales_id' => -1,
                'withholding_ica_purchases_id' => -1
            ],
        ]);
    }
}
