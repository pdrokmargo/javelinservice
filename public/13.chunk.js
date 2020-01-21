webpackJsonp([13],{

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-action/inventory-adjustments-action.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FORM -->\r\n<form class=\"col-sm-12\" #modelForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 margin-bottom\" [class.btn-action-container]=\"booActive\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n            </button>\r\n        </div>\r\n\r\n\r\n        <!-- inventory_adjustment_type_id -->\r\n        <div class='col-sm-12 col-md-4 margin-bottom'>\r\n            <mat-form-field class=\"full-width\">\r\n                <mat-select (change)=\"setCurrentValue()\" class=\"full-width\" placeholder=\"Tipo de ajuste\" [(ngModel)]=\"model.inventory_adjustment_type_id\"\r\n                    name=\"inventory_adjustment_type_id\">\r\n                    <mat-option *ngFor=\"let item of inventory_adjustments_type\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <!-- warehouse -->\r\n        <div *ngIf=\"model.stock.warehouse\" class=\"col-sm-12 col-md-4 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Bodega de entrada\" [(ngModel)]=\"model.warehouse.name\"\r\n                    id=\"warehouse_name\" name=\"warehouse_name\" />\r\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalWarehouse()\">search</mat-icon>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <!-- date -->\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n                <input matInput [matDatepicker]=\"pickerAdjustmentDate\" placeholder=\"Fecha de ajuste\" [(ngModel)]=\"model.adjustment_date\"\r\n                    name=\"adjustment_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"pickerAdjustmentDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #pickerAdjustmentDate></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngIf=\"numId == undefined\">\r\n            <button [disabled]=\"model.warehouse_id == -1\" mat-raised-button (click)=\"openModalStocks()\" color=\"primary\"\r\n                class=\"btn-w-md no-margin-left btn-right\">\r\n                Seleccionar Producto\r\n            </button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"col-md-2\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"PLU\" [(ngModel)]=\"model.stock.product.sku\" id=\"product_sku\"\r\n                    name=\"product_sku\" />\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Nombre de Producto\" [(ngModel)]=\"model.stock.product.display_name\"\r\n                    id=\"display_name\" name=\"display_name\" />\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Stock\" [(ngModel)]=\"model.stock.set_stock\" id=\"set_stock\"\r\n                    name=\"set_stock\" />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Stock Fracciones\" [(ngModel)]=\"model.stock.fraction_stock\"\r\n                    id=\"fraction_stock\" name=\"fraction_stock\" />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Costo (promedio)\" [(ngModel)]=\"model.stock.product.averageunitcost\"\r\n                    id=\"averageunitcost\" name=\"averageunitcost\" />\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\" *ngIf=\"model.inventory_adjustment_type_id == 187\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Lote anterior\" [(ngModel)]=\"model.current_adjustment_value\"\r\n                    id=\"current_adjustment_value\" name=\"current_adjustment_value\" />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-2\" *ngIf=\"model.inventory_adjustment_type_id == 187\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly=\"numId != undefined\" matInput type=\"text\" placeholder=\"Lote nuevo\" [(ngModel)]=\"model.new_adjustment_value\"\r\n                    id=\"new_adjustment_value\" name=\"new_adjustment_value\" />\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\" *ngIf=\"model.inventory_adjustment_type_id == 188\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Ubicación anterior\" [(ngModel)]=\"model.current_adjustment_value\"\r\n                    id=\"current_adjustment_value2\" name=\"current_adjustment_value2\" />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-2\" *ngIf=\"model.inventory_adjustment_type_id == 188\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly=\"numId != undefined\" matInput type=\"text\" placeholder=\"Ubicación nueva\" [(ngModel)]=\"model.new_adjustment_value\"\r\n                    id=\"new_adjustment_value2\" name=\"new_adjustment_value2\" />\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngIf=\"numId == undefined\">\r\n            <button mat-raised-button (click)=\"guardar()\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\r\n                {{strAction}}\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-action/inventory-adjustments-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_modal_stocks_modal_stocks_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-stocks/modal-stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_modal_warehouse_modal_warehouse_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-warehouse/modal-warehouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_adjustments_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAdjustmentsActionComponent; });
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









var InventoryAdjustmentsActionComponent = /** @class */ (function (_super) {
    __extends(InventoryAdjustmentsActionComponent, _super);
    function InventoryAdjustmentsActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.inventory_adjustments = [];
        _this.inventory_adjustments_type = [];
        return _this;
    }
    InventoryAdjustmentsActionComponent.prototype.ngOnInit = function () {
        this.getCollection();
        if (this.numId != undefined) {
            this.getDataById();
            this.strAction = 'Actualiza';
        }
        else {
            this.model.adjustment_date = new Date();
            this.strAction = 'Guardar';
        }
        this.clean();
        console.log(this.model.warehouse.name);
    };
    InventoryAdjustmentsActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/collections", ['INVENTORY_ADJUSTMENT_TYPE']).subscribe(function (rs) {
            var res = rs.json();
            _this.inventory_adjustments_type = res.INVENTORY_ADJUSTMENT_TYPE;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    InventoryAdjustmentsActionComponent.prototype.clean = function () {
        this.inventory_adjustments = [];
        this.inventory_adjustments_type = [];
        this.model = { "warehouse_id": -1, "stock": { "product": { "sku": "", "display_name": "", "averageunitcost": "" }, "warehouse": { "name": "" } } };
    };
    InventoryAdjustmentsActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/inventory-adjustments/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    InventoryAdjustmentsActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    InventoryAdjustmentsActionComponent.prototype.openModalStocks = function () {
        var _this = this;
        this.modalStocks = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modals_modal_stocks_modal_stocks_component__["a" /* ModalStocksComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Existencias',
                warehouse: this.model.warehouse_id
            }
        });
        this.modalStocks.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.model.stock_product_id = data.id;
            _this.model.new_adjustment_value = "";
            _this.model.stock.product.sku = data.product.sku;
            _this.model.stock.product.averageunitcost = data.product.averageunitcost;
            _this.model.stock.product.display_name = data.product.display_name;
            _this.model.stock.set_stock = data.set_stock;
            _this.model.stock.fraction_stock = data.fraction_stock;
            _this.model.batch = data.batch;
            _this.model.location = data.location;
            if (_this.model.inventory_adjustment_type_id == 187) {
                _this.model.current_adjustment_value = data.batch;
            }
            else if (_this.model.inventory_adjustment_type_id == 188) {
                _this.model.current_adjustment_value = data.location;
            }
        });
    };
    InventoryAdjustmentsActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouse = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modals_modal_warehouse_modal_warehouse_component__["a" /* ModalWarehouseComponent */], {
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
            _this.model.new_adjustment_value = "";
            _this.model.current_adjustment_value = "";
            _this.model.stock.product.sku = "";
            _this.model.stock.product.averageunitcost = "";
            _this.model.stock.product.display_name = "";
            _this.model.set_stock = "";
            _this.model.fraction_stock = "";
            _this.model.batch = "";
            _this.model.location = "";
        });
    };
    InventoryAdjustmentsActionComponent.prototype.setCurrentValue = function () {
        if (this.model.inventory_adjustment_type_id == 187) {
            this.model.current_adjustment_value = this.model.batch;
        }
        else if (this.model.inventory_adjustment_type_id == 188) {
            this.model.current_adjustment_value = this.model.location;
        }
    };
    InventoryAdjustmentsActionComponent.prototype.guardar = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/inventory-adjustments", this.model).subscribe(function (rs) {
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
    var _a, _b, _c, _d, _e, _f, _g;
    InventoryAdjustmentsActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-adjustments-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-action/inventory-adjustments-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], InventoryAdjustmentsActionComponent);
    return InventoryAdjustmentsActionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=inventory-adjustments-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-list/inventory-adjustments-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n          <div style=\"width: 34px\" class=\"input-group-addon\">\n              <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                  <i class=\"fa fa-search\"></i>\n              </a>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-6\">\n      <button mat-raised-button  (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n        <mat-icon>add_circle_outline</mat-icon> Nuevo\n      </button>\n  </div>\n  <div class=\"col-sm-12\">\n\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n          <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n              <thead>\n                  <tr>\n                      <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <!-- <th># ID\n                          <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th>Bodega\n                          <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th>Tipo de ajuste\n                          <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <!-- <th>Realizado por\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th>Fecha\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th class=\"w-200\">Producto \n                        <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                    </th>\n                    <th>Ajuste\n                      <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                  </th>\n                      <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of list.data\">\n                      <!-- <td class=\"noAuto\">{{ item.id }}</td> -->\n                      <td>{{ item.stock.warehouse.name }}</td>\n                      <td>{{ item.inventory_adjustment_type.value }}</td>\n                      <td>{{ item.adjustment_date }}</td>\n                      <td>{{ item.stock.product.display_name}}</td>\n                      <td>{{ item.current_adjustment_value }} -> {{ item.new_adjustment_value }}</td>\n                      <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                              <mat-icon>mode_edit</mat-icon>\n                          </button>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n\n      </div>\n\n      <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n          [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-list/inventory-adjustments-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAdjustmentsListComponent; });
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





var InventoryAdjustmentsListComponent = /** @class */ (function (_super) {
    __extends(InventoryAdjustmentsListComponent, _super);
    function InventoryAdjustmentsListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.urlApi = '/api/inventory-adjustments';
        return _this;
    }
    InventoryAdjustmentsListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    InventoryAdjustmentsListComponent.prototype.CUD = function (action, row) {
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
    InventoryAdjustmentsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-adjustments-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-list/inventory-adjustments-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */]) === "function" ? _d : Object])
    ], InventoryAdjustmentsListComponent);
    return InventoryAdjustmentsListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=inventory-adjustments-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n  <section class=\"hero\">\n      <div class=\"hero-content\">\n          <h1 class=\"hero-title\">Ajustes de Inventario</h1>\n      </div>\n      <p class=\"hero-tagline\">We provide amazing solutions that you can't miss</p>\n  </section>\n  <article class=\"article padding-lg-v article-dark article-bordered\">\n      <div class=\"container-fluid with-maxwidth\">\n          <div class=\"box box-default\">\n              <div class=\"box-body\">\n                  <inventory-adjustments-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></inventory-adjustments-action-cmp>\n                  <inventory-adjustments-list-cmp *ngIf=\"isOpenList\"></inventory-adjustments-list-cmp>\n              </div>                 \n          </div>\n      </div>\n  </article>\n</section>            "

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAdjustmentsComponent; });
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


var InventoryAdjustmentsComponent = /** @class */ (function (_super) {
    __extends(InventoryAdjustmentsComponent, _super);
    function InventoryAdjustmentsComponent() {
        return _super.call(this) || this;
    }
    InventoryAdjustmentsComponent.prototype.ngOnInit = function () {
    };
    InventoryAdjustmentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-inventory-adjustments',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InventoryAdjustmentsComponent);
    return InventoryAdjustmentsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=inventory-adjustments.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_adjustments_action_inventory_adjustments_action_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-action/inventory-adjustments-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_adjustments_list_inventory_adjustments_list_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-adjustments/inventory-adjustments-list/inventory-adjustments-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryAdjustmentsModule", function() { return InventoryAdjustmentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */] }];
var InventoryAdjustmentsModule = /** @class */ (function () {
    function InventoryAdjustmentsModule() {
    }
    InventoryAdjustmentsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_adjustments_component__["a" /* InventoryAdjustmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inventory_adjustments_action_inventory_adjustments_action_component__["a" /* InventoryAdjustmentsActionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inventory_adjustments_list_inventory_adjustments_list_component__["a" /* InventoryAdjustmentsListComponent */]
            ]
        })
    ], InventoryAdjustmentsModule);
    return InventoryAdjustmentsModule;
}());

//# sourceMappingURL=inventory-adjustments.module.js.map

/***/ })

});
//# sourceMappingURL=13.chunk.js.map