webpackJsonp([23],{

/***/ "../../../../../src/app/auth/authentication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony export AuthRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });


var AuthRoutes = [
    {
        path: "",
        children: [
            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "login", component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* PageLoginComponent */] }
        ]
    }
];
var AuthRoutingModule = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(AuthRoutes);
//# sourceMappingURL=authentication-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_routing_module__ = __webpack_require__("../../../../../src/app/auth/authentication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatButtonModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* PageLoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-auth\">\n  <div class=\"main-body\">\n    <!-- <mat-progress-bar *ngIf=\"btn_text == 'Procesando...'\" [color]=\"'primary'\" [mode]=\"'indeterminate'\" [value]=\"50\" [bufferValue]=\"75\"></mat-progress-bar> -->\n    <div class=\"card card-white\" style=\"margin: 0\">\n      <div class=\"card-content\">\n        <div class=\"logo\">\n          <a [routerLink]=\"['/']\">Iniciar sesión</a>\n        </div>\n\n        <form name=\"form\" class=\"md-form-auth form-validation\" (ngSubmit)=\"loginForm.form.valid && login()\" #loginForm=\"ngForm\" novalidate>\n          <fieldset>\n            <div class=\"form-group\">\n              <mat-form-field class=\"full-width mat-icon-left\">\n                <input required matInput type=\"text\" name=\"username\" placeholder=\"Usuario\" [(ngModel)]=\"model.username\" #username=\"ngModel\">\n                <mat-icon matSuffix class=\"material-icons\">account_box</mat-icon>\n              </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n              <mat-form-field class=\"full-width mat-icon-left\">\n                <mat-icon matSuffix class=\"material-icons\">lock_outline</mat-icon>\n                <input required matInput type=\"password\" name=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"model.password\"  #password=\"ngModel\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"error\" >{{error}}</div>\n            <button mat-raised-button type=\"submit\" color=\"primary\" class=\"float-right\">{{btn_text}}</button>\n          </fieldset>\n        </form>\n\n        <!--div class=\"additional-info\">\n          <a [routerLink]=\"['/extra/sign-up']\">Sign up</a>\n          <span class=\"divider-h\"></span>\n          <a [routerLink]=\"['/extra/forgot-password']\">Forgot your password?</a>\n        </div-->\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageLoginComponent = /** @class */ (function () {
    function PageLoginComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.model = {};
        this.error = '';
        this.btn_text = '';
        this.views = [];
    }
    PageLoginComponent.prototype.ngOnInit = function () {
        this.btn_text = 'Ingresar';
        this.service.logout();
    };
    PageLoginComponent.prototype.login = function () {
        var _this = this;
        this.btn_text = 'Procesando...';
        this.service
            .login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.service.GET("login").subscribe(function (res) {
                console.log(res);
                if (!res['usercompany']) {
                    _this.snackBar.open('Usted no tiene una empresa asignada.', 'Error', {
                        duration: 3500,
                    });
                    return false;
                }
                _this.views = res['usercompany']["userprofile"]["privileges"];
                localStorage.setItem('view', JSON.stringify(_this.views));
                localStorage.setItem('objUser', JSON.stringify(res));
                var link = ['/dashboard'];
                _this.router.navigate(link);
            }, function (err) {
                _this.snackBar.open('El usuario o la contraseña son incorrectos.', 'Error', {
                    duration: 3500,
                });
            });
        }, function (error) {
            _this.snackBar.open('El usuario o la contraseña son incorrectos.', 'Error', {
                duration: 3500,
            });
        });
    };
    var _a, _b, _c;
    PageLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Component */])({
            selector: "my-page-login",
            styles: [],
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object])
    ], PageLoginComponent);
    return PageLoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ })

});
//# sourceMappingURL=23.chunk.js.map