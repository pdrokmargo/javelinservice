<?php

use Illuminate\Database\Seeder;

class BanksAccountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('banks_accounts')->insert([
            [ 
                'name' => 'Cta Proveedor', 
                'bank_id' => 42, 
                'account_number' => 12345678, 
                'bank_account_id' => 59
            ],
        ]);
    }
}
