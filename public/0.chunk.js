webpackJsonp([0],{

/***/ "../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FORM -->\n<form class=\"col-sm-12\" #modelForm=\"ngForm\" autocomplete=\"off\">\n  <div class=\"row\">\n      <div class=\"col-sm-12 margin-bottom\" [class.btn-action-container]=\"booActive\">\n          <button mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\n              <mat-icon>keyboard_arrow_left</mat-icon> Regresar\n          </button>\n      </div>\n\n      <div class=\"col-md-2\">\n        <mat-form-field class=\"full-width\">\n            <input matInput name=\"prescriptionNumber\" [(ngModel)]=\"prescriptionHeader.NoPrescripcion\"  placeholder=\"# Prescripción\">\n        </mat-form-field>\n    </div>\n      <!-- name -->\n      <div class=\"col-md-4\">\n          <mat-form-field class=\"full-width\">\n              <input matInput name=\"eps\" [(ngModel)]=\"prescriptionHeader.epsInfo\" placeholder=\"EPS\">\n          </mat-form-field>\n      </div>\n      <div class=\"col-md-2\">\n        <mat-form-field class=\"full-width\">\n            <input matInput name=\"paciente\" [(ngModel)]=\"prescriptionHeader.patientInfo\" placeholder=\"Paciente\">\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-3\">\n        <mat-form-field class=\"full-width\">\n            <input matInput name=\"direccion\" [(ngModel)]=\"prescriptionHeader.DirPaciente\" placeholder=\"Dirección Paciente\">\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-1\">\n        <mat-form-field class=\"full-width\">\n            <input matInput name=\"municipio\" [(ngModel)]=\"prescriptionHeader.CodMunEnt\" placeholder=\"Municipio\">\n        </mat-form-field>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"role == 'delivery' || role == 'admin'\">\n        <div class=\"flex margin-bottom\">\n            <div class=\"box-header no-padding-h\">Direccionamientos</div>\n            <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th>ID\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Direccionamiento\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Servicio / Tecnología\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Cantidad a Entregar\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Máxima de Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Estado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of addressingList\">\n                        <td>{{item.ID}}</td>\n                        <td>{{item.FecDireccionamiento | date:'dd/MM/yyyy'}}</td>\n                        <td>{{getCUMSDescription(item.CodSerTecAEntregar)}} <br> {{item.CodSerTecAEntregar}}</td>\n                        <td>{{item.CantTotAEntregar}}</td>\n                        <td>{{item.NoEntrega}}</td>\n                        <td>{{item.FecMaxEnt | date:'dd/MM/yyyy'}}</td>\n                        <td><span style=\"font-size:12px;\" [ngClass]=\"{'badge-success':item.EstDireccionamiento === 1, 'badge-primary':item.EstDireccionamiento === 2, 'badge-danger':item.EstDireccionamiento === 0}\" class=\"badge badge-pill badge-primary\">{{item.EstDireccionamiento === 1 ? 'Activo' : item.EstDireccionamiento === 2 ? 'Procesado' : 'Anulado' + '(' + item.FecAnulacion + ')'}}</span></td>\n                        <td class=\"w-40\">\n                            <button [disabled]=\"item.EstDireccionamiento != 1\" [ngClass]=\"{'text-primary': item.EstDireccionamiento == 1, 'text-default': item.EstDireccionamiento != 1}\" type=\"button\" mat-icon-button (click)=\"openModalProgramming(item)\">\n                                <mat-icon>event_note</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n  \n        </div>\n  \n        \n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"role == 'delivery' || role == 'admin'\">\n        <div class=\"flex margin-bottom\">\n            <div class=\"box-header no-padding-h\">Programados</div>\n            <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th>ID\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Sede\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Programación\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Servicio / Tecnología\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Cantidad a Entregar\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Máxima de Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Estado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th class=\"w-40\"></th>\n                        <th class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of programmingList\">\n                        <td>{{item.ID}}</td>\n                        <td>{{getSede(item.CodSedeProv)}}</td>\n                        <td>{{item.FecProgramacion | date:'dd/MM/yyyy'}}</td>\n                        <td>{{item.CodSerTecAEntregar}}</td>\n                        <td>{{item.CantTotAEntregar}}</td>\n                        <td>{{item.NoEntrega}}</td>\n                        <td>{{item.FecMaxEnt | date:'dd/MM/yyyy'}}</td>\n                        <td><span style=\"font-size:12px;\" [ngClass]=\"{'badge-success':item.EstProgramacion === 1, 'badge-primary':item.EstProgramacion === 2, 'badge-danger':item.EstProgramacion === 0}\" class=\"badge badge-pill\">{{item.EstProgramacion === 1 ? 'Activo' : item.EstProgramacion === 2 ? 'Procesado' : 'Anulado' + '(' + item.FecAnulacion + ')'}}</span></td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstProgramacion != 1\" [ngClass]=\"{'text-primary': item.EstProgramacion == 1, 'text-default': item.EstProgramacion != 1}\" mat-icon-button (click)=\"openModalDelivery(item)\">\n                                <mat-icon>receipt_long</mat-icon>\n                            </button>\n                        </td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstProgramacion != 1\" [ngClass]=\"{'text-danger': item.EstProgramacion == 1, 'text-default': item.EstProgramacion != 1}\" mat-icon-button (click)=\"openModalCancelProgramming(item)\">\n                                <mat-icon>highlight_off</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-sm-12\">\n        <div class=\"flex margin-bottom\">\n            <div class=\"box-header no-padding-h\">Entregados</div>\n            <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th>ID\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Recibió\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Servicio / Tecnología\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Cantidad Entregada\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Estado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"role == 'supplier'\" class=\"w-40\"></th>\n                        <th *ngIf=\"role == 'delivery'\" class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of deliveryList\">\n                        <td>{{item.ID}}</td>\n                        <td>{{item.FecEntrega | date:'dd/MM/yyyy'}}</td>\n                        <td>{{item.TipoIDRecibe}} {{item.NoIDRecibe}}</td>\n                        <td>{{item.CodSerTecEntregado}}</td>\n                        <td>{{item.CantTotEntregada}} {{item.EntTotal === 1 ? '(Total)' : (Parcial)}}</td>\n                        <td>{{item.NoEntrega}}</td>\n                        <td><span style=\"font-size:12px;\" [ngClass]=\"{'badge-success':item.EstEntrega === 1, 'badge-primary':item.EstEntrega === 2, 'badge-danger':item.EstEntrega === 0}\" class=\"badge badge-pill\">{{item.EstEntrega === 1 ? 'Activo' : item.EstEntrega === 2 ? 'Procesado' : 'Anulado' + '(' + item.FecAnulacion + ')'}}</span></td>\n                        <td *ngIf=\"role == 'supplier' || role == 'admin'\" class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstEntrega != 1\" [ngClass]=\"{'text-primary': item.EstEntrega == 1, 'text-default': item.EstEntrega != 1}\" mat-icon-button (click)=\"openModalDeliveryReport(item)\">\n                                <mat-icon>receipt_long</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"role == 'delivery' || role == 'admin'\" class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstEntrega != 1\" [ngClass]=\"{'text-danger': item.EstEntrega == 1, 'text-default': item.EstEntrega != 1}\" mat-icon-button (click)=\"openModalCancelDelivery(item)\">\n                                <mat-icon>highlight_off</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"role == 'supplier' || role == 'admin'\">\n        <div class=\"flex margin-bottom\">\n            <div class=\"box-header no-padding-h\">Reporte de Entregas</div>\n            <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th>ID\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>ID Reporte Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Reporte Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Servicio / Tecnología\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Cantidad Entregada\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Valor Entregado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Estado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th  class=\"w-40\"></th> \n                        <th  class=\"w-40\"></th>                                       \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of deliveryReportList\">\n                        <td>{{item.ID}}</td>\n                        <td>{{item.IDReporteEntrega}}</td>\n                        <td>{{item.FecEntrega}}</td>\n                        <td>{{item.FecRepEntrega | date:'dd/MM/yyyy'}}</td>\n                        <td>{{item.CodTecEntregado}}</td>\n                        <td>{{item.CantTotEntregada}}</td>\n                        <td>{{item.NoEntrega}}</td>\n                        <td>${{item.ValorEntregado}}</td>\n                        <td><span style=\"font-size:12px;\" [ngClass]=\"{'badge-success':item.EstRepEntrega === 1, 'badge-primary':item.EstRepEntrega === 2, 'badge-danger':item.EstRepEntrega === 0}\" class=\"badge badge-pill\">{{item.EstRepEntrega === 1 ? 'Activo' : item.EstRepEntrega === 2 ? 'Procesado' : 'Anulado' + '(' + item.FecAnulacion + ')'}}</span></td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstRepEntrega != 1\" [ngClass]=\"{'text-primary': item.EstRepEntrega == 1, 'text-default': item.EstRepEntrega != 1}\" mat-icon-button (click)=\"openModalBilling(item)\">\n                                <mat-icon>receipt_long</mat-icon>\n                            </button>\n                        </td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstRepEntrega != 1\" [ngClass]=\"{'text-danger': item.EstRepEntrega == 1, 'text-default': item.EstRepEntrega != 1}\" mat-icon-button (click)=\"openModalCancelDeliveryReport(item)\">\n                                <mat-icon>highlight_off</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"role == 'supplier' || role == 'admin'\">\n        <div class=\"flex margin-bottom\">\n            <div class=\"box-header no-padding-h\">Facturados</div>\n            <span class=\"flex-spacer\"></span>\n        </div>\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n  \n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th>ID\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>ID Facturación\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Factura\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Fecha Facturación\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Servicio / Tecnología\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Cantidad\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th># Entrega\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Valor Unitario\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Valor Total\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th>Estado\n                            <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th  class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of billingList\">\n                        <td>{{item.ID}}</td>\n                        <td>{{item.IDFacturacion}}</td>\n                        <td>{{item.NoFactura}}</td>\n                        <td>{{item.FecFacturacion | date:'dd/MM/yyyy'}}</td>\n                        <td>{{item.CodSerTecAEntregado}}</td>\n                        <td>{{item.CantUnMinDis}}</td>\n                        <td>{{item.NoEntrega}}</td>\n                        <td>${{item.ValorUnitFacturado}}</td>\n                        <td>${{item.ValorTotFacturado}}</td>\n                        <td><span style=\"font-size:12px;\" [ngClass]=\"{'badge-success':item.EstFacturacion === 1, 'badge-primary':item.EstFacturacion === 2, 'badge-danger':item.EstFacturacion === 0}\" class=\"badge badge-pill\">{{item.EstFacturacion === 1 ? 'Activo' : item.EstFacturacion === 2 ? 'Procesado' : 'Anulado' + '(' + item.FecAnulacion + ')'}}</span></td>\n                        <td class=\"w-40\">\n                            <button type=\"button\" [disabled]=\"item.EstFacturacion != 1\" [ngClass]=\"{'text-danger': item.EstFacturacion == 1, 'text-default': item.EstFacturacion != 1}\" mat-icon-button (click)=\"openModalCancelBilling(item)\">\n                                <mat-icon>highlight_off</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mipres_component__ = __webpack_require__("../../../../../src/app/smartity/mipres/mipres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MipresActionComponent; });
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







var MipresActionComponent = /** @class */ (function (_super) {
    __extends(MipresActionComponent, _super);
    function MipresActionComponent(snackBar, route, router, comp, loaderService, helperService, dialog, dateAdapter) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.comp = comp;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.dialog = dialog;
        _this.dateAdapter = dateAdapter;
        _this.prescriptionHeader = { "NoPrescripcion": "", "epsInfo": "", "patientInfo": "", "DirPaciente": "", "CodMunEnt": "" };
        _this.urlApi = '/api/mipres';
        _this.sedes = [
            { "codsede": "PROV004656", "descsede": "MYE BARRANQUILLA" },
            { "codsede": "PROV004657", "descsede": "MYE CARTAGENA" },
            { "codsede": "PROV004658", "descsede": "	MYE SANTA MARTA" },
        ];
        _this.addressingList = [];
        _this.epsList = [
            { "CodEPS": "CCF007", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR  DE CARTAGENA - COMFAMILIAR CARTAGENA" },
            { "CodEPS": "CCF009", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE BOYACÁ - COMFABOY" },
            { "CodEPS": "CCF015", "DescEPS": "CAJA DE COMPENSACION FAMILIAR DE CORDOBA - COMFACOR" },
            { "CodEPS": "CCF023", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE LA GUAJIRA - COMFAGUAJIRA" },
            { "CodEPS": "CCF024", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DEL HUILA - COMFAMILIAR HUILA" },
            { "CodEPS": "CCF027", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE NARIÑO - COMFAMILIAR NARIÑO" },
            { "CodEPS": "CCF033", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE SUCRE - COMFASUCRE" },
            { "CodEPS": "CCF045", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DEL NORTE DE SANTANDER  - COMFANORTE" },
            { "CodEPS": "CCF050", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR C.C.F. DEL ORIENTE COLOMBIANO - COMFAORIENTE" },
            { "CodEPS": "CCF053", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE CUNDINAMARCA - COMFACUNDI" },
            { "CodEPS": "CCF055", "DescEPS": "CAJA DE COMPENSACION FAMILIAR  CAJACOPI ATLANTICO" },
            { "CodEPS": "CCF102", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DEL CHOCÓ - COMFACHOCO" },
            { "CodEPS": "CCFC07", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR  DE CARTAGENA - COMFAMILIAR CARTAGENA -CM" },
            { "CodEPS": "CCFC09", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR  DE BOYACÁ - COMFABOY -CM" },
            { "CodEPS": "CCFC15", "DescEPS": "CAJA DE COMPENSACION FAMILIAR DE CORDOBA - COMFACOR -CM" },
            { "CodEPS": "CCFC20", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DEL CHOCÓ - COMFACHOCO -CM" },
            { "CodEPS": "CCFC23", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE LA GUAJIRA - COMFAGUAJIRA -CM" },
            { "CodEPS": "CCFC24", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DEL HUILA - COMFAMILIAR HUILA -CM" },
            { "CodEPS": "CCFC27", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE NARIÑO - COMFAMILIAR NARIÑO -CM" },
            { "CodEPS": "CCFC33", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE SUCRE - COMFASUCRE -CM" },
            { "CodEPS": "CCFC50", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR C.C.F. DEL ORIENTE COLOMBIANO - COMFAORIENTE -CM" },
            { "CodEPS": "CCFC53", "DescEPS": "CAJA DE COMPENSACIÓN FAMILIAR DE CUNDINAMARCA - COMFACUNDI -CM" },
            { "CodEPS": "CCFC55", "DescEPS": "CAJA DE COMPENSACION FAMILIAR  CAJACOPI ATLANTICO -CM" },
            { "CodEPS": "EAS016", "DescEPS": "EMPRESAS PUBLICAS DE MEDELLIN - DEPARTAMENTO MEDICO" },
            { "CodEPS": "EAS027", "DescEPS": "FONDO PASIVO SOCIAL DE LOS FERROCARRILES NACIONALES" },
            { "CodEPS": "EPS001", "DescEPS": "ALIANSALUD E.P.S." },
            { "CodEPS": "EPS002", "DescEPS": "SALUD TOTAL S.A. " },
            { "CodEPS": "EPS003", "DescEPS": "CAFESALUD E.P.S." },
            { "CodEPS": "EPS005", "DescEPS": "E.P.S. SANITAS" },
            { "CodEPS": "EPS008", "DescEPS": "COMPENSAR E.P.S." },
            { "CodEPS": "EPS010", "DescEPS": "EPS Y MEDICINA PREPAGADA SURAMERICANA S.A" },
            { "CodEPS": "EPS012", "DescEPS": "COMFENALCO VALLE " },
            { "CodEPS": "EPS016", "DescEPS": "COOMEVA E.P.S. S.A." },
            { "CodEPS": "EPS017", "DescEPS": "FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO" },
            { "CodEPS": "EPS018", "DescEPS": "SERVICIO OCCIDENTAL DE SALUD - S.O.S. S.A." },
            { "CodEPS": "EPS022", "DescEPS": "A.R.S. CONVIDA" },
            { "CodEPS": "EPS023", "DescEPS": "CRUZ BLANCA E.P.S." },
            { "CodEPS": "EPS025", "DescEPS": "CAJA DE PREVISION SOCIAL Y SEGURIDAD DEL CASANARE - CAPRESOCA E.P.S." },
            { "CodEPS": "EPS033", "DescEPS": "SALUDVIDA S.A. E.P.S." },
            { "CodEPS": "EPS037", "DescEPS": "NUEVA EPS S.A" },
            { "CodEPS": "EPS040", "DescEPS": "SAVIA SALUD E.P.S. -CM" },
            { "CodEPS": "EPS041", "DescEPS": "NUEVA EPS S.A. -CM" },
            { "CodEPS": "EPS042", "DescEPS": "COOSALUD ENTIDAD PROMOTORA DE SALUD S.A. " },
            { "CodEPS": "EPS044 ", "DescEPS": "MEDIMAS EPS S.A.S. CONTRIBUTIVO" },
            { "CodEPS": "EPS045", "DescEPS": "MEDIMAS EPS S.A.S. - CM" },
            { "CodEPS": "EPS046", "DescEPS": "FUNDACION SALUD MIA EPS" },
            { "CodEPS": "EPS048", "DescEPS": "ASOCIACION MUTUAL SER EMPRESA SOLIDARIA DE SALUD EPS-S -MUTUAL SER EPS-S" },
            { "CodEPS": "EPSC03", "DescEPS": "CAFESALUD  E.P.S.  S.A. -CM" },
            { "CodEPS": "EPSC22", "DescEPS": "EPS CONVIDA -CM" },
            { "CodEPS": "EPSC25", "DescEPS": "CAJA DE PREVISION SOCIAL Y SEGURIDAD DEL CASANARE - CAPRESOCA E.P.S. -CM" },
            { "CodEPS": "EPSC33 ", "DescEPS": "SALUDVIDA  S.A.  E.P.S.-CM " },
            { "CodEPS": "EPSC34", "DescEPS": "CAPITAL SALUD E.P.S. -CM" },
            { "CodEPS": "EPSI01", "DescEPS": "ASOCIACIÓN INDÍGENA DEL CESAR Y LA GUAJIRA - DUSAKAWI" },
            { "CodEPS": "EPSI02", "DescEPS": "MANEXKA EPSI" },
            { "CodEPS": "EPSI03", "DescEPS": "ASOCIACIÓN INDÍGENA DEL CAUCA - AIC" },
            { "CodEPS": "EPSI04", "DescEPS": "ANASWAYUU EPSI" },
            { "CodEPS": "EPSI05", "DescEPS": "MALLAMAS EPSI" },
            { "CodEPS": "EPSI06", "DescEPS": "PIJAOS SALUD EPSI" },
            { "CodEPS": "EPSIC1", "DescEPS": "ASOCIACIÓN INDÍGENA DEL CESAR Y LA GUAJIRA - DUSAKAWI -CM" },
            { "CodEPS": "EPSIC2", "DescEPS": "MANEXKA EPSI -CM" },
            { "CodEPS": "EPSIC3", "DescEPS": "ASOCIACIÓN INDÍGENA DEL CAUCA - AIC -CM" },
            { "CodEPS": "EPSIC4", "DescEPS": "ANASWAYUU EPSI -CM" },
            { "CodEPS": "EPSIC5", "DescEPS": "MALLAMAS EPSI -CM" },
            { "CodEPS": "EPSIC6", "DescEPS": "PIJAOS SALUD EPSI -CM" },
            { "CodEPS": "EPSM03", "DescEPS": "CAFESALUD E.P.S. S.A. -CM" },
            { "CodEPS": "EPSM33", "DescEPS": "SALUDVIDA S.A. EPS -CM" },
            { "CodEPS": "EPSS01", "DescEPS": "ALIANSALUD E.P.S. -CM" },
            { "CodEPS": "EPSS02", "DescEPS": "SALUD TOTAL E.P.S. -CM" },
            { "CodEPS": "EPSS03", "DescEPS": "CAFESALUD  E.P.S.  S.A." },
            { "CodEPS": "EPSS05", "DescEPS": "EPS SANITAS - CM" },
            { "CodEPS": "EPSS08", "DescEPS": "COMPENSAR E.P.S. -CM" },
            { "CodEPS": "EPSS10", "DescEPS": "EPS Y MEDICINA PREPAGADA SURAMERICANA S.A -CM" },
            { "CodEPS": "EPSS12", "DescEPS": "COMFENALCO VALLE -CM" },
            { "CodEPS": "EPSS15", "DescEPS": "Salud  Colpatria  E.P.S.-CM" },
            { "CodEPS": "EPSS16", "DescEPS": "COOMEVA E.P.S. S.A. -CM" },
            { "CodEPS": "EPSS17", "DescEPS": "FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO -CM" },
            { "CodEPS": "EPSS18", "DescEPS": "SERVICIO OCCIDENTAL DE SALUD - S.O.S. S.A. -CM" },
            { "CodEPS": "EPSS23", "DescEPS": "CRUZ BLANCA E.P.S. -CM" },
            { "CodEPS": "EPSS33", "DescEPS": "SALUDVIDA S.A .E.P.S" },
            { "CodEPS": "EPSS34", "DescEPS": "CAPITAL SALUD E.P.S." },
            { "CodEPS": "EPSS37", "DescEPS": "NUEVA EPS S.A. -CM" },
            { "CodEPS": "EPSS40", "DescEPS": "SAVIA SALUD E.P.S." },
            { "CodEPS": "EPSS41", "DescEPS": "NUEVA EPS S.A." },
            { "CodEPS": "EPSS42", "DescEPS": "COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA - COOSALUD -CM" },
            { "CodEPS": "EPSS44", "DescEPS": "MEDIMAS EPS S.A.S. - CM" },
            { "CodEPS": "EPSS45", "DescEPS": "MEDIMAS EPS S.A.S. SUBSIDIADO" },
            { "CodEPS": "EPSS46", "DescEPS": "FUNDACION SALUD MIA EPS" },
            { "CodEPS": "EPSS48", "DescEPS": "ASOCIACION MUTUAL SER EMPRESA SOLIDARIA DE SALUD EPS-S -MUTUAL SER EPS-S" },
            { "CodEPS": "ESS002", "DescEPS": "EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA SALUD - EMDISALUD ESS" },
            { "CodEPS": "ESS024", "DescEPS": "COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA LTDA. - COOSALUD E.S.S." },
            { "CodEPS": "ESS062", "DescEPS": "ASMET SALUD EPS SAS" },
            { "CodEPS": "ESS062", "DescEPS": "ASOCIACIÓN MUTUAL LA ESPERANZA - ASMET  SALUD" },
            { "CodEPS": "ESS076", "DescEPS": "ASOCIACIÓN MUTUAL BARRIOS UNIDOS DE QUIBDÓ E.S.S. - AMBUQ" },
            { "CodEPS": "ESS091", "DescEPS": "ENTIDAD COOPERATIVA SOLIDARIA DE SALUD DEL NORTE DE SOACHA - ECOOPSOS " },
            { "CodEPS": "ESS091", "DescEPS": "EMPRESA PROMOTORA DE SALUD ECOOPSOS EPS S.A.S." },
            { "CodEPS": "ESS118", "DescEPS": "EMSSANAR S.A.S." },
            { "CodEPS": "ESS118", "DescEPS": "ASOCIACIÓN MUTUAL EMPRESA SOLIDARIA DE SALUD DE NARIÑO - EMSSANAR E.S.S." },
            { "CodEPS": "ESS133", "DescEPS": "COOPERATIVA DE SALUD COMUNITARIA - COMPARTA" },
            { "CodEPS": "ESS207", "DescEPS": "ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD E.S.S." },
            { "CodEPS": "ESSC02", "DescEPS": "EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA SALUD - EMDISALUD E.S.S. -CM" },
            { "CodEPS": "ESSC07", "DescEPS": "ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD E.S.S. -CM" },
            { "CodEPS": "ESSC18", "DescEPS": "EMSSANAR S.A.S." },
            { "CodEPS": "ESSC18", "DescEPS": "ASOCIACIÓN MUTUAL EMPRESA SOLIDARIA DE SALUD DE NARIÑO - EMSSANAR E.S.S. -CM" },
            { "CodEPS": "ESSC24", "DescEPS": "COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA - COOSALUD E.S.S. -CM" },
            { "CodEPS": "ESSC24", "DescEPS": "COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA - COOSALUD E.S.S. -CM" },
            { "CodEPS": "ESSC33", "DescEPS": "COOPERATIVA DE SALUD COMUNITARIA - COMPARTA -CM" },
            { "CodEPS": "ESSC62", "DescEPS": "ASOCIACIÓN MUTUAL LA ESPERANZA - ASMET  SALUD -CM" },
            { "CodEPS": "ESSC62", "DescEPS": "ASMET SALUD EPS SAS -CM" },
            { "CodEPS": "ESSC76", "DescEPS": "ASOCIACIÓN MUTUAL BARRIOS UNIDOS DE QUIBDÓ E.S.S. - AMBUQ -CM" },
            { "CodEPS": "ESSC91", "DescEPS": "EMPRESA PROMOTORA DE SALUD ECOOPSOS EPS S.A.S." }
        ];
        _this.dateAdapter.setLocale('es-CO'); //dd/MM/yyyy
        return _this;
    }
    MipresActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId !== undefined) {
            this.getDataById();
        }
    };
    MipresActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    MipresActionComponent.prototype.clean = function () {
    };
    MipresActionComponent.prototype.getCollection = function () {
        // this.loaderService.display(true);
        // this.helperService.POST(`/api/collections`, ['INVENTORY_ENTRY_TYPE']).subscribe(rs => {
        //     const res = rs.json();
        //     this.inventory_movements_type = res.INVENTORY_ENTRY_TYPE;
        //     this.loaderService.display(false);
        // }, err => {
        //     console.log(err);
        //     this.loaderService.display(false);
        // });
    };
    MipresActionComponent.prototype.getSede = function (id) {
        return this.sedes.find(function (x) { return x.codsede === id; }).descsede;
    };
    MipresActionComponent.prototype.getCUMSDescription = function (cums) {
        var out_cums = this.products.find(function (x) { return x.cums === cums; });
        if (out_cums != undefined) {
            return this.products.find(function (x) { return x.cums === cums; }).description;
        }
        return "";
    };
    MipresActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        var prescriptionNumber = { "prescriptionNumber": this.numId };
        this.helperService.GET(this.urlApi + "/getPrescriptionStatus/" + this.helperService.secondToken + "/" + this.numId + "/" + this.role).subscribe(function (rs) {
            var res = rs.json();
            _this.products = res.products;
            _this.addressingList = res.data["addressing"];
            _this.programmingList = res.data["programming"];
            _this.deliveryList = res.data["delivery"];
            _this.deliveryReportList = res.data["delivery-report"];
            _this.billingList = res.data["billing"];
            _this.prescriptionHeader = _this.addressingList[0];
            _this.prescriptionHeader["patientInfo"] = _this.prescriptionHeader["TipoIDPaciente"] + _this.prescriptionHeader["NoIDPaciente"];
            _this.prescriptionHeader["epsInfo"] = _this.prescriptionHeader["CodEPS"] + ":" + _this.epsList.find(function (element) { return element["CodEPS"] == _this.prescriptionHeader["CodEPS"]; })["DescEPS"];
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    MipresActionComponent.prototype.openModalProgramming = function (item) {
        var _this = this;
        console.log(item.FecMaxEnt);
        item.FecMaxEnt = new Date(item.FecMaxEnt + 'T00:00:00');
        // item.FecMaxEnt = new Date(item.FecMaxEnt.split('-')[0],item.FecMaxEnt.split('-')[1], item.FecMaxEnt.split('-')[2]);
        console.log(item.FecMaxEnt);
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "programming",
                object: item
            },
            height: '300px',
            width: '1000px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalCancelProgramming = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "confirmation",
                object: item,
                process: 'programming'
            },
            height: '300px',
            width: '1000px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalCancelDelivery = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "confirmation",
                object: item,
                process: 'delivery'
            },
            height: '300px',
            width: '1000px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalDelivery = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "delivery",
                object: item
            },
            height: '400px',
            width: '1000px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalDeliveryReport = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "delivery-report",
                object: item
            },
            height: '300px',
            width: '700px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalCancelDeliveryReport = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "confirmation",
                object: item,
                process: 'delivery-report'
            },
            height: '300px',
            width: '700px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalBilling = function (item) {
        var _this = this;
        item.NoIDEPS = this.prescriptionHeader["NoIDEPS"];
        item.CodEPS = this.prescriptionHeader["CodEPS"];
        item.CodSerTecAEntregado = item.CodTecEntregado;
        item.CantUnMinDis = item.CantTotEntregada;
        item.ValorUnitFacturado = (item.ValorEntregado / item.CantUnMinDis).toFixed(3);
        item.ValorTotFacturado = item.ValorEntregado.toFixed(3);
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "billing",
                object: item
            },
            height: '500px',
            width: '1000px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    MipresActionComponent.prototype.openModalCancelBilling = function (item) {
        var _this = this;
        this.modalMiPRES = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals__["A" /* ModalMipresComponent */], {
            data: {
                template: "confirmation",
                object: item,
                process: 'billing'
            },
            height: '300px',
            width: '700px'
        });
        this.modalMiPRES.afterClosed().subscribe(function (result) {
            _this.getDataById();
        });
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
    ], MipresActionComponent.prototype, "role", void 0);
    MipresActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'mipres-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.html"),
            styles: [__webpack_require__("../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSnackBar */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__mipres_component__["a" /* MipresComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__mipres_component__["a" /* MipresComponent */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatDialog */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* DateAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* DateAdapter */]) === "function" ? _j : Object])
    ], MipresActionComponent);
    return MipresActionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=mipres-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n          <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enterRaw($event)\">\n          <div style=\"width: 34px\" class=\"input-group-addon\">\n              <a style=\"cursor:pointer\" (click)=\"getPrescriptions()\">\n                  <i class=\"fa fa-search\"></i>\n              </a>\n          </div>\n      </div>\n  </div>\n  <!-- <div class=\"col-md-6\">\n      <button mat-raised-button  (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n        <mat-icon>add_circle_outline</mat-icon> Nuevo\n      </button>\n  </div> -->\n  <div class=\"col-sm-12\">\n\n      <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n          <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n              <thead>\n                  <tr>\n                      <!-- <th class=\"noAuto\" (click)=\"sort('w.id')\">ID\n                          <span class=\"glyphicon sort-icon\" *ngIf=\"key =='w.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th># Prescripción\n                          <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <th>Paciente\n                          <span class=\"glyphicon sort-icon\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <!-- <th>Realizado por\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th>EPS\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th>\n                      <!-- <th>Fecha Direccionamiento\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <!-- <th class=\"noAuto\" (click)=\"sort('w.state')\">Estado\n                          <span class=\"glyphicon sort-icon\"  [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                      </th> -->\n                      <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let item of list\">\n                      <!-- <td class=\"noAuto\">{{ item.id }}</td> -->\n                      <td>{{item.prescriptionNumber}}</td>\n                      <td>{{item.patient}}</td>\n                      <td>{{item.EPS}}</td>\n                      <!-- <td>{{item.addressingDate}}</td> -->\n                      <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                          <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                              <mat-icon>search</mat-icon>\n                          </button>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n\n      </div>\n\n      <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n          [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mipres_component__ = __webpack_require__("../../../../../src/app/smartity/mipres/mipres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MipresListComponent; });
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






var MipresListComponent = /** @class */ (function (_super) {
    __extends(MipresListComponent, _super);
    function MipresListComponent(loaderService, helperService, router, snackBar, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.comp = comp;
        _this.respuesta = 'No';
        _this.urlApi = '/api/mipres';
        return _this;
    }
    MipresListComponent.prototype.ngOnInit = function () {
        this.getSecondToken();
        // this.search = '20201001192023404869';
    };
    MipresListComponent.prototype.getSecondToken = function () {
        var _this = this;
        this.helperService
            .GET(this.urlApi + "/generateToken")
            .map(function (response) {
            var res = response.json();
            _this.helperService.secondToken = res;
        })
            .subscribe(function (error) {
            _this.loaderService.display(false);
        }, function (done) {
            _this.loaderService.display(false);
        });
    };
    MipresListComponent.prototype.CUD = function (action, row) {
        this.comp.strAction = action;
        switch (action) {
            case 'Guardar':
                this.comp.id = undefined;
                break;
            default:
                this.comp.id = row.prescriptionNumber;
                break;
        }
        this.comp.openActions();
    };
    MipresListComponent.prototype.prescriptionAddressing = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET(this.urlApi + "/prescriptionAddressing/" + this.helperService.secondToken + "/" + this.search).subscribe(function (rs) {
            var res = rs.json();
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    MipresListComponent.prototype.getPrescriptions = function () {
        var _this = this;
        this.loaderService.display(true);
        this.list = [];
        var prescriptionNumber = { "prescriptionNumber": this.search };
        this.helperService.POST(this.urlApi + "/prescriptions/" + this.helperService.secondToken, prescriptionNumber).subscribe(function (rs) {
            var res = rs.json();
            console.log(res);
            var prescription = { "prescriptionNumber": res.data["NoPrescripcion"], "patient": res.data["TipoIDPaciente"] + res.data["NoIDPaciente"], "EPS": res.data["CodEPS"] };
            _this.list.push(prescription);
            _this.loaderService.display(false);
        }, function (err) {
            _this.snackBar.open('Error', err.message, { duration: 4000 });
            console.log(err.message);
            _this.loaderService.display(false);
        });
    };
    MipresListComponent.prototype.prescriptionDelivery = function () {
    };
    MipresListComponent.prototype.prescriptionDeliveryReport = function () {
    };
    MipresListComponent.prototype.prescriptionBilled = function () {
    };
    MipresListComponent.prototype.enterRaw = function (event, url) {
        if (event.keyCode === 13) {
            this.getPrescriptions();
        }
    };
    var _a, _b, _c, _d, _e, _f;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
    ], MipresListComponent.prototype, "role", void 0);
    MipresListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'mipres-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSnackBar */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__mipres_component__["a" /* MipresComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mipres_component__["a" /* MipresComponent */]) === "function" ? _f : Object])
    ], MipresListComponent);
    return MipresListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=mipres-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n  <section class=\"hero\">\n      <div class=\"hero-content\">\n          <h1 class=\"hero-title\">MiPRES</h1>\n      </div>\n      <p class=\"hero-tagline\">{{route}}</p>\n  </section>\n  <article class=\"article padding-lg-v article-dark article-bordered\">\n      <div class=\"container-fluid with-maxwidth\">\n          <div class=\"box box-default\">\n              <div class=\"box-body\">\n                  <!-- <inventory-movements-entry-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></inventory-movements-entry-action-cmp> -->\n                  <mipres-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\" [role]=\"mipresRole\"></mipres-action-cmp>\n                  <mipres-list-cmp [role]=\"mipresRole\" *ngIf=\"isOpenList\"></mipres-list-cmp>\n              </div>                 \n          </div>\n      </div>\n  </article>\n</section>         "

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MipresComponent; });
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




var MipresComponent = /** @class */ (function (_super) {
    __extends(MipresComponent, _super);
    function MipresComponent(location, router) {
        var _this = _super.call(this) || this;
        _this.mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
        _this.nit = '802024817';
        _this.secondToken = '';
        router.events.subscribe(function (val) {
            if (location.path().includes("mipres-supplier")) {
                _this.route = 'Acceso para área de proveedores';
                _this.mipresRole = 'supplier';
            }
            if (location.path().includes("mipres-delivery")) {
                _this.route = 'Acceso para área de dispensación';
                _this.mipresRole = 'delivery';
            }
            if (location.path().includes("mipres-admin")) {
                _this.route = 'Acceso Admin';
                _this.mipresRole = 'admin';
            }
        });
        return _this;
    }
    MipresComponent.prototype.ngOnInit = function () {
    };
    var _a, _b;
    MipresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-mipres',
            template: __webpack_require__("../../../../../src/app/smartity/mipres/mipres.component.html"),
            styles: [__webpack_require__("../../../../../src/app/smartity/mipres/mipres.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _b : Object])
    ], MipresComponent);
    return MipresComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base__["a" /* Base */]));

//# sourceMappingURL=mipres.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/mipres/mipres.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mipres_component__ = __webpack_require__("../../../../../src/app/smartity/mipres/mipres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mipres_list_mipres_list_component__ = __webpack_require__("../../../../../src/app/smartity/mipres/mipres-list/mipres-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mipres_action_mipres_action_component__ = __webpack_require__("../../../../../src/app/smartity/mipres/mipres-action/mipres-action.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MipresModule", function() { return MipresModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__mipres_component__["a" /* MipresComponent */] }];
var MipresModule = /** @class */ (function () {
    function MipresModule() {
    }
    MipresModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__mipres_component__["a" /* MipresComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mipres_list_mipres_list_component__["a" /* MipresListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mipres_action_mipres_action_component__["a" /* MipresActionComponent */],
            ]
        })
    ], MipresModule);
    return MipresModule;
}());

//# sourceMappingURL=mipres.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map