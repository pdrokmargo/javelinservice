<?php

use Illuminate\Database\Seeder;

class ActiveIngredientsPharmaceuticalDrugsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('active_ingredients_pharmaceutical_drugs')->insert([
            // [ 
            //     'active_ingredient_id' => '708bf446-fd91-4578-ae22-756ca5522ce1', 
            //     'pharmaceutical_drug_id' => '222eb1a2-3704-4c27-b01d-7888e828b812',
            //     'measurement_unit_id' => 101,
            //     'concentration' => 500
            // ],
            ['active_ingredient_id' => 'fdd2c9e2-ae69-4923-b12d-53ce3c10abc5','pharmaceutical_drug_id' => 'e5438337-aaec-46ba-a9ea-2d184ac36815','measurement_unit_id' => 104,'concentration' =>500],
            ['active_ingredient_id' => 'fdd2c9e2-ae69-4923-b12d-53ce3c10abc5','pharmaceutical_drug_id' => 'bd7704f0-4dc1-4175-b4f4-6d56c0e3e198','measurement_unit_id' => 104,'concentration' =>100],
            ['active_ingredient_id' => 'fdd2c9e2-ae69-4923-b12d-53ce3c10abc5','pharmaceutical_drug_id' => '1eafb7f9-bc61-486b-986b-0ce887058cf2','measurement_unit_id' => 104,'concentration' =>150],
            ['active_ingredient_id' => 'fdd2c9e2-ae69-4923-b12d-53ce3c10abc5','pharmaceutical_drug_id' => '84d556bc-e65b-465b-bc2b-ddfbd71f9043','measurement_unit_id' => 104,'concentration' =>500],
            ['active_ingredient_id' => '3c74e016-8db9-4d94-b77f-e92c545f53eb','pharmaceutical_drug_id' => 'd5e05bf6-75e9-45ea-abe4-ca7486410c52','measurement_unit_id' => 104,'concentration' =>125],
            ['active_ingredient_id' => '3c74e016-8db9-4d94-b77f-e92c545f53eb','pharmaceutical_drug_id' => '7e19c61e-5c51-4d78-b7e8-795539ded720','measurement_unit_id' => 104,'concentration' =>250],
            ['active_ingredient_id' => '3c74e016-8db9-4d94-b77f-e92c545f53eb','pharmaceutical_drug_id' => '166c7b61-986e-43f6-bd85-531cef2f7d2b','measurement_unit_id' => 104,'concentration' =>500],
            ['active_ingredient_id' => 'e6eba253-85cb-40b0-9d62-cb7c0492d33b','pharmaceutical_drug_id' => '17b73625-fc58-4c82-a045-51ced412b9d8','measurement_unit_id' => 103,'concentration' =>20],
            ['active_ingredient_id' => 'e6eba253-85cb-40b0-9d62-cb7c0492d33b','pharmaceutical_drug_id' => 'aac1477f-39ae-4c9e-8967-c0107617a739','measurement_unit_id' => 103,'concentration' =>40],
            ['active_ingredient_id' => 'e6eba253-85cb-40b0-9d62-cb7c0492d33b','pharmaceutical_drug_id' => '8834c103-7856-40e9-836d-5c28c1f2b435','measurement_unit_id' => 103,'concentration' =>40],
            ['active_ingredient_id' => 'a6125389-3b3c-4ef1-948a-92a0a000b5b6','pharmaceutical_drug_id' => '1a66855c-16e9-4d97-902d-56e9be568201','measurement_unit_id' => 104,'concentration' =>250],
            ['active_ingredient_id' => 'a6125389-3b3c-4ef1-948a-92a0a000b5b6','pharmaceutical_drug_id' => '48d43270-c2b2-4446-a3f2-13e4ac5b930f','measurement_unit_id' => 104,'concentration' =>500],
            ['active_ingredient_id' => 'e8faf705-288c-49ec-a6f3-4aa92a38a4b0','pharmaceutical_drug_id' => 'f9f95e35-ae33-42e6-87a1-10e23d8bb0bb','measurement_unit_id' => 104,'concentration' =>2],
            ['active_ingredient_id' => '80708d11-8087-40dd-be25-d6d00dfac6d4','pharmaceutical_drug_id' => '542b5e5b-6456-49d9-8c65-bdd9c807e646','measurement_unit_id' => 103,'concentration' =>40],
            ['active_ingredient_id' => '80708d11-8087-40dd-be25-d6d00dfac6d4','pharmaceutical_drug_id' => 'fa4bec06-889e-464d-9675-5a8ca44fae05','measurement_unit_id' => 103,'concentration' =>40],
            ['active_ingredient_id' => '30a77cf6-6989-4706-a0b3-a9132cc63e91','pharmaceutical_drug_id' => 'c8353222-efec-441e-83f5-35d79ba88135','measurement_unit_id' => 108,'concentration' =>3],
            ['active_ingredient_id' => '5616a4a5-8c23-4641-8165-dfd87ac9aebc','pharmaceutical_drug_id' => '34814d7f-a999-4160-8352-93e1c0743508','measurement_unit_id' => 108,'concentration' =>10],
            ['active_ingredient_id' => '5616a4a5-8c23-4641-8165-dfd87ac9aebc','pharmaceutical_drug_id' => '1642885f-9612-44b7-a39f-6c672b489b61','measurement_unit_id' => 108,'concentration' =>3],
            ['active_ingredient_id' => '00fe1812-53b8-4db7-b2df-3978a7f14ef4','pharmaceutical_drug_id' => 'd1580847-50e1-44e1-823d-b10cd1a126c5','measurement_unit_id' => 108,'concentration' =>10],
            ['active_ingredient_id' => '00fe1812-53b8-4db7-b2df-3978a7f14ef4','pharmaceutical_drug_id' => 'f579078e-0d4c-4d3e-9933-b9f8d0988a02','measurement_unit_id' => 108,'concentration' =>3],
            ['active_ingredient_id' => '9ee07590-b05b-415f-9bd6-1ca839bd3902','pharmaceutical_drug_id' => 'd6accc5b-ecf2-48a2-ad09-cbb613412584','measurement_unit_id' => 108,'concentration' =>10],
            ['active_ingredient_id' => '9ee07590-b05b-415f-9bd6-1ca839bd3902','pharmaceutical_drug_id' => 'fec06ae7-f593-4741-b97a-c061568339a5','measurement_unit_id' => 108,'concentration' =>3],
            ['active_ingredient_id' => '73f86ed1-186b-44da-b5b5-0efd8e8db76d','pharmaceutical_drug_id' => 'add84cf4-ec87-4942-a07d-4afb765cde12','measurement_unit_id' => 104,'concentration' =>10],
            ['active_ingredient_id' => '7699e9ff-f515-4361-82b9-1a9034561a92','pharmaceutical_drug_id' => '2ed15ed3-a242-49ba-b16f-6b9d7f1c1446','measurement_unit_id' => 104,'concentration' =>0.5],
            ['active_ingredient_id' => '7699e9ff-f515-4361-82b9-1a9034561a92','pharmaceutical_drug_id' => 'ef6ee84c-6175-4704-8c79-7b85d34c462f','measurement_unit_id' => 104,'concentration' =>2],
            ['active_ingredient_id' => '7699e9ff-f515-4361-82b9-1a9034561a92','pharmaceutical_drug_id' => '0ba65d99-56ea-452d-9e20-c062b4cff916','measurement_unit_id' => 104,'concentration' =>2.5],
            ['active_ingredient_id' => '321aad88-c2fc-4f72-8ac4-f9368c64a653','pharmaceutical_drug_id' => '38571710-8a00-497d-90b0-f111430af3c7','measurement_unit_id' => 104,'concentration' =>100],

        ]);
    }
}
