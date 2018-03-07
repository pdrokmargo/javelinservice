<?php

use Illuminate\Database\Seeder;

class SuppliersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('suppliers')->insert([
            [
                'id' => 'f73bb925-0ee9-4fe9-afbd-c27f8113a627', 
                'stakeholder_info_id' => 'dc9b5e0c-06a6-4170-8ef0-74bbffec6a02', 
                'supplier_class_id' => 67,
                'global_discount' => 0,
                'payment_condition_id' => 62,
                'purchase_order' => true,
                'credit_limit' => 300000000,
                'days_early_payment' => 5,
                'payment_method_id' => 117,
                'days_grace' => 2,
                'bank_accounts' => '[{"bank_account_id":1}]',
                'sales_contact' => '{"name_sales_contact":"Vendedor Prov", "phone_sales_contact":"789585", "email_sales_contact":"email@proveedor.com"}'
            ],
        ]);
    }
}
