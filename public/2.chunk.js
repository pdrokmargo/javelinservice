webpackJsonp([2],{

/***/ "../../../../../src/app/smartity/users/user-action/user-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 margin-bottom\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n            </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-12 margin-bottom\">\r\n            <div class=\"flex\">\r\n                <span class=\"flex-spacer\"></span>\r\n                <mat-slide-toggle checked=\"true\" id=\"status\" name=\"status\" [(ngModel)]=\"_model.user.status\"> Estado </mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n        <!--user.firstname-->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input required type=\"text\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"_model.user.firstname\" matInput placeholder=\"Nombres\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!--user.lastname-->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input required type=\"text\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"_model.user.lastname\" matInput placeholder=\"Apellidos\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-12 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input #email=\"ngModel\" [userEmailValid]=\"ref\" [pattern]=\"emailPattern\" required type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"_model.user.email\"\r\n                    matInput placeholder=\"Correo electrónico\">\r\n                <mat-error *ngIf=\"email.errors?.userEmailValid\">Correo electrónico ya se encuentra registrado en el sistema</mat-error>\r\n                <mat-error *ngIf=\"email.errors?.pattern\">Formato errado</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <!--user.username-->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input autocomplete=\"nope\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" required type=\"text\" id=\"username\" name=\"username\"\r\n                    [(ngModel)]=\"_model.user.username\" matInput placeholder=\"Nombre de Usuario\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- user.password -->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\" *ngIf=\"strAction == 'Guardar'\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input autocomplete=\"new-password\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" required type=\"password\" id=\"password\"\r\n                    name=\"password\" [(ngModel)]=\"_model.user.password\" matInput placeholder=\"Contraseña\" reverse=\"true\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"add-company-panel\">\r\n            <div class=\"col-sm-12 margin-bottom\">\r\n                <h3>Añadir Empresa</h3>\r\n            </div>\r\n            <!-- company -->\r\n            <div class='col-sm-12 col-md-4 margin-bottom'>\r\n                    <mat-form-field class=\"full-width\"><mat-select class=\"full-width\" placeholder=\"Empresa\" [(ngModel)]=\"company_userprofile.company\" name=\"company_id\" id=\"company_id\">\r\n                    <mat-option *ngFor=\"let item of companies\" [value]=\"item\" [hidden]=\"item.hide\">{{item.name}}</mat-option>\r\n                </mat-select></mat-form-field>\r\n            </div>\r\n            <!-- user profile -->\r\n            <div class='col-sm-12 col-md-4 margin-bottom'>\r\n                    <mat-form-field class=\"full-width\"><mat-select class=\"full-width\" placeholder=\"Perfil de usuario\" [(ngModel)]=\"company_userprofile.userprofile\" name=\"user_profile_id\"\r\n                    id=\"user_profile_id\">\r\n                    <mat-option *ngFor=\"let item of userprofiles\" [value]=\"item\">{{item.up_description}}</mat-option>\r\n                </mat-select></mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-4 margin-bottom\">\r\n                <div class=\"flex\">\r\n                    <span class=\"flex-spacer\"></span>\r\n                    <button [disabled]=\"!(company_userprofile.company && company_userprofile.userprofile)\" type=\"button\" mat-raised-button color=\"primary\"\r\n                        class=\"btn-w-md no-margin-left\" (click)=\"addCompany()\">Añadir</button>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                    <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Empresa</th>\r\n                                <th>Perfil de Usuario</th>\r\n                                <th class=\"w-108\"></th>\r\n                                <th class=\"w-40\"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of _model.userprofiles\">\r\n                                <td>{{ item.company_name }}</td>\r\n                                <td>{{ item.user_profile_description }}</td>\r\n                                <td class=\"w-108\">\r\n                                    <button *ngIf=\"!item.default\" type=\"button\" mat-button (click)=\"isDefault(item)\">\r\n                                        <span style=\"color: #bfbaba\">Default</span>\r\n                                    </button>\r\n                                    <button *ngIf=\"item.default\" type=\"button\" mat-raised-button mat-button (click)=\"isDefault(item)\" color=\"primary\"> Default </button>\r\n                                </td>\r\n                                <td class=\"w-40\" title=\"Remover empresa\">\r\n                                    <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeCompany(item)\">\r\n                                        <mat-icon>delete</mat-icon>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\r\n                (click)=\"save()\">{{strAction}}</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/users/user-action/user-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_component__ = __webpack_require__("../../../../../src/app/smartity/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionComponent; });
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







var UserActionComponent = /** @class */ (function (_super) {
    __extends(UserActionComponent, _super);
    function UserActionComponent(loaderService, helperService, snackBar, route, router, comp) {
        var _this = _super.call(this) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.comp = comp;
        _this._model = {
            user: {
                status: true
            },
            userprofiles: []
        };
        _this.ref = undefined;
        _this.companies = [];
        _this.userprofiles = [];
        _this.company_userprofile = {};
        _this.booEmailValid = false;
        _this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        return _this;
    }
    UserActionComponent.prototype.ngOnInit = function () {
        this.getUserProfiles();
        this.getCompanies();
        if (this.numId != undefined) {
            this.getDataById();
        }
    };
    UserActionComponent.prototype.getUserProfiles = function () {
        var _this = this;
        this.helperService.GET("/api/userprofile?all=1").subscribe(function (rs) {
            var res = rs.json();
            _this.userprofiles = res.data;
        }, function (err) {
            console.log(err);
        });
    };
    UserActionComponent.prototype.getCompanies = function () {
        var _this = this;
        this.helperService.GET("/api/company").subscribe(function (rs) {
            var res = rs.json();
            _this.companies = res['data'];
        }, function (err) {
            console.log(err);
        });
    };
    UserActionComponent.prototype.save = function () {
        var _this = this;
        if (this._model.userprofiles.length === 0) {
            this.snackBar.open('El usuario debe estar vinculado por lo menos a una empresa', 'Error', {
                duration: 4000,
            });
            return false;
        }
        this._model.userprofiles.map(function (x) {
            if (x.default) {
                _this._model.user.company_default_id = x.company_id;
                _this._model.user.user_profile_id = x.user_profile_id;
            }
        });
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                this.helperService.POST("/api/users", this._model).subscribe(function (rs) {
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
                this.helperService.PUT("/api/users/" + this.numId, this._model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.update) {
                        _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.loaderService.display(false);
                    _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                });
                break;
            case 'Eliminar':
                this.helperService.DELETE("/api/users/" + this.numId).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.delete) {
                        _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.loaderService.display(false);
                    _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                });
                break;
        }
    };
    UserActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/users/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.ref = res.data.user.email;
            _this._model = res.data;
            _this._model.userprofiles.map(function (x) {
                x.default = false;
                if (x.company_id == _this._model.user.company_default_id) {
                    x.default = true;
                }
            });
            _this.loaderService.display(false);
        }, function (err) {
            _this.loaderService.display(false);
            console.log(err);
        });
    };
    UserActionComponent.prototype.isDefault = function (item) {
        this._model.userprofiles.map(function (x) {
            x.default = false;
        });
        item.default = true;
    };
    UserActionComponent.prototype.addCompany = function () {
        var _this = this;
        var cu_relation = {
            company_id: this.company_userprofile.company.id,
            company_name: this.company_userprofile.company.name,
            user_profile_id: this.company_userprofile.userprofile.id,
            user_profile_description: this.company_userprofile.userprofile.up_description,
            default: false
        };
        if (this._model.userprofiles.length == 0) {
            cu_relation.default = true;
            this._addCompany(cu_relation);
        }
        else {
            var exist = false;
            this._model.userprofiles.forEach(function (element, index) {
                if (element.company_id == cu_relation.company_id) {
                    exist = true;
                }
                if (index == _this._model.userprofiles.length - 1) {
                    if (!exist) {
                        _this._addCompany(cu_relation);
                    }
                    else {
                        _this.snackBar.open('El usuario ya tiene un perfil registrado en esta empresa', 'Error', {
                            duration: 4000,
                        });
                    }
                }
            });
        }
    };
    UserActionComponent.prototype._addCompany = function (data) {
        this._model.userprofiles.push(data);
        this.company_userprofile = {};
    };
    UserActionComponent.prototype.removeCompany = function (obj) {
        if (this._model.userprofiles.length > 0) {
            if (obj.default) {
                this._model.userprofiles[0].default = true;
            }
        }
        this._model.userprofiles.splice(this._model.userprofiles.indexOf(obj), 1);
    };
    UserActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    var _a, _b, _c, _d, _e, _f;
    UserActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'user-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/users/user-action/user-action.component.html"),
            styles: [
                ".add-company-panel {\n            width: 100%;\n            max-width: 700px;\n            margin: 15px auto;\n            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n            padding: 20px 0;\n            border-radius: 4px;\n        }\n        .add-company-panel h3 {\n            color: #b7b7b7;\n            margin-top: 0;\n            font-size: 1.8em;\n        }\n        "
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */]) === "function" ? _f : Object])
    ], UserActionComponent);
    return UserActionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=user-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- LIST -->\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n                <div style=\"width: 34px\" class=\"input-group-addon\">\n                    <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                        <i class=\"fa fa-search\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n                <mat-icon>add_circle_outline</mat-icon> Nuevo\n            </button>\n        </div>\n        <div class=\"col-sm-12\">\n\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n                <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                    <thead>\n                        <tr>\n                            <th class=\"noAuto\" (click)=\"sort('u.id')\">ID\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='u.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('username')\">Nombre de Usuario\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='username'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('firstname')\">Nombre\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='firstname'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('up_description')\">Perfil de Usuario\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='up_description'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th (click)=\"sort('c.name')\">Empresa\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='c.name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <!--th (click)=\"sort('last_access')\">Ultimo Acceso\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='last_access'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th-->\n                            <th (click)=\"sort('u.status')\">Estado\n                                <span class=\"glyphicon sort-icon\" *ngIf=\"key =='u.status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                            </th>\n                            <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                            <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of list.data\">\n                            <td class=\"noAuto\">{{ item.id }}</td>\n                            <td>{{ item.username }}</td>\n                            <td>{{ item.firstname + ' ' + item.lastname }}</td>\n                            <td>{{ item.user_profile }}</td>\n                            <td>{{ item.company }}</td>\n                            <!--td>{{ item.last_access }}</td-->\n                            <td>{{ item.status ? 'Activo' : 'Inactivo' }}</td>\n                            <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                                <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                                    <mat-icon>mode_edit</mat-icon>\n                                </button>\n                            </td>\n                            <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                                <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n            </div>\n\n            <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n                [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/smartity/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_component__ = __webpack_require__("../../../../../src/app/smartity/users/users.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
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






var UserListComponent = /** @class */ (function (_super) {
    __extends(UserListComponent, _super);
    function UserListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.urlApi = '/api/users';
        return _this;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    UserListComponent.prototype.CUD = function (action, row) {
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
    UserListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'user-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/users/user-list/user-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__users_component__["a" /* UsersComponent */]) === "function" ? _d : Object])
    ], UserListComponent);
    return UserListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Usuarios</h1>\n        </div>\n        <p class=\"hero-tagline\">\n            A través de esta opción, usted podrá administrar los usuario que acceden al sistema y definir perfiles que permitan limitar\n            el uso de las vistas no autorizadas.\n        </p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <user-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></user-action-cmp>\n                    <user-list-cmp *ngIf=\"isOpenList\"></user-list-cmp>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
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


var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent() {
        return _super.call(this) || this;
    }
    UsersComponent.prototype.ngOnInit = function () { };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'users-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/users/users.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_component__ = __webpack_require__("../../../../../src/app/smartity/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_action_user_action_component__ = __webpack_require__("../../../../../src/app/smartity/users/user-action/user-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/smartity/users/user-list/user-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__users_component__["a" /* UsersComponent */] }];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_action_user_action_component__["a" /* UserActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map