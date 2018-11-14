<?php

use Illuminate\Database\Seeder;

class DeliveryPointsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('delivery_points')->insert([
            [
                'id'                        => 'dcaf7460-d0f0-11e8-afb0-17b061a62e2e', 
                'warehouse_id'              => 'd09e0580-c199-11e8-96b5-9fefccf7c7c3',
                'company_id'                => 1,
                'name'                      => 'Nombre punto de dispensación 001', 
                'description'               => "as opposed to using 'Content here, content here', making it look",
                'token'                     => 'Qg1rSjxg',
                'delivery_point_group_id'   => 74,
                'delivery_contracts'        => '[]',
                'state'                     => true,
                'installed'                 => false,
                'users'                     => '[{"user_id":"dae8a3b0-d0ec-11e8-b200-6f8262d6c226"},{"user_id":"c9a33790-d0eb-11e8-a8cf-51f38edfaf33"}]'
            ],
        ]);
    }
}
