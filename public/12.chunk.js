webpackJsonp([12],{

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit-action/inventory-audit-action.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FORM -->\r\n<form class=\"col-sm-12\" #modelForm=\"ngForm\" autocomplete=\"off\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 margin-bottom\" [class.btn-action-container]=\"booActive\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"comp.openList()\" class=\"btn-w-md no-margin-left\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n      </button>\r\n    </div>\r\n    <!-- user -->\r\n    <div class=\"col-sm-12 col-md-4 col-lg-3 margin-bottom\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input readonly matInput type=\"text\" placeholder=\"Auditor\" [(ngModel)]=\"__user.fullname\" id=\"user_search\" name=\"user_search\" />\r\n        <mat-icon *ngIf=\"model.audit_state_id == AUDIT.NO_INICIADA\" matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalUser()\">search</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- warehouse -->\r\n    <div class=\"col-sm-12 col-md-4 col-lg-3 margin-bottom\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input readonly matInput type=\"text\" placeholder=\"Bodega\" [(ngModel)]=\"__warehouse.name\" id=\"warehouse_search\"\r\n          name=\"warehouse_search\" />\r\n        <mat-icon *ngIf=\"model.audit_state_id == AUDIT.NO_INICIADA\" matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalWarehouse()\">search</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n    <!--blinded_qty-->\r\n    <div class=\"col-sm-12 col-md-4 col-lg-3 margin-bottom\">\r\n      <div class=\"flex\">\r\n        <mat-slide-toggle disabled=\"{{model.audit_state_id > AUDIT.NO_INICIADA}}\" id=\"blinded_qty\" name=\"blinded_qty\"\r\n          [(ngModel)]=\"model.blinded_qty\">\r\n          Cantidades</mat-slide-toggle>\r\n        <span class=\"flex-spacer\"></span>\r\n      </div>\r\n    </div>\r\n    <!--date-->\r\n    <div class='col-sm-12 col-md-4 col-lg-3 margin-bottom'>\r\n      <div class=\"flex\">\r\n        <span class=\"flex-spacer\"></span>\r\n        <mat-form-field>\r\n          <input readonly matInput [matDatepicker]=\"pickerDate\" placeholder=\"Fecha de auditoria\" [(ngModel)]=\"model.date\"\r\n            name=\"date\">\r\n          <mat-datepicker #pickerDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 margin-bottom\" *ngIf=\"model.warehouse_id && model.audit_state_id == AUDIT.NO_INICIADA\">\r\n      <div class=\"flex\">\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-raised-button (click)=\"openModalStocks()\" class=\"btn-w-md no-margin-left\">\r\n          Agregar producto\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 mb-5 \" *ngIf=\"__product.length > 0\">\r\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n        <table class=\"full-width mdl-data-table table-bordered table-striped cf no-margin\">\r\n          <thead>\r\n            <tr>\r\n              <th>SKU</th>\r\n              <th>Producto</th>\r\n              <th>Lote</th>\r\n              <th>Ubicación</th>\r\n              <th>Vencimiento</th>\r\n              <th *ngIf=\"model.audit_state_id === AUDIT.EN_CURSO || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Unidades</th>\r\n              <th *ngIf=\"model.audit_state_id === AUDIT.EN_CURSO || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Fracciones</th>\r\n              <th *ngIf=\"(model.audit_state_id === AUDIT.EN_CURSO && model.blinded_qty) || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Unidades\r\n                Sistema</th>\r\n              <th *ngIf=\"(model.audit_state_id === AUDIT.EN_CURSO && model.blinded_qty) || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Fracciones\r\n                Sistema</th>\r\n              <th *ngIf=\"model.audit_state_id == AUDIT.NO_INICIADA\" class=\"w-40\"></th>\r\n              <th *ngIf=\"model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Resultado</th>\r\n              <th *ngIf=\"model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">Balance</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of __product; let i = index\">\r\n              <td>{{item.product.sku}}</td>\r\n              <td>{{item.product.name}}</td>\r\n              <td>{{item.batch}}</td>\r\n              <td>{{item.location}}</td>\r\n              <td>{{item.expiration_date | date:\"dd/MM/yyyy\"}}</td>\r\n              <td *ngIf=\"model.audit_state_id === AUDIT.EN_CURSO || model.audit_state_id > AUDIT.CANCELADA\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input disabled=\"{{model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA}}\"\r\n                    type=\"text\" id=\"{{i}}physical_set_stock\" name=\"{{i}}physical_set_stock\" matInput [(ngModel)]=\"item.physical_set_stock\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td *ngIf=\"model.audit_state_id === AUDIT.EN_CURSO || model.audit_state_id > AUDIT.CANCELADA\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input disabled=\"{{model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA}}\"\r\n                    type=\"text\" id=\"{{i}}physical_fraction_stock\" name=\"{{i}}physical_fraction_stock\" matInput\r\n                    [(ngModel)]=\"item.physical_fraction_stock\">\r\n                </mat-form-field>\r\n              </td>\r\n              <td *ngIf=\"(model.audit_state_id === AUDIT.EN_CURSO && model.blinded_qty) || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">{{ item.set_stock}}</td>\r\n              <td *ngIf=\"(model.audit_state_id === AUDIT.EN_CURSO && model.blinded_qty) || model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">{{ item.fraction_stock }}</td>\r\n              <td *ngIf=\"model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">\r\n                {{item.physical_set_stock == item.set_stock && item.physical_fraction_stock == item.fraction_stock ? 'OK' : ''}}\r\n                {{item.physical_set_stock < item.set_stock ? 'Sobran ' +(item.set_stock-item.physical_set_stock)+' unidad(es).' : '' }}\r\n                {{item.physical_set_stock > item.set_stock ? 'Faltan '+(item.physical_set_stock - item.set_stock)+' unidad(es)' : '' }}\r\n                {{item.physical_fraction_stock < item.fraction_stock ? 'Sobran ' +(item.fraction_stock - item.physical_fraction_stock)+' fraccion(es).' : '' }}\r\n                {{item.physical_fraction_stock > item.fraction_stock ? 'Faltan '+(item.physical_fraction_stock - item.fraction_stock)+' fraccion(es).' : ''}}\r\n              </td> \r\n              <td *ngIf=\"model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">\r\n                  {{\r\n                  ((item.set_stock - item.physical_set_stock) * item.product.averageunitcost) +\r\n                  ((item.fraction_stock - item.physical_fraction_stock) * (item.product.averageunitcost/item.product.units)) | currency:'USD':true\r\n                  }}\r\n              </td>\r\n              <td *ngIf=\"model.audit_state_id == AUDIT.NO_INICIADA\">\r\n                <button type=\"button\" mat-icon-button class=\"text-danger w-40\" (click)=\"removeProduct(item)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12\" *ngIf=\"model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea disabled=\"{{model.audit_state_id == AUDIT.FINALIZADA || model.audit_state_id == AUDIT.FINALIZADA_AJUSTE}}\"\r\n          type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Notas\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-12\" *ngIf=\"__product.length > 0 && model.audit_state_id == AUDIT.NO_INICIADA\">\r\n      <div class=\"flex\">\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-raised-button class=\"btn-w-md\" (click)=\"strAction == 'Guardar' ? saveAudit(AUDIT.NO_INICIADA) : updateAudit(AUDIT.NO_INICIADA)\">{{strAction}}</button>\r\n        <button mat-raised-button color=\"primary\" class=\"btn-w-md ml-3\" (click)=\"strAction == 'Guardar' ? saveAudit(190) : updateAudit(190)\">Iniciar\r\n          auditoría</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\" *ngIf=\"(__product.length > 0 && model.audit_state_id == AUDIT.EN_CURSO) &&  !(model.audit_state_id == AUDIT.AUDITADA || model.audit_state_id > AUDIT.CANCELADA)\">\r\n      <div class=\"flex\">\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-raised-button color=\"primary\" class=\"btn-w-md ml-3\" (click)=\"auditar()\">Auditar</button>\r\n        <button mat-raised-button class=\"btn-w-md ml-3\" (click)=\"cancelAudit()\">Cancelar</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\" *ngIf=\"model.audit_state_id == AUDIT.AUDITADA\">\r\n      <div class=\"flex\">\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-raised-button color=\"primary\" class=\"btn-w-md ml-3\" (click)=\"finalizar(AUDIT.FINALIZADA_AJUSTE)\">Ajustar\r\n          todo y\r\n          Finalizar</button>\r\n        <button mat-raised-button color=\"primary\" class=\"btn-w-md ml-3\" (click)=\"finalizar(AUDIT.FINALIZADA)\">Finalizar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit-action/inventory-audit-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_audit_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modal_warehouse_modal_warehouse_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-warehouse/modal-warehouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_modal_users_modal_users_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-users/modal-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_modal_stocks_modal_stocks_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-stocks/modal-stocks.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAuditActionComponent; });
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};










var InventoryAuditActionComponent = /** @class */ (function (_super) {
    __extends(InventoryAuditActionComponent, _super);
    function InventoryAuditActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.AUDIT = {
            NO_INICIADA: 189,
            EN_CURSO: 190,
            CANCELADA: 191,
            FINALIZADA: 192,
            FINALIZADA_AJUSTE: 193,
            AUDITADA: 194,
        };
        _this.__product = [];
        _this.__warehouse = {};
        _this.__user = {};
        return _this;
    }
    InventoryAuditActionComponent.prototype.ngOnInit = function () {
        if (this.numId != undefined) {
            this.getDataById();
        }
        else {
            this.model.date = new Date();
            this.model.blinded_qty = false;
            this.model.audit_state_id = this.AUDIT.NO_INICIADA;
        }
    };
    InventoryAuditActionComponent.prototype.openModalUser = function () {
        var _this = this;
        this.modalUser = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_modal_users_modal_users_component__["a" /* ModalUsersComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Auditor',
                type: 'AUDITOR'
            }
        });
        this.modalUser.afterClosed().subscribe(function (data) {
            _this.model.user_id = data.id;
            _this.__user = data;
            var _a = _this.__user, firstname = _a.firstname, lastname = _a.lastname;
            _this.__user.fullname = firstname + " " + lastname;
        });
    };
    InventoryAuditActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouse = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_modal_warehouse_modal_warehouse_component__["a" /* ModalWarehouseComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Bodega',
            }
        });
        this.modalWarehouse
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (data) { return data; }))
            .subscribe(function (data) {
            _this.__product = [];
            _this.model.warehouse_id = data.id;
            _this.__warehouse = data;
            _this.openModalStocks();
        });
    };
    InventoryAuditActionComponent.prototype.openModalStocks = function () {
        var _this = this;
        this.modalStocks = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modals_modal_stocks_modal_stocks_component__["a" /* ModalStocksComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Productos',
                warehouse: this.__warehouse.id
            }
        });
        this.modalStocks.afterClosed().subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.addProduct(data);
            }
        });
    };
    InventoryAuditActionComponent.prototype.addProduct = function (product) {
        if (this.__product.length == 0) {
            this.__product.push(product);
        }
        else {
            if (!this.__product.map(function (data) { return data.id === product.id; })) {
                this.__product.push(product);
            }
            else {
                this.snackBar.open('El produccto ya se encuentra seleccionado', 'Productos', { duration: 4000 });
            }
        }
    };
    InventoryAuditActionComponent.prototype.saveAudit = function (audit_state_id) {
        var _this = this;
        if (this.__product.length > 0) {
            this.model.audit_state_id = audit_state_id;
            this.model.details = this.__product;
            this.loaderService.display(true);
            this.helperService.POST("/api/inventory-audit", this.model).subscribe(function (rs) {
                var res = rs.json();
                if (res.store) {
                    _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                    if (audit_state_id == _this.AUDIT.NO_INICIADA) {
                        _this.comp.openList();
                    }
                    else {
                        _this.numId = res.id;
                    }
                }
                _this.loaderService.display(false);
            }, function (err) {
                _this.snackBar.open('Error', err.message, { duration: 4000 });
                console.log(err.message);
                _this.loaderService.display(false);
            });
        }
        else {
            this.snackBar.open('Seleccione productos', 'Productos', { duration: 4000 });
        }
    };
    InventoryAuditActionComponent.prototype.updateAudit = function (audit_state_id) {
        var _this = this;
        if (this.__product.length > 0) {
            this.model.audit_state_id = audit_state_id;
            this.model.details = this.__product;
            this.loaderService.display(true);
            this.helperService.PUT("/api/inventory-audit/" + this.numId, this.model).subscribe(function (rs) {
                var res = rs.json();
                if (res.update) {
                    _this.snackBar.open(res.message, 'Actualizado', { duration: 4000 });
                    if (audit_state_id == _this.AUDIT.NO_INICIADA) {
                        _this.comp.openList();
                    }
                }
                _this.loaderService.display(false);
            }, function (err) {
                _this.snackBar.open('Error', err.message, { duration: 4000 });
                console.log(err.message);
                _this.loaderService.display(false);
            });
        }
        else {
            this.snackBar.open('Seleccione productos', 'Productos', { duration: 4000 });
        }
    };
    InventoryAuditActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/inventory-audit/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            var _a = res.data, warehouse = _a.warehouse, user = _a.user, details = _a.details, data = __rest(_a, ["warehouse", "user", "details"]);
            _this.__product = details.map(function (a) {
                a.stock.physical_set_stock = a.physical_set_stock;
                a.stock.physical_fraction_stock = a.physical_fraction_stock;
                a.stock.set_stock = a.system_set_stock;
                a.stock.fraction_stock = a.system_fraction_stock;
                return a.stock;
            });
            _this.__warehouse = warehouse;
            _this.__user = user;
            var _b = _this.__user, firstname = _b.firstname, lastname = _b.lastname;
            _this.__user.fullname = firstname + " " + lastname;
            _this.model = data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    InventoryAuditActionComponent.prototype.removeProduct = function (product) {
        this.__product.splice(this.__product.indexOf(product), 1);
    };
    InventoryAuditActionComponent.prototype.cancelAudit = function () {
        var _this = this;
        this.helperService.PUT("/api/inventory-audit/cancel/" + this.numId, {}).subscribe(function (rs) {
            var res = rs.json();
            if (res.cancel) {
                _this.snackBar.open(res.message, 'Auditoria Cancelada', { duration: 4000 });
                _this.comp.openList();
            }
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    InventoryAuditActionComponent.prototype.auditar = function () {
        var _this = this;
        var product = this.__product.filter(function (item) { return item.physical_set_stock === '' || item.physical_fraction_stock === ''; });
        if (product.length > 0) {
            this.snackBar.open('Es necesario llenar todas las unidades y fracciones', 'Auditar', { duration: 4000 });
        }
        else {
            this.model.audit_state_id = this.AUDIT.AUDITADA;
            this.model.details = this.__product;
            this.helperService.PUT("/api/inventory-audit/auditar/" + this.numId, this.model).subscribe(function (rs) {
                var res = rs.json();
                if (res.auditada) {
                    _this.snackBar.open(res.message, 'Auditada', { duration: 4000 });
                }
                _this.loaderService.display(false);
            }, function (err) {
                _this.snackBar.open('Error', err.message, { duration: 4000 });
                console.log(err.message);
                _this.loaderService.display(false);
            });
        }
    };
    InventoryAuditActionComponent.prototype.finalizar = function (audit_state_id) {
        var _this = this;
        this.helperService.PUT("/api/inventory-audit/finalize/" + this.numId + "/" + audit_state_id, this.model).subscribe(function (rs) {
            var res = rs.json();
            if (res.finalize) {
                _this.snackBar.open(res.message, 'Auditoria Finalizada', { duration: 4000 });
                if (audit_state_id == _this.AUDIT.FINALIZADA_AJUSTE) {
                    _this.movimiento();
                }
            }
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    InventoryAuditActionComponent.prototype.movimiento = function () {
        var _this = this;
        var warehouse_id = this.model.warehouse_id;
        var date = new Date();
        var details_entrada = [];
        var details_salida = [];
        var cabecera_entrada = {
            warehouse_id: warehouse_id,
            date: date,
            inventory_movement_entry_out_type_id: 175,
            details: details_entrada,
            observations: "Ajuste realizando mediante la auditor\u00EDa # realizada por el auditor: " + this.__user.fullname
        };
        var cabecera_salida = {
            warehouse_id: warehouse_id,
            date: date,
            inventory_movement_entry_out_type_id: 181,
            details: details_salida,
            observations: "Ajuste realizando mediante la auditor\u00EDa # realizada por el auditor: " + this.__user.fullname
        };
        /*
        
        ((item.physical_set_stock - item.set_stock) * item.product.averageunitcost) +
        ((item.physical_fraction_stock - item.fraction_stock) * (item.product.averageunitcost/item.product.units))
        
        */
        //si es negativo, remove  -> salida   -> 181
        //si es positivo, add     -> entrada  -> 175
        this.__product.forEach(function (a) {
            var _a = a.product, id = _a.id, sku = _a.sku, name = _a.name, averageunitcost = _a.averageunitcost, units = _a.units;
            if (a.physical_fraction_stock - a.fraction_stock < 0) {
                details_salida.push({
                    units: Math.abs(a.physical_fraction_stock - a.fraction_stock),
                    batch: a.batch,
                    fraction: true,
                    product_id: id,
                    product: { sku: sku, averageunitcost: averageunitcost, units: units, display_name: name },
                    location: a.location,
                    expiration_date: a.expiration_date,
                    purchase_price: 0
                });
            }
            else if (a.physical_fraction_stock - a.fraction_stock > 0) {
                details_entrada.push({
                    units: Math.abs(a.physical_fraction_stock - a.fraction_stock),
                    batch: a.batch,
                    fraction: true,
                    product_id: id,
                    product: { sku: sku, averageunitcost: averageunitcost, units: units, display_name: name },
                    location: a.location,
                    expiration_date: a.expiration_date,
                    purchase_price: 0
                });
            }
            if (a.physical_set_stock - a.set_stock < 0) {
                details_salida.push({
                    units: Math.abs(a.physical_set_stock - a.set_stock),
                    batch: a.batch,
                    fraction: false,
                    product_id: id,
                    product: { sku: sku, averageunitcost: averageunitcost, units: units, display_name: name },
                    location: a.location,
                    expiration_date: a.expiration_date,
                    purchase_price: 0
                });
            }
            else if (a.physical_set_stock - a.set_stock > 0) {
                details_entrada.push({
                    units: Math.abs(a.physical_set_stock - a.set_stock),
                    batch: a.batch,
                    fraction: false,
                    product_id: id,
                    product: { sku: sku, averageunitcost: averageunitcost, units: units, display_name: name },
                    location: a.location,
                    expiration_date: a.expiration_date,
                    purchase_price: 0
                });
            }
        });
        if (details_entrada.length > 0) {
            this.loaderService.display(true);
            this.helperService.POST("/api/inventory-movements", cabecera_entrada).subscribe(function (rs) {
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
        }
        if (details_salida.length > 0) {
            this.loaderService.display(true);
            this.helperService.POST("/api/inventory-movements", cabecera_salida).subscribe(function (rs) {
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
        }
    };
    var _a, _b, _c, _d, _e, _f, _g;
    InventoryAuditActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-audit-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit-action/inventory-audit-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__inventory_audit_component__["a" /* InventoryAuditComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__inventory_audit_component__["a" /* InventoryAuditComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], InventoryAuditActionComponent);
    return InventoryAuditActionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=inventory-audit-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit-list/inventory-audit-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\"\r\n        (keydown)=\"enter($event)\">\r\n      <div style=\"width: 34px\" class=\"input-group-addon\">\r\n        <a style=\"cursor:pointer\" (click)=\"getAll()\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <button mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\r\n      <mat-icon>add_circle_outline</mat-icon> Nuevo\r\n    </button>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n\r\n    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n\r\n      <table class=\"mdl-data-table table-bordered table-striped cf no-margin\" style=\"white-space: normal;\">\r\n        <thead>\r\n          <tr>\r\n            <th># Auditoria Inv<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th>Bodega<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th>Fecha<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th>Auditor<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th>Cantidades visibles<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th>Estado<span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\r\n            <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of list.data; let index = index\">\r\n            <td>{{ index+1 }}</td>\r\n            <td>{{ item.warehouse.name }}</td>\r\n            <td>{{ item.date | date:'dd/MM/yyyy'}}</td>\r\n            <td>{{ item.user.firstname }} {{ item.user.lastname }}</td>\r\n            <td>{{ item.blinded_qty ? 'Si' : 'No' }}</td>\r\n            <td>{{ item.status.value }}</td>\r\n            <td *ngIf=\"actions[2].status\" class=\"w-40\">\r\n              <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\r\n                <mat-icon>{{ item.audit_state_id > AUDIT.NO_INICIADA ? 'visibility' : 'mode_edit' }}</mat-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\r\n      [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit-list/inventory-audit-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAuditListComponent; });
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





var InventoryAuditListComponent = /** @class */ (function (_super) {
    __extends(InventoryAuditListComponent, _super);
    function InventoryAuditListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.AUDIT = {
            NO_INICIADA: 189,
            EN_CURSO: 190,
            CANCELADA: 191,
            FINALIZADA: 192,
            FINALIZADA_AJUSTE: 193,
            AUDITADA: 194,
        };
        _this.urlApi = '/api/inventory-audit';
        return _this;
    }
    InventoryAuditListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    InventoryAuditListComponent.prototype.CUD = function (action, row) {
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
    InventoryAuditListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'inventory-audit-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit-list/inventory-audit-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__["a" /* InventoryAuditComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__["a" /* InventoryAuditComponent */]) === "function" ? _d : Object])
    ], InventoryAuditListComponent);
    return InventoryAuditListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=inventory-audit-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\r\n    <section class=\"hero\">\r\n        <div class=\"hero-content\">\r\n            <h1 class=\"hero-title\">Auditoría de Inventario</h1>\r\n        </div>\r\n    </section>\r\n    <article class=\"article padding-lg-v article-dark article-bordered\">\r\n        <div class=\"container-fluid with-maxwidth\">\r\n            <div class=\"box box-default\">\r\n                <div class=\"box-body\">\r\n                    <inventory-audit-action-cmp *ngIf=\"isOpenActions\"  [numId]=\"id\" [strAction]=\"strAction\"></inventory-audit-action-cmp>\r\n                    <inventory-audit-list-cmp *ngIf=\"isOpenList\"></inventory-audit-list-cmp>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryAuditComponent; });
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


var InventoryAuditComponent = /** @class */ (function (_super) {
    __extends(InventoryAuditComponent, _super);
    function InventoryAuditComponent() {
        return _super.call(this) || this;
    }
    InventoryAuditComponent.prototype.ngOnInit = function () {
    };
    InventoryAuditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-inventory-audit',
            template: __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InventoryAuditComponent);
    return InventoryAuditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=inventory-audit.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/inventory-audit/inventory-audit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inventory_audit_action_inventory_audit_action_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit-action/inventory-audit-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_audit_list_inventory_audit_list_component__ = __webpack_require__("../../../../../src/app/smartity/inventory-audit/inventory-audit-list/inventory-audit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryAuditModule", function() { return InventoryAuditModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__["a" /* InventoryAuditComponent */] }];
var InventoryAuditModule = /** @class */ (function () {
    function InventoryAuditModule() {
    }
    InventoryAuditModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__inventory_audit_component__["a" /* InventoryAuditComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inventory_audit_action_inventory_audit_action_component__["a" /* InventoryAuditActionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__inventory_audit_list_inventory_audit_list_component__["a" /* InventoryAuditListComponent */]
            ]
        })
    ], InventoryAuditModule);
    return InventoryAuditModule;
}());

//# sourceMappingURL=inventory-audit.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map