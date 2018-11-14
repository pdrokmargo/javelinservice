<?php

use Illuminate\Database\Seeder;

class ComercialStakeholdersInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comercial_stakeholders_info')->insert([
            [
                "big_contributor"       => true,
                "retention_for_rent"    => true,
                "stakeholder_info_id"   => "dc9b5e0c-06a6-4170-8ef0-74bbffec6a02",
                "codes":                => '{"iva":true,"ica":true,"iva_percent":"10","ica_percent":"10","ciiu":"1234567"}',
                "tax_regime_id"         => 15,
                "constitution_date"     => "2018-10-15"
            ]
        ]);
    }
}
