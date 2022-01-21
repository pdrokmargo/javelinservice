<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

    'default' => env('DB_CONNECTION', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the database connections setup for your application.
    | Of course, examples of configuring each database platform that is
    | supported by Laravel is shown below to make development simple.
    |
    |
    | All database work in Laravel is done through the PHP PDO facilities
    | so make sure you have the driver for your particular database of
    | choice installed on your machine before you begin development.
    |
    */

    'connections' => [

        'sqlite' => [
            'driver' => 'sqlite',
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
        ],

        'mysql' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
            'engine' => null,
        ],

        // 'local' => [
        //     'driver' => 'pgsql',
        //     'host' => env('DB_HOST', 'localhost'),
        //     'port' => env('DB_PORT', '5432'),
        //     'database' => env('DB_DATABASE', 'javelinpod'),
        //     'username' => env('DB_USERNAME', 'postgres'),
        //     'password' => env('DB_PASSWORD', '123456'),
        //     'charset' => 'utf8',
        //     'prefix' => '',
        //     'schema' => 'public',
        //     'sslmode' => 'prefer',
        // ],

        // 'local' => [
        //         'driver' => 'pgsql',
        //         'host' => env('DB_HOST', '25.54.222.194'),
        //         'port' => env('DB_PORT', '5432'),
        //         'database' => env('DB_DATABASE', 'javelinpod'),
        //         'username' => env('DB_USERNAME', 'postgres'),
        //         'password' => env('DB_PASSWORD', '3GfB2MkH'),
        //         'charset' => 'utf8',
        //         'prefix' => '',
        //         'schema' => 'public',
        //         'sslmode' => 'prefer',
        //     ],
         'local' => [
                'driver' => 'pgsql',
                'host' => env('DB_HOST', 'host.docker.internal'),
                'port' => env('DB_PORT', '5432'),
                'database' => env('DB_DATABASE', 'javelin_db_sm'),
                'username' => env('DB_USERNAME', 'postgres'),
                'password' => env('DB_PASSWORD', '123456'),
                'charset' => 'utf8',
                'prefix' => '',
                'schema' => 'public',
                'sslmode' => 'prefer',
            ],
            'OHpHweCH' => [ // Punto 43B
                'driver' => 'pgsql',
                'host' => env('DB_HOST', 'ec2-54-225-203-79.compute-1.amazonaws.com'),
                'port' => env('DB_PORT', '5432'),
                'database' => env('DB_DATABASE', 'dfsj6ui9q617lp'),
                'username' => env('DB_USERNAME', 'lmfoxafgijfvib'),
                'password' => env('DB_PASSWORD', '5df74c9b507097803e272563b51ade96177ec36ef1120e49a412a2dd2ae1b2c3'),
                'charset' => 'utf8',
                'prefix' => '',
                'schema' => 'public',
                'sslmode' => 'prefer',
            ],
            'local_test' => [
                'driver' => 'pgsql',
                'host' => env('DB_HOST', 'localhost'),
                'port' => env('DB_PORT', '5432'),
                'database' => env('DB_DATABASE', 'javelin_test'),
                'username' => env('DB_USERNAME', 'postgres'),
                'password' => env('DB_PASSWORD', '123456'),
                'charset' => 'utf8',
                'prefix' => '',
                'schema' => 'public',
                'sslmode' => 'prefer',
            ],
        'main' => [
            'driver' => 'pgsql',
            'host' => 'ec2-3-214-4-151.compute-1.amazonaws.com',
            'port' => '5432',
            'database' => 'doqc8fbi8s9sp',
            'username' => 'zoncngyypoqqqh',
            'password' => '2951d9603ac8ab65f35e7260e5524f46e7a1a8626b0ab7f5921f7cefd5d35a11',
            'charset' => 'utf8',
            'prefix' => '',
            'schema' => 'public',
            'sslmode' => 'prefer',
        ],
        'mainqa' => [
            'driver' => 'pgsql',
            'host' => 'ec2-52-200-188-218.compute-1.amazonaws.com',
            'port' => '5432',
            'database' => 'd2kh6uk7n7e43a',
            'username' => 'gtjlobbzbyiyva',
            'password' => 'cad9be87d0eae195f73d9879431cc0ffa8700f779a5b8c600a28bf03a3b8d2ad',
            'charset' => 'utf8',
            'prefix' => '',
            'schema' => 'public',
            'sslmode' => 'prefer',
        ],
        'sqlsrv' => [
            'driver' => 'sqlsrv',
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run in the database.
    |
    */

    'migrations' => 'migrations',

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer set of commands than a typical key-value systems
    | such as APC or Memcached. Laravel makes it easy to dig right in.
    |
    */

    'redis' => [

        'client' => 'predis',

        'default' => [
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD', null),
            'port' => env('REDIS_PORT', 6379),
            'database' => 0,
        ],

    ],

];
