webpackJsonp([21],{

/***/ "../../../../../src/app/smartity/billing/billing-action/billing-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\n  <div class=\"row form-inline\">\n    <div class=\"margin-bottom-40\" style=\"padding-left: 15px;padding-right: 15px;\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-mat no-margin-right\">\n        <mat-icon>keyboard_arrow_left</mat-icon> Regresar\n      </button>\n    </div>\n    <!-- <div class=\"margin-bottom-40\">\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"openCustomerQuotesLoad()\" class=\"btn-w-mat no-margin-left\">\n            <mat-icon>search</mat-icon> Cotización\n        </button>\n  </div> -->\n  </div>\n  <div class=\"row\">\n    <!-- Resolución de factura -->\n    <div class=\"col-sm-12 col-md-3 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Resolución de factura\" [(ngModel)]=\"model.document_id\"\n          name=\"document_id\">\n          <mat-option *ngFor=\"let item of billingResolutions\" [value]=\"item.id\">{{item.prefix}} - X</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <!--vendedor-->\n    <div class=\"col-sm-12 col-md-4 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <input required readonly matInput type=\"text\" placeholder=\"Vendedor\" [(ngModel)]=\"seller.fullname\"\n          id=\"employees\" name=\"employees\" />\n        <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openAddEmployees()\">search</mat-icon>\n      </mat-form-field>\n    </div>\n    <!-- creado el -->\n    <div class=\"col-md-3 col-md-offset-1 margin-bottom\">\n      <mat-form-field>\n        <input matInput readonly placeholder=\"Creado el\" name=\"created_at\"\n          value=\"{{model.created_at | date:'dd/MM/yyyy'}}\">\n      </mat-form-field>\n    </div>\n\n    <!-- estado -->\n    <div class='col-sm-12 col-md-1 margin-bottom'>\n      <div class=\"flex\">\n        <span class=\"flex-spacer\"></span>\n        <mat-slide-toggle [labelPosition]=\"'before'\" id=\"status\" name=\"status\" [(ngModel)]=\"model.status\">Estado\n        </mat-slide-toggle>\n      </div>\n    </div>\n    <!--vendedor-->\n    <!-- <div class=\"col-sm-12 col-md-3 margin-bottom\">\n              <mat-form-field class=\"full-width\">\n                  <input required readonly matInput type=\"text\" placeholder=\"Vendedor\" [(ngModel)]=\"seller.fullname\"\n                      id=\"employees\" name=\"employees\" />\n                  <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openAddEmployees()\">search</mat-icon>\n              </mat-form-field>\n          </div> -->\n  </div>\n\n  <div class=\"row\">\n    <!-- cliente -->\n    <div class=\"col-sm-12 col-md-3\">\n      <mat-form-field class=\"full-width\">\n        <input required readonly matInput type=\"text\" placeholder=\"Cliente\" [(ngModel)]=\"customer.fullname\"\n          id=\"customer\" name=\"customer\" />\n        <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openAddCustomer()\">search</mat-icon>\n      </mat-form-field>\n    </div>\n    <!-- Forma de pago -->\n    <div class=\"col-sm-12 col-md-2\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Forma de Pago\" [(ngModel)]=\"model.payment_method_id\"\n          name=\"payment_method_id\">\n          <mat-option *ngFor=\"let item of arrPayment_method\" [value]=\"item.id\">{{item.value}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <!-- Condición de pago -->\n    <div class=\"col-sm-12 col-md-2\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Condición de pago\" [(ngModel)]=\"model.payment_condition_id\"\n          name=\"payment_condition_id\">\n          <mat-option *ngFor=\"let item of arrPayment_condition\" [value]=\"item.id\">{{item.value}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-5\" *ngIf=\"numId == undefined\">\n      <button (click)=\"openModalProducts()\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n        Añadir Producto\n      </button>\n    </div>\n    <!-- productos -->\n    <div class=\"col-sm-12\">\n\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n          <thead>\n            <tr>\n              <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n              <th>PLU\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Producto\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Fraccionado\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Unidades\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Precio de Venta\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Descuento\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>IVA\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Subtotal\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th class=\"w-40\" *ngIf=\"numId == undefined\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let detail of model.details;let index = index;\">\n              <td>{{detail.product.sku}}</td>\n              <td>{{detail.product.display_name}}</td>\n              <td *ngIf=\"numId != undefined\">{{ detail.fraction ? 'Sí' : 'No' }}</td>\n              <td *ngIf=\"numId == undefined\">\n                <mat-slide-toggle [labelPosition]=\"after\" name=\"fraction{{index}}\" [(ngModel)]=\"detail.fraction\">\n                </mat-slide-toggle>\n              </td>\n              <td *ngIf=\"numId != undefined\">{{detail.units}}</td>\n              <td *ngIf=\"numId == undefined\">\n                <mat-form-field><input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.units\"\n                    name=\"units{{index}}\" /></mat-form-field>\n              </td>\n              <td *ngIf=\"numId != undefined\">{{detail.sales_price}}</td>\n              <td *ngIf=\"numId == undefined\">\n                    <mat-form-field>\n                   <input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.sales_price\"\n                    name=\"sales_price{{index}}\" /></mat-form-field>\n              </td>\n              <!-- <td *ngIf=\"detail.fraction == false\">${{detail.product.averageunitcost * 1.2}}</td>\n              <td *ngIf=\"detail.fraction == true\">\n                ${{(detail.product.averageunitcost/detail.product.units)  * 1.2}}</td> -->\n\n                <td *ngIf=\"numId != undefined\">{{detail.discount}}</td>\n              <td *ngIf=\"numId == undefined\">\n                    <mat-form-field>\n                    <span (click)=\"changeDiscountSymbol()\">{{discountSymbol}} </span> <input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.discount\"\n                    name=\"units{{index}}\" /></mat-form-field>\n                    <div *ngIf=\"discountSymbol == '%'\"><span *ngIf=\"detail.fraction == false\">(${{(detail.product.averageunitcost * 1.2)*(detail.discount/100)}})</span>\n                    <span *ngIf=\"detail.fraction == true\">(${{((detail.product.averageunitcost/detail.product.units)  * 1.2)*(detail.discount/100)}})</span></div>\n                    <div *ngIf=\"discountSymbol != '%'\"><span *ngIf=\"detail.fraction == false\">(%{{100*(detail.discount/(detail.product.averageunitcost * 1.2))}})</span>\n                      <span *ngIf=\"detail.fraction == true\">(%{{100*(detail.discount/((detail.product.averageunitcost/detail.product.units)  * 1.2))}})</span></div>\n              </td>\n                \n              <td *ngIf=\"numId != undefined\">{{detail.tax}}</td>\n              <td *ngIf=\"numId == undefined\">\n                    <mat-form-field>\n                    <span >%</span> <input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.tax\"\n                    name=\"tax{{index}}\" /></mat-form-field>\n              </td>\n\n              <!-- <td *ngIf=\"numId == undefined && model.inventory_movement_entry_out_type_id == 174\">\n                <mat-form-field>$<input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.purchase_price\"\n                    name=\"purchase_price{{index}}\" /></mat-form-field>\n              </td> -->\n              <td *ngIf=\"detail.fraction == false\">${{detail.product.averageunitcost * detail.units}}</td>\n              <td *ngIf=\"detail.fraction == true\">\n                ${{(detail.product.averageunitcost/detail.product.units) * detail.units}}</td>\n              <td class=\"w-40\" *ngIf=\"numId == undefined\">\n                <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeProduct(index)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n    <!--notas-->\n    <div class='col-sm-12 col-md-12 margin-bottom'>\n      <mat-form-field class=\"full-width\">\n        <textarea type=\"text\" id=\"notes\" name=\"notes\" [(ngModel)]=\"model.notes\" matInput placeholder=\"Nota\"></textarea>\n      </mat-form-field>\n    </div>\n\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <mat-form-field><input readonly matInput placeholder=\"Total ($)\" [(ngModel)]=\"model.total\" name=\"total cost\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-7\" [class.btn-action-container]=\"booActive\" *ngIf=\"strAction != 'Actualizar'\">\n      <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button\n        class=\"btn-w-mat no-margin-left btn-right\" (click)=\"save()\">{{strAction}}</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing-action/billing-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_modal_stocks_modal_stocks_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-stocks/modal-stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_modal_customers_quotes_modal_customers_quotes_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-customers-quotes/modal-customers-quotes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__billing_component__ = __webpack_require__("../../../../../src/app/smartity/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingActionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BillingActionComponent = /** @class */ (function (_super) {
    __extends(BillingActionComponent, _super);
    function BillingActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.warehouse = {};
        _this.warehouses = [];
        _this.stocks = [];
        _this.created_at = '';
        _this.expire_at = '';
        _this.estimate_delivery = '';
        _this.contact_name = {};
        _this.arrPopulation_type = [];
        _this.arrPerauth_char_type = [];
        _this.operations_costs_centres = [];
        _this.arrPayment_condition = [];
        _this.arrPayment_method = [];
        _this.customer = {};
        _this.customers = [];
        _this.seller = {};
        _this.discountSymbol = '%';
        _this.billingResolutions = [];
        return _this;
    }
    BillingActionComponent.prototype.ngOnInit = function () {
        this.model.created_at = '';
        this.clean();
        this.getCollection();
        if (this.numId !== undefined) {
            this.getDataById();
        }
        else {
            this.model.created_at = new Date();
        }
    };
    BillingActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.helperService.POST("/api/collections", ["POPULATION_TYPE", "PAYMENT_METHOD", "PAYMENT_CONDITION"]).subscribe(function (rs) {
            var res = rs.json();
            _this.arrPopulation_type = res.POPULATION_TYPE;
            _this.arrPayment_method = res.PAYMENT_METHOD;
            _this.arrPayment_condition = res.PAYMENT_CONDITION;
        }, function (err) { });
        this.helperService.GET("/api/billing-resolutions").subscribe(function (data) {
            var res = data.json();
            _this.billingResolutions = res.data;
            console.log(_this.billingResolutions);
        }, function (err) { });
    };
    BillingActionComponent.prototype.openCustomerQuotesLoad = function () {
        var _this = this;
        this.modalCustomersQuotes = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modals_modal_customers_quotes_modal_customers_quotes_component__["a" /* ModalCustomersQuotesComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Cotizaciones de clientes',
                customer: this.model.customer,
                option: '2'
            }
        });
        this.modalCustomersQuotes.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (customerQuotes) { return customerQuotes; })).subscribe(function (customerQuotes) {
            _this.model.details = JSON.parse(customerQuotes.products || []);
            _this.model.customer_id = customerQuotes.customer_id;
            _this.customer = customerQuotes.stakeholder_info;
            _this.contact_name["name_sales_contact"] = customerQuotes.supplier_info.sales_contact.name;
            _this.model.payment_condition_id = customerQuotes.payment_condition_id;
            _this.model.notes = 'Remisión realizada a partir de la cotización ' + customerQuotes.document.prefix + '-' + customerQuotes.consecutive;
            _this.totalCost();
        });
    };
    BillingActionComponent.prototype.openRemissionGoods = function () {
        var _this = this;
        this.modalCustomersQuotes = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modals_modal_customers_quotes_modal_customers_quotes_component__["a" /* ModalCustomersQuotesComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Remisiones',
                customer: this.model.customer,
                option: '2'
            }
        });
        this.modalCustomersQuotes.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (customerQuotes) { return customerQuotes; })).subscribe(function (customerQuotes) {
            _this.model.details = JSON.parse(customerQuotes.products || []);
            _this.model.customer_id = customerQuotes.customer_id;
            _this.customer = customerQuotes.stakeholder_info;
            _this.contact_name["name_sales_contact"] = customerQuotes.supplier_info.sales_contact.name;
            _this.model.payment_condition_id = customerQuotes.payment_condition_id;
            _this.model.notes = 'Remisión realizada a partir de la cotización ' + customerQuotes.document.prefix + '-' + customerQuotes.consecutive;
            _this.totalCost();
        });
    };
    BillingActionComponent.prototype.save = function () {
        var _this = this;
        this.model.products = JSON.stringify(this.model.details || []);
        console.log(this.model.products);
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                var modelInv = { "details": {} };
                modelInv['details'] = this.model.details;
                modelInv['warehouse_id'] = this.model['warehouse_id'];
                modelInv['date'] = this.model['created_at'];
                modelInv['inventory_movement_entry_out_type_id'] = 180;
                modelInv['observations'] = '';
                modelInv['purchase_price'] = 0;
                this.helperService.POST("/api/inventory-movements", modelInv).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.store) {
                        _this.model['inventory_movement_out_id'] = res.inventory_movement_id;
                        _this.helperService.POST("/api/remission-goods", _this.model).subscribe(function (rs1) {
                            var res1 = rs1.json();
                            if (res1.store) {
                                _this.helperService.POST("/api/billing", _this.model).subscribe(function (rs2) {
                                    var res2 = rs2.json();
                                    if (res2.store) {
                                        _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                                        _this.goList();
                                    }
                                }, function (err) {
                                    var err_rs = err.json();
                                    _this.loaderService.display(false);
                                    _this.snackBar.open(err_rs.message, 'Error', { duration: 4000 });
                                });
                            }
                        }, function (err) {
                            var err_rs = err.json();
                            _this.loaderService.display(false);
                            _this.snackBar.open(err_rs.message, 'Error', { duration: 4000 });
                        });
                    }
                }, function (err) {
                    var err_rs = err.json();
                    _this.loaderService.display(false);
                    _this.snackBar.open(err_rs.message, 'Error', { duration: 4000 });
                });
                break;
            case 'Actualizar':
                this.helperService.PUT("/api/remission-goods/" + this.numId, this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.update) {
                        _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
            case 'Eliminar':
                this.helperService.DELETE("/api/remission-goods/" + this.numId).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.delete) {
                        _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
        }
    };
    BillingActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/remission-goods/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            _this.customer = res['data']['stakeholder_info'] || {};
            _this.seller = res['data']['seller'] || {};
            _this.contact_name = res['data']['customer_info']['purchases_contact'];
            _this.model.details = JSON.parse(_this.model.products);
            console.log(res);
            if (_this.customer.businessname == '') {
                _this.customer.businessname = _this.customer.fullname;
            }
            // if (this.employee.businessname == '') {
            //     this.employee.businessname = this.employee.fullname;
            // }
            _this.totalCost();
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    BillingActionComponent.prototype.clean = function () {
        this.model = { "warehouse": { "name": "" }, "details": [], "customer_id": -1, "warehouse_id": -1, "date": "" };
        this.model.status = true;
    };
    BillingActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    BillingActionComponent.prototype.removeProduct = function (index) {
        this.model.details.splice(index, 1);
        this.totalCost();
    };
    BillingActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouses = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["g" /* ModalWarehouseComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Bodega',
            }
        });
        this.modalWarehouses
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (data) { return data; }))
            .subscribe(function (data) {
            _this.model.warehouse_id = data.id;
            _this.model.warehouse = data;
            console.log(_this.model.warehouse_id);
        });
    };
    BillingActionComponent.prototype.openModalCostumers = function () {
        var _this = this;
        this.modalCostumer = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Clientes',
                option: '1'
            }
        });
        this.modalCostumer.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.model.customer_id = data.id;
            _this.customers = data;
        });
    };
    BillingActionComponent.prototype.openAddCustomer = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Clientes',
                option: '1'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.customer = stakeHolder;
            _this.contact_name = JSON.parse(stakeHolder.purchases_contact);
            _this.model.payment_condition_id = _this.customer.payment_condition_id;
            _this.model.customer_id = stakeHolder.id;
            // this.model.supplier_id = supplierQuotes.supplier_id;
            // this.supplier = supplierQuotes.stakeholder_info;
            // this.contact_name["name_sales_contact"] = supplierQuotes.supplier_info.sales_contact.name;
            // this.model.payment_condition_id = supplierQuotes.payment_condition_id;
        });
    };
    BillingActionComponent.prototype.openAddEmployees = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Vendedores',
                option: '3'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            console.log(stakeHolder);
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.seller["fullname"] = stakeHolder.name;
            _this.model.seller_employee_id = stakeHolder.id;
            console.log(_this.seller);
        });
    };
    BillingActionComponent.prototype.openModalProducts = function () {
        var _this = this;
        this.modalStocksProducts = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__modals_modal_stocks_modal_stocks_component__["a" /* ModalStocksComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Productos'
            }
        });
        this.modalStocksProducts.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            var movement = new Object({
                "product_id": data.id,
                "product": { "sku": data.product.sku, "display_name": data.product.display_name, "averageunitcost": data.product.averageunitcost, "units": data.units },
                "batch": "",
                "sales_price": "",
                "fraction": false,
                "location": "",
                "expiration_date": "",
                "units": "",
                "discount": _this.customer.global_discount,
                "tax": "",
                "unit_cost": ""
            });
            _this.model.details.push(movement);
        });
    };
    BillingActionComponent.prototype.totalCost = function () {
        var _this = this;
        this.model.total = 0;
        this.model.details.forEach(function (element) {
            _this.model.total = _this.model.total + (element.units * element.product.averageunitcost);
        });
    };
    BillingActionComponent.prototype.changeDiscountSymbol = function () {
        if (this.discountSymbol == '%') {
            this.discountSymbol = '$';
        }
        else {
            this.discountSymbol = '%';
        }
    };
    BillingActionComponent.prototype.openModalDeliveryPoints = function () {
        var _this = this;
        this.modalDeliveryPoints = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["k" /* ModalDeliveryPointsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Puntos de dispensación'
            }
        });
        this.modalDeliveryPoints.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            data.delivery_point_id = data.id;
            if (!_this.model.delivery_points) {
                _this.model.delivery_points = [];
            }
            if (_this.model.delivery_points.length == 0) {
                data.event = false;
                data.capita = false;
                data.pgp = false;
                _this.model.delivery_points.push(data);
            }
            var exist = false;
            _this.model.delivery_points.forEach(function (element, index) {
                if (element.name == data.name) {
                    exist = true;
                }
                if (_this.model.delivery_points.length == index + 1) {
                    if (!exist) {
                        data.event = false;
                        data.capita = false;
                        data.pgp = false;
                        _this.model.delivery_points.push(data);
                    }
                }
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    BillingActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'billing-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/billing/billing-action/billing-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__billing_component__["a" /* BillingComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__billing_component__["a" /* BillingComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], BillingActionComponent);
    return BillingActionComponent;
}(__WEBPACK_IMPORTED_MODULE_6__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=billing-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing-list/billing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\n                (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n  \n    <div class=\"col-sm-12\">\n  \n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th class=\"noAuto\" (click)=\"sort('id')\"># Factura\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('supplier_id')\">Cliente\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='supplier_id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('created_at')\">Fecha de elaboración\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('created_at')\">Fecha de vencimiento\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('status')\">Total\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('status')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                        <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">\n                        <td>{{ item.document.prefix }}-{{item.consecutive}}</td>\n                        <td>{{ item.stakeholder_info.fullname }}</td>\n                        <td>{{ item.created_at }}</td>\n                        <td>{{ item.expire_at }}</td>\n                        <td>$23.000</td>\n                        <td>{{ item.status ? 'Activo' : 'Inactiva' }}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar', item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n  \n        </div>\n  \n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing-list/billing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billing_component__ = __webpack_require__("../../../../../src/app/smartity/billing/billing.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillingListComponent = /** @class */ (function (_super) {
    __extends(BillingListComponent, _super);
    function BillingListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.urlApi = '/api/billing';
        return _this;
    }
    BillingListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BillingListComponent.prototype.CUD = function (action, row) {
        this.comp.strAction = action;
        switch (action) {
            case 'Guardar':
                this.comp.id = undefined;
                break;
            default:
                this.comp.id = row.id;
                break;
        }
        this.comp.openActions();
    };
    var _a, _b, _c, _d;
    BillingListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'billing-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/billing/billing-list/billing-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__billing_component__["a" /* BillingComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__billing_component__["a" /* BillingComponent */]) === "function" ? _d : Object])
    ], BillingListComponent);
    return BillingListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=billing-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Facturación</h1>\n        </div>\n        <p class=\"hero-tagline\">We provide amazing solutions that you can't miss</p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <billing-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></billing-action-cmp>\n                    <billing-list-cmp *ngIf=\"isOpenList\"></billing-list-cmp>\n                </div>                 \n            </div>\n        </div>\n    </article>\n</section>                  "

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillingComponent = /** @class */ (function (_super) {
    __extends(BillingComponent, _super);
    function BillingComponent() {
        return _super.call(this) || this;
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    BillingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-billing',
            template: __webpack_require__("../../../../../src/app/smartity/billing/billing.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BillingComponent);
    return BillingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/billing/billing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billing_component__ = __webpack_require__("../../../../../src/app/smartity/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__billing_action_billing_action_component__ = __webpack_require__("../../../../../src/app/smartity/billing/billing-action/billing-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__billing_list_billing_list_component__ = __webpack_require__("../../../../../src/app/smartity/billing/billing-list/billing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__billing_component__["a" /* BillingComponent */] }];
var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__billing_component__["a" /* BillingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__billing_action_billing_action_component__["a" /* BillingActionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__billing_list_billing_list_component__["a" /* BillingListComponent */]
            ]
        })
    ], BillingModule);
    return BillingModule;
}());

//# sourceMappingURL=billing.module.js.map

/***/ })

});
//# sourceMappingURL=21.chunk.js.map