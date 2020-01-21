webpackJsonp([4],{

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders-action/suppliers-orders-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"row form-inline\">\r\n        <div class=\"margin-bottom-40\" style=\"padding-left: 15px;padding-right: 15px;\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\"\r\n                class=\"btn-w-mat no-margin-right\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n            </button>\r\n        </div>\r\n        <div *ngIf=\"!model.fullfilled\" class=\"margin-bottom-40\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"openSupplierQuotesLoad()\"\r\n                class=\"btn-w-mat no-margin-left\">\r\n                <mat-icon>search</mat-icon> Cotización\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--comprador-->\r\n        <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input required readonly matInput type=\"text\" placeholder=\"Comprador\" [(ngModel)]=\"buyer.fullname\"\r\n                    id=\"employees\" name=\"employees\" />\r\n                <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openAddEmployees()\">search</mat-icon>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- creado el -->\r\n        <div class=\"col-md-3 margin-bottom\">\r\n            <mat-form-field>\r\n                <input matInput readonly placeholder=\"Creado el\" name=\"created_at\"\r\n                    value=\"{{model.created_at | date:'dd/MM/yyyy'}}\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- vence el -->\r\n        <div class=\"col-md-3 margin-bottom\">\r\n            <mat-form-field>\r\n                <input matInput [matDatepicker]=\"pickerExpiredAt\" placeholder=\"Vence el\" [min]=\"model.created_at\"\r\n                    [(ngModel)]=\"model.expire_at\" name=\"expired_at\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"pickerExpiredAt\"></mat-datepicker-toggle>\r\n                <mat-datepicker #pickerExpiredAt></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- estado -->\r\n        <div *ngIf=\"!model.fullfilled\" class='col-sm-12 col-md-1 margin-bottom'>\r\n            <div class=\"flex\">\r\n                <span class=\"flex-spacer\"></span>\r\n                <mat-slide-toggle [labelPosition]=\"'before'\" id=\"status\" name=\"status\" [(ngModel)]=\"model.status\">Estado\r\n                </mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n        <!-- cumplida -->\r\n        <div *ngIf=\"model.fullfilled\" class='col-sm-12 col-md-1 margin-bottom'>\r\n            <div class=\"flex\">\r\n                <span class=\"flex-spacer\"></span>\r\n                <mat-slide-toggle [labelPosition]=\"'before'\" [disabled]=\"true\" id=\"fullfilled\" name=\"fullfilled\" [(ngModel)]=\"model.fullfilled\">Cumplida\r\n                </mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- proveedor -->\r\n        <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input required readonly matInput type=\"text\" placeholder=\"Proveedor\" [(ngModel)]=\"supplier.fullname\"\r\n                    id=\"supplier\" name=\"supplier\" />\r\n                <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openAddSupplier()\">search</mat-icon>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- contacto de compras -->\r\n        <div class='col-sm-12 col-md-3 margin-bottom'>\r\n            <mat-form-field class=\"full-width\">\r\n                <input type=\"text\" name=\"contact_name\" [(ngModel)]=\"contact_name.name_sales_contact\" matInput\r\n                    placeholder=\"Contacto\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!--condiciones de pago-->\r\n        <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n            <mat-form-field>\r\n                <mat-select class=\"full-width\" placeholder=\"Condición de pago\" [(ngModel)]=\"model.payment_condition_id\"\r\n                    name=\"payment_condition\" id=\"population_type_id\">\r\n                    <mat-option *ngFor=\"let item of arrPayment_condition\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- operations/costs centres\r\n        <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n            <mat-form-field>\r\n                <mat-select class=\"full-width\" placeholder=\"Centro de operaciones\"\r\n                    [(ngModel)]=\"model.operationcentre_id\" name=\"operationcentre_id\" id=\"operationcentre_id\">\r\n                    <mat-option *ngFor=\"let item of operations_costs_centres\" [value]=\"item.id\">{{item.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- bodega destino -->\r\n        <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Bodega destino\" [(ngModel)]=\"warehouse.name\"\r\n                    id=\"warehouse\" name=\"warehouse\" />\r\n                <mat-icon matSuffix class=\"wh-24 pointer\" (click)=\"openModalWarehouse()\">search</mat-icon>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- entrega estimada -->\r\n        <div class=\"col-md-3 margin-bottom\">\r\n            <mat-form-field>\r\n                <input matInput [matDatepicker]=\"pickerEstimateDelivery\" [min]=\"model.created_at\"\r\n                    placeholder=\"Entrega estimada\" [(ngModel)]=\"model.estimate_delivery\" name=\"estimate_delivery\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"pickerEstimateDelivery\"></mat-datepicker-toggle>\r\n                <mat-datepicker #pickerEstimateDelivery></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <!-- productos -->\r\n        <div class=\"col-sm-12 margin-bottom\">\r\n\r\n            <div class=\"flex margin-bottom\">\r\n                <div class=\"box-header no-padding-h\">Productos</div>\r\n                <span class=\"flex-spacer\"></span>\r\n                <button [disabled]=\"model.supplier_id == -1 || model.fullfilled\" type=\"button\" mat-raised-button color=\"primary\"\r\n                    class=\"btn-w-md no-margin-left\" (click)=\"openModalProducts()\">Añadir</button>\r\n            </div>\r\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>PLU\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Producto\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Unidades\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Precio Unitario\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Descuento (%)\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                            <th>Subtotal\r\n                                <span class=\"glyphicon sort-icon\"\r\n                                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let detail of model.details;let index = index;\">\r\n                            <td>{{detail.product.sku}}</td>\r\n                            <td>{{detail.product.display_name}}</td>\r\n                            <td>\r\n                                <mat-form-field><input (keyup)=\"totalCost()\" matInput type=\"text\"\r\n                                        [(ngModel)]=\"detail.units\" name=\"units{{index}}\" /></mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field>$ <input (keyup)=\"totalCost()\" matInput type=\"text\"\r\n                                        [(ngModel)]=\"detail.product.averageunitcost\" name=\"average{{index}}\" />\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field>% <input (keyup)=\"totalCost()\" matInput type=\"text\"\r\n                                        [(ngModel)]=\"detail.discount\" name=\"discount{{index}}\" /></mat-form-field>\r\n                            </td>\r\n\r\n                            <td>${{ detail.product.averageunitcost * detail.units * (1-(detail.discount/100))}}</td>\r\n                            <td class=\"w-40\">\r\n                                <button type=\"button\" class=\"text-danger\" mat-icon-button\r\n                                    (click)=\"removeProduct(index)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <!--notas-->\r\n        <div class='col-sm-12 col-md-12 margin-bottom'>\r\n            <mat-form-field class=\"full-width\">\r\n                <textarea type=\"text\" id=\"notes\" name=\"notes\" [(ngModel)]=\"model.notes\" matInput\r\n                    placeholder=\"Nota\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <mat-form-field><input readonly matInput placeholder=\"Total ($)\" [(ngModel)]=\"model.total\"\r\n                    name=\"total cost\"></mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-7\" *ngIf=\"!model.fullfilled && numId != undefined\" [class.btn-action-container]=\"booActive\">\r\n            <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button\r\n            class=\"btn-w-mat no-margin-left btn-right\" (click)=\"save()\">{{strAction}}</button>\r\n            <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button\r\n                class=\"btn-w-mat no-margin-left btn-right\" (click)=\"fullfill()\">Cumplida</button>\r\n                \r\n        </div>\r\n        <div *ngIf=\"numId == undefined && !model.fullfilled\" class=\"col-md-7\" [class.btn-action-container]=\"booActive\">\r\n            <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button\r\n                class=\"btn-w-mat no-margin-left btn-right\" (click)=\"save()\">{{strAction}}</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders-action/suppliers-orders-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_modal_products_modal_products_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-products/modal-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__suppliers_orders_component__ = __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersOrdersActionComponent; });
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










var SuppliersOrdersActionComponent = /** @class */ (function (_super) {
    __extends(SuppliersOrdersActionComponent, _super);
    function SuppliersOrdersActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.contract_number = '';
        _this.created_at = '';
        _this.expire_at = '';
        _this.estimate_delivery = '';
        _this.contact_name = {};
        _this.arrPopulation_type = [];
        _this.arrPerauth_char_type = [];
        _this.operations_costs_centres = [];
        _this.arrPayment_condition = [];
        _this.booEvento = false;
        _this.booCapita = false;
        _this.booPgp = false;
        _this.warehouse = {};
        _this.customers = {};
        _this._conditional_alerts = [];
        _this._pharmadrugs = [];
        _this._ips = [];
        _this.supplier = {};
        _this.buyer = {};
        _this._model = {
            delivery_contracts: {
                status: true,
                pharmadrug_monopoly: false,
                pharmadrug_control: false,
                cooled_products: false
            }
        };
        return _this;
    }
    SuppliersOrdersActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        this.getCostCentres();
        if (this.numId !== undefined) {
            this.getDataById();
        }
        else {
            this.model.created_at = new Date();
        }
    };
    SuppliersOrdersActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.helperService.POST("/api/collections", ["POPULATION_TYPE", "PREAUTH_CHAR_TYPE", "PAYMENT_CONDITION"]).subscribe(function (rs) {
            var res = rs.json();
            _this.arrPopulation_type = res.POPULATION_TYPE;
            _this.arrPerauth_char_type = res.PREAUTH_CHAR_TYPE;
            _this.arrPayment_condition = res.PAYMENT_CONDITION;
        }, function (err) { });
    };
    SuppliersOrdersActionComponent.prototype.getCostCentres = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/operationscentres").subscribe(function (rs) {
            var res = rs.json();
            _this.operations_costs_centres = res.data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    SuppliersOrdersActionComponent.prototype.openSupplierQuotesLoad = function () {
        var _this = this;
        this.modalSupplierQuotes = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["w" /* ModalSupplierQuotesComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Cotizaciones de proveedores',
                supplier: this.model.supplier_id,
                option: '2'
            }
        });
        this.modalSupplierQuotes.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (supplierQuotes) { return supplierQuotes; })).subscribe(function (supplierQuotes) {
            _this.model.details = JSON.parse(supplierQuotes.products || []);
            _this.model.supplier_id = supplierQuotes.supplier_id;
            _this.supplier = supplierQuotes.stakeholder_info;
            _this.contact_name["name_sales_contact"] = supplierQuotes.supplier_info.sales_contact.name;
            _this.model.payment_condition_id = supplierQuotes.payment_condition_id;
            _this.model.notes = 'Orden realizada a partir de la cotización ' + supplierQuotes.document.prefix + '-' + supplierQuotes.consecutive;
            _this.totalCost();
        });
    };
    SuppliersOrdersActionComponent.prototype.fullfill = function () {
        this.model.fullfilled = true;
        this.save();
    };
    SuppliersOrdersActionComponent.prototype.save = function () {
        var _this = this;
        this.model.products = JSON.stringify(this.model.details || []);
        console.log(this.model.products);
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                this.helperService.POST("/api/suppliers-orders", this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.store) {
                        _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                        _this.goList();
                    }
                }, function (err) {
                    _this.loaderService.display(false);
                    _this.snackBar.open(err.message, 'Guardado', { duration: 4000 });
                });
                break;
            case 'Actualizar':
                this.helperService.PUT("/api/suppliers-orders/" + this.numId, this.model).subscribe(function (rs) {
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
                this.helperService.DELETE("/api/suppliers-orders/" + this.numId).subscribe(function (rs) {
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
    SuppliersOrdersActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/suppliers-orders/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            _this.supplier = res['data']['stakeholder_info'] || {};
            _this.warehouse = res['data']['warehouse'] || {};
            _this.buyer = res['data']['buyer'] || {};
            _this.contact_name = res['data']['supplier_info']['sales_contact'];
            _this.model.details = JSON.parse(_this.model.products);
            console.log(res);
            if (_this.supplier.businessname == '') {
                _this.supplier.businessname = _this.supplier.fullname;
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
    SuppliersOrdersActionComponent.prototype.clean = function () {
        this.model = { "details": [], "supplier_id": -1 };
        this.model.status = true;
        this._pharmadrugs = [];
        this._conditional_alerts = [];
        this.objEvent = {};
        this.objPgp = {};
        this.objCapita = {};
    };
    SuppliersOrdersActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    SuppliersOrdersActionComponent.prototype.removeProduct = function (index) {
        this.model.details.splice(index, 1);
        this.totalCost();
    };
    SuppliersOrdersActionComponent.prototype.openModalCostumers = function () {
        var _this = this;
        this.modalCostumer = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Clientes',
                option: '1'
            }
        });
        this.modalCostumer.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.model.customer_id = data.id;
            _this.customers = data;
        });
    };
    SuppliersOrdersActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouse = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["g" /* ModalWarehouseComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Bodega',
            }
        });
        this.modalWarehouse
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (data) { return data; }))
            .subscribe(function (data) {
            _this.model.warehouse_id = data.id;
            _this.warehouse = data;
        });
    };
    SuppliersOrdersActionComponent.prototype.openAddSupplier = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Proveedores',
                option: '2'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.supplier = stakeHolder;
            _this.contact_name = JSON.parse(stakeHolder.sales_contact);
            _this.model.payment_condition_id = _this.supplier.payment_condition_id;
            _this.model.supplier_id = stakeHolder.id;
            // this.model.supplier_id = supplierQuotes.supplier_id;
            // this.supplier = supplierQuotes.stakeholder_info;
            // this.contact_name["name_sales_contact"] = supplierQuotes.supplier_info.sales_contact.name;
            // this.model.payment_condition_id = supplierQuotes.payment_condition_id;
        });
    };
    SuppliersOrdersActionComponent.prototype.openAddEmployees = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Compradores',
                option: '3'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            console.log(stakeHolder);
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.buyer["fullname"] = stakeHolder.name;
            _this.model.buyer_employee_id = stakeHolder.id;
            console.log(_this.buyer);
        });
    };
    SuppliersOrdersActionComponent.prototype.openModalProducts = function () {
        var _this = this;
        this.modalProducts = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__modals_modal_products_modal_products_component__["a" /* ModalProductsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Productos'
            }
        });
        this.modalProducts.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            var movement = new Object({
                "product_id": data.id,
                "product": { "sku": data.sku, "display_name": data.name, "averageunitcost": data.averageunitcost, "units": data.units },
                "batch": "",
                "fraction": false,
                "location": "",
                "expiration_date": "",
                "units": "",
                "discount": _this.supplier.global_discount,
                "unit_cost": ""
            });
            _this.model.details.push(movement);
            // var exist = false;
            // this._pharmadrugs.forEach((element, index) => {
            //     if (element.name == data.name) {
            //         exist = true;
            //     }
            //     if (this._pharmadrugs.length == index + 1) {
            //         if (!exist) {
            //             this._pharmadrugs.push(data);
            //         }
            //     }
            // });
        });
    };
    SuppliersOrdersActionComponent.prototype.totalCost = function () {
        var _this = this;
        this.model.total = 0;
        this.model.details.forEach(function (element) {
            _this.model.total = _this.model.total + (element.units * element.product.averageunitcost * (1 - (element.discount / 100)));
        });
    };
    SuppliersOrdersActionComponent.prototype.openModalDeliveryPoints = function () {
        var _this = this;
        this.modalDeliveryPoints = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["k" /* ModalDeliveryPointsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Puntos de dispensación'
            }
        });
        this.modalDeliveryPoints.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
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
    SuppliersOrdersActionComponent.prototype.deleteDeliveryPoints = function (item) {
        this.model.delivery_points.splice(this._ips.indexOf(item), 1);
    };
    SuppliersOrdersActionComponent.prototype.deletePharmadrug = function (item) {
        this._pharmadrugs.splice(this._pharmadrugs.indexOf(item), 1);
    };
    SuppliersOrdersActionComponent.prototype.openModalIpsNetwork = function () {
        var _this = this;
        this.modalIpsNetwork = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modals__["l" /* ModalIpsNetworkComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Red adscrita'
            }
        });
        this.modalIpsNetwork.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            console.log(data);
            if (_this._ips.length == 0) {
                _this._ips.push(data);
            }
            else {
                var exist = false;
                _this._ips.forEach(function (element, index) {
                    if (element.value == data.value) {
                        exist = true;
                    }
                    if (_this._ips.length - 1 == index) {
                        if (!exist) {
                            _this._ips.push(data);
                        }
                    }
                });
            }
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    SuppliersOrdersActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'suppliers-orders-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders-action/suppliers-orders-action.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__suppliers_orders_component__["a" /* SuppliersOrdersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__suppliers_orders_component__["a" /* SuppliersOrdersComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], SuppliersOrdersActionComponent);
    return SuppliersOrdersActionComponent;
}(__WEBPACK_IMPORTED_MODULE_5__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=suppliers-orders-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders-list/suppliers-orders-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\n                (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-mat no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive matl-shadow--2dp\">\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n              <thead>\n                  <tr>\n                      <th class=\"noAuto\" (click)=\"sort('id')\"># Orden\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('supplier_id')\">Proveedor\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='supplier_id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('created_at')\">Fecha de elaboración\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('created_at')\">Fecha de vencimiento\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('created_at')\">Entrega Estimada\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('created_at')\">Bodega Destino\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='created_at'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                      <th (click)=\"sort('status')\">Cumplida\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                      <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of list.data\">\n                    <td>{{ item.document.prefix }}-{{item.consecutive}}</td>\n                      <td>{{ item.stakeholder_info.fullname }}</td>\n                      <td>{{ item.created_at | date:'dd/MM/yyyy'}}</td>\n                      <td>{{ item.expire_at | date:'dd/MM/yyyy'}}</td>\n                      <td>{{ item.estimate_delivery | date:'dd/MM/yyyy'}}</td>\n                      <td>{{ item.warehouse.name }}</td>\n                      <td>{{ item.fullfilled ? 'Cumplida' : 'No Cumplida' }}</td>\n                      <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                              <mat-icon>mode_edit</mat-icon>\n                          </button>\n                      </td>\n                      <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar', item)\">\n                              <mat-icon>delete</mat-icon>\n                          </button>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n\n        </div>\n\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders-list/suppliers-orders-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__ = __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersOrdersListComponent; });
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






var SuppliersOrdersListComponent = /** @class */ (function (_super) {
    __extends(SuppliersOrdersListComponent, _super);
    function SuppliersOrdersListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.urlApi = '/api/suppliers-orders';
        return _this;
    }
    SuppliersOrdersListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    SuppliersOrdersListComponent.prototype.CUD = function (action, row) {
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
    SuppliersOrdersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'suppliers-orders-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders-list/suppliers-orders-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__["a" /* SuppliersOrdersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__["a" /* SuppliersOrdersComponent */]) === "function" ? _d : Object])
    ], SuppliersOrdersListComponent);
    return SuppliersOrdersListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=suppliers-orders-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Órdenes de Compra</h1>\n        </div>\n        <p class=\"hero-tagline\">\n            A través de esta opción, usted podrá administrar los usuario que acceden al sistema y definir perfiles que\n            permitan limitar\n            el uso de las vistas no autorizadas.\n        </p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <suppliers-orders-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></suppliers-orders-action-cmp>\n                    <suppliers-orders-list-cmp *ngIf=\"isOpenList\"></suppliers-orders-list-cmp>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersOrdersComponent; });
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


var SuppliersOrdersComponent = /** @class */ (function (_super) {
    __extends(SuppliersOrdersComponent, _super);
    function SuppliersOrdersComponent() {
        return _super.call(this) || this;
    }
    SuppliersOrdersComponent.prototype.ngOnInit = function () {
    };
    SuppliersOrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-suppliers-orders',
            template: __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SuppliersOrdersComponent);
    return SuppliersOrdersComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=suppliers-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/suppliers-orders/suppliers-orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__ = __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__suppliers_orders_action_suppliers_orders_action_component__ = __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders-action/suppliers-orders-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__suppliers_orders_list_suppliers_orders_list_component__ = __webpack_require__("../../../../../src/app/smartity/suppliers-orders/suppliers-orders-list/suppliers-orders-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersOrdersModule", function() { return SuppliersOrdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__["a" /* SuppliersOrdersComponent */] }];
var SuppliersOrdersModule = /** @class */ (function () {
    function SuppliersOrdersModule() {
    }
    SuppliersOrdersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__suppliers_orders_component__["a" /* SuppliersOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__suppliers_orders_action_suppliers_orders_action_component__["a" /* SuppliersOrdersActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__suppliers_orders_list_suppliers_orders_list_component__["a" /* SuppliersOrdersListComponent */],
            ]
        })
    ], SuppliersOrdersModule);
    return SuppliersOrdersModule;
}());

//# sourceMappingURL=suppliers-orders.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map