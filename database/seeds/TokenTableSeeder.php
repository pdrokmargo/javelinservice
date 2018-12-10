<?php

use Illuminate\Database\Seeder;

class TokenTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            [
                'id' => 1,
                'name' => 'JavelinWeb',
                'secret' => 'GYgLVhSHwuIfVN8sAbW0BkDwXHDvFKGXdP8Xgvsl',
                'redirect' => 'http://localhost',
                'personal_access_client' => 'false',
                'password_client' => 'true',
                'revoked' => 'false'
            ],
        ]);
    }
}
