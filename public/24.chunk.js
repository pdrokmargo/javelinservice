webpackJsonp([24],{

/***/ "../../../../../src/app/smartity/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Mi perfil</h1>\n        </div>\n        <p class=\"hero-tagline\">\n            A través de esta opción, usted podrá administrar la información de usuario.\n        </p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"box box-default\">\n                        <div class=\"box-body\">\n                            <div class=\"ibox-plain\">\n\n                                <form [hidden]=\"formActive == 'formPass'\" #modelForm=\"ngForm\" autocomplete=\"off\">\n                                    <div class=\"row\">\n\n                                        <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                                            <div class=\"box-body\">    \n                                                <mat-form-field class=\"full-width\">\n                                                    <input type=\"text\" readonly id=\"firstname\" name=\"firstname\" [(ngModel)]=\"model.firstname\" matInput placeholder=\"Nombres\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                                            <div class=\"box-body\">    \n                                                <mat-form-field class=\"full-width\">\n                                                    <input type=\"text\" readonly id=\"lastname\" name=\"lastname\" [(ngModel)]=\"model.lastname\" matInput placeholder=\"Apellidos\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                                            <div class=\"box-body\">    \n                                                <mat-form-field class=\"full-width\">\n                                                    <input type=\"text\" readonly id=\"username\" name=\"username\" [(ngModel)]=\"model.username\" matInput placeholder=\"Usuario\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-sm-12 col-md-6 col-lg-6\">\n                                            <div class=\"box-body\">    \n                                                <mat-form-field class=\"full-width\">\n                                                    <input type=\"email\" readonly id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" matInput placeholder=\"Correo electronico\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                        <div class='col-sm-12 col-md-6'>\n                                            <div class=\"box-body\">                                \n                                                <mat-select required class=\"full-width\" placeholder=\"Empresa por defecto\" [(ngModel)]=\"model.company_default_id\" name=\"company_default_id\"\n                                                id=\"company_default_id\">\n                                                    <mat-option *ngFor=\"let item of model.usersprivileges\" [value]=\"item.company.id\">{{item.company.name}}</mat-option>\n                                                </mat-select>    \n                                            </div>                                                                    \n                                        </div>\n\n                                        <div class=\"col-sm-12\" [class.btn-action-container]=\"booActive\">\n                                                \n                                            <button [disabled]=\"action_active ? false : !modelForm.form.valid\" mat-raised-button color=\"primary\"\n                                            class=\"btn-w-md no-margin-left btn-right\" (click)=\"updateProfile()\">Guardar</button>\n                                          \n                                            <button mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"formActive = 'formPass'\">Cambiar contraseña</button>\n\n                                        </div>\n                                     \n                                        <!--div class=\"col-sm-12 btn-right\">\n                            <button mat-raised-button color=\"primary\" class=\"btn-w-md\" [disabled]=\"!myprofileForm.form.valid\">Actualizar</button>\n                        </div-->\n                                    </div>\n                                </form>\n                                <form [hidden]=\"formActive == 'form'\" #updatePassForm=\"ngForm\" autocomplete=\"off\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <h5>Actualiza contraseña</h5>\n                                        </div>\n                                        <div class=\"form-group col-sm-12 col-md-6\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"password\" id=\"password1\" name=\"password1\" [(ngModel)]=\"pass.password1\" matInput placeholder=\"Contraseña\"\n                                                    validateEqual=\"password2\" reverse=\"true\">\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"form-group col-sm-12 col-md-6\">\n                                            <mat-form-field class=\"full-width\">\n                                                <input required type=\"password\" #password2=\"ngModel\" id=\"password2\" name=\"password2\" [(ngModel)]=\"pass.password2\" matInput\n                                                    placeholder=\"Confirmar\" validateEqual=\"password1\" reverse=\"false\">\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <small [hidden]=\"password2.valid || (password2.pristine && !updatePassForm.submitted)\" class=\"text-danger\">La contraseña no son iguales</small>\n                                        </div>\n                                        <div class=\"col-sm-12 btn-right\">\n                                            <button mat-raised-button color=\"primary\" class=\"btn-w-md\" [disabled]=\"!updatePassForm.form.valid\" (click)=\"updatePass()\">Actualiza</button>\n                                            <button mat-raised-button color=\"secondary\" class=\"btn-w-md\" (click)=\"formActive = 'form'; pass = {}; updatePassForm.reset();\">Regresar</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(loaderService, helperService, snackBar) {
        this.loaderService = loaderService;
        this.helperService = helperService;
        this.snackBar = snackBar;
        this.formActive = 'form';
        this.model = {};
        this.pass = {
            password1: '',
            password2: ''
        };
        this.password = { confirm: '' };
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/profile")
            .map(function (response) {
            var res = response.json();
            _this.model = res['data'];
        }).subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    MyProfileComponent.prototype.updatePass = function () {
        var _this = this;
        this.loaderService.display(true);
        var username = JSON.parse(localStorage.getItem('currentUser'))['username'];
        this.helperService.PUT("/api/users/change/password/" + username, this.pass)
            .map(function (response) {
            var res = response.json();
            if (res['status'] === 'success') {
                _this.formActive = 'form';
                _this.snackBar.open(res.message, 'Actualización', {
                    duration: 3500,
                });
            }
        }).subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    MyProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.PUT("/api/users/" + this.model.id, this.model)
            .map(function (response) {
            var res = response.json();
            if (res.status === 'success') {
                _this.snackBar.open(res.message, 'Actualización', {
                    duration: 3500,
                });
                var views = res.data['usercompany']['userprofile']['privileges'];
                localStorage.setItem('view', JSON.stringify(views));
                localStorage.setItem('objUser', JSON.stringify(res.data));
                window.location.reload();
            }
        }).subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    var _a, _b, _c;
    MyProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'my-profile-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/my-profile/my-profile.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object])
    ], MyProfileComponent);
    return MyProfileComponent;
}());

//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/my-profile/my-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_profile_component__ = __webpack_require__("../../../../../src/app/smartity/my-profile/my-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__my_profile_component__["a" /* MyProfileComponent */] }];
var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__my_profile_component__["a" /* MyProfileComponent */]
            ]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());

//# sourceMappingURL=my-profile.module.js.map

/***/ })

});
//# sourceMappingURL=24.chunk.js.map