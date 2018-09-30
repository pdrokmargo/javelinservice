<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token,x-xsrf-token');
header('Content-type: application/json');

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->group(function () {
    Route::get('/login', function (Request $request) {
        // return $request->user()->load('usercompany.userprofile.privileges.views');
        return $request->user()->load('usersprivileges');
    });
    Route::get('/profile', function (Request $request) {        
        return response()->json(['status'=>'success', 
                                  "message"=>'El centro de costo se ha registrado satisfactoriamente.', 
                                  "data" => $request->user()->load('usersprivileges') ], 200);
    });

    Route::resource('users', 'UsersController');
    Route::get('users/search/by/{column}/{data}', 'UsersController@searchBy');
    Route::get('users/bytype/{type}', 'UsersController@indexType');
    Route::put('users/change/password/{username}', 'UsersController@change_password');
    Route::put('users/chenge_company/{id}', 'UsersController@chenge_company');


    Route::resource('notification', 'NotificationsController');
    Route::resource('userprofile', 'UserProfilesController');
    Route::resource('configurations', 'ConfigurationsController');
    Route::resource('audit', 'AuditController');
    Route::resource('view', 'ViewController');
    Route::post('collections','CollectionsController@Collections');
    Route::resource('stakeholders','StakeholdersController');
    Route::get('stakeholders-custumers','StakeholdersController@custumers');

    Route::get('departamentos','CollectionsController@departamentos');
    Route::get('ciudades','CollectionsController@ciudades');
    
    Route::resource('sales_representatives','SalesRepresentativesController');
    Route::resource('warehouse','WarehouseController');
    Route::get('warehouse-select','WarehouseController@select');
    Route::get('privilege/{link}', function(Request $request, $link){
        $user_profile_id = $request->user()->usercompany->user_profile_id;
        $view_id = \App\Models\View::where('link',$link)->first()->id;
        $data = \App\Models\Privilege::where('user_profile_id',$user_profile_id)->where('view_id',$view_id)->first();
        return response()->json([ "data" => $data ], 200);
    });
    Route::resource('company','CompanyController');
    Route::resource('geolocation','GeolocationController');
    Route::resource('operationscentres','OperationsCentreController');
    Route::resource('costscentres','CostsCentreController');
    Route::resource('viewactions','ViewActionsController');
    Route::get('costs_centre/operations_costs_centre','CostsCentreController@operations_costs_centre');
    Route::resource('product','ProductsController');
    Route::resource('maker','MakerController');
    Route::resource('importer','ImporterController');
    Route::resource('supplier','SupplierController');
    Route::resource('suppliers-quotes','SupplierQuotesController');
    Route::resource('healthrecordholder','HealthRecordHolderController');
    Route::resource('pharmaceuticaldrug','PharmaceuticalDrugsController');
    Route::resource('delivery-contracts','DeliveryContractsController');
    Route::resource('delivery-points','DeliveryPointsController');
    Route::resource('active-ingredients','ActiveIngredientsController');
    Route::resource('ips-network','IpsNetworkController');    
    Route::resource('affiliates','AffiliatesController');    
    Route::post('update_stake_holder/{id}','StakeholdersController@update');
    Route::get('search_stake_holder/{option}','StakeholdersController@search_stake_holder');

    Router::get('stocks-products','StacksProductsController@index');
});


