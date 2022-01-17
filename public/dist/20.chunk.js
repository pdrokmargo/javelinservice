webpackJsonp([20],{

/***/ "../../../../../src/app/smartity/company/company-action/company-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #companyForm=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n        <div class=\"col-sm-12 margin-bottom\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                    <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n                </button>\r\n            </div>\r\n        \r\n            <!-- name -->\r\n            <div class=\"col-sm-12 col-md-8 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required name=\"name\" [(ngModel)]=\"model.name\" matInput placeholder=\"Nombre\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- nit -->\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required name=\"nit\" [(ngModel)]=\"model.nit\" matInput placeholder=\"Nit\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- description -->\r\n            <div class=\"col-sm-12 col-md-8 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Descripción\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- email -->\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" matInput placeholder=\"Correo Eletrónico\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!--country -->\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"País\" [(ngModel)]=\"model.country_id\"\r\n                        name=\"country_id\" (change)=\"getDepartments()\" id=\"country_id\">\r\n                        <mat-option *ngFor=\"let item of countries\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- department -->\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Departamento\" [(ngModel)]=\"model.department_id\"\r\n                        name=\"department_id\" (change)=\"getCities()\" id=\"department_id\">\r\n                        <mat-option *ngFor=\"let item of departments\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!--city -->\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Ciudad\" [(ngModel)]=\"model.city_id\"\r\n                        name=\"city_id\" id=\"city_id\">\r\n                        <mat-option *ngFor=\"let item of cities\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- address -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"model.address\" matInput placeholder=\"Dirección\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- website -->\r\n            <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"website\" name=\"website\" [(ngModel)]=\"model.website\" matInput placeholder=\"Sitio web\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- phone number -->\r\n            <div class=\"col-sm-12 col-md-3 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input NumberOnly required type=\"text\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"model.phone_number\" matInput placeholder=\"Teléfono\">\r\n                </mat-form-field>\r\n            </div>\r\n            <span class=\"col-sm-12\"></span>\r\n            <!-- economic activity -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"economic_activity\" name=\"economic_activity\" [(ngModel)]=\"model.economic_activity\" matInput\r\n                        placeholder=\"Actividad económica\">\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- tax regimen -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Tipo de régimen\" [(ngModel)]=\"model.tax_regime_id\"\r\n                        name=\"tax_regime_id\" id=\"tax_regime_id\">\r\n                        <mat-option *ngFor=\"let item of tax_regime\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_income_sales_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reterenta en Ventas\" [(ngModel)]=\"model.withholding_income_sales_id\"\r\n                        name=\"withholding_income_sales_id\" id=\"withholding_income_sales_id\">\r\n                        <mat-option *ngFor=\"let i of withholding\" [value]=\"i.id\">{{i.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_income_purchases_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reterenta en compras\" [(ngModel)]=\"model.withholding_income_purchases_id\"\r\n                        name=\"withholding_income_purchases_id\" id=\"withholding_income_purchases_id\">\r\n                        <mat-option *ngFor=\"let item of withholding\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_vat_sales_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reteiva en Ventas\" [(ngModel)]=\"model.withholding_vat_sales_id\"\r\n                        name=\"withholding_vat_sales_id\" id=\"withholding_vat_sales_id\">\r\n                        <mat-option *ngFor=\"let item of withholding\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_vat_purchases_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reteiva en compras\" [(ngModel)]=\"model.withholding_vat_purchases_id\"\r\n                        name=\"withholding_vat_purchases_id\" id=\"withholding_vat_purchases_id\">\r\n                        <mat-option *ngFor=\"let item of withholding\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_vat_sales_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reteica en Ventas\" [(ngModel)]=\"model.withholding_ica_sales_id\"\r\n                        name=\"withholding_ica_sales_id\" id=\"withholding_ica_sales_id\">\r\n                        <mat-option *ngFor=\"let item of withholding\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- withholding_vat_purchases_id -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <mat-select class=\"full-width\" placeholder=\"Reteica en compras\" [(ngModel)]=\"model.withholding_ica_purchases_id\"\r\n                        name=\"withholding_ica_purchases_id\" id=\"withholding_ica_purchases_id\">\r\n                        <mat-option *ngFor=\"let item of withholding\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <!-- big_contributor -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-slide-toggle [labelPosition]=\"after\" id=\"big_contributor\" name=\"big_contributor\" [(ngModel)]=\"model.big_contributor\">Gran\r\n                    contribuyente</mat-slide-toggle>\r\n            </div>\r\n        \r\n            <!-- selfholder -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n                <mat-slide-toggle [labelPosition]=\"after\" id=\"selfholder\" name=\"selfholder\" [(ngModel)]=\"model.selfholder\">Autoretenedor</mat-slide-toggle>\r\n            </div>\r\n        \r\n            <!-- big_contributor_resolution -->\r\n            <div class=\"col-sm-12 col-md-6 margin-bottom\" *ngIf=\"model.big_contributor\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input required type=\"text\" id=\"big_contributor_resolution\" name=\"big_contributor_resolution\" [(ngModel)]=\"model.big_contributor_resolution\"\r\n                        matInput placeholder=\"Resolución No.\">\r\n                </mat-form-field>\r\n            </div>\r\n        \r\n            <div class=\"col-sm-12\">\r\n                <button [disabled]=\"!companyForm.form.valid\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\r\n                    (click)=\"save()\">{{strAction}}</button>\r\n            </div>\r\n        </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/company/company-action/company-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_component__ = __webpack_require__("../../../../../src/app/smartity/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyActionComponent; });
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







var CompanyActionComponent = /** @class */ (function (_super) {
    __extends(CompanyActionComponent, _super);
    function CompanyActionComponent(loaderService, helperService, snackBar, route, router, comp) {
        var _this = _super.call(this) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.comp = comp;
        _this.countries = [];
        _this.departments = [];
        _this.cities = [];
        _this.tax_regime = [];
        _this.withholding = [];
        return _this;
        // paramatro enviado desde la url
    }
    CompanyActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId != undefined) {
            this.getDataById();
        }
    };
    /**
     * get the country and the tax regime with the collection of names
     */
    CompanyActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.helperService
            .POST("/api/collections", ['COUNTRIES', 'TAX_REGIME', 'WITHHOLDING_TYPE'])
            .map(function (response) {
            var res = response.json();
            _this.countries = res.COUNTRIES;
            _this.tax_regime = res.TAX_REGIME;
            _this.withholding = res.WITHHOLDING_TYPE;
        })
            .subscribe(function (error) {
            // this.loaderService.display(false);
        }, function (done) {
            // this.loaderService.display(false);
        });
    };
    CompanyActionComponent.prototype.getDepartments = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService
            .GET("/api/departamentos?pais_id=" + this.model.country_id)
            .map(function (response) {
            var res = response.json();
            _this.departments = res['departamentos'];
        })
            .subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    CompanyActionComponent.prototype.getCities = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService
            .GET("/api/ciudades?departamento_id=" + this.model.department_id)
            .map(function (response) {
            var res = response.json();
            _this.cities = res['ciudades'];
        })
            .subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    CompanyActionComponent.prototype.save = function () {
        var _this = this;
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                this.helperService.POST("/api/company", this.model).subscribe(function (rs) {
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
                this.helperService.PUT("/api/company/" + this.numId, this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.update) {
                        _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                        _this.comp.openList();
                        _this.loaderService.display(false);
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
            case 'Eliminar':
                this.helperService.DELETE("/api/company/" + this.numId).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.delete) {
                        _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                        _this.comp.openList();
                        _this.loaderService.display(false);
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
        }
        /** Update */
        if (this.model.id > 0) {
            this.loaderService.display(true);
            this.helperService
                .PUT("/api/company/" + this.numId, this.model)
                .map(function (response) {
                var res = response.json();
                if (res.status === 'success') {
                    _this.snackBar.open(res.message, 'Actualización', {
                        duration: 3500
                    });
                    // this.router.navigate(['app/company-list']);
                    _this.comp.openList();
                }
            })
                .subscribe(function (error) {
                _this.loaderService.display(false);
            }, function (done) {
                _this.loaderService.display(false);
            });
        }
        else {
            /** Create */
        }
    };
    CompanyActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService
            .GET("/api/company/" + this.numId)
            .map(function (response) {
            var res = response.json();
            _this.model = res['data'];
            _this.departments.push(_this.model.geolocation.department);
            _this.cities.push(_this.model.geolocation.city);
            _this.model.country_id = _this.model.geolocation.country_id;
            _this.model.department_id = _this.model.geolocation.department_id;
            _this.model.city_id = _this.model.geolocation.city_id;
        })
            .subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    CompanyActionComponent.prototype.clean = function () {
        this.cities = [];
        this.departments = [];
        this.model = {};
        this.model.big_contributor = true;
        this.model.selfholder = true;
    };
    CompanyActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    var _a, _b, _c, _d, _e, _f;
    CompanyActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'company-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/company/company-action/company-action.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */]) === "function" ? _f : Object])
    ], CompanyActionComponent);
    return CompanyActionComponent;
}(__WEBPACK_IMPORTED_MODULE_6__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=company-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/company/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th class=\"noAuto\" (click)=\"sort('id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('nit')\">Nit\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='nit'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('name')\">Nombre de Empresa\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th class=\"noAuto\" (click)=\"sort('state')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='state'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                        <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">\n                        <td class=\"noAuto\">{{ item.id }}</td>\n                        <td>{{ item.nit }}</td>\n                        <td>{{ item.name }}</td>\n                        <td class=\"noAuto\">{{ item.state ? 'Activa' : 'Inactiva' }}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"6\" [rotate]=\"true\"\n            [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/company/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_component__ = __webpack_require__("../../../../../src/app/smartity/company/company.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
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






var CompanyListComponent = /** @class */ (function (_super) {
    __extends(CompanyListComponent, _super);
    function CompanyListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.urlApi = '/api/company';
        return _this;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CompanyListComponent.prototype.CUD = function (action, row) {
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
    CompanyListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'company-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/company/company-list/company-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */]) === "function" ? _d : Object])
    ], CompanyListComponent);
    return CompanyListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Empresas</h1>\n        </div>\n        <p class=\"hero-tagline\">A través de esta opción, usted podrá crear las empresa de las cuales son necesarias para...</p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                   \n                    <company-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></company-action-cmp>\n                    <company-list-cmp *ngIf=\"isOpenList\"></company-list-cmp>\n                   \n                </div>               \n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
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



var CompanyComponent = /** @class */ (function (_super) {
    __extends(CompanyComponent, _super);
    function CompanyComponent() {
        return _super.call(this) || this;
    }
    CompanyComponent.prototype.ngOnInit = function () { };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'company-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/company/company.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base__["a" /* Base */]));

//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_component__ = __webpack_require__("../../../../../src/app/smartity/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_action_company_action_component__ = __webpack_require__("../../../../../src/app/smartity/company/company-action/company-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_list_company_list_component__ = __webpack_require__("../../../../../src/app/smartity/company/company-list/company-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__company_component__["a" /* CompanyComponent */] }];
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__company_component__["a" /* CompanyComponent */], __WEBPACK_IMPORTED_MODULE_6__company_action_company_action_component__["a" /* CompanyActionComponent */], __WEBPACK_IMPORTED_MODULE_7__company_list_company_list_component__["a" /* CompanyListComponent */]]
        })
    ], CompanyModule);
    return CompanyModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ })

});
//# sourceMappingURL=20.chunk.js.map