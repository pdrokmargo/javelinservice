<?php

use Illuminate\Database\Seeder;

class ActiveIngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('active_ingredients')->insert([
            [ 
                'id' => 'fdd2c9e2-ae69-4923-b12d-53ce3c10abc5', 'name' => 'ACETAMINOFEN',
                'id' => '3c74e016-8db9-4d94-b77f-e92c545f53eb', 'name' => 'AMOXICILINA',
                'id' => 'e6eba253-85cb-40b0-9d62-cb7c0492d33b', 'name' => 'BETAMETASONA',
                'id' => 'a6125389-3b3c-4ef1-948a-92a0a000b5b6', 'name' => 'CEFALEXINA',
                'id' => 'e8faf705-288c-49ec-a6f3-4aa92a38a4b0', 'name' => 'CLORFERINAMINA',
                'id' => '80708d11-8087-40dd-be25-d6d00dfac6d4', 'name' => 'CLOTRIMAZOL ',
                'id' => '30a77cf6-6989-4706-a0b3-a9132cc63e91', 'name' => 'INSULINA DETEMIR',
                'id' => '5616a4a5-8c23-4641-8165-dfd87ac9aebc', 'name' => 'INSULINA GLARGINA',
                'id' => '00fe1812-53b8-4db7-b2df-3978a7f14ef4', 'name' => 'INSULINA GLULISINA',
                'id' => '9ee07590-b05b-415f-9bd6-1ca839bd3902', 'name' => 'INSULINA LISPRO',
                'id' => '73f86ed1-186b-44da-b5b5-0efd8e8db76d', 'name' => 'RITALINA',
                'id' => '7699e9ff-f515-4361-82b9-1a9034561a92', 'name' => 'CLONAZEPAM',
                'id' => '321aad88-c2fc-4f72-8ac4-f9368c64a653', 'name' => 'FENOBARBITAL'

            ],
        ]);
    }
}