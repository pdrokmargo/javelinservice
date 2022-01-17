webpackJsonp([17],{

/***/ "../../../../../src/app/smartity/delivery-contracts/delivery-contracts-action/delivery-contracts-action.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form #modelForm=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n        <div class=\"col-sm-12 margin-bottom-40\" [class.btn-action-container]=\"booActive\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n            </button>\r\n        </div>\r\n        <!-- name -->\r\n        <div class='col-sm-12 col-md-6 margin-bottom'>\r\n            <mat-form-field class=\"full-width\">\r\n                <input required type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"model.name\" matInput placeholder=\"Nombre\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- estado -->\r\n        <div class='col-sm-12 col-md-6 margin-bottom'>\r\n            <div class=\"flex\">\r\n                <span class=\"flex-spacer\"></span>\r\n                <mat-slide-toggle [labelPosition]=\"'before'\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\">Estado</mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n        <!--cliente-->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input readonly matInput type=\"text\" placeholder=\"Cliente\" [(ngModel)]=\"customers.fullname\" id=\"client\" name=\"client\" />\r\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openModalCostumers()\">search</mat-icon>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- tipo de poblacion -->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <mat-form-field>\r\n                <mat-select class=\"full-width\" placeholder=\"Tipo de población\" [(ngModel)]=\"model.population_type_id\"\r\n                    name=\"population_type_id\" id=\"population_type_id\">\r\n                    <mat-option *ngFor=\"let item of arrPopulation_type\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <!--description-->\r\n        <div class='col-sm-12 col-md-6 margin-bottom'>\r\n            <mat-form-field class=\"full-width\">\r\n                <textarea type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Descripción\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n        <!--Red adscrita-->\r\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\r\n            <div class=\"flex margin-bottom\">\r\n                <div class=\"box-header no-padding-h text-center\">Red adscrita</div>\r\n                <span class=\"flex-spacer\"></span>\r\n\r\n                <button type=\"button\" color=\"primary\" type=\"button\" mat-raised-button class=\"btn-w-md\" (click)=\"openModalIpsNetwork()\">Añadir</button>\r\n            </div>\r\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Nombre</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of _ips\">\r\n                            <td>{{item.value}}</td>\r\n                            <td class=\"w-40\">\r\n                                <button type=\"button\" class=\"text-danger\" type=\"button\" mat-icon-button (click)=\"deleteIps(item)\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!--EVENTO-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\r\n        <mat-slide-toggle [labelPosition]=\"'before'\" id=\"event\" name=\"event\" [(ngModel)]=\"booEvento\">Evento</mat-slide-toggle>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"booEvento\">\r\n    <!-- Numero de contrato -->\r\n    <div class='col-sm-12 col-md-6 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"evento_contract_number\" name=\"evento_contract_number\" [(ngModel)]=\"contract_number\" matInput\r\n                placeholder=\"Numero de contrato\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- inicio del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate2\" id=\"evento_contract_start_date\" name=\"evento_contract_start_date\" placeholder=\"Inicio de contrato\"\r\n                [(ngModel)]=\"contract_start_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate2\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate2></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerStartDate\" placeholder=\"Inicio de contrato\" \r\n                [(ngModel)]=\"contract_start_date\" name=\"contract_start_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerStartDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerStartDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Vencimiento del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate1\" id=\"evento_contract_expiration_date\" name=\"evento_contract_expiration_date\"\r\n                placeholder=\"Vencimiento del contrato\" [(ngModel)]=\"contract_expiration_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate1\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate1></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerEndDate\" placeholder=\"Vencimiento del contrato\"\r\n                [(ngModel)]=\"contract_expiration_date\"  name=\"contract_expiration_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerEndDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerEndDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- presupuesto -->\r\n    <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"budget\" name=\"budget\" [(ngModel)]=\"objEvent.budget\" matInput placeholder=\"Presupuesto\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Alerta -->\r\n    <div class='col-sm-12 col-md-4 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <span mdPrefix>% &nbsp;</span>\r\n            <input required type=\"text\" id=\"percent_alert\" name=\"percent_alert\" [(ngModel)]=\"objEvent.percent_alert\" matInput placeholder=\"Alerta\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Inactivacion -->\r\n    <div class='col-sm-12 col-md-4 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <span mdPrefix>% &nbsp;</span>\r\n            <input required type=\"text\" id=\"percent_unable\" name=\"percent_unable\" [(ngModel)]=\"objEvent.percent_unable\" matInput placeholder=\"Inactivación\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- autorizacion -->\r\n    <div class='col-sm-12 col-md-6 col-lg-2 margin-bottom'>\r\n        <mat-slide-toggle (change)=\"activeperauth_length()\" [labelPosition]=\"'before'\" id=\"perauth\" name=\"perauth\" [(ngModel)]=\"objEvent.perauth\">Autorización</mat-slide-toggle>\r\n    </div>\r\n    <!-- longitud -->\r\n    <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input [disabled]=\"!objEvent.perauth\" [required]=\"objEvent.perauth\" type=\"text\" id=\"perauth_length\" name=\"perauth_length\"\r\n                [(ngModel)]=\"objEvent.perauth_length\" matInput placeholder=\"Longitud\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- tipo de caracteres -->\r\n    <div class=\"col-sm-12 col-md-3 col-lg-2 margin-bottom\">\r\n        <mat-form-field>\r\n            <mat-select [disabled]=\"!objEvent.perauth\" class=\"full-width\" placeholder=\"Tipo caracteres\" [(ngModel)]=\"objEvent.perauth_char_type\"\r\n                name=\"perauth_char_type\" id=\"perauth_char_type\">\r\n                <mat-option *ngFor=\"let item of arrPerauth_char_type\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<!--CÁPITA-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12  margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\r\n        <mat-slide-toggle [labelPosition]=\"'before'\" id=\"capita\" name=\"capita\" [(ngModel)]=\"booCapita\">Cápita</mat-slide-toggle>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"booCapita\">\r\n    <!-- Numero de contrato -->\r\n    <div class='col-sm-12 col-md-6 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"capita_contract_number\" name=\"capita_contract_number\" [(ngModel)]=\"contract_number\" matInput\r\n                placeholder=\"Numero de contrato\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- inicio del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate\" id=\"capita_contract_start_date\" name=\"capita_contract_start_date\" placeholder=\"Inicio de contrato\"\r\n                [(ngModel)]=\"contract_start_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerCapitaStartDate\" placeholder=\"Inicio de contrato\" \r\n                [(ngModel)]=\"contract_start_date\" name=\"capita_contract_start_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerCapitaStartDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerCapitaStartDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Vencimiento del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3  margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate3\" id=\"capita_contract_expiration_date\" name=\"capita_contract_expiration_date\"\r\n                placeholder=\"Vencimiento del contrato\" [(ngModel)]=\"contract_expiration_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate3\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate3></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerCapitaEndDate\" placeholder=\"Vencimiento del contrato\"\r\n                [(ngModel)]=\"contract_expiration_date\"  name=\"capita_contract_expiration_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerCapitaEndDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerCapitaEndDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Alerta -->\r\n    <div class='col-sm-12 col-md-3 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <span mdPrefix>% &nbsp;</span>\r\n            <input required type=\"text\" id=\"capita_percent_alert\" name=\"capita_percent_alert\" [(ngModel)]=\"objCapita.percent_alert\" matInput\r\n                placeholder=\"Alerta\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Inactivacion -->\r\n    <div class='col-sm-12 col-md-4 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <span mdPrefix>% &nbsp;</span>\r\n            <input required type=\"text\" id=\"capita_percent_unable\" name=\"capita_percent_unable\" [(ngModel)]=\"objCapita.percent_unable\"\r\n                matInput placeholder=\"Inactivación\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- afiliados -->\r\n    <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"capita_affiliates_total_qty\" name=\"capita_affiliates_total_qty\" [(ngModel)]=\"objCapita.affiliates_total_qty\"\r\n                matInput placeholder=\"Afiliados\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-12\"></div>\r\n    <!-- Historico de afiliados -->\r\n    <div class=\"col-sm-12 col-md-6 margin-bottom\" *ngIf=\"false\">\r\n        <div class=\"box-header no-padding-h\" style=\"height: 67px;\">Histórico de afiliados</div>\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Ubicación</th>\r\n                        <th>Fecha</th>\r\n                        <th>Afiliados</th>\r\n                        <th>Valor capita</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of objCapita.affiliates_qty_history_record\">\r\n                        <td>{{item.department.value}}, {{item.city.value}}</td>\r\n                        <td>{{item.affiliates_number}}</td>\r\n                        <td>{{item.affiliates_number}}</td>\r\n                        <td>{{item.date | date:'dd-MM-yyyy'}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <!-- Capita detallada -->\r\n    <div class=\"col-sm-12 col-md-6 margin-bottom\" *ngIf=\"false\">\r\n        <div class=\"flex margin-bottom\">\r\n            <div class=\"box-header no-padding-h\">Cápita detallada</div>\r\n            <span class=\"flex-spacer\"></span>\r\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalGeolocation()\">Añadir</button>\r\n        </div>\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Ubicación</th>\r\n                        <th>Afiliados</th>\r\n                        <th>Valor cápita</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let item of objCapita.detailed_capita; let index = index\">\r\n\r\n                    <tr *ngIf=\"item.state\">\r\n                        <td>{{item.department.value}}, {{item.city.value}}</td>\r\n                        <td>\r\n                            <mat-form-field class=\"full-width\">\r\n                                <input required type=\"text\" id=\"affiliates_number{{index}}\" name=\"affiliates_number{{index}}\" [(ngModel)]=\"item.affiliates_number\"\r\n                                    matInput>\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field class=\"full-width\">\r\n                                <input required type=\"text\" id=\"capita_fare{{index}}\" name=\"capita_fare{{index}}\" [(ngModel)]=\"item.capita_fare\" matInput>\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td class=\"w-40\">\r\n                            <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deleteDetailedCapita(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--PGP-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12  margin-bottom-40\" style=\"padding-bottom: 10px; border-bottom: 1px solid #bebebe\">\r\n        <mat-slide-toggle [labelPosition]=\"'before'\" id=\"php\" name=\"pgp\" [(ngModel)]=\"booPgp\">PGP </mat-slide-toggle>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"booPgp\">\r\n    <!-- Numero de contrato -->\r\n    <div class='col-sm-12 col-md-6 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"pgp_contract_number\" name=\"pgp_contract_number\" [(ngModel)]=\"contract_number\" matInput placeholder=\"Numero de contrato\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- inicio del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate4\" id=\"pgp_contract_start_date\" name=\"pgp_contract_start_date\" placeholder=\"Inicio de contrato\"\r\n                [(ngModel)]=\"contract_start_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate4\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate4></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerPGPStartDate\" placeholder=\"Inicio de contrato\" \r\n                [(ngModel)]=\"contract_start_date\" [min] name=\"pgp_contract_start_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerPGPStartDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerPGPStartDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Vencimiento del contrato -->\r\n    <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input matInput [matDatepicker]=\"pickerIssueDate5\" id=\"pgp_contract_expiration_date\" name=\"pgp_contract_expiration_date\"\r\n                placeholder=\"Vencimiento del contrato\" [(ngModel)]=\"contract_expiration_date\"> -->\r\n            <!-- <button mdSuffix [matDatepicker]=\"pickerIssueDate5\"></button> -->\r\n        <!-- </mat-form-field>\r\n        <mat-datepicker #pickerIssueDate5></mat-datepicker>\r\n    </div> -->\r\n    <div class=\"col-md-3 margin-bottom\">\r\n        <mat-form-field>\r\n            <input matInput [matDatepicker]=\"pickerPGPEndDate\" placeholder=\"Vencimiento del contrato\"\r\n                [(ngModel)]=\"contract_expiration_date\"  name=\"pgp_contract_expiration_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickerPGPEndDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickerPGPEndDate></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- presupuesto -->\r\n    <div class='col-sm-12 col-md-4 col-lg-2 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"pgp_budget\" name=\"pgp_budget\" [(ngModel)]=\"objPgp.budget\" matInput placeholder=\"Presupuesto Mensual\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- Alerta -->\r\n    <div class='col-sm-12 col-md-4 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <span mdPrefix>% &nbsp;</span>\r\n            <input required type=\"text\" id=\"pgp_percent_alert\" name=\"pgp_percent_alert\" [(ngModel)]=\"objPgp.percent_alert\" matInput placeholder=\"Alerta\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- inactivacion -->\r\n    <div class='col-sm-12 col-md-4 col-lg-1 margin-bottom'>\r\n        <mat-form-field class=\"full-width\">\r\n            <input required type=\"text\" id=\"pgp_percent_unable\" name=\"pgp_percent_unable\" [(ngModel)]=\"objPgp.percent_unable\" matInput\r\n                placeholder=\"Inactivación\">\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <!-- medicamentos -->\r\n    <div class=\"col-sm-12 margin-bottom\">\r\n\r\n        <div class=\"flex margin-bottom\">\r\n            <div class=\"box-header no-padding-h\">Medicamentos</div>\r\n            <span class=\"flex-spacer\"></span>\r\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalPharmaceutical()\">Añadir</button>\r\n        </div>\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Nombre</th>\r\n                        <th>Evento</th>\r\n                        <th>Tarifa</th>\r\n                        <th>Cápita</th>\r\n                        <th>PGP</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of _pharmadrugs; let index = index\">\r\n                        <td>{{item.name}}</td>\r\n                        <td>\r\n                            <mat-slide-toggle [disabled]=\"!booEvento\" id=\"p_event{{index}}\" name=\"p_event{{index}}\" [(ngModel)]=\"item.event\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td>\r\n                            <mat-form-field class=\"full-width\">\r\n                                <input [disabled]=\"!item.event\" matInput type=\"text\" [(ngModel)]=\"item.fare\" id=\"p_fare{{index}}\" name=\"p_fare{{index}}\"\r\n                                />\r\n                            </mat-form-field>\r\n                        </td>\r\n                        <td>\r\n                            <mat-slide-toggle [disabled]=\"!booCapita\" id=\"p_capita{{index}}\" name=\"p_capita{{index}}\" [(ngModel)]=\"item.capita\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td>\r\n                            <mat-slide-toggle [disabled]=\"!booPgp\" id=\"p_pgp{{index}}\" name=\"p_pgp{{index}}\" [(ngModel)]=\"item.pgp\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"w-40\">\r\n                            <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deletePharmadrug()\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- puntos de dispensacion -->\r\n    <div class=\"col-sm-12 margin-bottom\">\r\n\r\n        <div class=\"flex margin-bottom\">\r\n            <div class=\"box-header no-padding-h\">Puntos de dispensación</div>\r\n            <span class=\"flex-spacer\"></span>\r\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openModalDeliveryPoints()\">Añadir</button>\r\n        </div>\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Nombre</th>\r\n                        <th>Evento</th>\r\n                        <th>Cápita</th>\r\n                        <th>PGP</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of model.delivery_points; let index = index\">\r\n                        <td>{{item.name}}</td>\r\n                        <td>\r\n                            <mat-slide-toggle id=\"d_event{{index}}\" name=\"_devent{{index}}\" [(ngModel)]=\"item.event\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td>\r\n                            <mat-slide-toggle id=\"d_capita{{index}}\" name=\"d_capita{{index}}\" [(ngModel)]=\"item.capita\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td>\r\n                            <mat-slide-toggle id=\"d_pgp{{index}}\" name=\"d_pgp{{index}}\" [(ngModel)]=\"item.pgp\"></mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"w-40\">\r\n                            <button type=\"button\" class=\"text-danger\" mat-icon-button (click)=\"deleteDeliveryPoints(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <!-- medicamentos -->\r\n    <div class=\"col-sm-12 margin-bottom\" *ngIf=\"false\">\r\n        <div class=\"box-header no-padding-h\">Histórico alerta de contratos</div>\r\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n            <table class=\"mdl-data-table table-bordered table-striped no-margin\">\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of model.conditional_alers\">\r\n                        <td>{{item.description}}</td>\r\n                        <td>{{item.issue_date}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\" [class.btn-action-container]=\"booActive\">\r\n        <button type=\"button\" [disabled]=\"!modelForm.form.valid\" mat-raised-button class=\"btn-w-md no-margin-left btn-right\" (click)=\"save()\">{{strAction}}</button>\r\n    </div>\r\n    </div>\r\n\r\n    </form>\r\n</div>"

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
        else {
            this.today_date = new Date();
        }
        console.log(this.model);
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
            // if (this.booPgp) {
            //     this.contract_number = this.objPgp.contract_number;
            //     this.contract_expiration_date = this.objPgp.contract_expiration_date;
            //     this.contract_start_date = this.objPgp.contract_start_date;
            // }
            _this.objCapita = JSON.parse(_this.model.capita);
            _this.booCapita = !(Object.keys(_this.objCapita).length === 0);
            // if (this.booCapita) {
            //     this.contract_number = this.objCapita.contract_number;
            //     this.contract_expiration_date = this.objCapita.contract_expiration_date;
            //     this.contract_start_date = this.objCapita.contract_start_date;
            // }
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
//# sourceMappingURL=17.chunk.js.map