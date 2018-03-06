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
         $this->call(CollectionsTableSeeder::class);
         $this->call(CollectionsValuesTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(UserProfilesTableSeeder::class);
         $this->call(UsersPrivilegesTableSeeder::class);
         $this->call(ViewsTableSeeder::class);
         $this->call(ViewActionsTableSeeder::class);
         $this->call(PrivilegesTableSeeder::class);
         $this->call(ActivitiesLogTableSeeder::class);
         $this->call(ConfigurationsTableSeeder::class);
         $this->call(GeolocationsTableSeeder::class);
         $this->call(NotificationsTableSeeder::class);
         $this->call(StakeholdersInfoTableSeeder::class);
         $this->call(CompaniesTableSeeder::class);
         $this->call(ActiveIngredientsPharmaceuticalDrugsTableSeeder::class);
         $this->call(ActiveIngredientsTableSeeder::class);
         $this->call(ImportersTableSeeder::class);
         $this->call(ManufacturersTableSeeder::class);
         $this->call(PharmaceuticalDrugsTableSeeder::class);
         $this->call(ProductsTableSeeder::class);
         $this->call(SanitaryRegistrationHoldersTableSeeder::class);
         $this->call(warehousesTableSeeder::class);
         $this->call(CustomersTableSeeder::class);
         $this->call(DeliveryContractsTableSeeder::class);
         $this->call(DeliveryPointsTableSeeder::class);
         $this->call(SalesRepresentativesTableSeeder::class);
         $this->call(SuppliersTableSeeder::class);  
    }
}
