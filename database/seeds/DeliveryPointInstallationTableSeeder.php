<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DeliveryPointInstallationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // First we get the delivery point id
        // DB::connection('local')->table('configurations')->delete();
        // DB::connection('local')->table('configurations')->insert(json_decode(DB::connection('main')->table('configurations')->get(), true));
        $syncs = \App\Models\Configuration::where('code', 'syncs')->first();
        $last_sync = \App\Models\Configuration::where('code', 'last_sync')->first();
        $v['date'] = Carbon::now();
        $last_sync->value = json_encode($v, true);
        $last_sync->save();
        foreach(json_decode($syncs->value, true) as $sync){
            if($sync['down'] == true){
                DB::connection('local')->table($sync['table_name'])->delete();

                // Companies installation
                if($sync['table_name'] == 'companies'){

                }

                // Contracts installation
                if($sync['table_name'] == 'delivery_contracts'){
                    
                }

                // Products installation
                if($sync['table_name'] == 'products'){
                    
                }

                // General installation
                DB::connection('local')->table($sync['table_name'])->insert(json_decode(DB::connection('main')->table($sync['table_name'])->get(), true));
            }
        }
    }
}
