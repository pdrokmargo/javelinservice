webpackJsonp([15],{

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points-action/delivery-points-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 margin-bottom\" [class.btn-action-container]=\"booActive\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                    <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n                </button>\r\n            </div>\r\n            <!-- name -->\r\n            <div class='col-sm-12 col-md-6 margin-bottom'>\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"model.name\" matInput placeholder=\"Nombre\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- token -->\r\n            <div *ngIf=\"numId != undefined\" class='col-sm-12 col-md-2 margin-bottom'>\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"token\" name=\"token\" [(ngModel)]=\"model.token\" matInput placeholder=\"Token\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- instalado -->\r\n            <div class='col-sm-12 col-md-6 col-lg-2 margin-bottom'>\r\n                <div class=\"flex\">\r\n                    <span class=\"flex-spacer\"></span>\r\n                    <mat-slide-toggle [labelPosition]=\"'before'\" id=\"installed\" name=\"installed\" [(ngModel)]=\"model.installed\">Instalado</mat-slide-toggle>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- estado -->\r\n            <div class='col-sm-12 col-md-6 col-lg-2 margin-bottom'>\r\n                <div class=\"flex\">\r\n                    <span class=\"flex-spacer\"></span>\r\n                    <mat-slide-toggle [labelPosition]=\"'before'\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\">Estado</mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n            <!-- bodega -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input readonly matInput type=\"text\" placeholder=\"Bodega\" [(ngModel)]=\"warehouse.name\" id=\"warehouse\" name=\"warehouse\" />\r\n                    <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalWarehouse()\">search</mat-icon>\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- grupo de punto de dispensacion -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                    <mat-form-field class=\"full-width\">\r\n                <mat-select class=\"full-width\" placeholder=\"Grupos de puntos de dispensación\" [(ngModel)]=\"model.delivery_point_group_id\"\r\n                    name=\"delivery_point_group_id\" id=\"delivery_point_group_id\">\r\n                    <mat-option *ngFor=\"let item of arrDelivery_point_group\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            </div>\r\n            <!--contratos-->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"flex\" style=\"height: 51px;\">\r\n                            <div class=\"box-header no-padding-h\">Contratos</div>\r\n                        </div>\r\n                        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Nombre</th>\r\n                                        <th>Evento</th>\r\n                                        <th>Cápita</th>\r\n                                        <th>PGP</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of arrDelivery_contracts\">\r\n                                        <td>{{item.name}}</td>\r\n                                        <td class=\"text-center\">\r\n                                            <mat-icon>{{item.event ? 'check_circle' : ''}}</mat-icon>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <mat-icon>{{item.capita ? 'check_circle' : ''}}</mat-icon>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <mat-icon>{{item.pgp ? 'check_circle' : ''}}</mat-icon>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--Usuario de regente-->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"flex\" style=\"margin-bottom: 10px;\">\r\n                            <div class=\"box-header no-padding-h\">Usuario de regente</div>\r\n                            <span class=\"flex-spacer\"></span>\r\n                            <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalUsers()\">Añadir</button>\r\n                        </div>\r\n                        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Nombre</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of model.assigned_users\">\r\n                                        <td>{{item.firstname}} {{item.lastname}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--description-->\r\n            <div class='col-sm-12 margin-bottom'>\r\n                <mat-form-field class=\"full-width\">\r\n                    <textarea type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Descripción\"></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-12\" [class.btn-action-container]=\"booActive\">\r\n                <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\r\n                    (click)=\"save()\">{{strAction}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points-action/delivery-points-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_points_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_modal_warehouse_modal_warehouse_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-warehouse/modal-warehouse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_modal_users_modal_users_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-users/modal-users.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPointsActionComponent; });
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










var DeliveryPointsActionComponent = /** @class */ (function (_super) {
    __extends(DeliveryPointsActionComponent, _super);
    function DeliveryPointsActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.arrDelivery_point_group = [];
        _this.warehouse = {};
        _this.arrDelivery_contracts = [];
        _this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        return _this;
    }
    DeliveryPointsActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId !== undefined) {
            this.getDataById();
        }
    };
    DeliveryPointsActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/collections", ["DELIVERY_POINTS_GROUPS"]).subscribe(function (rs) {
            var res = rs.json();
            _this.arrDelivery_point_group = res.DELIVERY_POINTS_GROUPS;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    DeliveryPointsActionComponent.prototype.save = function () {
        var _this = this;
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                this.model.delivery_contracts = '[]';
                this.helperService.POST("/api/delivery-points", this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.store) {
                        _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                        _this.comp.openList();
                        _this.loaderService.display(false);
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Guardado', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
            case 'Actualizar':
                this.helperService.PUT("/api/delivery-points/" + this.numId, this.model).subscribe(function (rs) {
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
                this.helperService.DELETE("/api/delivery-points/" + this.numId).subscribe(function (rs) {
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
    DeliveryPointsActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/delivery-points/" + this.numId).map(function (response) {
            var res = response.json();
            _this.model = res.data;
            _this.arrDelivery_contracts = [];
            _this.model.contract_point.forEach(function (element) {
                element.config = JSON.parse(element.config);
                _this.arrDelivery_contracts.push({
                    id: element.delivery_contracts.id,
                    name: element.delivery_contracts.name,
                    event: element.config.event || false,
                    capita: element.config.capita || false,
                    pgp: element.config.pgp || false,
                });
            });
            _this.warehouse = _this.model.warehouses;
            _this.model.operation_cost_centre_id = _this.model.root == true ? 'co-' + _this.model.operation_cost_centre_id : 'cc-' + _this.model.operation_cost_centre_id;
        }).subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    DeliveryPointsActionComponent.prototype.clean = function () {
        this.model = {};
        this.model.state = true;
    };
    DeliveryPointsActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    DeliveryPointsActionComponent.prototype.openModalWarehouse = function () {
        var _this = this;
        this.modalWarehouse = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals_modal_warehouse_modal_warehouse_component__["a" /* ModalWarehouseComponent */], {
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
            _this.warehouse = data;
        });
    };
    DeliveryPointsActionComponent.prototype.openModalUsers = function () {
        var _this = this;
        this.modalUsers = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modals_modal_users_modal_users_component__["a" /* ModalUsersComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Usuarios',
                type: 'regente'
            }
        });
        this.modalUsers.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            if (!_this.model.assigned_users) {
                _this.model.assigned_users = [];
            }
            _this.model.assigned_users.push(data);
            if (!_this.model.users) {
                _this.model.users = [];
            }
            _this.model.users.push({ "user_id": data.id });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], DeliveryPointsActionComponent.prototype, "select", void 0);
    DeliveryPointsActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-points-action-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points-action/delivery-points-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__delivery_points_component__["a" /* DeliveryPointsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__delivery_points_component__["a" /* DeliveryPointsComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], DeliveryPointsActionComponent);
    return DeliveryPointsActionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=delivery-points-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points-list/delivery-points-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button type=\"button\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <!-- <th class=\"noAuto\" (click)=\"sort('id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th (click)=\"sort('name')\">Nombre\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <!-- <th (click)=\"sort('delivery_contract_id')\">Grupo\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='delivery_contract_id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th (click)=\"sort('ct.state')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='ct.state'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th class=\"w-40\"></th>\n                        <th class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"list.data\">\n                    <tr *ngFor=\"let item of list.data; let index = index\" (click)=\"view(item); numItemSelected = index\" [ngClass]=\"{'active': numItemSelected == index }\">\n                        <!-- <td class=\"noAuto\">{{ item.id }}</td> -->\n                        <td>{{ item.name }}</td>\n                        <!-- <td>{{ item.delivery_points_groups.value }}</td> -->\n                        <td>{{ item.state ? 'Activo' : 'Inactiva' }}</td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar', item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points-list/delivery-points-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPointsListComponent; });
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






var DeliveryPointsListComponent = /** @class */ (function (_super) {
    __extends(DeliveryPointsListComponent, _super);
    function DeliveryPointsListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        _this.urlApi = '/api/delivery-points';
        return _this;
    }
    DeliveryPointsListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    DeliveryPointsListComponent.prototype.CUD = function (action, row) {
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], DeliveryPointsListComponent.prototype, "select", void 0);
    DeliveryPointsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-points-list-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points-list/delivery-points-list.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__["a" /* DeliveryPointsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__["a" /* DeliveryPointsComponent */]) === "function" ? _d : Object])
    ], DeliveryPointsListComponent);
    return DeliveryPointsListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=delivery-points-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Puntos de dispensación</h1>\n        </div>\n        <p class=\"hero-tagline\"></p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <delivery-points-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></delivery-points-action-cmp>\n                    <delivery-points-list-cmp *ngIf=\"isOpenList\"></delivery-points-list-cmp>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPointsComponent; });
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


var DeliveryPointsComponent = /** @class */ (function (_super) {
    __extends(DeliveryPointsComponent, _super);
    function DeliveryPointsComponent() {
        return _super.call(this) || this;
    }
    DeliveryPointsComponent.prototype.ngOnInit = function () {
    };
    DeliveryPointsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-points-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryPointsComponent);
    return DeliveryPointsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=delivery-points.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-points/delivery-points.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_points_list_delivery_points_list_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points-list/delivery-points-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delivery_points_action_delivery_points_action_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-points/delivery-points-action/delivery-points-action.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPointsModule", function() { return DeliveryPointsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__["a" /* DeliveryPointsComponent */] }];
var DeliveryPointsModule = /** @class */ (function () {
    function DeliveryPointsModule() {
    }
    DeliveryPointsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__delivery_points_component__["a" /* DeliveryPointsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__delivery_points_list_delivery_points_list_component__["a" /* DeliveryPointsListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__delivery_points_action_delivery_points_action_component__["a" /* DeliveryPointsActionComponent */]
            ]
        })
    ], DeliveryPointsModule);
    return DeliveryPointsModule;
}());

//# sourceMappingURL=delivery-points.module.js.map

/***/ })

});
//# sourceMappingURL=15.chunk.js.map