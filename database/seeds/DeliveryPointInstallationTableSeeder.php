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
        // Cartagena Alto Costo: hZUbaSM2
        // $token = '3GfB2MkH'; Punto43B
        // $token = 'hZUbaSM2';
        $token = 'OHpHweCH'; //Punto43B
        $connection = 'OHpHweCH'; //Punto43B
        try{
        $delivery_point = DB::connection('main')->table('delivery_points')->where('token', $token)->first();
        $syncs = \App\Models\Configuration::where('code', 'syncs')->first();
        $last_sync = \App\Models\Configuration::where('code', 'last_sync')->first();
        // $v = array();
        $v['date'] = Carbon::now();
        $last_sync->value = json_encode($v, true);
        $last_sync->save();
        $contracts = DB::connection('main')->table('delivery_contracts')->get();
        $a_contracts = array(); //Active contracts for this delivery point.
        foreach ($contracts as $contract){
            foreach(json_decode($contract->delivery_points, true) as $dp){
                if($dp['id'] == $delivery_point->id){
                    $contract->delivery_points = json_encode($contract->delivery_points, true);
                    $contract->pharmadrugs = json_encode($contract->pharmadrugs, true);
                    $contract->event = json_encode($contract->event, true);
                    $contract->capita = json_encode($contract->capita, true);
                    $contract->pgp = json_encode($contract->pgp, true);
                    $contract->ips = json_encode($contract->ips, true);
                    $contract->conditional_alerts = json_encode($contract->conditional_alerts, true);
                    $a_contracts[] = (array)$contract;
                }
            }
        }
        foreach($syncs->value as $sync){
            $table = $sync['table_name'];
            DB::connection($connection)->table($table)->delete();
            if($sync['down'] == true && ($table != 'products' && $table != 'active_ingredients' && $table != 'active_ingredients_pharmaceutical_drugs' && $table != 'pharmaceutical_drugs' && $table != 'pharmaceutical_drugs_products')){
                DB::connection($connection)->table($table)->delete();

                // Companies installation: DONE
                if($table == 'companies'){
                    DB::connection($connection)->table($table)->insert(json_decode(DB::connection('main')->table($table)->where('id', $delivery_point->company_id)->get(), true));
                }
                // Affiliates installation: DONE
                else if($table == 'affiliates'){ 
                    foreach($a_contracts as $contract){
                        DB::connection($connection)->table($table)->insert(json_decode(DB::connection('main')->table($table)->where('delivery_contract_id', $contract['id'])->get(), true));
                    }
                }
                // Products installation: DONE
                else if($table == 'products'){ 
                    $collection = DB::connection('main')->table($table)->get();
                    foreach($collection as $c){
                        DB::connection($connection)->table($table)->insert((array)$c);
                    }
                }
                // Pharmaceutical Drugs installation: DONE
                else if($table == 'pharmaceutical_drugs'){ 
                    $collection = DB::connection('main')->table($table)->get();
                    foreach($collection as $c){
                        DB::connection($connection)->table($table)->insert((array)$c);
                    }
                }
                // Pharmaceutical Drugs Products installation: DONE
                else if($table == 'pharmaceutical_drugs_products'){ 
                    $collection = DB::connection('main')->table($table)->get();
                    foreach($collection as $c){
                        DB::connection($connection)->table($table)->insert((array)$c);
                    }
                }
                // Active Ingredientes installation: DONE
                else if($table == 'active_ingredients'){ 
                    $collection = DB::connection('main')->table($table)->get();
                    foreach($collection as $c){
                        DB::connection($connection)->table($table)->insert((array)$c);
                    }
                }
                // Active Ingredientes Pharmaceutical Drugs installation: DONE
                else if($table == 'active_ingredients_pharmaceutical_drugs'){ 
                    $collection = DB::connection('main')->table($table)->get();
                    foreach($collection as $c){
                        DB::connection($connection)->table($table)->insert((array)$c);
                    }
                }
                // Contracts installation: DONE
                else if($table == 'delivery_contracts'){
                    
                    
                    DB::connection($connection)->table($table)->insert($a_contracts);
                    // $contracts = DB::connection('main')->table($table)->get();
                    // look what contracts contains this delivery point.
                }

                // Users installation: DONE
                else if($table == 'users'){
                    // DB::connection($connection)->table('privileges')->delete();
                    // DB::connection($connection)->table('users_privileges')->delete();
                    DB::connection($connection)->table($table)->insert([
                        [
                            'id'                    => '7ddc0553-0b27-49f1-a1b7-445777a72d0e',
                            'firstname'             => 'Master', 
                            'lastname'              => 'Admin', 
                            'username'              => 'admin', 
                            'email'                 => 'director.ti@myecolombia.com.co', 
                            'password'              => bcrypt($token), 
                            'user_profile_id'       => '1',
                            'company_default_id'    => '1'
                        ]
                    ]);
                    // DB::connection($connection)->table('privileges')->insert(json_decode(DB::connection('main')->table('privileges')->where('user_profile_id', 1)->get(), true));
                    // DB::connection($connection)->table('users_privileges')->insert(json_decode(DB::connection('main')->table('users_privileges')->where('user_profile_id', 1)->where('user_id', '7ddc0553-0b27-49f1-a1b7-445777a72d0e')->where('company_id', $delivery_point->company_id)->get(), true));
                    $users = [];
                    foreach(json_decode($delivery_point->users, true) as $u){
                        $users[] = $u["user_id"];
                    }
                    DB::connection($connection)->table($table)->insert(json_decode(DB::connection('main')->table($table)->whereIn('id', $users)->get(), true));
                }
                else {
                    // General installation
                    DB::connection($connection)->table($table)->insert(json_decode(DB::connection('main')->table($table)->get(), true));
                }
            }
            dump($table.' finalizado');
        }
        DB::connection('main')->table('delivery_points')->where('token', $token)->update(['installed' => true]);
        }catch(Exception $e){
            echo $table.'\n\n';
            echo $e;
        }
    }
}
