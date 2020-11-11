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
    Route::get('/sync', function (Request $request) {        
        $syncs = \App\Models\Configuration::where('code', 'syncs')->first();
        $last_sync = json_decode(\App\Models\Configuration::where('code', 'last_sync')->first()->value, true);
        foreach(json_decode($syncs->value, true) as $sync){
            $syncs_ways = [];
            $syncs_ways[] = 'main';
            
            if($sync['down'] == true){  
                $downs = \DB::connection('main')->table('syncs')->where([['date', '>', $last_sync['date']['date']], ['table_name', '=', $sync['table_name']]])->get();
                $downs_ids = [];
                foreach($downs as $down){
                    $downs_ids[] = $down->id;
                }
                if(sizeof($downs_ids) > 0){
                    $col = json_decode(\DB::connection('main')->table($sync['table_name'])->whereIn('id', $downs_ids)->get(), true);
                    foreach($col as $c){
                        \DB::connection('local')->table($sync['table_name'])->updateOrInsert(['id' => $c['id']], $c);
                    }
                }
            }
            if($sync['up'] == true){  
                $ups = \DB::connection('local')->table('syncs')->where([['synced', '=', false], ['table_name', '=', $sync['table_name']]])->get();
                $ups_ids = [];
                foreach($ups as $up){
                    $ups_ids[] = $up->id;
                }
                if(sizeof($ups_ids) > 0){
                    $col = json_decode(\DB::connection('local')->table($sync['table_name'])->whereIn('id', $ups_ids)->get(), true);
                    foreach($col as $c){
                        \DB::connection('main')->table($sync['table_name'])->updateOrInsert(['id' => $c['id']], $c);
                    }
                }
            }
        }
        return response()->json([ "data" => '' ], 200);
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
    Route::get('medical-diagnostics','CollectionsController@medical_diagnostics');
    
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
    Route::resource('suppliers-orders','SupplierOrderController');
    Route::resource('healthrecordholder','HealthRecordHolderController');
    Route::resource('pharmaceuticaldrug','PharmaceuticalDrugsController');
    Route::resource('delivery-contracts','DeliveryContractsController');
    Route::resource('delivery-points','DeliveryPointsController');
    Route::resource('active-ingredients','ActiveIngredientsController');
    Route::resource('ips-network','IpsNetworkController');    
    Route::resource('affiliates','AffiliatesController');    
    Route::post('update_stake_holder/{id}','StakeholdersController@update');
    Route::get('search_stake_holder/{option}','StakeholdersController@search_stake_holder');

    //Inventory
    Route::resource('stocks-products','StocksProductsController');
    Route::resource('inventory-movements','InventoryMovementsController');
    Route::get('inventory-movements-transfers','InventoryMovementsController@indexTranfers');

    Route::resource('inventory-adjustments','InventoryAdjustmentsController');
    Route::resource('inventory-audit','InventoryAuditController');
    Route::put('inventory-audit/cancel/{id}','InventoryAuditController@cancel');
    Route::put('inventory-audit/finalize/{id}/{audit_state_id}','InventoryAuditController@finalize');
    Route::put('inventory-audit/auditar/{id}','InventoryAuditController@auditar');

    //Sales
    Route::resource('customers-quotes','CustomersQuotesController');
    Route::resource('remission-goods','RemissionGoodsController');
    Route::resource('billing','BillingController');
    Route::get('billing-resolutions','BillingController@getBillingResolutions');

    //Deliveries
    Route::resource('deliveries','DeliveriesController');
    Route::get('scheduled-deliveries/{affiliate_id}','DeliveriesController@scheduled_deliveries');
    Route::get('affiliate-deliveries/{affiliate_id}','DeliveriesController@affiliate_deliveries');


    Route::get('mipres/generateToken','MiPresController@generateToken');
    Route::get('mipres/prescriptionAddressing/{token}/{prescription}','MiPresController@prescriptionAddressing');
    Route::get('mipres/prescriptionProgramming/{token}/{prescription}','MiPresController@prescriptionProgramming');
    Route::get('mipres/prescriptionDelivery/{token}/{prescription}','MiPresController@prescriptionDelivery');
    Route::get('mipres/prescriptionDeliveryReport/{token}/{prescription}','MiPresController@prescriptionDeliveryReport');
    Route::get('mipres/prescriptionBilled/{token}/{prescription}','MiPresController@prescriptionBilled');
    Route::get('mipres/prescription/{token}/{prescription}','MiPresController@prescription');
    Route::post('mipres/prescriptions/{token}','MiPresController@getPrescriptions');
    Route::get('mipres/getPrescriptionStatus/{token}/{prescription}','MiPresController@getPrescriptionStatusByNumber');

});


