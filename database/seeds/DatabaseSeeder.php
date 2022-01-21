<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      if (env('DB_CONNECTION') == 'main' || env('DB_CONNECTION') == 'mainqa'){
        
        dump('main');
         $this->call(CollectionsTableSeeder::class);
         $this->call(CollectionsValuesTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(UserProfilesTableSeeder::class);
         $this->call(UsersPrivilegesTableSeeder::class);
         $this->call(ViewsTableSeeder::class);
         $this->call(ViewActionsTableSeeder::class);
         $this->call(PrivilegesTableSeeder::class);
        //  $this->call(ActivitiesLogTableSeeder::class);
         
         $this->call(GeolocationsTableSeeder::class);
        //  $this->call(NotificationsTableSeeder::class);
         $this->call(StakeholdersInfoTableSeeder::class);
         $this->call(CompaniesTableSeeder::class);
         $this->call(ActiveIngredientsTableSeeder::class);
         $this->call(ActiveIngredientsPharmaceuticalDrugsTableSeeder::class);
         $this->call(PharmaceuticalDrugsTableSeeder::class);
        //  $this->call(WarehousesTableSeeder::class);
        //  $this->call(CustomersTableSeeder::class);
        //  $this->call(DeliveryContractsTableSeeder::class);
        //  $this->call(DeliveryPointsTableSeeder::class);
        //  $this->call(SalesRepresentativesTableSeeder::class); 
        //  $this->call(SuppliersTableSeeder::class);
         $this->call(ConsecutivesTableSeeder::class);
         $this->call(TokenTableSeeder::class);
         $this->call(LaboratoriesTableSeeder::class);
         $this->call(SanitaryRegistrationHoldersTableSeeder::class);
         $this->call(ImportersTableSeeder::class);
         $this->call(ManufacturersTableSeeder::class);   
        $this->call(ProductsTableSeeder::class);   
          $this->call(PharmaceuticalDrugsProductsTableSeeder::class);   
          $this->call(MedicalDiagnosisTableSeeder::class);
          $this->call(MainLocalConfigurationTableSeeder::class);  
      }else{
        dump('punto');
        $this->call(ActiveIngredientsTableSeeder::class);
        $this->call(PharmaceuticalDrugsTableSeeder::class);
         $this->call(ActiveIngredientsPharmaceuticalDrugsTableSeeder::class);
        $this->call(ProductsTableSeeder::class);   
        $this->call(PharmaceuticalDrugsProductsTableSeeder::class);   
      }


          // Run this manually using php artisan db:seed --class=ConfigurationsTableSeeder for main
        //   $this->call(ConfigurationsTableSeeder::class);

        // Run this manually using php artisan db:seed --class=DeliveryPointConfigurationTableSeeder for delivery point
        //   $this->call(DeliveryPointConfigurationTableSeeder::class);

        // Then run manually php artisan db:seed --class=DeliveryPointInstallationTableSeeder to active the delivery point.
    }
}
