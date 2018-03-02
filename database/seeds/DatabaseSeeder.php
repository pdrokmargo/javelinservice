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
         $this->call(ViewsTableSeeder::class);
         $this->call(ViewActionsTableSeeder::class);
         $this->call(PrivilegesTableSeeder::class);
         $this->call(ActivitiesLogTableSeeder::class);
         $this->call(ConfigurationsTableSeeder::class);
         $this->call(GeolocationsTableSeeder::class);
         $this->call(NotificationsTableSeeder::class);
         $this->call(StakeholdersInfoTableSeeder::class);
    }
}
