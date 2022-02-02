webpackJsonp([15],{

/***/ "../../../../../src/app/smartity/delivery/delivery-action/delivery-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 margin-bottom-40\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\n        <mat-icon>keyboard_arrow_left</mat-icon> Regresar\n      </button>\n    </div>\n    <!-- Afiliado -->\n    <div class=\"col-sm-12 col-md-9 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <input readonly matInput type=\"text\" placeholder=\"Afiliado\" [(ngModel)]=\"affiliate.firstname\" id=\"affiliate\"\n          name=\"affiliate\" />\n        <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalAffiliates()\">search</mat-icon>\n      </mat-form-field>\n    </div>\n    <!-- estado -->\n    <!-- <div class='col-sm-12 col-md-3 col-lg-3 margin-bottom left'>\n      <div class=\"flex\">\n        <span class=\"flex-spacer\"></span>\n        <mat-slide-toggle [labelPosition]=\"'before'\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\">Estado\n        </mat-slide-toggle>\n      </div>\n    </div> -->\n    <!-- pendientes -->\n    <div class=\"col-sm-12 col-md-12 margin-bottom\"  *ngIf=\"numId == undefined\">\n\n        <div class=\"flex margin-bottom\">\n          <div class=\"box-header no-padding-h\">Entregas Programadas: Pendientes y Entregas Futuras</div>\n          <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n          <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n            <thead>\n              <tr>\n                <th>PLU\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <th>Producto\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <!-- <th>Laboratorio/Fabricante\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th> -->\n                <th>Unidades a Entregar\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <!-- <th>Fecha a Entregar\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th> -->\n                <th>Tipo de Entrega Programada\n                    <span class=\"glyphicon sort-icon\"\n                      [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                  </th>\n                <!-- <th>Estado\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let detail of arrScheduledDeliveries;let index = index;\">\n                  <!-- <td style=\"width:80px;\">{{detail.delivery.consecutive}}</td> -->\n                  <td>{{detail.product.sku}}</td>\n                  <td>{{detail.product.name}}<span style=\"font-weight:bold;\" *ngIf=\"detail.product.comercial\">({{detail.product.comercial_name}})</span></td>\n                  <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail.units}}</span></td>\n                  <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail.scheduled_delivery_type.value}}</span></td>\n  \n                <td>\n                  <button type=\"button\" mat-raised-button color=\"primary\"\n            class=\"btn-w-md no-margin-left\" (click)=\"openModalProducts()\">Entregar</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      \n      <!-- historial de entregas -->\n      <div class=\"col-sm-12 col-md-12 margin-bottom\" *ngIf=\"numId == undefined\">\n  \n        <div class=\"flex margin-bottom\">\n          <div class=\"box-header no-padding-h\">Historial de Entregas</div>\n          <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n          <table class=\"mdl-data-table table-bordered table-striped no-margin\" style=\"white-space: normal;\">\n            <thead>\n              <tr>\n                  <th># Entrega\n                      <span class=\"glyphicon sort-icon\"\n                        [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                    </th>\n                <th>PLU\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <th>Producto\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <th>Unidades Solicitadas\n                    <span class=\"glyphicon sort-icon\"\n                      [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                  </th>\n                <th>Unidades Entregadas\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <th>Fecha de Entrega\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n                <th>Fecha de Creación\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let detail of arrAffiliateDeliveries;let index = index;\">\n                <td style=\"width:80px;\">{{detail?.delivery.consecutive}}</td>\n                <td>{{detail?.product.sku}}</td>\n                <td>{{detail?.product.name}}<span style=\"font-weight:bold;\" *ngIf=\"detail?.product.comercial\">({{detail?.product.comercial_name}})</span></td>\n                <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail?.requested_units}}</span></td>\n                <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail?.delivered_units}}</span></td>\n                <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail?.delivery.delivery_date | date:'dd/MM/yyyy'}}</span></td>\n                <td style=\"width:80px;\"><span style=\"width:80px;\">{{detail?.delivery.date | date:'dd/MM/yyyy'}}</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    \n    <!-- Afiliado -->\n    <div class=\"col-sm-12 col-md-12 margin-bottom\"  *ngIf=\"numId == undefined\">\n        <mat-form-field class=\"full-width\">\n          <input readonly matInput type=\"text\" placeholder=\"Afiliado\" [(ngModel)]=\"affiliate.firstname\" id=\"affiliate2\"\n            name=\"affiliate2\" />\n        </mat-form-field>\n      </div>  \n    <!-- Diagnóstico -->\n    <div class=\"col-sm-12 col-md-3 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Diagnóstico\" [(ngModel)]=\"model.medical_diagnostic_id\"\n          name=\"medical_diagnostic_id\" id=\"medical_diagnostic_id\">\n          <mat-option *ngFor=\"let item of arrMedicalDiagnostics\" [value]=\"item.id\">{{item.code}}: {{item.description}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <!-- Formulado el -->\n    <div class=\"col-md-3 margin-bottom\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerFormulaDate\" placeholder=\"Formulado el\" [max]=\"model.created_at\"\n          [(ngModel)]=\"model.formula_date\" name=\"formula_date\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerFormulaDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerFormulaDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <!-- Entregado el -->\n    <div class=\"col-md-3 margin-bottom\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pickerDeliveryDate\" placeholder=\"Entregado el\" [max]=\"model.created_at\"\n          [(ngModel)]=\"model.delivery_date\" name=\"delivery_date\">\n        <mat-datepicker-toggle matSuffix [for]=\"pickerDeliveryDate\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerDeliveryDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <!-- Creado el -->\n    <div class=\"col-md-3 margin-bottom\">\n      <mat-form-field>\n        <input matInput readonly placeholder=\"Creado el\" name=\"created_at\"\n          value=\"{{model.date | date:'dd/MM/yyyy'}}\">\n      </mat-form-field>\n    </div>\n    <!-- Modalidad -->\n    <div class=\"col-sm-12 col-md-3 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Modalidad\" [(ngModel)]=\"model.modality_id\" name=\"modality_id\"\n          id=\"modality_id\">\n          <mat-option *ngFor=\"let item of arrModality\" [value]=\"item.id\">{{item.value}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <!-- Red Adscrita -->\n    <div class=\"col-sm-12 col-md-3 margin-bottom\">\n      <mat-form-field class=\"full-width\">\n        <mat-select class=\"full-width\" placeholder=\"Red Adscrita\" [(ngModel)]=\"model.ips_id\" name=\"ips_id\" id=\"ips_id\">\n          <mat-option *ngFor=\"let item of arrIPS\" [value]=\"item.id\">{{item.value}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <!-- # Autorización -->\n    <div class=\"col-md-3 margin-bottom\" *ngIf=\"model.modality_id == 1399\">\n      <mat-form-field>\n        <input matInput placeholder=\"Número de Autorización\" name=\"authorization\" [(ngModel)]=\"model.authorization\">\n      </mat-form-field>\n    </div>\n\n    \n\n    <!-- productos -->\n    <div class=\"col-sm-12 col-md-12 margin-bottom\">\n\n      <div class=\"flex margin-bottom\">\n        <div class=\"box-header no-padding-h\">Productos</div>\n        <span class=\"flex-spacer\"></span>\n        <button type=\"button\" mat-raised-button color=\"primary\"\n          class=\"btn-w-md no-margin-left\" (click)=\"openModalProducts()\">Añadir</button>\n      </div>\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n        <table class=\"mdl-data-table table-bordered table-striped no-margin\" style=\"white-space: normal;\">\n          <thead>\n            <tr>\n              <th>PLU\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Producto\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Unidades Solicitadas\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Unidades Entregadas\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <!-- <th># Entrega / Total\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th> -->\n              <th>Lote\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th>Fecha de Vencimiento\n                <span class=\"glyphicon sort-icon\"\n                  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n              <th *ngIf=\"numId == undefined\"><span *ngIf=\"numId == undefined\">Stock</span><span *ngIf=\"numId != undefined\">Unidades x Lote</span>\n                  <span class=\"glyphicon sort-icon\"\n                    [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let detail of model.details;let index = index;\">\n              <td>{{detail?.product.sku}}</td>\n              <td>{{detail?.product.name}}<span style=\"font-weight:bold;\" *ngIf=\"detail?.product.comercial\">({{detail?.product.comercial_name}})</span> <!-- <span *ngIf=\"detail.deliveryCovered\"> Entrega 1 / {{detail.requested_units/detail.delivered_units}}</span>--></td>\n              <td style=\"width:80px;\" *ngIf=\"numId != undefined\">{{detail?.requested_units}}</td><td style=\"width:80px;\" *ngIf=\"numId == undefined\"><mat-form-field style=\"width:50px;\"><input matInput (input)=\"validateRequested(detail?.requested_units, index, -1)\" [disabled]=\"detail.stockSelected == undefined\"  type=\"number\" [(ngModel)]=\"detail.requested_units\" name=\"requested_units{{index}}\" /></mat-form-field></td>\n              <td style=\"width:80px;\" *ngIf=\"numId != undefined\">{{detail?.delivered_units}}</td><td style=\"width:80px;\" *ngIf=\"numId == undefined\"><mat-form-field style=\"width:50px;\"><input (input)=\"validateDelivered(detail?.requested_units, detail.delivered_units, index)\" [disabled]=\"detail.stockSelected == undefined\" matInput type=\"number\" [(ngModel)]=\"detail.delivered_units\" name=\"delivered_units{{index}}\" /></mat-form-field></td>\n              <!-- <td style=\"width:200px;\" *ngIf=\"numId != undefined\">{{detail.delivery_number}} / {{detail.total_deliveries}}</td><td style=\"width:100px;\" *ngIf=\"numId == undefined\"><mat-form-field style=\"width:30px;\"><input [readonly]=\"true\" matInput type=\"number\" [(ngModel)]=\"detail.delivery_number\" name=\"delivery_number{{index}}\" /></mat-form-field> / <mat-form-field style=\"width:30px;\"><input [readonly]=\"detail.delivered_units == detail.requested_units\" [disabled]=\"detail.stockSelected == undefined\" matInput type=\"number\" [(ngModel)]=\"detail.total_deliveries\" name=\"total_deliveries{{index}}\" /></mat-form-field></td> -->\n              \n              <td colspan=\"3\" *ngIf=\"numId == undefined\">\n                <span *ngIf=\"detail.stockSelected == undefined\">Sin Existencias</span>\n                  <div class=\"col-sm-12 col-md-12 margin-bottom\" *ngFor=\"let itemX of detail.stocks; index as i\">\n                      <mat-form-field class=\"full-width\">\n                        <mat-select [(ngModel)]=\"detail.stockSelected[i]\" (change)=\"validateRequested(detail.requested_units, index, i)\" class=\"full-width\" placeholder=\"Seleccionar\" name=\"lote_expire{{i}}\">\n                          <mat-option *ngFor=\"let item of itemX\" [value]=\"item\">{{item.batch}} - {{item.expiration_date}} <span *ngIf=\"numId == undefined\">- {{item.fraction_stock}}</span></mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n              </td>\n              <td colspan=\"3\" *ngIf=\"numId != undefined\">\n                <span *ngFor=\"let item of detail.stocks\">\n                    {{item.batch}} - {{item.expiration_date | date:'dd/MM/yyyy'}} <br>\n                </span>\n                \n              </td>\n              <!-- <td>{{detail.stockSelected}}</td> -->\n              <td class=\"w-40\">\n                <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"removeProduct(index)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n\n\n    <!--notas-->\n    <div class='col-sm-12 col-md-12 margin-bottom'>\n      <mat-form-field class=\"full-width\">\n        <textarea type=\"text\" id=\"notes\" name=\"notes\" [(ngModel)]=\"model.notes\" matInput placeholder=\"Nota\"></textarea>\n      </mat-form-field>\n    </div>\n\n\n    <div class=\"col-sm-12\">\n      <button [disabled]=\"action_active ? false : !modelForm.form.valid\" mat-raised-button color=\"primary\"\n        class=\"btn-w-md no-margin-left btn-right\" (click)=\"openModalConfirmYesNo()\">{{strAction}}</button>\n        <button [disabled]=\"action_active ? false : !modelForm.form.valid\" mat-raised-button color=\"primary\"\n        class=\"btn-w-md no-margin-left btn-right\" (click)=\"print()\">Imprimir</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery-action/delivery-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_component__ = __webpack_require__("../../../../../src/app/smartity/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryActionComponent; });
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








var DeliveryActionComponent = /** @class */ (function (_super) {
    __extends(DeliveryActionComponent, _super);
    function DeliveryActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.affiliate = {};
        _this.pharmadrugs = {};
        _this.arrModality = [];
        _this.arrMedicalDiagnostics = [];
        _this.arrIPS = [];
        _this.arrAffiliateDeliveries = [];
        _this.arrScheduledDeliveries = [];
        _this.arrStock = [];
        return _this;
    }
    DeliveryActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        this.getMedicalDiagnostics();
        if (this.numId !== undefined) {
            this.getDataById();
        }
        else {
            this.model.date = new Date();
        }
    };
    DeliveryActionComponent.prototype.print = function () {
        var _this = this;
        window.onafterprint = function (event) {
            _this.goList();
        };
        window.print();
    };
    //   var beforePrint = function() {
    //     console.log('Functionality to run before printing.');
    // };
    DeliveryActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.helperService.POST("/api/collections", ["DELIVERY_CONTRACT_MODALITY"]).subscribe(function (rs) {
            var res = rs.json();
            _this.arrModality = res.DELIVERY_CONTRACT_MODALITY;
        }, function (err) { });
    };
    DeliveryActionComponent.prototype.getMedicalDiagnostics = function () {
        var _this = this;
        this.helperService.GET("/api/medical-diagnostics").subscribe(function (rs) {
            var res = rs.json();
            _this.arrMedicalDiagnostics = res.medical_diagnostics;
        }, function (err) { });
    };
    DeliveryActionComponent.prototype.getScheduledDeliveries = function () {
        var _this = this;
        this.helperService.GET("/api/scheduled-deliveries/" + this.affiliate.id).subscribe(function (rs) {
            var res = rs.json();
            _this.arrScheduledDeliveries = res.scheduled_deliveries.data;
        }, function (err) { });
    };
    DeliveryActionComponent.prototype.getAffiliateDeliveries = function () {
        var _this = this;
        this.helperService.GET("/api/affiliate-deliveries/" + this.affiliate.id).subscribe(function (rs) {
            var res = rs.json();
            if (res.affiliate_deliveries.data) {
                _this.arrAffiliateDeliveries = res.affiliate_deliveries.data;
            }
            _this.groupAffiliateDeliveriesDetails();
        }, function (err) { });
    };
    DeliveryActionComponent.prototype.clean = function () {
        this.model = { "details": [], "delivery_date": new Date() };
        this.model.state = true;
    };
    DeliveryActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    DeliveryActionComponent.prototype.updateRowStock = function (index, detail) {
        // detail.stockSelected = detail.stocks[index].fraction_stock;
    };
    DeliveryActionComponent.prototype.groupAffiliateDeliveriesDetails = function () {
        if (this.arrAffiliateDeliveries) {
            var details = [];
            var i = 0;
            var _loop_1 = function () {
                var detail = {};
                detail = this_1.arrAffiliateDeliveries[i];
                var passed = false;
                details.forEach(function (d) {
                    if (d.delivery_id == detail['delivery_id']) {
                        passed = true;
                    }
                });
                if (!passed) {
                    details.push(detail);
                }
                i++;
            };
            var this_1 = this;
            do {
                _loop_1();
            } while (this.arrAffiliateDeliveries.length > i);
            this.arrAffiliateDeliveries = details;
        }
    };
    DeliveryActionComponent.prototype.groupBatchs = function () {
        var details = [];
        var i = 0;
        var empty = false;
        var toRemove = [];
        var _loop_2 = function () {
            var detail = {};
            if (!empty && this_2.model.details.length > 0) {
                detail = this_2.model.details[i];
            }
            var passed = false;
            details.forEach(function (d) {
                if (d.product_id == detail['product_id']) {
                    passed = true;
                }
            });
            if (!passed) {
                detail['stocks'] = [];
                this_2.model.details.forEach(function (d) {
                    if (!empty && d.product_id == detail['product_id'] && !passed) {
                        var _stockSelected = {};
                        _stockSelected['batch'] = d.batch;
                        _stockSelected['expiration_date'] = d.expiration_date;
                        detail['stocks'].push(_stockSelected);
                    }
                });
                details.push(detail);
                passed = false;
            }
            i++;
        };
        var this_2 = this;
        do {
            _loop_2();
        } while (this.model.details.length > i);
        this.model.details = details;
        console.log(this.model.details);
        console.log(details);
    };
    DeliveryActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/deliveries/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            _this.groupBatchs();
            _this.affiliate = _this.model.affiliate;
            _this.arrIPS = JSON.parse(_this.affiliate.delivery_contract.ips);
            _this.pharmadrugs = JSON.parse(_this.affiliate.delivery_contract.pharmadrugs);
            _this.getScheduledDeliveries();
            _this.getAffiliateDeliveries();
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    DeliveryActionComponent.prototype.openModalAffiliates = function () {
        var _this = this;
        this.modalAffiliates = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["y" /* ModalAffiliatesComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Afiliados',
                option: '1'
            }
        });
        this.modalAffiliates.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.model.affiliate_id = data.id;
            _this.affiliate = data;
            _this.arrIPS = JSON.parse(_this.affiliate.delivery_contract.ips);
            _this.pharmadrugs = JSON.parse(_this.affiliate.delivery_contract.pharmadrugs);
            _this.getScheduledDeliveries();
            _this.getAffiliateDeliveries();
        });
    };
    DeliveryActionComponent.prototype.openModalProducts = function () {
        var _this = this;
        this.modalProducts = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["z" /* ModalProductsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Productos'
            }
        });
        this.modalProducts.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.loaderService.display(true);
            _this.helperService.GET("/api/product/" + data.id).subscribe(function (rs) {
                var res = rs.json();
                var canBeDelivered = false;
                _this.pharmadrugs = JSON.parse(_this.pharmadrugs);
                console.log(typeof (_this.pharmadrugs));
                console.log(_this.pharmadrugs);
                _this.pharmadrugs.forEach(function (element) {
                    if (res.data.product_detail.pharmaceutical_drug_id == element.pharmaceutical_drug_id) {
                        canBeDelivered = true;
                    }
                });
                canBeDelivered = true;
                if (canBeDelivered) {
                    _this.helperService.GET("/api/stocks-products/" + data.id).subscribe(function (rs) {
                        var res = rs.json();
                        var movement = new Object({
                            "product_id": data.id,
                            "product": data,
                            "batch": "",
                            "requested_units": 0,
                            "delivered_units": 0,
                            "delivery_number": 1,
                            "total_deliveries": 1,
                            "stocks": [res.data],
                            "location": "",
                            "expiration_date": "",
                            "stockSelected": [res.data[0]],
                            "deliveryCovered": false,
                            "scheduleddelivery_id": '',
                        });
                        console.log(res.data[0]);
                        var productIsLoaded = false;
                        _this.model.details.forEach(function (element) {
                            if (element.product.sku == data.sku) {
                                productIsLoaded = true;
                            }
                        });
                        if (!productIsLoaded) {
                            _this.model.details.push(movement);
                            if (movement["stockSelected"] == undefined) {
                                _this.snackBar.open('El producto no tiene existencias. Se creará un pendiente al guardar la dispensación.', 'Dispensación', { duration: 10000 });
                            }
                        }
                        else {
                            _this.snackBar.open('El producto ya se encuentra en la lista', 'Dispensación', { duration: 7000 });
                        }
                        _this.loaderService.display(false);
                    }, function (err) {
                        console.log(err);
                        _this.loaderService.display(false);
                    });
                }
                else {
                    _this.snackBar.open('El producto no está habilitado para el contrato del afiliado', 'Contratos', { duration: 7000 });
                }
                _this.loaderService.display(false);
            }, function (err) {
                console.log(err);
                _this.loaderService.display(false);
            });
        });
    };
    DeliveryActionComponent.prototype.removeProduct = function (index) {
        this.model.details.splice(index, 1);
    };
    DeliveryActionComponent.prototype.validateDelivered = function (unitsR, unitsD, index) {
        var sumStocks = 0;
        this.model.details[index]["stockSelected"].forEach(function (element) {
            sumStocks += element["fraction_stock"];
        });
        if (unitsD > unitsR) {
            this.snackBar.open('Se han modificado automáticamente las unidades de entrega debido a que se ingresaron cantidades superiores a las unidades solicitadas (' + unitsR + '). ', 'Producto a dispensar', { duration: 7000 });
            this.model.details[index]["delivered_units"] = unitsR;
        }
        else if (unitsD > sumStocks) {
            this.snackBar.open('Se han modificado automáticamente las unidades de entrega debido a que se ingresaron cantidades superiores a las unidades existentes (' + sumStocks + '). ', 'Producto a dispensar', { duration: 7000 });
            this.model.details[index]["delivered_units"] = sumStocks;
        }
    };
    DeliveryActionComponent.prototype.validateRequested = function (units, index, i) {
        var _this = this;
        this.model.details[index]["delivered_units"] = units;
        this.model.details[index]["deliveryCovered"] = true;
        var sumStocks = 0;
        var ic = 0;
        this.model.details[index]["stockSelected"].forEach(function (element) {
            sumStocks += element["fraction_stock"];
            if (units > sumStocks) {
                ic += 1;
            }
        });
        if (i > -1) {
            this.model.details[index]["stocks"].splice(i + 1, this.model.details[index]["stocks"].length - i - 1);
            this.model.details[index]["stockSelected"].splice(i + 1, this.model.details[index]["stockSelected"].length - i - 1);
        }
        if (units > sumStocks) {
            if (this.model.details[index]["stocks"][this.model.details[index]["stocks"].length - 1].length > 1) {
                var newStocks = this.model.details[index]["stocks"][this.model.details[index]["stocks"].length - 1].filter(function (e) { return e.id != _this.model.details[index]["stockSelected"][_this.model.details[index]["stocks"].length - 1]["id"]; });
                this.model.details[index]["stocks"].push(newStocks);
                this.model.details[index]["stockSelected"].push(this.model.details[index]["stocks"][this.model.details[index]["stocks"].length - 1][0]);
                // sumStocks += this.model.details[index]["stocks"][this.model.details[index]["stocks"].length-1][0]["fraction_stock"];
                if (this.model.details[index]["stocks"][this.model.details[index]["stocks"].length - 1][0]["fraction_stock"] + sumStocks < units) {
                    this.validateRequested(units, index, i);
                }
            }
            else {
                this.snackBar.open('No hay unidades suficientes para cubrir las unidades solicitadas', 'Existencias Dispensación', { duration: 4000 });
                this.model.details[index]["delivered_units"] = sumStocks;
                this.model.details[index]["deliveryCovered"] = false;
            }
        }
        else {
            this.model.details[index]["stocks"].splice(ic + 1, this.model.details[index]["stocks"].length - ic - 1);
            this.model.details[index]["stockSelected"].splice(ic + 1, this.model.details[index]["stockSelected"].length - ic - 1);
        }
    };
    DeliveryActionComponent.prototype.openModalConfirmYesNo = function () {
        var _this = this;
        this.modalConfirmYesNo = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["b" /* ModalConfirmationComponent */], {
            data: {
                message: 'Desea crear el registro?',
                title: 'Confirmar',
                button_confirm: 'Sí',
                button_close: 'No'
            }
        });
        this.modalConfirmYesNo.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                console.log('SI'); //save() or update()
                _this.save();
            }
            else {
                console.log('NO');
            }
        });
    };
    DeliveryActionComponent.prototype.save = function () {
        var _this = this;
        this.loaderService.display(true);
        switch (this.strAction) {
            case 'Guardar':
                this.helperService.POST("/api/deliveries", this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.store) {
                        _this.snackBar.open(res.message, 'Guardado', { duration: 4000 });
                        _this.goList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Guardado', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                break;
            case 'Actualizar':
                this.helperService.PUT("/api/deliveries/" + this.numId, this.model).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.update) {
                        _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                        _this.goList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                    _this.loaderService.display(false);
                });
                this.loaderService.display(false);
                break;
        }
    };
    var _a, _b, _c, _d, _e, _f, _g;
    DeliveryActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'delivery-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/delivery/delivery-action/delivery-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], DeliveryActionComponent);
    return DeliveryActionComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=delivery-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery-list/delivery-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n          <div style=\"width: 34px\" class=\"input-group-addon\">\n              <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                  <i class=\"fa fa-search\"></i>\n              </a>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-6\">\n      <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n          <mat-icon>add_circle_outline</mat-icon> Nuevo\n      </button>\n  </div>\n\n  <div class=\"col-sm-12\">\n\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n          <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n              <thead>\n                  <tr>\n                      <th class=\"noAuto\" (click)=\"sort('id')\"># Entrega\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('code')\">Afiliado\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='code'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('name')\">Contrato\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('operationcostcentres')\">Modalidad\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='operationcostcentres'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th (click)=\"sort('operationcostcentres')\">Fecha Digitación\n                        <span class=\"glyphicon sort-icon\" *ngIf=\"key =='operationcostcentres'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                    </th>\n                    <th (click)=\"sort('operationcostcentres')\">Fecha de Entrega\n                      <span class=\"glyphicon sort-icon\" *ngIf=\"key =='operationcostcentres'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                  </th>\n                      <!-- <th (click)=\"sort('ct.value')\">Estado\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='ct.value'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                      <!-- <th *ngIf=\"actions[3].status\" class=\"w-40\"></th> -->\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of list.data\">\n                      <td class=\"noAuto\">{{ item.consecutive }}</td>\n                      <td>{{ item.affiliate.display_name }}</td>\n                      <td>{{ item.affiliate.delivery_contract.name }}</td>\n                      <td>{{ item.modality.value }}</td>\n                      <td>{{ item.date | date:'dd/MM/yyyy'}}</td>\n                      <td>{{ item.delivery_date | date:'dd/MM/yyyy'}}</td>\n                      <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                              <mat-icon>mode_edit</mat-icon>\n                          </button>\n                      </td>\n                      <!-- <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                              <mat-icon>delete</mat-icon>\n                          </button>\n                      </td> -->\n                  </tr>\n              </tbody>\n          </table>\n\n      </div>\n\n      <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n          [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery-list/delivery-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_component__ = __webpack_require__("../../../../../src/app/smartity/delivery/delivery.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryListComponent; });
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






var DeliveryListComponent = /** @class */ (function (_super) {
    __extends(DeliveryListComponent, _super);
    function DeliveryListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.urlApi = '/api/deliveries';
        return _this;
    }
    DeliveryListComponent.prototype.ngOnInit = function () {
        this.getAll();
        console.log(this.list);
    };
    DeliveryListComponent.prototype.CUD = function (action, row) {
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
    DeliveryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-list-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery/delivery-list/delivery-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */]) === "function" ? _d : Object])
    ], DeliveryListComponent);
    return DeliveryListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=delivery-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n  <section class=\"hero\">\n      <div class=\"hero-content\">\n          <h1 class=\"hero-title\">Dispensación</h1>\n      </div>\n      <p class=\"hero-tagline\"></p>\n  </section>\n  <article class=\"article padding-lg-v article-dark article-bordered\">\n      <div class=\"container-fluid with-maxwidth\">\n          <div class=\"box box-default\">\n              <div class=\"box-body\">\n                  <delivery-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></delivery-action-cmp>\n                  <delivery-list-cmp *ngIf=\"isOpenList\"></delivery-list-cmp>\n              </div>\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
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


var DeliveryComponent = /** @class */ (function (_super) {
    __extends(DeliveryComponent, _super);
    function DeliveryComponent() {
        return _super.call(this) || this;
    }
    DeliveryComponent.prototype.ngOnInit = function () {
    };
    DeliveryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-delivery',
            template: __webpack_require__("../../../../../src/app/smartity/delivery/delivery.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=delivery.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery/delivery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_component__ = __webpack_require__("../../../../../src/app/smartity/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_action_delivery_action_component__ = __webpack_require__("../../../../../src/app/smartity/delivery/delivery-action/delivery-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delivery_list_delivery_list_component__ = __webpack_require__("../../../../../src/app/smartity/delivery/delivery-list/delivery-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */] }];
var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__delivery_component__["a" /* DeliveryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__delivery_action_delivery_action_component__["a" /* DeliveryActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__delivery_list_delivery_list_component__["a" /* DeliveryListComponent */]
            ]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());

//# sourceMappingURL=delivery.module.js.map

/***/ })

});
//# sourceMappingURL=15.chunk.js.map