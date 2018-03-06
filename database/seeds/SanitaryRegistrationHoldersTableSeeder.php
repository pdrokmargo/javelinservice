<?php

use Illuminate\Database\Seeder;

class SanitaryRegistrationHoldersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('health_record_holders')->insert([
            [
                'id' => 'e8df838b-df99-4325-bd89-737380ecb236', 'stakeholder_info_id' => '17f2f5ef-f1f6-4681-807f-e04f500122c1'
            ],
        ]);
    }
}
