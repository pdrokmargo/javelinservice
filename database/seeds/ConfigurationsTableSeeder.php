<?php

use Illuminate\Database\Seeder;

class ConfigurationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('configurations')->insert([
            [
                'code' => 'business',
                'display' => 'Empresa',
                'value' => '{"name":"M&E","nit":"900088884878","logo":null,"geolocation_id":1,"address":"Calle XX # XX - XX","phone_number":"3998855","tax_regime_id":17,"big_contributor":"true","selfholder":"true","economic_activity":"Medicamentos","website":"www.medicamentosyequipos.com"}',
                'company_id' => 1
            ],
            [
                'code' => 'main_source',
                'display' => 'Fuente Principal',
                'value' => '{"source":"javelin.myecolombia.com.co"}',
                'company_id' => 1
            ],
            [
                'code' => 'active_delivery_point',
                'display' => 'Punto de Dispensación Activo',
                'value' => '{"delivery_point_id":"dcaf7460-d0f0-11e8-afb0-17b061a62e2e"}',
                'company_id' => 1
            ],
        ]);
    }
}
