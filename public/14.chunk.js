webpackJsonp([14],{

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts-action/delivery-contracts-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #modelForm=\"ngForm\" autocomplete=\"off\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 margin-bottom-40\" [class.btn-action-container]=\"booActive\">\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\n            </button>\n        </div>\n        <!-- name -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"model.name\" matInput placeholder=\"Nombre\">\n            </mat-form-field>\n        </div>\n        <!-- estado -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <div class=\"flex\">\n                <span class=\"flex-spacer\"></span>\n                <mat-slide-toggle [labelPosition]=\"'before'\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\">Estado</mat-slide-toggle>\n            </div>\n        </div>\n        <!--cliente-->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input readonly matInput type=\"text\" placeholder=\"Cliente\" [(ngModel)]=\"customers.legalname\" id=\"client\" name=\"client\" />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalCostumers()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n        <!-- tipo de poblacion -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-select class=\"full-width\" placeholder=\"Tipo de población\" [(ngModel)]=\"model.population_type_id\" name=\"population_type_id\"\n                id=\"population_type_id\">\n                <mat-option *ngFor=\"let item of arrPopulation_type\" [value]=\"item.id\">{{item.value}}</mat-option>\n            </mat-select>\n        </div>\n        <!--description-->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <textarea type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Descripción\"></textarea>\n            </mat-form-field>\n        </div>\n        <!--Red adscrita-->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <div class=\"flex margin-bottom\">\n                <div class=\"box-header no-padding-h text-center\">Red adscrita</div>\n                <span class=\"flex-spacer\"></span>\n\n                <button type=\"button\" color=\"primary\" type=\"button\" mat-raised-button class=\"btn-w-md\" (click)=\"openModalIpsNetwork()\">Añadir</button>\n            </div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of _ips\">\n                            <td>{{item.value}}</td>\n                            <td class=\"w-40\">\n                                <button type=\"button\" class=\"text-danger\" type=\"button\" mat-icon-button (click)=\"deleteIps(item)\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <!--EVENTO-->\n    <div class=\"row\">\n        <div class=\"col-sm-12 margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\n            <mat-slide-toggle [labelPosition]=\"'before'\" id=\"event\" name=\"event\" [(ngModel)]=\"booEvento\">Evento</mat-slide-toggle>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"booEvento\">\n        <!-- Numero de contrato -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"evento_contract_number\" name=\"evento_contract_number\" [(ngModel)]=\"contract_number\" matInput\n                    placeholder=\"Numero de contrato\">\n            </mat-form-field>\n        </div>\n        <!-- inicio del contrato -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate2\" id=\"evento_contract_start_date\" name=\"evento_contract_start_date\" placeholder=\"Inicio de contrato\"\n                    [(ngModel)]=\"contract_start_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate2\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate2></mat-datepicker>\n        </div>\n        <!-- Vencimiento del contrato -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate1\" id=\"evento_contract_expiration_date\" name=\"evento_contract_expiration_date\"\n                    placeholder=\"Vencimiento del contrato\" [(ngModel)]=\"contract_expiration_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate1\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate1></mat-datepicker>\n        </div>\n        <!-- presupuesto -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"budget\" name=\"budget\" [(ngModel)]=\"objEvent.budget\" matInput placeholder=\"Presupuesto\">\n            </mat-form-field>\n        </div>\n        <!-- Alerta -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <span mdPrefix>% &nbsp;</span>\n                <input required type=\"text\" id=\"percent_alert\" name=\"percent_alert\" [(ngModel)]=\"objEvent.percent_alert\" matInput placeholder=\"Alerta\">\n            </mat-form-field>\n        </div>\n        <!-- Inactivacion -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <span mdPrefix>% &nbsp;</span>\n                <input required type=\"text\" id=\"percent_unable\" name=\"percent_unable\" [(ngModel)]=\"objEvent.percent_unable\" matInput placeholder=\"Inactivación\">\n            </mat-form-field>\n        </div>\n        <!-- autorizacion -->\n        <div class='col-sm-12 col-md-6 col-lg-2 margin-bottom'>\n            <mat-slide-toggle (change)=\"activeperauth_length()\" [labelPosition]=\"'before'\" id=\"perauth\" name=\"perauth\" [(ngModel)]=\"objEvent.perauth\">Autorización</mat-slide-toggle>\n        </div>\n        <!-- longitud -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input [disabled]=\"!objEvent.perauth\" [required]=\"objEvent.perauth\" type=\"text\" id=\"perauth_length\" name=\"perauth_length\"\n                    [(ngModel)]=\"objEvent.perauth_length\" matInput placeholder=\"Longitud\">\n            </mat-form-field>\n        </div>\n        <!-- tipo de caracteres -->\n        <div class=\"col-sm-12 col-md-4 col-lg-2 margin-bottom\">\n            <mat-select [disabled]=\"!objEvent.perauth\" class=\"full-width\" placeholder=\"Tipo caracteres\" [(ngModel)]=\"objEvent.perauth_char_type\"\n                name=\"perauth_char_type\" id=\"perauth_char_type\">\n                <mat-option *ngFor=\"let item of arrPerauth_char_type\" [value]=\"item.id\">{{item.value}}</mat-option>\n            </mat-select>\n        </div>\n    </div>\n    <!--CÁPITA-->\n    <div class=\"row\">\n        <div class=\"col-sm-12  margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\n            <mat-slide-toggle [labelPosition]=\"'before'\" id=\"capita\" name=\"capita\" [(ngModel)]=\"booCapita\">Cápita</mat-slide-toggle>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"booCapita\">\n        <!-- Numero de contrato -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"capita_contract_number\" name=\"capita_contract_number\" [(ngModel)]=\"contract_number\" matInput\n                    placeholder=\"Numero de contrato\">\n            </mat-form-field>\n        </div>\n        <!-- inicio del contrato -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate\" id=\"capita_contract_start_date\" name=\"capita_contract_start_date\" placeholder=\"Inicio de contrato\"\n                    [(ngModel)]=\"contract_start_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate></mat-datepicker>\n        </div>\n        <!-- Vencimiento del contrato -->\n        <div class='col-sm-12 col-md-3  margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate3\" id=\"capita_contract_expiration_date\" name=\"capita_contract_expiration_date\"\n                    placeholder=\"Vencimiento del contrato\" [(ngModel)]=\"contract_expiration_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate3\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate3></mat-datepicker>\n        </div>\n        <!-- Alerta -->\n        <div class='col-sm-12 col-md-3 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <span mdPrefix>% &nbsp;</span>\n                <input required type=\"text\" id=\"capita_percent_alert\" name=\"capita_percent_alert\" [(ngModel)]=\"objCapita.percent_alert\" matInput\n                    placeholder=\"Alerta\">\n            </mat-form-field>\n        </div>\n        <!-- Inactivacion -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <span mdPrefix>% &nbsp;</span>\n                <input required type=\"text\" id=\"capita_percent_unable\" name=\"capita_percent_unable\" [(ngModel)]=\"objCapita.percent_unable\"\n                    matInput placeholder=\"Inactivación\">\n            </mat-form-field>\n        </div>\n        <!-- afiliados -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"capita_affiliates_total_qty\" name=\"capita_affiliates_total_qty\" [(ngModel)]=\"objCapita.affiliates_total_qty\"\n                    matInput placeholder=\"Afiliados\">\n            </mat-form-field>\n        </div>\n        <div class=\"col-sm-12\"></div>\n        <!-- Historico de afiliados -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <div class=\"box-header no-padding-h\" style=\"height: 67px;\">Histórico de afiliados</div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Ubicación</th>\n                            <th>Fecha</th>\n                            <th>Afiliados</th>\n                            <th>Valor capita</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of objCapita.affiliates_qty_history_record\">\n                            <td>{{item.department.value}}, {{item.city.value}}</td>\n                            <td>{{item.affiliates_number}}</td>\n                            <td>{{item.affiliates_number}}</td>\n                            <td>{{item.date | date:'dd-MM-yyyy'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <!-- Capita detallada -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <div class=\"flex margin-bottom\">\n                <div class=\"box-header no-padding-h\">Cápita detallada</div>\n                <span class=\"flex-spacer\"></span>\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalGeolocation()\">Añadir</button>\n            </div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Ubicación</th>\n                            <th>Afiliados</th>\n                            <th>Valor cápita</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let item of objCapita.detailed_capita; let index = index\">\n\n                        <tr *ngIf=\"item.state\">\n                            <td>{{item.department.value}}, {{item.city.value}}</td>\n                            <td>\n                                <mat-form-field class=\"full-width\">\n                                    <input required type=\"text\" id=\"affiliates_number{{index}}\" name=\"affiliates_number{{index}}\" [(ngModel)]=\"item.affiliates_number\"\n                                        matInput>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"full-width\">\n                                    <input required type=\"text\" id=\"capita_fare{{index}}\" name=\"capita_fare{{index}}\" [(ngModel)]=\"item.capita_fare\" matInput>\n                                </mat-form-field>\n                            </td>\n                            <td class=\"w-40\">\n                                <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deleteDetailedCapita(item)\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n    <!--PGP-->\n    <div class=\"row\">\n        <div class=\"col-sm-12  margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\n            <mat-slide-toggle [labelPosition]=\"'before'\" id=\"php\" name=\"pgp\" [(ngModel)]=\"booPgp\">PGP </mat-slide-toggle>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"booPgp\">\n        <!-- Numero de contrato -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"pgp_contract_number\" name=\"pgp_contract_number\" [(ngModel)]=\"contract_number\" matInput placeholder=\"Numero de contrato\">\n            </mat-form-field>\n        </div>\n        <!-- inicio del contrato -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate4\" id=\"pgp_contract_start_date\" name=\"pgp_contract_start_date\" placeholder=\"Inicio de contrato\"\n                    [(ngModel)]=\"contract_start_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate4\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate4></mat-datepicker>\n        </div>\n        <!-- Vencimiento del contrato -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerIssueDate5\" id=\"pgp_contract_expiration_date\" name=\"pgp_contract_expiration_date\" placeholder=\"Vencimiento del contrato\"\n                    [(ngModel)]=\"contract_expiration_date\">\n                <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate5\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerIssueDate5></mat-datepicker>\n        </div>\n        <!-- presupuesto -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"pgp_budget\" name=\"pgp_budget\" [(ngModel)]=\"objPgp.budget\" matInput placeholder=\"Presupuesto Mensual\">\n            </mat-form-field>\n        </div>\n        <!-- Alerta -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <span mdPrefix>% &nbsp;</span>\n                <input required type=\"text\" id=\"pgp_percent_alert\" name=\"pgp_percent_alert\" [(ngModel)]=\"objPgp.percent_alert\" matInput placeholder=\"Alerta\">\n            </mat-form-field>\n        </div>\n        <!-- inactivacion -->\n        <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"pgp_percent_unable\" name=\"pgp_percent_unable\" [(ngModel)]=\"objPgp.percent_unable\" matInput\n                    placeholder=\"Inactivación\">\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <!-- medicamentos -->\n        <div class=\"col-sm-12 margin-bottom\">\n\n            <div class=\"flex margin-bottom\">\n                <div class=\"box-header no-padding-h\">Medicamentos</div>\n                <span class=\"flex-spacer\"></span>\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalPharmaceutical()\">Añadir</button>\n            </div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Evento</th>\n                            <th>Tarifa</th>\n                            <th>Cápita</th>\n                            <th>PGP</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of _pharmadrugs; let index = index\">\n                            <td>{{item.name}}</td>\n                            <td>\n                                <mat-slide-toggle [disabled]=\"!booEvento\" id=\"p_event{{index}}\" name=\"p_event{{index}}\" [(ngModel)]=\"item.event\"></mat-slide-toggle>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"full-width\">\n                                    <input [disabled]=\"!item.event\" matInput type=\"text\" [(ngModel)]=\"item.fare\" id=\"p_fare{{index}}\" name=\"p_fare{{index}}\" />\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-slide-toggle [disabled]=\"!booCapita\" id=\"p_capita{{index}}\" name=\"p_capita{{index}}\" [(ngModel)]=\"item.capita\"></mat-slide-toggle>\n                            </td>\n                            <td>\n                                <mat-slide-toggle [disabled]=\"!booPgp\" id=\"p_pgp{{index}}\" name=\"p_pgp{{index}}\" [(ngModel)]=\"item.pgp\"></mat-slide-toggle>\n                            </td>\n                            <td class=\"w-40\">\n                                <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deletePharmadrug()\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n        <!-- puntos de dispensacion -->\n        <div class=\"col-sm-12 margin-bottom\">\n\n            <div class=\"flex margin-bottom\">\n                <div class=\"box-header no-padding-h\">Puntos de dispensación</div>\n                <span class=\"flex-spacer\"></span>\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalDeliveryPoints()\">Añadir</button>\n            </div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Evento</th>\n                            <th>Cápita</th>\n                            <th>PGP</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of model.delivery_points; let index = index\">\n                            <td>{{item.name}}</td>\n                            <td>\n                                <mat-slide-toggle id=\"d_event{{index}}\" name=\"_devent{{index}}\" [(ngModel)]=\"item.event\"></mat-slide-toggle>\n                            </td>\n                            <td>\n                                <mat-slide-toggle id=\"d_capita{{index}}\" name=\"d_capita{{index}}\" [(ngModel)]=\"item.capita\"></mat-slide-toggle>\n                            </td>\n                            <td>\n                                <mat-slide-toggle id=\"d_pgp{{index}}\" name=\"d_pgp{{index}}\" [(ngModel)]=\"item.pgp\"></mat-slide-toggle>\n                            </td>\n                            <td class=\"w-40\">\n                                <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deleteDeliveryPoints(item)\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        <!-- medicamentos -->\n        <div class=\"col-sm-12 margin-bottom\">\n            <div class=\"box-header no-padding-h\">Histórico alerta de contratos</div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\n                    <tbody>\n                        <tr *ngFor=\"let item of model.conditional_alers\">\n                            <td>{{item.description}}</td>\n                            <td>{{item.issue_date}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" [class.btn-action-container]=\"booActive\">\n            <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button class=\"btn-w-md no-margin-left btn-right\" (click)=\"save()\">{{strAction}}</button>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts-action/delivery-contracts-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_contracts_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_modal_delivery_points_modal_delivery_points_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-delivery-points/modal-delivery-points.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_modal_ips_network_modal_ips_network_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-ips-network/modal-ips-network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_modal_geolocation_modal_geolocation_component__ = __webpack_require__("../../../../../src/app/smartity/modals/modal-geolocation/modal-geolocation.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryContractsActionComponent; });
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












var DeliveryContractsActionComponent = /** @class */ (function (_super) {
    __extends(DeliveryContractsActionComponent, _super);
    function DeliveryContractsActionComponent(snackBar, route, router, loaderService, helperService, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.contract_number = '';
        _this.contract_start_date = '';
        _this.contract_expiration_date = '';
        _this.arrPopulation_type = [];
        _this.arrPerauth_char_type = [];
        _this.booEvento = false;
        _this.booCapita = false;
        _this.booPgp = false;
        _this.customers = {};
        _this._conditional_alerts = [];
        _this._pharmadrugs = [];
        _this._ips = [];
        _this._model = {
            delivery_contracts: {
                state: true,
                pharmadrug_monopoly: false,
                pharmadrug_control: false,
                cooled_products: false
            }
        };
        return _this;
    }
    DeliveryContractsActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId !== undefined) {
            this.getDataById();
        }
    };
    DeliveryContractsActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.helperService.POST("/api/collections", ["POPULATION_TYPE", "PREAUTH_CHAR_TYPE"]).subscribe(function (rs) {
            var res = rs.json();
            _this.arrPopulation_type = res.POPULATION_TYPE;
            _this.arrPerauth_char_type = res.PREAUTH_CHAR_TYPE;
        }, function (err) { });
    };
    DeliveryContractsActionComponent.prototype.save = function () {
        var _this = this;
        if (this.model.delivery_points && this.model.delivery_points.length > 0) {
            if (this.booEvento) {
                this.objEvent.contract_number = this.contract_number;
                this.objEvent.contract_expiration_date = this.contract_expiration_date;
                this.objEvent.contract_start_date = this.contract_start_date;
            }
            if (!this.booCapita) {
                this.objCapita.contract_number = this.contract_number;
                this.objCapita.contract_expiration_date = this.contract_expiration_date;
                this.objCapita.contract_start_date = this.contract_start_date;
            }
            if (!this.booPgp) {
                this.objPgp.contract_number = this.contract_number;
                this.objPgp.contract_expiration_date = this.contract_expiration_date;
                this.objPgp.contract_start_date = this.contract_start_date;
            }
            this.model.pharmadrugs = JSON.stringify(this._pharmadrugs || []);
            this.model.ips = this._ips || [];
            this.model.conditional_alerts = JSON.stringify(this._conditional_alerts || []);
            console.log(this.objEvent);
            this.model.event = JSON.stringify(this.objEvent || {});
            this.model.pgp = JSON.stringify(this.objPgp || {});
            this.model.capita = JSON.stringify(this.objCapita || {});
            if (!this.booEvento) {
                this.model.event = null;
            }
            if (!this.booCapita) {
                this.model.capita = null;
            }
            if (!this.booPgp) {
                this.model.pgp = null;
            }
            this.loaderService.display(true);
            switch (this.strAction) {
                case 'Guardar':
                    this.helperService.POST("/api/delivery-contracts", this.model).subscribe(function (rs) {
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
                    this.helperService.PUT("/api/delivery-contracts/" + this.numId, this.model).subscribe(function (rs) {
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
                case 'Eliminar':
                    this.helperService.DELETE("/api/delivery-contracts/" + this.numId).subscribe(function (rs) {
                        var res = rs.json();
                        if (res.delete) {
                            _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                            _this.goList();
                        }
                    }, function (err) {
                        _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                        _this.loaderService.display(false);
                    });
                    break;
            }
        }
        else {
            this.snackBar.open('No ha seleccionado ningún punto de dispensación', 'Error', { duration: 4000 });
            return null;
        }
    };
    DeliveryContractsActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/delivery-contracts/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res.data;
            var delivery_points = [];
            _this.model.contract_point.forEach(function (element, index) {
                element.config = JSON.parse(element.config);
                delivery_points.push({
                    id: element.delivery_points.id,
                    name: element.delivery_points.name,
                    event: element.config.event || false,
                    capita: element.config.capita || false,
                    pgp: element.config.pgp || false,
                });
                if (_this.model.contract_point.length - 1 == index) {
                    _this.model.delivery_points = delivery_points;
                }
            });
            _this.customers = _this.model.customers;
            _this._pharmadrugs = JSON.parse(_this.model.pharmadrugs);
            _this._conditional_alerts = JSON.parse(_this.model.conditional_alerts);
            _this._ips = _this.model.ips;
            _this.objEvent = JSON.parse(_this.model.event);
            _this.booEvento = !(Object.keys(_this.objEvent).length === 0);
            if (_this.booEvento) {
                _this.contract_number = _this.objEvent.contract_number;
                _this.contract_expiration_date = _this.objEvent.contract_expiration_date;
                _this.contract_start_date = _this.objEvent.contract_start_date;
            }
            _this.objPgp = JSON.parse(_this.model.pgp);
            _this.booPgp = !(Object.keys(_this.objPgp).length === 0);
            if (_this.booPgp) {
                _this.contract_number = _this.objPgp.contract_number;
                _this.contract_expiration_date = _this.objPgp.contract_expiration_date;
                _this.contract_start_date = _this.objPgp.contract_start_date;
            }
            _this.objCapita = JSON.parse(_this.model.capita);
            _this.booCapita = !(Object.keys(_this.objCapita).length === 0);
            if (_this.booCapita) {
                _this.contract_number = _this.objCapita.contract_number;
                _this.contract_expiration_date = _this.objCapita.contract_expiration_date;
                _this.contract_start_date = _this.objCapita.contract_start_date;
            }
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    DeliveryContractsActionComponent.prototype.clean = function () {
        this.model = {};
        this.model.state = true;
        this._pharmadrugs = [];
        this._conditional_alerts = [];
        this.objEvent = {};
        this.objPgp = {};
        this.objCapita = {};
    };
    DeliveryContractsActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    DeliveryContractsActionComponent.prototype.openModalCostumers = function () {
        var _this = this;
        this.modalCostumer = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Clientes',
                option: '1'
            }
        });
        this.modalCostumer.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            _this.model.customer_id = data.id;
            _this.customers = data;
        });
    };
    DeliveryContractsActionComponent.prototype.openModalPharmaceutical = function () {
        var _this = this;
        this.modalPharmaceutical = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__modals__["f" /* ModalPharmaceuticalComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Medicamentos'
            }
        });
        this.modalPharmaceutical.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            data.pharmadrug_id = data.id;
            if (!_this._pharmadrugs) {
                _this._pharmadrugs = [];
            }
            if (_this._pharmadrugs.length == 0) {
                data.event = false;
                data.capita = false;
                data.pgp = false;
                data.fare = '';
                _this._pharmadrugs.push(data);
            }
            var exist = false;
            _this._pharmadrugs.forEach(function (element, index) {
                if (element.name == data.name) {
                    exist = true;
                }
                if (_this._pharmadrugs.length == index + 1) {
                    if (!exist) {
                        data.event = false;
                        data.capita = false;
                        data.pgp = false;
                        data.fare = '0';
                        _this._pharmadrugs.push(data);
                    }
                }
            });
        });
    };
    DeliveryContractsActionComponent.prototype.openModalDeliveryPoints = function () {
        var _this = this;
        this.modalDeliveryPoints = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__modals_modal_delivery_points_modal_delivery_points_component__["a" /* ModalDeliveryPointsComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Puntos de dispensación'
            }
        });
        this.modalDeliveryPoints.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            data.delivery_point_id = data.id;
            if (!_this.model.delivery_points) {
                _this.model.delivery_points = [];
            }
            if (_this.model.delivery_points.length == 0) {
                data.event = false;
                data.capita = false;
                data.pgp = false;
                _this.model.delivery_points.push(data);
            }
            var exist = false;
            _this.model.delivery_points.forEach(function (element, index) {
                if (element.name == data.name) {
                    exist = true;
                }
                if (_this.model.delivery_points.length == index + 1) {
                    if (!exist) {
                        data.event = false;
                        data.capita = false;
                        data.pgp = false;
                        _this.model.delivery_points.push(data);
                    }
                }
            });
        });
    };
    DeliveryContractsActionComponent.prototype.deleteDeliveryPoints = function (item) {
        this.model.delivery_points.splice(this._ips.indexOf(item), 1);
    };
    DeliveryContractsActionComponent.prototype.deletePharmadrug = function (item) {
        this._pharmadrugs.splice(this._pharmadrugs.indexOf(item), 1);
    };
    DeliveryContractsActionComponent.prototype.openModalIpsNetwork = function () {
        var _this = this;
        this.modalIpsNetwork = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__modals_modal_ips_network_modal_ips_network_component__["a" /* ModalIpsNetworkComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Red adscrita'
            }
        });
        this.modalIpsNetwork.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            console.log(data);
            if (_this._ips.length == 0) {
                _this._ips.push(data);
            }
            else {
                var exist = false;
                _this._ips.forEach(function (element, index) {
                    if (element.value == data.value) {
                        exist = true;
                    }
                    if (_this._ips.length - 1 == index) {
                        if (!exist) {
                            _this._ips.push(data);
                        }
                    }
                });
            }
        });
    };
    DeliveryContractsActionComponent.prototype.deleteIps = function (item) {
        this._ips.splice(this._ips.indexOf(item), 1);
    };
    DeliveryContractsActionComponent.prototype.openModalGeolocation = function () {
        var _this = this;
        this.modalGeolocation = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__modals_modal_geolocation_modal_geolocation_component__["a" /* ModalGeolocationComponent */], {
            hasBackdrop: false,
            width: '400px',
            data: { title: 'Ubicación', }
        });
        this.modalGeolocation.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (data) { return data; })).subscribe(function (data) {
            if (data) {
                if (_this.objCapita.detailed_capita == undefined || _this.objCapita.detailed_capita == null) {
                    _this.objCapita.detailed_capita = [];
                    _this.objCapita.detailed_capita.push(data);
                }
                var exist = false;
                var isDelete = false;
                var _data;
                _this.objCapita.detailed_capita.forEach(function (element, index) {
                    if (element.city.id == data.city.id) {
                        exist = true;
                        if (!element.state) {
                            isDelete = true;
                            _data = element;
                        }
                    }
                    if (_this.objCapita.detailed_capita.length - 1 == index) {
                        if (!exist) {
                            _this.objCapita.detailed_capita.push(data);
                        }
                        if (isDelete) {
                            _data.state = true;
                        }
                    }
                });
            }
        });
    };
    DeliveryContractsActionComponent.prototype.deleteDetailedCapita = function (item) {
        item.state = false;
    };
    DeliveryContractsActionComponent.prototype.activeperauth_length = function () {
        if (!this.objEvent.perauth) {
            this.objEvent.perauth_length = '';
            this.objEvent.perauth_char_type = '';
        }
    };
    DeliveryContractsActionComponent.prototype.clearEvent = function () {
        if (this.booEvento) {
            this.objEvent = {};
            this._pharmadrugs.forEach(function (element) {
                element.fare = '';
                element.event = false;
            });
        }
    };
    DeliveryContractsActionComponent.prototype.clearCapita = function () {
        if (this.booCapita) {
            this.objCapita = {};
            this._pharmadrugs.forEach(function (element) {
                element.capita = false;
            });
        }
    };
    DeliveryContractsActionComponent.prototype.clearPgp = function () {
        if (this.booPgp) {
            this.objPgp = {};
            this._pharmadrugs.forEach(function (element) {
                element.pgp = false;
            });
        }
    };
    var _a, _b, _c, _d, _e, _f, _g;
    DeliveryContractsActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-contracts-action-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts-action/delivery-contracts-action.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* LoaderService */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* HelperService */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__delivery_contracts_component__["a" /* DeliveryContractsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__delivery_contracts_component__["a" /* DeliveryContractsComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], DeliveryContractsActionComponent);
    return DeliveryContractsActionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=delivery-contracts-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts-list/delivery-contracts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <th class=\"noAuto\" (click)=\"sort('id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('code')\">Nombre\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='code'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('name')\">Cliente\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('operationcostcentres')\">Población\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='operationcostcentres'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('ct.value')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='ct.value'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                        <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">\n                        <td class=\"noAuto\">{{ item.id }}</td>\n                        <td>{{ item.name }}</td>\n                        <td>{{ item.customers.businessname }}</td>\n                        <td>{{ item.population_types.value }}</td>\n                        <td>{{ item.state ? 'Activo' : 'Inactiva' }}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar', item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"maxSize\"\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts-list/delivery-contracts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryContractsListComponent; });
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






var DeliveryContractsListComponent = /** @class */ (function (_super) {
    __extends(DeliveryContractsListComponent, _super);
    function DeliveryContractsListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.urlApi = '/api/delivery-contracts';
        return _this;
    }
    DeliveryContractsListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    DeliveryContractsListComponent.prototype.CUD = function (action, row) {
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
    DeliveryContractsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-contracts-list-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts-list/delivery-contracts-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__["a" /* DeliveryContractsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__["a" /* DeliveryContractsComponent */]) === "function" ? _d : Object])
    ], DeliveryContractsListComponent);
    return DeliveryContractsListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=delivery-contracts-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Contratos de dispensación</h1>\n        </div>\n        <p class=\"hero-tagline\"></p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <delivery-contracts-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></delivery-contracts-action-cmp>\n                    <delivery-contracts-list-cmp *ngIf=\"isOpenList\"></delivery-contracts-list-cmp>\n                </div>\n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryContractsComponent; });
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


var DeliveryContractsComponent = /** @class */ (function (_super) {
    __extends(DeliveryContractsComponent, _super);
    function DeliveryContractsComponent() {
        return _super.call(this) || this;
    }
    DeliveryContractsComponent.prototype.ngOnInit = function () {
    };
    DeliveryContractsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: "delivery-contracts-cmp",
            template: __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryContractsComponent);
    return DeliveryContractsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=delivery-contracts.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_contracts_action_delivery_contracts_action_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts-action/delivery-contracts-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delivery_contracts_list_delivery_contracts_list_component__ = __webpack_require__("../../../../../src/app/smartity/delivery-contracts/delivery-contracts-list/delivery-contracts-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryContractsModule", function() { return DeliveryContractsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__["a" /* DeliveryContractsComponent */] }];
var DeliveryContractsModule = /** @class */ (function () {
    function DeliveryContractsModule() {
    }
    DeliveryContractsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__delivery_contracts_component__["a" /* DeliveryContractsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__delivery_contracts_action_delivery_contracts_action_component__["a" /* DeliveryContractsActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__delivery_contracts_list_delivery_contracts_list_component__["a" /* DeliveryContractsListComponent */]
            ]
        })
    ], DeliveryContractsModule);
    return DeliveryContractsModule;
}());

//# sourceMappingURL=delivery-contracts.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map