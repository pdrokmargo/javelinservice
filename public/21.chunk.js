webpackJsonp([21],{

/***/ "../../../../../src/app/smartity/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Configuración</h1>\n        </div>\n        <!--p class=\"hero-tagline\">We provide amazing solutions that you can't miss</p-->\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 margin-bootom\">\n                    <button mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"save()\">Guardar configuraciones</button>\n                </div>\n                <div class=\"col-sm-12 col-md-4 col-lg-3\">\n                    <div class=\"box box-default\">\n                        <div class=\"box-body\">\n                            <div class=\"ibox-plain\">\n                                <mat-nav-list>\n                                    <mat-list-item *ngFor='let c of config'>\n                                        <span md-list-item class=\"btn-w-md\" (click)=\"selectItem(c)\">{{c.display}}</span>\n                                    </mat-list-item>\n                                </mat-nav-list>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-8 col-lg-9\">\n                    <div class=\"box box-default\">\n                        <div class=\"box-body\">\n                            <div class=\"margin-bottom\"></div>\n                            <!--business-->\n                            <div class=\"ibox-plain\">\n                                <form #businessForm=\"ngForm\" autocomplete=\"off\">\n                                    <div class=\"row\" [hidden]=\"itemSelected != 'business'\">\n\n                                        <!--nombre de la empresa-->\n                                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4 margin-bottom\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"model.business.name\" matInput placeholder=\"Nombre de la empresa\">\n                                            </mat-form-field>\n                                        </div>\n                                        <!--nit-->\n                                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4 margin-bottom\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"text\" id=\"nit\" name=\"nit\" [(ngModel)]=\"model.business.nit\" matInput placeholder=\"NIT\">\n                                            </mat-form-field>\n                                        </div>\n                                        <!--address-->\n                                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4 margin-bottom\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"model.business.address\" matInput placeholder=\"Dirección\">\n                                            </mat-form-field>\n                                        </div>\n                                        <!--phone_number-->\n                                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4 margin-bottom\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"number\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"model.business.phone_number\" matInput placeholder=\"Teléfono\">\n                                            </mat-form-field>\n                                        </div>\n                                        <!--tax_regime_id-->\n                                        <div class=\"form-group col-sm-12 col-md-6 col-lg-4 margin-bottom\">\n                                            <mat-select class=\"full-width\" placeholder=\"Tipo de régimen\" id=\"tax_regime_id\" name=\"tax_regime_id\" [(ngModel)]=\"model.business.tax_regime_id\">\n                                                <mat-option *ngFor=\"let r of regimen\" [value]=\"r.id\">\n                                                    {{ r.value }}\n                                                </mat-option>\n                                            </mat-select>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 col-md-6\">\n                                                    <div class=\"row\">\n                                                        <!--economic_activity-->\n                                                        <div class=\"form-group col-sm-12\">\n                                                            <mat-form-field class=\"full-width\">\n                                                                <input required type=\"text\" id=\"economic_activity\" name=\"economic_activity\" [(ngModel)]=\"model.business.economic_activity\"\n                                                                    matInput placeholder=\"Actividad ecónomica\">\n                                                            </mat-form-field>\n                                                        </div>\n                                                        <!--website-->\n                                                        <div class=\"form-group col-sm-12\">\n                                                            <mat-form-field class=\"full-width\">\n                                                                <input required type=\"text\" id=\"website\" name=\"website\" [(ngModel)]=\"model.business.website\" matInput placeholder=\"Sitio web\">\n                                                            </mat-form-field>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-sm-12 col-md-6\">\n                                                    <div class=\"row\">\n                                                        <!--big_contributor-->\n                                                        <div class=\"form-group col-sm-12 justify-content-end\">\n                                                            <span class=\"text-toggle\">Gran contribuyente</span>\n                                                            <mat-slide-toggle id=\"big_contributor\" name=\"big_contributor\" [(ngModel)]=\"model.business.big_contributor\"></mat-slide-toggle>\n                                                        </div>\n                                                        <!--selfholder-->\n                                                        <div class=\"form-group col-sm-12 justify-content-end\">\n                                                            <span class=\"text-toggle\">Autorretenedor</span>\n                                                            <mat-slide-toggle id=\"selfholder\" name=\"selfholder\" [(ngModel)]=\"model.business.selfholder\"></mat-slide-toggle>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n\n\n\n                                    </div>\n\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/configuration/configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent(service, snackBar) {
        var _this = this;
        this.service = service;
        this.snackBar = snackBar;
        this.config = [];
        this.model = {
            business: {}
        };
        this.itemSelected = '';
        this.foods = [];
        this.regimen = [];
        this.service.POST('collections', ["PORTFOLIO_TYPE"]).subscribe(function (res) {
            _this.regimen = res["PORTFOLIO_TYPE"];
        });
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GET("configurations").subscribe(function (res) {
            _this.config = res['user profiles'];
            _this.itemSelected = _this.config[0]["code"];
            _this.config.forEach(function (element) {
                switch (element["code"]) {
                    case 'business':
                        _this.model.business = JSON.parse(element["value"]);
                        break;
                }
            });
        });
    };
    ConfigurationComponent.prototype.selectItem = function (c) {
        this.itemSelected = c.code;
    };
    ConfigurationComponent.prototype.save = function () {
        var _this = this;
        this.service.PUT("configurations/1", {
            'business': JSON.stringify(this.model.business)
        }).subscribe(function (res) {
            console.log(res);
            _this.snackBar.open('Configuracion guardada correctamente', 'Actualización', {
                duration: 3500,
            });
        });
    };
    var _a, _b;
    ConfigurationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'configuration-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/configuration/configuration.component.html"),
            styles: ["\n  h3,.box-top { text-align: center; } \n  .justify-content-end { display: flex;justify-content: flex-end;}\n  .text-toggle { padding-right: 10px; }\n  "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _b : Object])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());

//# sourceMappingURL=configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/configuration/configuration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_component__ = __webpack_require__("../../../../../src/app/smartity/configuration/configuration.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__configuration_component__["a" /* ConfigurationComponent */] }];
var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__configuration_component__["a" /* ConfigurationComponent */]
            ]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());

//# sourceMappingURL=configuration.module.js.map

/***/ })

});
//# sourceMappingURL=21.chunk.js.map