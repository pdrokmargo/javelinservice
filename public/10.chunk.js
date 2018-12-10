webpackJsonp([10],{

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-action/inventory-movements-entry-action.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FORM -->\n<form class=\"col-sm-12\" #modelForm=\"ngForm\" autocomplete=\"off\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 margin-bottom\" [class.btn-action-container]=\"booActive\">\n            <button mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\n            </button>\n        </div>\n\n        <!-- warehouse -->\n        <div *ngIf=\"model.warehouse\" class=\"col-sm-12 col-md-4 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input  readonly matInput type=\"text\" placeholder=\"Bodega de entrada\" [(ngModel)]=\"model.warehouse.name\" id=\"warehouse_name\" name=\"warehouse_name\" />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalWarehouse()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n\n        <!-- inventory_movements_type -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n            <mat-select class=\"full-width\" placeholder=\"Tipo de entrada\" [(ngModel)]=\"model.inventory_movement_entry_out_type_id\" name=\"inventory_movement_entry_out_type_id\">\n                <mat-option *ngFor=\"let item of inventory_movements_type\" [value]=\"item.id\">{{item.value}}</mat-option>\n            </mat-select>\n                </mat-form-field>\n        </div>\n\n        <!-- date -->\n        <div class=\"col-md-4\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerInventoryMovementDate\" placeholder=\"Fecha de entrada\" [(ngModel)]=\"model.date\" name=\"inventory_movement_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerInventoryMovementDate\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerInventoryMovementDate></mat-datepicker>\n              </mat-form-field>\n        </div>\n        \n        <div class=\"col-md-12\" *ngIf=\"numId == undefined\">\n            <button mat-raised-button (click)=\"openModalProducts()\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n                Añadir Producto\n            </button>\n        </div>\n        <div class=\"col-sm-12\">\n\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n    \n                <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                    <thead>\n                        <tr>\n                            <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th> -->\n                            <th>PLU\n                                <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Producto\n                                <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Lote\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Ubicación\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Vencimiento\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Fraccionado\n                                    <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                                </th>\n                            <th>Unidades\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Costo Unitario\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th>Subtotal\n                                <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th class=\"w-40\" *ngIf=\"numId == undefined\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let detail of model.details;let index = index;\">\n                            <td>{{detail.product.sku}}</td>\n                            <td>{{detail.product.display_name}}</td>\n                            <td *ngIf=\"numId != undefined\">{{detail.batch}}</td><td *ngIf=\"numId == undefined\"><mat-form-field><input matInput type=\"text\" [(ngModel)]=\"detail.batch\" name=\"batch{{index}}\" /></mat-form-field></td>\n                            <td *ngIf=\"numId != undefined\">{{detail.location}}</td><td *ngIf=\"numId == undefined\" ><mat-form-field><input matInput type=\"text\" [(ngModel)]=\"detail.location\" name=\"location{{index}}\" /></mat-form-field></td>\n                            <td *ngIf=\"numId != undefined\">{{detail.expiration_date}}</td><td *ngIf=\"numId == undefined\">\n                                <mat-form-field>    \n                                    <input matInput [matDatepicker]=\"pickerExpirationDate\" [(ngModel)]=\"detail.expiration_date\" name=\"expiration_date{{index}}\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"pickerExpirationDate\"></mat-datepicker-toggle>\n                                    <mat-datepicker #pickerExpirationDate></mat-datepicker>\n                                </mat-form-field></td>\n                                <td *ngIf=\"numId != undefined\">{{ detail.fraction ? 'Sí' : 'No' }}</td><td *ngIf=\"numId == undefined\" ><mat-slide-toggle [labelPosition]=\"after\" name=\"fraction{{index}}\" [(ngModel)]=\"detail.fraction\"></mat-slide-toggle></td>\n                            <td *ngIf=\"numId != undefined\">{{detail.units}}</td><td *ngIf=\"numId == undefined\" ><mat-form-field><input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.units\" name=\"units{{index}}\" /></mat-form-field></td>\n                            <td *ngIf=\"detail.fraction == false && numId != undefined\">${{detail.product.averageunitcost}}</td><td *ngIf=\"detail.fraction == true && model.inventory_movement_entry_out_type_id != 174\">${{detail.product.averageunitcost/detail.product.units}}</td><td *ngIf=\"numId == undefined && model.inventory_movement_entry_out_type_id == 174\"><mat-form-field>$<input (keyup)=\"totalCost()\" matInput type=\"text\" [(ngModel)]=\"detail.purchase_price\" name=\"purchase_price{{index}}\" /></mat-form-field></td>\n                            <td *ngIf=\"detail.fraction == false\">${{detail.product.averageunitcost * detail.units}}</td><td *ngIf=\"detail.fraction == true\">${{(detail.product.averageunitcost/detail.product.units) * detail.units}}</td>\n                            <td class=\"w-40\" *ngIf=\"numId == undefined\">\n                                    <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeProduct(index)\">\n                                        <mat-icon>delete</mat-icon>\n                                    </button>\n                                </td>\n                        </tr>\n                    </tbody>\n                </table>\n    \n            </div>\n          </div>\n           <!-- date -->\n        <div class=\"col-md-5\">\n            <mat-form-field>$<input readonly matInput placeholder=\"Costo Total\" [(ngModel)]=\"model.total\" name=\"total cost\"></mat-form-field>\n        </div>\n        <div class=\"col-md-7\" *ngIf=\"numId == undefined\">\n                <button mat-raised-button (click)=\"guardar()\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n                    Guardar\n                </button>\n            </div>\n\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-action/inventory-movements-entry-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_modal_warehouse_modal_warehouse_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-warehouse/modal-warehouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_modal_products_modal_products_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-products/modal-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_movements_entry_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMovementsEntryActionComponent; });
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









var InventoryMovementsEntryActionComponent = /** @class */ (function (_super) {
    __extends(InventoryMovementsEntryActionComponent, _super);
    function InventoryMovementsEntryActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.inventory_movements = [];
        _this.inventory_movements_type = [];
        _this.warehouse = {};
        _this.warehouses = [];
        _this.stocks = [];
        _this._pharmadrugs = [];
        return _this;
    }
    InventoryMovementsEntryActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId != undefined) {
            this.getDataById();
        }
        else {
            this.model.date = new Date();
        }
    };
    InventoryMovementsEntryActionComponent.prototype.openModalProducts = function () {
        var _this = this;
        this.modalProducts = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modals_modal_products_modal_products_component__["a" /* ModalProductsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Productos'
            }
        });
        this.modalProducts.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            var movement = new Object({
                "product_id": data.id,
                "product": { "sku": data.sku, "display_name": data.name, "averageunitcost": data.averageunitcost, "units": data.units },
                "batch": "",
                "fraction": false,
                "location": "",
                "expiration_date": "",
                "units": "",
                "purchase_price": ""
            });
            _this.model.details.push(movement);
        });
    };
    InventoryMovementsEntryActionComponent.prototype.guardar = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/inventory-movements", this.model).subscribe(function (rs) {
            var res = rs.json();
            if (res.store) {
                _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                _this.comp.openList();
            }
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    InventoryMovementsEntryActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/inventory-movements/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    InventoryMovementsEntryActionComponent.prototype.totalCost = function () {
        var _this = this;
        this.model.total = 0;
        this.model.details.forEach(function (element) {
            _this.model.total = _this.model.total + (element.units * element.averageunitcost);
        });
        console.log(this.model.total);
    };
    InventoryMovementsEntryActionComponent.prototype.clean = function () {
        this.inventory_movements = [];
        this.warehouses = [];
        this.stocks = [];
        this.inventory_movements_type = [];
        this.model = { "warehouse": { "name": "" }, "details": [], "warehouse_id": "", "inventory_movement_entry_out_type_id": "", "date": "" };
    };
    InventoryMovementsEntryActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    InventoryMovementsEntryActionComponent.prototype.removeProduct = function (index) {
        this.model.details.splice(index, 1);
        this.totalCost();
    };
    InventoryMovementsEntryActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/collections", ['INVENTORY_ENTRY_TYPE']).subscribe(function (rs) {
            var res = rs.json();
            _this.inventory_movements_type = res.INVENTORY_ENTRY_TYPE;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    InventoryMovementsEntryActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouse = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modals_modal_warehouse_modal_warehouse_component__["a" /* ModalWarehouseComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Bodega',
            }
        });
        this.modalWarehouse
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (data) { return data; }))
            .subscribe(function (data) {
            _this.model.warehouse_id = data.id;
            _this.model.warehouse = data;
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    InventoryMovementsEntryActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-movements-entry-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-action/inventory-movements-entry-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], InventoryMovementsEntryActionComponent);
    return InventoryMovementsEntryActionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=inventory-movements-entry-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-list/inventory-movements-entry-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button mat-raised-button  (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n          <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th># Transacción\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Bodega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <!-- <th>Realizado por\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th>Tipo de entrada\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Total\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <!-- <th class=\"noAuto\" (click)=\"sort('w.state')\">Estado\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">\n                        <!-- <td class=\"noAuto\">{{ item.id }}</td> -->\n                        <td>{{ item.document.prefix }}-{{item.consecutive}}</td>\n                        <td>{{ item.warehouse.name }}</td>\n                        <td>{{ item.date }}</td>\n                        <td>{{ item.inventory_movement_type.value}}</td>\n                        <td>{{ item.total}}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-list/inventory-movements-entry-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMovementsEntryListComponent; });
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





var InventoryMovementsEntryListComponent = /** @class */ (function (_super) {
    __extends(InventoryMovementsEntryListComponent, _super);
    function InventoryMovementsEntryListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.urlApi = '/api/inventory-movements';
        return _this;
    }
    InventoryMovementsEntryListComponent.prototype.ngOnInit = function () {
        this.getAll('&inventory_movement_type=1');
    };
    InventoryMovementsEntryListComponent.prototype.CUD = function (action, row) {
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
    InventoryMovementsEntryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-movements-entry-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-list/inventory-movements-entry-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */]) === "function" ? _d : Object])
    ], InventoryMovementsEntryListComponent);
    return InventoryMovementsEntryListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=inventory-movements-entry-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Movimiento de Inventario - Entradas</h1>\n        </div>\n        <p class=\"hero-tagline\">We provide amazing solutions that you can't miss</p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <inventory-movements-entry-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></inventory-movements-entry-action-cmp>\n                    <inventory-movements-entry-list-cmp *ngIf=\"isOpenList\"></inventory-movements-entry-list-cmp>\n                </div>                 \n            </div>\n        </div>\n    </article>\n</section>                        "

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryMovementsEntryComponent; });
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


var InventoryMovementsEntryComponent = /** @class */ (function (_super) {
    __extends(InventoryMovementsEntryComponent, _super);
    function InventoryMovementsEntryComponent() {
        return _super.call(this) || this;
    }
    InventoryMovementsEntryComponent.prototype.ngOnInit = function () {
    };
    InventoryMovementsEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-inventory-movements-entry',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InventoryMovementsEntryComponent);
    return InventoryMovementsEntryComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=inventory-movements-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_movements_entry_action_inventory_movements_entry_action_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-action/inventory-movements-entry-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_movements_entry_list_inventory_movements_entry_list_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-movements-entry/inventory-movements-entry-list/inventory-movements-entry-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryMovementsEntryModule", function() { return InventoryMovementsEntryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */] }];
var InventoryMovementsEntryModule = /** @class */ (function () {
    function InventoryMovementsEntryModule() {
    }
    InventoryMovementsEntryModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_movements_entry_component__["a" /* InventoryMovementsEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inventory_movements_entry_action_inventory_movements_entry_action_component__["a" /* InventoryMovementsEntryActionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inventory_movements_entry_list_inventory_movements_entry_list_component__["a" /* InventoryMovementsEntryListComponent */]
            ]
        })
    ], InventoryMovementsEntryModule);
    return InventoryMovementsEntryModule;
}());

//# sourceMappingURL=inventory-movements-entry.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map