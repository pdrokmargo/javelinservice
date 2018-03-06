<?php

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->insert([
            [
                'id' => '0deae636-66a2-4401-b784-6f7a2889dace', 
                'stakeholder_info_id' => '415df760-a1a8-4631-827b-73376dfb53e4', 
                'customer_class_id' => 68, 
                'sales_representative_id' => 'eb32160e-da04-4b9c-8095-161866562d4d', 
                'purchases_contact' => '{"name_purchases_contact":"Jussef Abdala", "phone_purchases_contact":"3013013014", "email_purchases_contact":"jussef@gmail.com"}', 
                'global_discount' => 10, 
                'debt_type_id' => 17, 
                'payment_condition_id' => 64, 
                'days_early_payment' => 10, 
                'credit_limit' => 200000, 
                'credit_limit_blocking' => true, 
                'late_payment_blocking' => true, 
                'days_grace' => 2, 
                'debt_contact' => '
                {
                    "name_debt_contact":"Juana Pérez", 
                    "phone_debt_contact":"1234", 
                    "email_debt_contact":"juana@gmail.com"
                }',
                'shipping_points' => '
                {
                    "name":"Carrera 46", 
                    "address":"Carrera 46 # 25 - 25", 
                    "contact_person":"Camila Suárez",
                    "geolocations_id":1,
                    "neighborhood":"Alto Prado",
                    "phone_number1":"65432",
                    "phone_number2":"23456",
                    "email":"recepcoj@fsdfd.com"
                }'
            ],
         
        ]);
    }
}
