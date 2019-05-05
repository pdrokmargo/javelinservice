<?php

use Illuminate\Database\Seeder;

class PharmaceuticalDrugsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pharmaceutical_drugs')->insert([
            // [
            //     'id' => '222eb1a2-3704-4c27-b01d-7888e828b812', 
            //     'name' => 'Acetaminofén', 
            //     'atc' => 'DFFDFD', 
            //     'dosage_form_id' => 90, 
            //     'routes_administration_id' => 35, 
            //     'is_controlled' => false, 
            //     'is_monopoly' => false, 
            //     'is_pos' => true, 
            //     'is_regulated' => false, 
            //     'storage_condition_id' => 114
            // ],
            ['id' => 'e5438337-aaec-46ba-a9ea-2d184ac36815', 'name' => 'ACETAMINOFEN Tableta 500 MG', 'atc' => 'N02BE01', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => 'bd7704f0-4dc1-4175-b4f4-6d56c0e3e198', 'name' => 'ACETAMINOFEN Gota 100 MG', 'atc' => 'N02BE01', 'dosage_form_id' => 99, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '1eafb7f9-bc61-486b-986b-0ce887058cf2', 'name' => 'ACETAMINOFEN Jarabe 150 MG', 'atc' => 'N02BE01', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '84d556bc-e65b-465b-bc2b-ddfbd71f9043', 'name' => 'ACETAMINOFEN Tableta 500 MG', 'atc' => 'N02BE01', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => 'd5e05bf6-75e9-45ea-abe4-ca7486410c52', 'name' => 'AMOXICILINA Jarabe 125 MG', 'atc' => 'J01CA04', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '7e19c61e-5c51-4d78-b7e8-795539ded720', 'name' => 'AMOXICILINA Jarabe 250 MG', 'atc' => 'J01CA04', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '166c7b61-986e-43f6-bd85-531cef2f7d2b', 'name' => 'AMOXICILINA Cápsulas 500 MG', 'atc' => 'J01CA04', 'dosage_form_id' => 33, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '17b73625-fc58-4c82-a045-51ced412b9d8', 'name' => 'BETAMETASONA Crema 20 G', 'atc' => 'D07AC01', 'dosage_form_id' => 95, 'routes_administration_id' => 86,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => 'aac1477f-39ae-4c9e-8967-c0107617a739', 'name' => 'BETAMETASONA Crema 40 G', 'atc' => 'D07AC01', 'dosage_form_id' => 95, 'routes_administration_id' => 86,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '8834c103-7856-40e9-836d-5c28c1f2b435', 'name' => 'BETAMETASONA Ungüento 40 G', 'atc' => 'D07AC01', 'dosage_form_id' => 96, 'routes_administration_id' => 86,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '1a66855c-16e9-4d97-902d-56e9be568201', 'name' => 'CEFALEXINA Jarabe 250 MG', 'atc' => 'J01DB01', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '48d43270-c2b2-4446-a3f2-13e4ac5b930f', 'name' => 'CEFALEXINA Jarabe 500 MG', 'atc' => 'J01DB01', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'f9f95e35-ae33-42e6-87a1-10e23d8bb0bb', 'name' => 'CLORFERINAMINA Jarabe 2 MG', 'atc' => 'R06AB04', 'dosage_form_id' => 98, 'routes_administration_id' => 35,'is_controlled' => false, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '542b5e5b-6456-49d9-8c65-bdd9c807e646', 'name' => 'CLOTRIMAZOL  Crema 40 G', 'atc' => 'D01AC01', 'dosage_form_id' => 95, 'routes_administration_id' => 86,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => 'fa4bec06-889e-464d-9675-5a8ca44fae05', 'name' => 'CLOTRIMAZOL  Crema 40 G', 'atc' => 'D01AC01', 'dosage_form_id' => 95, 'routes_administration_id' => 87,'is_controlled' => true, 'is_monopoly' =>false,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => 'c8353222-efec-441e-83f5-35d79ba88135', 'name' => 'INSULINA DETEMIR Lapicero 3 ML', 'atc' => 'A10AE05', 'dosage_form_id' => 197, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => false,'storage_condition_id' => 114],
['id' => '34814d7f-a999-4160-8352-93e1c0743508', 'name' => 'INSULINA GLARGINA Ampolla 10 ML', 'atc' => 'A10AE04', 'dosage_form_id' => 97, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '1642885f-9612-44b7-a39f-6c672b489b61', 'name' => 'INSULINA GLARGINA Lapicero 3 ML', 'atc' => 'A10AE04', 'dosage_form_id' => 197, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'd1580847-50e1-44e1-823d-b10cd1a126c5', 'name' => 'INSULINA GLULISINA Ampolla 10 ML', 'atc' => 'A10AB06', 'dosage_form_id' => 97, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'f579078e-0d4c-4d3e-9933-b9f8d0988a02', 'name' => 'INSULINA GLULISINA Lapicero 3 ML', 'atc' => 'A10AB06', 'dosage_form_id' => 197, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'd6accc5b-ecf2-48a2-ad09-cbb613412584', 'name' => 'INSULINA LISPRO Ampolla 10 ML', 'atc' => 'A10AB04', 'dosage_form_id' => 97, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'fec06ae7-f593-4741-b97a-c061568339a5', 'name' => 'INSULINA LISPRO Lapicero 3 ML', 'atc' => 'A10AB04', 'dosage_form_id' => 197, 'routes_administration_id' => 83,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'add84cf4-ec87-4942-a07d-4afb765cde12', 'name' => 'RITALINA Tableta 10 MG', 'atc' => 'N06BA04', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '2ed15ed3-a242-49ba-b16f-6b9d7f1c1446', 'name' => 'CLONAZEPAM Tableta 0,5 MG', 'atc' => 'N03AE01', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => 'ef6ee84c-6175-4704-8c79-7b85d34c462f', 'name' => 'CLONAZEPAM Tableta 2 MG', 'atc' => 'N03AE01', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '0ba65d99-56ea-452d-9e20-c062b4cff916', 'name' => 'CLONAZEPAM Gota 2,5 MG', 'atc' => 'N03AE01', 'dosage_form_id' => 99, 'routes_administration_id' => 35,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],
['id' => '38571710-8a00-497d-90b0-f111430af3c7', 'name' => 'FENOBARBITAL Tableta 100 MG', 'atc' => 'N03AA02', 'dosage_form_id' => 90, 'routes_administration_id' => 35,'is_controlled' => true, 'is_monopoly' =>true,'is_pos' =>true,'is_regulated' => true,'storage_condition_id' => 37],


        ]);
    }
}
