webpackJsonp([22],{

/***/ "../../../../../src/app/smartity/stocks/stocks-list/stocks-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\r\n            <div style=\"width: 34px\" class=\"input-group-addon\">\r\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='col-md-4 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n    <mat-select class=\"full-width\" placeholder=\"Seleccione una Bodega\" (change)=\"filtrar($event)\" [(ngModel)]=\"warehouse_id\" name=\"warehouse_id\">\r\n        <mat-option *ngFor=\"let item of warehouses\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n    </mat-select>\r\n        </mat-form-field>\r\n</div>\r\n<div class=\"col-md-2\">\r\n    <button mat-raised-button (click)=\"resetWarehouse()\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\r\n        Limpiar\r\n    </button>\r\n</div>\r\n\r\n    <div class=\"col-sm-12\">\r\n\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\" style=\"white-space: normal;\">\r\n                <thead>\r\n                    <tr>\r\n                        <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\r\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th> -->\r\n                        <th>Bodega\r\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>PLU\r\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Producto\r\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Unidades\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Fracciones\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Lote\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Ubicación\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Fecha de Vencimiento\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Costo Unitario\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                        <th>Valor Total\r\n                            <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of list.data\">\r\n                        <!-- <td class=\"noAuto\">{{ item.id }}</td> -->\r\n                        <td>{{item.warehouse.name}}</td>\r\n                        <td>{{item.product.sku}}</td>\r\n                        <td>{{item.product.name}}<span style=\"font-weight:bold;\" *ngIf=\"item.product.comercial\">({{item.product.comercial_name}})</span></td>\r\n                        <td>{{item.set_stock}}</td>\r\n                        <td>{{item.fraction_stock}}</td>\r\n                        <td>{{item.batch}}</td>\r\n                        <td>{{item.location}}</td>\r\n                        <td>{{item.expiration_date | date:'dd/MM/yyyy'}}</td>\r\n                        <td>${{item.product.averageunitcost}}</td>\r\n                        <td>${{(item.product.averageunitcost * item.set_stock) + ((item.product.averageunitcost/item.product.units) * item.fraction_stock)}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\r\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/stocks/stocks-list/stocks-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stocks_component__ = __webpack_require__("../../../../../src/app/smartity/stocks/stocks.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksListComponent; });
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





var StocksListComponent = /** @class */ (function (_super) {
    __extends(StocksListComponent, _super);
    function StocksListComponent(loaderService, helperService, router, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.comp = comp;
        _this.warehouses = [];
        _this.urlApi = '/api/stocks-products';
        return _this;
    }
    StocksListComponent.prototype.ngOnInit = function () {
        this.getCollection();
        this.getAll();
    };
    StocksListComponent.prototype.filtrar = function (event) {
        // console.log(event);
        this.getAll('&warehouse=' + this.warehouse_id);
    };
    StocksListComponent.prototype.resetWarehouse = function () {
        this.warehouse_id = -1;
    };
    StocksListComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/warehouse").subscribe(function (rs) {
            var res = rs.json();
            _this.warehouses = res.data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    StocksListComponent.prototype.CUD = function (action, row) {
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
    StocksListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'stocks-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/stocks/stocks-list/stocks-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__stocks_component__["a" /* StocksComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__stocks_component__["a" /* StocksComponent */]) === "function" ? _d : Object])
    ], StocksListComponent);
    return StocksListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=stocks-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/stocks/stocks.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Existencias</h1>\n        </div>\n        <p class=\"hero-tagline\"> </p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <stocks-list-cmp *ngIf=\"isOpenList\"></stocks-list-cmp>\n                </div>                 \n            </div>\n        </div>\n    </article>\n</section>                        "

/***/ }),

/***/ "../../../../../src/app/smartity/stocks/stocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksComponent; });
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


var StocksComponent = /** @class */ (function (_super) {
    __extends(StocksComponent, _super);
    function StocksComponent() {
        return _super.call(this) || this;
    }
    StocksComponent.prototype.ngOnInit = function () {
    };
    StocksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-stocks',
            template: __webpack_require__("../../../../../src/app/smartity/stocks/stocks.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StocksComponent);
    return StocksComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=stocks.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/stocks/stocks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stocks_component__ = __webpack_require__("../../../../../src/app/smartity/stocks/stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stocks_list_stocks_list_component__ = __webpack_require__("../../../../../src/app/smartity/stocks/stocks-list/stocks-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksModule", function() { return StocksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__stocks_component__["a" /* StocksComponent */] }];
var StocksModule = /** @class */ (function () {
    function StocksModule() {
    }
    StocksModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__stocks_component__["a" /* StocksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__stocks_list_stocks_list_component__["a" /* StocksListComponent */]
            ]
        })
    ], StocksModule);
    return StocksModule;
}());

//# sourceMappingURL=stocks.module.js.map

/***/ })

});
//# sourceMappingURL=22.chunk.js.map