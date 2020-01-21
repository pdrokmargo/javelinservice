webpackJsonp([5],{

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders-action/stakeholders-action.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form #stakeHolderForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"form-group row\">\r\n        <div class=\"full-width-40\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon> Regresar\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- person_type_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">\r\n                <mat-select required class=\"full-width\" placeholder=\"Tipo de persona\" [(ngModel)]=\"_model.stakeholders_info.person_type_id\"\r\n                    name=\"person_type_id\" id=\"person_type_id\" (change)=\"selectPersonType()\">\r\n                    <mat-option *ngFor=\"let item of persons_type\" [value]=\"item.id\">{{ item.value }}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- rut -->\r\n        <div class=\"col-md-6\">\r\n            <div class=\"flex height-30\">\r\n                <span class=\"flex-spacer\"></span>\r\n                <mat-slide-toggle *ngIf=\"_model.stakeholders_info.person_type_id == 38 && _model.stakeholders_info.document_type_id == 12\"\r\n                    [labelPosition]=\"'before'\" id=\"rut\" name=\"rut\" [(ngModel)]=\"_model.stakeholders_info.rut\">RUT</mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n        <!-- document_type_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">\r\n                <mat-select (change)=\"changeDocumentType()\" required class=\"full-width\" placeholder=\"Tipo de documento\" [(ngModel)]=\"_model.stakeholders_info.document_type_id\"\r\n                    name=\"document_type_id\" id=\"document_type_id\">\r\n                    <mat-option *ngFor=\"let item of document_type\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- document number -->\r\n        <div class=\"col-md-4\" [ngClass]=\"\r\n    {\r\n        'col-sm-8 col-md-4' : _model.stakeholders_info.document_type_id == 14 || _model.stakeholders_info.rut, \r\n        'col-sm-4 col-md-6' : _model.stakeholders_info.document_type_id != 14 && !_model.stakeholders_info.rut \r\n    }\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input required NumberOnly (keyup)=\"getRutDigit()\" type=\"text\" id=\"document_number\" name=\"document_number\" [(ngModel)]=\"_model.stakeholders_info.document_number\"\r\n                    matInput placeholder=\"Número de documento\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- document_number_digit -->\r\n        <div class=\"col-sm-4 col-md-2\" *ngIf=\"_model.stakeholders_info.document_type_id == 14 || _model.stakeholders_info.rut\">\r\n        <mat-form-field class=\"full-width\" class=\"full-width\">\r\n            <input [disabled]=\"true\" type=\"text\" id=\"document_number_digit\" name=\"document_number_digit\" [(ngModel)]=\"document_number_digit\"\r\n                matInput placeholder=\"Dígito\">\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <!-- ######################################## IF PERSON NATURAL ######################################## -->\r\n    <!--&& !_model.stakeholders_info.rut-->\r\n    <ng-container *ngIf=\"_model.stakeholders_info.person_type_id === 38\">\r\n        <!-- firstname -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"_model.stakeholders_info.firstname\" matInput placeholder=\"Primer nombre\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- middlename -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"middlename\" name=\"middlename\" [(ngModel)]=\"_model.stakeholders_info.middlename\" matInput placeholder=\"Segundo nombres\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- lastname -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"_model.stakeholders_info.lastname\" matInput placeholder=\"Apellidos\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- second_surname -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"second_surname\" name=\"second_surname\" [(ngModel)]=\"_model.stakeholders_info.second_surname\" matInput\r\n                    placeholder=\"Segundo apellido\">\r\n            </mat-form-field>\r\n        </div>\r\n    </ng-container>\r\n    <!-- ######################################## IF PERSON NATURAL ######################################## -->\r\n    <!-- legalname -->\r\n    <div class=\"col-md-3\" [ngClass]=\"{ \r\n        'col-md-6 ' : _model.stakeholders_info.rut || (_model.stakeholders_info.person_type_id == 39 && _model.stakeholders_info.document_type_id == 14), \r\n        'col-md-12 ' : !_model.stakeholders_info.rut && _model.stakeholders_info.person_type_id != 39 }\" *ngIf=\"_model.stakeholders_info.person_type_id == 39\">\r\n            <mat-form-field class=\"full-width\">\r\n                <input type=\"text\" id=\"legalname\" name=\"legalname\" [(ngModel)]=\"_model.stakeholders_info.legalname\" matInput placeholder=\"Razón Social\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- business name -->\r\n        <div class=\"col-md-3\" [ngClass]=\"{ \r\n        'col-md-6 ' : _model.stakeholders_info.person_type_id === 39 , \r\n        'col-md-12 ' :  _model.stakeholders_info.person_type_id !== 39 \r\n    }\" *ngIf=\"_model.stakeholders_info.rut || (_model.stakeholders_info.person_type_id == 39)\">\r\n        <mat-form-field class=\"full-width\">\r\n            <input type=\"text\" id=\"businessname\" name=\"businessname\" [(ngModel)]=\"_model.stakeholders_info.businessname\" matInput placeholder=\"Nombre del Establecimiento\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!--country -->\r\n    <div class=\"col-md-4\">\r\n        <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Pais\" [(ngModel)]=\"country_id\" name=\"country_id\" (change)=\"getDepartments()\"\r\n            id=\"country_id\">\r\n            <mat-option *ngFor=\"let item of countries\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n        </mat-select>     </mat-form-field>\r\n    </div>\r\n    <!-- department -->\r\n    <div class=\"col-md-4\">\r\n        <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Departamento\" [(ngModel)]=\"department_id\" name=\"department_id\" (change)=\"getCities()\"\r\n            id=\"department_id\">\r\n            <mat-option *ngFor=\"let item of departments\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n        </mat-select>     </mat-form-field>\r\n    </div>\r\n    <!--city -->\r\n    <div class=\"col-md-4\">\r\n        <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Ciudad\" [(ngModel)]=\"city_id\" name=\"city_id\"\r\n            id=\"city_id\">\r\n            <mat-option *ngFor=\"let item of cities\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n        </mat-select>     </mat-form-field>\r\n    </div>\r\n    <!-- address -->\r\n    <div class=\"col-md-4\">\r\n        <mat-form-field class=\"full-width\" class=\"full-width\">\r\n            <input required type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"_model.stakeholders_info.address\" matInput placeholder=\"Dirección\">\r\n        </mat-form-field>\r\n    </div>\r\n    <!-- phone_number -->\r\n    <div class=\"col-md-4\">\r\n        <mat-form-field class=\"full-width\" class=\"full-width\">\r\n            <input required NumberOnly type=\"text\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"_model.stakeholders_info.phone_number\"\r\n                matInput placeholder=\"Teléfono\">\r\n        </mat-form-field>\r\n        \r\n    </div>\r\n    <!-- email -->\r\n    <div class=\"col-md-4\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input required type=\"text\" id=\"website\" name=\"website\" [(ngModel)]=\"_model.stakeholders_info.email\" matInput placeholder=\"Correo electrónico\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <!-- ######################################## PROFILE ######################################## -->\r\n\r\n    <div class=\"row mark\">\r\n        <!--  -->\r\n        <div class=\"col-sm-12\">\r\n            <h4>Perfiles como tercero</h4>\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_customer\" name=\"is_customer\" [(ngModel)]=\"_model.profile.is_customer\">Cliente</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_supplier\" name=\"is_supplier\" [(ngModel)]=\"_model.profile.is_supplier\">Proveedor</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_seller\" name=\"is_seller\" [(ngModel)]=\"_model.profile.is_seller\">Vendedor</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_employee\" name=\"is_employee\" [(ngModel)]=\"_model.profile.is_employee\">Empleado</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n                <mat-checkbox id=\"is_laboratory\" name=\"is_laboratory\" [(ngModel)]=\"_model.profile.is_laboratory\">Laboratorio</mat-checkbox>\r\n            </div>\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_maker\" name=\"is_maker\" [(ngModel)]=\"_model.profile.is_maker\">Fabricante</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <mat-checkbox id=\"is_importer\" name=\"is_importer\" [(ngModel)]=\"_model.profile.is_importer\">Importador</mat-checkbox>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <mat-checkbox id=\"is_holder_sanitary\" name=\"is_holder_sanitary\" [(ngModel)]=\"_model.profile.is_holder_sanitary\">Titular\r\n                de registro sanitario</mat-checkbox>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- ######################################## PROFILE ######################################## -->\r\n\r\n    <!-- ######################################################################################### -->\r\n    <div class=\"mark\" *ngIf=\"(_model.stakeholders_info.rut || _model.stakeholders_info.document_type_id === 14) && (_model.profile.is_supplier || _model.profile.is_customer)\">\r\n        <div class=\"col-sm-12\">\r\n            <h2 class=\"article-title text-center margin-10\">Información Tributaria</h2>\r\n        </div>\r\n        <!-- tax_regime_id -->\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"full-width\">\r\n                <mat-select required class=\"full-width\" placeholder=\"Tipo de regimen\" [(ngModel)]=\"_model.comercial_stakeholders_info.tax_regime_id\"\r\n                    name=\"tax_regime_id\" id=\"tax_regime_id\">\r\n                    <mat-option *ngFor=\"let item of tax_regime\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- constitution_date -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input matInput [matDatepicker]=\"pickerConstitutionDate\" id=\"constitution_date\" name=\"constitution_date\" placeholder=\"Fecha de constitución\" [(ngModel)]=\"_model.comercial_stakeholders_info.constitution_date\">\r\n            </mat-form-field>\r\n            <mat-datepicker #pickerConstitutionDate></mat-datepicker>\r\n        </div>\r\n        <span class=\"col-sm-12\"></span>\r\n        <!-- retention_for_rent -->\r\n        <div class=\"col-md-6\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"retention_for_rent\" name=\"retention_for_rent\" [(ngModel)]=\"_model.comercial_stakeholders_info.retention_for_rent\">Retención por renta</mat-slide-toggle>\r\n        </div>\r\n        <!-- big_contributor -->\r\n        <div class=\"col-md-6\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"big_contributor\" name=\"big_contributor\" [(ngModel)]=\"_model.comercial_stakeholders_info.big_contributor\">Gran Contribuyente</mat-slide-toggle>\r\n        </div>\r\n        <!-- codes_iva -->\r\n        <div class=\"col-md-6\" [ngClass]=\"{ 'col-md-6' : !_model.comercial_stakeholders_info.codes.iva, 'col-sm-3' : _model.comercial_stakeholders_info.codes.iva }\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"codes_iva\" name=\"codes_iva\" [(ngModel)]=\"_model.comercial_stakeholders_info.codes.iva\">Retenedor\r\n                de IVA</mat-slide-toggle>\r\n        </div>\r\n        <!-- code_iva_percent -->\r\n        <div class=\"col-sm-3\" *ngIf=\"_model.comercial_stakeholders_info.codes.iva\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly required type=\"text\" id=\"code_iva_percent\" name=\"code_iva_percent\" placeholder=\"Porcentaje\" [(ngModel)]=\"_model.comercial_stakeholders_info.codes.iva_percent\"\r\n                    matInput>\r\n                <span matSuffix>% &nbsp;</span>\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- codes_ica -->\r\n        <div class=\"col-md-6\" [ngClass]=\"{ 'col-md-6 ' : !_model.comercial_stakeholders_info.codes.ica, 'col-sm-3 ' : _model.comercial_stakeholders_info.codes.ica }\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"codes_ica\" name=\"codes_ica\" [(ngModel)]=\"_model.comercial_stakeholders_info.codes.ica\">Retenedor de ICA</mat-slide-toggle>\r\n        </div>\r\n        <!-- code_ica_percent -->\r\n        <div class=\"col-sm-3\" *ngIf=\"_model.comercial_stakeholders_info.codes.ica\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly required type=\"text\" id=\"code_ica_percent\" name=\"code_ica_percent\" placeholder=\"Porcentaje\" [(ngModel)]=\"_model.comercial_stakeholders_info.codes.ica_percent\"\r\n                    matInput>\r\n                <span matSuffix>% &nbsp;</span>\r\n            </mat-form-field>\r\n        </div>\r\n        <span class=\"col-sm-12\"></span>\r\n        <!-- codes_ciiu -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input required type=\"text\" id=\"ciiu\" name=\"ciiu\" [(ngModel)]=\"_model.comercial_stakeholders_info.codes.ciiu\" matInput placeholder=\"Código CIIU\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <!-- ######################################################################################### -->\r\n    <div class=\"mark\" *ngIf=\"_model.profile.is_customer\">\r\n        <div class=\"col-sm-12\">\r\n            <h2 class=\"article-title text-center margin-10\">Información del Cliente</h2>\r\n        </div>\r\n        <!-- customer_class_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">     <mat-select class=\"full-width\" placeholder=\"Clases de cliente\" [(ngModel)]=\"_model.customer.customer_class_id\" name=\"customer_class_id\"\r\n                id=\"customer_class_id\">\r\n                <mat-option *ngFor=\"let item of customers_class\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- debt_type_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Tipo de cartera\" [(ngModel)]=\"_model.customer.debt_type_id\" name=\"debt_type_id\"\r\n                id=\"city_id\">\r\n                <mat-option *ngFor=\"let item of portfolio_type\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- credit_limit -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                    <span mdPrefix><b>$</b> &nbsp;</span>\r\n                <input appMycurrency required type=\"text\" id=\"customer_credit_limit\" name=\"customer_credit_limit\" [(ngModel)]=\"_model.customer.credit_limit\"\r\n                    matInput placeholder=\"Cupo del crédito\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- sales_representative_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Vendedor\" [(ngModel)]=\"_model.customer.sales_representative_id\" name=\"sales_representative_id\"\r\n                id=\"sales_representative_id\">\r\n                <mat-option *ngFor=\"let item of sales_representatives\" [value]=\"item.id\">{{ item.stakeholder_info.fullname }}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- global_discount -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                    <span mdPrefix><b>$</b> &nbsp;</span>\r\n                <input appMycurrency type=\"text\" id=\"global_discount\" name=\"global_discount\" max=\"12\" [(ngModel)]=\"_model.customer.global_discount\"\r\n                    matInput placeholder=\"Descuento Global\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- payment_condition -->\r\n        <div *ngIf=\"_model.customer.debt_type_id == 18\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\">     <mat-select [required]=\"_model.customer.debt_type_id == 17\" class=\"full-width\" placeholder=\"Condición de pago\" [(ngModel)]=\"_model.customer.payment_condition_id\"\r\n                name=\"payment_condition\" id=\"payment_condition\">\r\n                <mat-option *ngFor=\"let item of conditions_payment\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- credit_limit_blocking -->\r\n        <div class=\"col-md-6\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"credit_limit_blocking\" name=\"credit_limit_blocking\" [(ngModel)]=\"_model.customer.credit_limit_blocking\">Bloqueo por cupo</mat-slide-toggle>\r\n        </div>\r\n        <span class=\"col-sm-12\"></span>\r\n        <!-- days_early_payment -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                    <span mdPrefix><b>$</b> &nbsp;</span>\r\n                <input appMycurrency type=\"text\" id=\"days_early_payment\" name=\"days_early_payment\" [(ngModel)]=\"_model.customer.days_early_payment\"\r\n                    matInput placeholder=\"Descuento de pronto pago\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- days_grace -->\r\n        <div *ngIf=\"_model.customer.debt_type_id == 18\" class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly [required]=\"_model.customer.debt_type_id == 17\" required type=\"text\" id=\"days_grace\" name=\"days_grace\"\r\n                    [(ngModel)]=\"_model.customer.days_grace\" matInput placeholder=\"Días de gracia\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- late_payment_blocking -->\r\n        <div class=\"col-md-6\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"late_payment_blocking\" name=\"late_payment_blocking\" [(ngModel)]=\"_model.customer.late_payment_blocking\">Bloqueo por mora</mat-slide-toggle>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"box-header no-padding-h text-center\">\r\n                <h5 class=\"text-left\">Contacto de Compras</h5>\r\n            </div>\r\n        </div>\r\n        <!-- name_purchases_contact -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"name_purchases_contact\" name=\"name_purchases_contact\" [(ngModel)]=\"_model.customer.purchases_contact.name\"\r\n                    matInput placeholder=\"Nombre\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- phone_purchases_contact -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly type=\"text\" id=\"phone_purchases_contact\" name=\"phone_purchases_contact\" [(ngModel)]=\"_model.customer.purchases_contact.phone\"\r\n                    matInput placeholder=\"Teléfono\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- email_purchases_contact -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"email_purchases_contact\" name=\"email_purchases_contact\" [(ngModel)]=\"_model.customer.purchases_contact.email\"\r\n                    matInput placeholder=\"Correo electrónico\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"box-header no-padding-h text-center\">\r\n                <h5 class=\"text-left\">Contacto de Cartera</h5>\r\n            </div>\r\n        </div>\r\n        <!-- name_debt_contact -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"name_debt_contact\" name=\"name_debt_contact\" [(ngModel)]=\"_model.customer.debt_contact.name\" matInput\r\n                    placeholder=\"Nombre\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- phone_debt_contact -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" NumberOnly id=\"phone_debt_contact\" name=\"phone_debt_contact\" [(ngModel)]=\"_model.customer.debt_contact.phone\"\r\n                    matInput placeholder=\"Teléfono\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- email_debt_contact -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input type=\"text\" id=\"email_debt_contact\" name=\"email_debt_contact\" [(ngModel)]=\"_model.customer.debt_contact.email\" matInput\r\n                    placeholder=\"Correo electrónico \">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- TABLE -->\r\n        <div class=\"full-width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"flex\" style=\"full-width: 15px;height: 51px;\">\r\n                        <div class=\"box-header no-padding-h\">Puntos de envío</div>\r\n                        <span class=\"flex-spacer\"></span>\r\n                        <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"openAddSucursal()\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                            <thead>\r\n                                <tr>\r\n\r\n                                    <th>Sucursal</th>\r\n                                    <th>Ubicación</th>\r\n                                    <th class=\"w-40\"></th>\r\n                                    <th class=\"w-40\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of _model.customer.shipping_points; let index = index\">\r\n\r\n                                    <td>{{ item.name }}</td>\r\n                                    <td>{{ item.country.value + ', ' + item.department.value + ', ' + item.city.value }}</td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeSucursal(item)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button (click)=\"openSucursal(item, index)\">\r\n                                            <mat-icon>remove_red_eye</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- TABLE -->\r\n\r\n        <div class=\"full-width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"flex\" style=\"full-width: 15px;height: 51px;\">\r\n                        <div class=\"box-header no-padding-h\">Contrato institucional</div>\r\n                        <span class=\"flex-spacer\"></span>\r\n                        <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"openAddInstitucionalSale()\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                            <thead>\r\n                                <tr>\r\n\r\n                                    <th>No. Contrato</th>\r\n                                    <th>Entidad contratante</th>\r\n                                    <!--th></th-->\r\n                                    <th class=\"w-40\"></th>\r\n                                    <th class=\"w-40\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of _model.customer.institutional_sale_contract; let index = index\">\r\n\r\n                                    <td>{{ item.contract_number }}</td>\r\n                                    <td>{{ item.contracting_entity }}</td>\r\n                                    <!--td>\r\n                                        <a *ngIf=\"item.file !== ' ' && item.file !== null\" href=\"{{ item.file }}\">\r\n                                            <i class=\"fa fa-paperclip fa-2x\" aria-hidden=\"true\"></i>\r\n                                        </a>\r\n                                    </td-->\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeInstitucionalSale(item)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button (click)=\"openInstitucionalSale(item, index)\">\r\n                                            <mat-icon>remove_red_eye</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- TABLE -->\r\n        <div class=\"full-width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"flex\" style=\"full-width: 15px;height: 51px;\">\r\n                        <div class=\"box-header no-padding-h\">Resoluciones de controlado</div>\r\n                        <span class=\"flex-spacer\"></span>\r\n                        <button type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"openAddControlledResolution()\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>No. Resolución</th>\r\n                                    <th>Fecha de as</th>\r\n                                    <th>Fecha de expiración</th>\r\n                                    <th>Estado</th>\r\n                                    <th class=\"w-40\"></th>\r\n                                    <th class=\"w-40\"></th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of _model.customer.controlled_resolution\">\r\n\r\n                                    <td>{{ item.resolution_number }}</td>\r\n                                    <td>{{ item.issue_date | date: 'dd-MM-yyyy '}}</td>\r\n                                    <td>{{ item.expiration_date | date: 'dd-MM-yyyy '}}</td>\r\n                                    <td>{{ item.state ? 'Actvo ' : 'Inactivo ' }}</td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeControlledResolution(item)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button (click)=\"openControlledResolution(item)\">\r\n                                            <mat-icon>remove_red_eye</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- TABLE -->\r\n        <div class=\"full-width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"flex\" style=\"full-width: 15px;height: 51px;\">\r\n                        <div class=\"box-header no-padding-h\">Resoluciones de monopolio</div>\r\n                        <span class=\"flex-spacer\"></span>\r\n                        <button type=\"button\" [disabled]=\"_model.customer.shipping_points.length == 0\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\r\n                            (click)=\"openAddMonopolyResolution()\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>No. Resolución</th>\r\n                                    <th>Fecha de as</th>\r\n                                    <th>Fecha de expiración</th>\r\n                                    <th>Estado</th>\r\n                                    <th class=\"w-40\"></th>\r\n                                    <th class=\"w-40\"></th>\r\n\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of _model.customer.monopoly_resolution; let index = index\">\r\n\r\n                                    <td>{{ item.resolution_number }}</td>\r\n                                    <td>{{ item.issue_date | date: 'dd-MM-yyyy '}}</td>\r\n                                    <td>{{ item.expiration_date | date: 'dd-MM-yyyy '}}</td>\r\n                                    <td>{{ item.state ? 'Actvo ' : 'Inactivo ' }}</td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeMonopolyResolution(item)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button (click)=\"openMonopolyResolution(item, index)\">\r\n                                            <mat-icon>remove_red_eye</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- ######################################################################################### -->\r\n    <div class=\"mark\" *ngIf=\"_model.profile.is_supplier\">\r\n        <div class=\"col-sm-12\">\r\n            <h2 class=\"article-title text-center margin-10\">Información del proveedor</h2>\r\n        </div>\r\n        <!-- class supplier -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Clase de proveedor\" [(ngModel)]=\"_model.supplier.supplier_class_id\" name=\"supplier_class_id\"\r\n                id=\"supplier_class_id\">\r\n                <mat-option *ngFor=\"let item of suppliers_class\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- credit_limit -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <span mdPrefix><b>$</b> &nbsp;</span>\r\n                <input appMycurrency required type=\"text\" id=\"supplier_credit_limit\" name=\"supplier_credit_limit\" [(ngModel)]=\"_model.supplier.credit_limit\"\r\n                    matInput placeholder=\"Cupo de crédito\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- supplier_global_discount -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                    <span mdPrefix><b>$</b> &nbsp;</span>\r\n                <input appMycurrency type=\"text\" id=\"supplier_global_discount\" name=\"supplier_global_discount\" max=\"12\" [(ngModel)]=\"_model.supplier.global_discount\"\r\n                    matInput placeholder=\"Descuento Global\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- supplier_payment_condition -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Condición de pago\" [(ngModel)]=\"_model.supplier.payment_condition_id\"\r\n                name=\"supplier_payment_condition\" id=\"supplier_payment_condition\">\r\n                <mat-option *ngFor=\"let item of conditions_payment\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- supplier_days_early_payment -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly type=\"text\" id=\"supplier_days_early_payment\" name=\"supplier_days_early_payment\" [(ngModel)]=\"_model.supplier.days_early_payment\"\r\n                    matInput placeholder=\"Días de pronto pago\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- supplier_days_grace -->\r\n        <div class=\"col-sm-3\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly required type=\"text\" id=\"supplier_days_grace\" name=\"supplier_days_grace\" [(ngModel)]=\"_model.supplier.days_grace\"\r\n                    matInput placeholder=\"Días de gracia\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- payment_method_id -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\">     <mat-select required class=\"full-width\" placeholder=\"Método de pago\" [(ngModel)]=\"_model.supplier.payment_method_id\" name=\"supplier_payment_method_id\"\r\n                id=\"supplier_class_id\">\r\n                <mat-option *ngFor=\"let item of payment_method\" [value]=\"item.id\">{{item.value}}</mat-option>\r\n            </mat-select>     </mat-form-field>\r\n        </div>\r\n        <!-- purchase_order -->\r\n        <div class=\"col-md-6\">\r\n            <mat-slide-toggle [labelPosition]=\"before\" id=\"purchase_order\" name=\"purchase_order\" [(ngModel)]=\"_model.supplier.purchase_order\">Exige orden de compra</mat-slide-toggle>\r\n        </div>\r\n        <!-- TABLE -->\r\n        <div class=\"full-width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"flex\">\r\n                        <div class=\"box-header no-padding-h\">Cuentas bancarias</div>\r\n                        <span class=\"flex-spacer\"></span>\r\n                        <button mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\" (click)=\"openAddBankAccount()\">Añadir</button>\r\n                    </div>\r\n                    <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\r\n                        <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\r\n                            <thead>\r\n                                <tr>\r\n\r\n                                    <th>Nombre</th>\r\n                                    <th>Cuenta</th>\r\n                                    <th>Tipo de cuenta</th>\r\n                                    <th class=\"w-40\"></th>\r\n                                    <th class=\"w-40\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of _model.supplier.bank_accounts; let index = index\">\r\n\r\n                                    <td>{{ item.bank_name }}</td>\r\n                                    <td>{{ item?.account_number }}</td>\r\n                                    <td>{{ item.bank_account_type_name }}</td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"removeBankAccount(item)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                    <td class=\"w-40\">\r\n                                        <button type=\"button\" mat-icon-button (click)=\"openBankAccount(item, index)\">\r\n                                            <mat-icon>remove_red_eye</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"box-header no-padding-h text-center\">Contacto de Venta</div>\r\n        </div>\r\n        <!-- name_sales_contact -->\r\n        <div class=\"col-md-1\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input required type=\"text\" id=\"name_sales_contact\" name=\"name_sales_contact\" [(ngModel)]=\"_model.supplier.sales_contact.name\"\r\n                    matInput placeholder=\"Nombre del contacto de compras\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- phone_sales_contact -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input NumberOnly required type=\"text\" id=\"phone_sales_contact\" name=\"phone_sales_contact\" [(ngModel)]=\"_model.supplier.sales_contact.phone\"\r\n                    matInput placeholder=\"Teléfono del contacto de compras\">\r\n            </mat-form-field>\r\n        </div>\r\n        <!-- email_sales_contact -->\r\n        <div class=\"col-md-6\">\r\n            <mat-form-field class=\"full-width\" class=\"full-width\">\r\n                <input required type=\"text\" id=\"email_sales_contact\" name=\"email_sales_contact\" [(ngModel)]=\"_model.supplier.sales_contact.email\"\r\n                    matInput placeholder=\"Correo electrónico del contacto de compras\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\" [class.btn-action-container]=\"booActive\">\r\n        <button type=\"button\" [disabled]=\"!stakeHolderForm.form.valid\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\r\n            (click)=\"save()\">{{strAction}}</button>\r\n    </div>\r\n</form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders-action/stakeholders-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stakeholders_component__ = __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StakeholdersActionComponent; });
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







var StakeholdersActionComponent = /** @class */ (function (_super) {
    __extends(StakeholdersActionComponent, _super);
    /**
     *
     */
    function StakeholdersActionComponent(loaderService, helperService, snackBar, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.snackBar = snackBar;
        _this.comp = comp;
        _this.dialog = dialog;
        _this._model = {
            stakeholders_info: {},
            comercial_stakeholders_info: {
                codes: {}
            },
            customer: {
                purchases_contact: {},
                debt_contact: {},
                shipping_points: [],
                institutional_sale_contract: [],
                controlled_resolution: [],
                monopoly_resolution: []
            },
            employee: {},
            supplier: {
                bank_accounts: [],
                sales_contact: {}
            },
            profile: {}
        };
        _this.document_number_digit = undefined;
        _this.countries = [];
        _this.departments = [];
        _this.cities = [];
        /**
         * Array para los combos
         */
        _this.tax_regime = [];
        _this.document_type = [];
        _this.document_type_n = [];
        _this.document_type_j = [];
        _this.persons_type = [];
        _this.conditions_payment = [];
        _this.portfolio_type = [];
        _this.sales_representatives = [];
        _this.suppliers_class = [];
        _this.customers_class = [];
        _this.payment_method = [];
        return _this;
    }
    StakeholdersActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        this.getSalesRepresentative();
        if (this.numId !== undefined) {
            this.getDataById();
        }
    };
    StakeholdersActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/collections", ['COUNTRIES', 'TAX_REGIME', 'TYPES_OF_DOCUMENTS', 'PORTFOLIO_TYPE', 'PERSONS_TYPE', 'PAYMENT_CONDITION', 'SUPPLIERS_CLASS', 'CUSTOMERS_CLASS', 'PAYMENT_METHOD']).subscribe(function (rs) {
            var res = rs.json();
            _this.countries = res.COUNTRIES;
            _this.tax_regime = res.TAX_REGIME;
            var document_type = res.TYPES_OF_DOCUMENTS;
            _this.portfolio_type = res.PORTFOLIO_TYPE;
            _this.persons_type = res.PERSONS_TYPE;
            _this.conditions_payment = res.PAYMENT_CONDITION;
            _this.suppliers_class = res.SUPPLIERS_CLASS;
            _this.customers_class = res.CUSTOMERS_CLASS;
            _this.payment_method = res.PAYMENT_METHOD;
            document_type.filter(function (item) { if (item.code !== 'NIT') {
                _this.document_type_n.push(item);
            } });
            document_type.filter(function (item) { if (item.code == 'NIT' || item.code == 'VAT') {
                _this.document_type_j.push(item);
            } });
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    StakeholdersActionComponent.prototype.getSalesRepresentative = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/sales_representatives?all=all").subscribe(function (rs) {
            var res = rs.json();
            _this.sales_representatives = res.data;
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    StakeholdersActionComponent.prototype.getDepartments = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/departamentos?pais_id=" + this.country_id).subscribe(function (rs) {
            var res = rs.json();
            _this.departments = res['departamentos'];
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    StakeholdersActionComponent.prototype.getCities = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/ciudades?departamento_id=" + this.department_id).subscribe(function (rs) {
            var res = rs.json();
            _this.cities = res['ciudades'];
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    StakeholdersActionComponent.prototype.save = function () {
        var _this = this;
        this.loaderService.display(true);
        this._model.country_id = this.country_id;
        this._model.department_id = this.department_id;
        this._model.city_id = this.city_id;
        var formData = new FormData();
        formData.append('data', JSON.stringify(this._model));
        switch (this.strAction) {
            case 'Guardar':
                this.helperService.POSTFORMDATA("/api/stakeholders", formData).subscribe(function (rs) {
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
                this.helperService.POSTFORMDATA("/api/update_stake_holder/" + this.numId, formData).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.update) {
                        _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                    _this.loaderService.display(true);
                });
                break;
            case 'Eliminar':
                this.helperService.DELETE("/api/stakeholders/" + this.numId).subscribe(function (rs) {
                    var res = rs.json();
                    if (res.delete) {
                        _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                        _this.comp.openList();
                    }
                }, function (err) {
                    _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                    _this.loaderService.display(true);
                });
                break;
        }
    };
    StakeholdersActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/stakeholders/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            if (res['data']['comercial_stakeholders_info'] == null) {
                res['data']['comercial_stakeholders_info'] = {
                    codes: {}
                };
            }
            if (res['data']['customer']) {
                if (res['data']['customer']['purchases_contact'] == null) {
                    res['data']['customer']['purchases_contact'] = {};
                }
                if (res['data']['customer']['debt_contact'] == null) {
                    res['data']['customer']['debt_contact'] = {};
                }
            }
            else {
                res['data']['customer'] = {
                    purchases_contact: {},
                    debt_contact: {},
                    shipping_points: [],
                    institutional_sale_contract: [],
                    controlled_resolution: [],
                    monopoly_resolution: []
                };
            }
            _this._model = res['data'];
            _this.selectPersonType(false);
            _this.country_id = res.country_id;
            _this.getDepartments();
            _this.department_id = res.department_id;
            _this.city_id = res.city_id;
            _this.getCities();
            _this.getRutDigit();
            if (!_this._model.comercial_stakeholders_info) {
                _this._model.comercial_stakeholders_info = {
                    codes: {}
                };
            }
            if (!_this._model.customer) {
                _this._model.customer = {
                    purchases_contact: {},
                    debt_contact: {},
                    shipping_points: [],
                    institutional_sale_contract: [],
                    controlled_resolution: []
                };
            }
            if (!_this._model.employee) {
                _this._model.employee = {};
            }
            if (!_this._model.supplier) {
                _this._model.supplier = {
                    bank_accounts: [],
                    sales_contact: {}
                };
            }
        }, function (err) {
            _this.loaderService.display(false);
        });
    };
    StakeholdersActionComponent.prototype.clean = function () {
        this._model = {
            stakeholders_info: {},
            comercial_stakeholders_info: {
                codes: {}
            },
            customer: {
                purchases_contact: {},
                debt_contact: {},
                shipping_points: [],
                institutional_sale_contract: [],
                controlled_resolution: [],
                monopoly_resolution: []
            },
            employee: {},
            supplier: {
                bank_accounts: [],
                sales_contact: {}
            },
            profile: {}
        };
    };
    StakeholdersActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    StakeholdersActionComponent.prototype.openAddSucursal = function () {
        var _this = this;
        this.sucursalDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["a" /* ModalSucursalComponent */], { hasBackdrop: false });
        this.sucursalDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (shipping_point) { return shipping_point; })).subscribe(function (shipping_point) {
            if (shipping_point) {
                _this._model.customer.shipping_points.push(shipping_point);
            }
        });
    };
    StakeholdersActionComponent.prototype.openSucursal = function (data, index) {
        var _this = this;
        var _data = Object.assign({}, data);
        var cloned = Object.assign({}, data);
        this.sucursalDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["a" /* ModalSucursalComponent */], {
            hasBackdrop: false,
            data: _data
        });
        this.sucursalDialogRef.afterClosed().subscribe(function (x) {
            if (x) {
                _this._model.customer.shipping_points[index] = x;
            }
            else {
                data = cloned;
            }
        });
    };
    StakeholdersActionComponent.prototype.removeSucursal = function (obj) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["b" /* ModalConfirmationComponent */], {
            hasBackdrop: false, data: {
                message: 'Desea remover el registro?',
                title: 'Confirmar',
                button_confirm: 'Si',
                button_close: 'No'
            }
        });
        this.confirmDialogRef.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                var index = _this._model.customer.shipping_points.indexOf(obj);
                _this._model.customer.shipping_points.splice(index, 1);
            }
        });
    };
    StakeholdersActionComponent.prototype.removeInstitucionalSale = function (obj) {
        var _this = this;
        this.confirmDialogRef1 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["b" /* ModalConfirmationComponent */], {
            hasBackdrop: false, data: {
                message: 'Desea remover el registro?',
                title: 'Confirmar',
                button_confirm: 'Si',
                button_close: 'No'
            }
        });
        this.confirmDialogRef1.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                var index = _this._model.customer.institutional_sale_contract.indexOf(obj);
                _this._model.customer.institutional_sale_contract.splice(index, 1);
            }
        });
    };
    StakeholdersActionComponent.prototype.removeControlledResolution = function (obj) {
        var _this = this;
        this.confirmDialogRef2 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["b" /* ModalConfirmationComponent */], {
            hasBackdrop: false,
            data: {
                message: 'Desea remover el registro?',
                title: 'Confirmar',
                button_confirm: 'Si',
                button_close: 'No'
            }
        });
        this.confirmDialogRef2.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                var index = _this._model.customer.controlled_resolution.indexOf(obj);
                _this._model.customer.controlled_resolution.splice(index, 1);
            }
        });
    };
    StakeholdersActionComponent.prototype.removeMonopolyResolution = function (obj) {
        var _this = this;
        this.confirmDialogRef3 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["b" /* ModalConfirmationComponent */], {
            hasBackdrop: false,
            data: {
                message: 'Desea remover el registro?',
                title: 'Confirmar',
                button_confirm: 'Si',
                button_close: 'No'
            }
        });
        this.confirmDialogRef3.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                var index = _this._model.customer.monopoly_resolution.indexOf(obj);
                _this._model.customer.monopoly_resolution.splice(index, 1);
            }
        });
    };
    StakeholdersActionComponent.prototype.removeBankAccount = function (obj) {
        var _this = this;
        this.confirmDialogRef4 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["b" /* ModalConfirmationComponent */], {
            hasBackdrop: false,
            data: {
                message: 'Desea remover el registro?',
                title: 'Confirmar',
                button_confirm: 'Si',
                button_close: 'No'
            }
        });
        this.confirmDialogRef4.afterClosed().subscribe(function (confirmation) {
            if (confirmation) {
                var index = _this._model.supplier.bank_accounts.indexOf(obj);
                _this._model.supplier.bank_accounts.splice(index, 1);
            }
        });
    };
    StakeholdersActionComponent.prototype.openAddControlledResolution = function () {
        var _this = this;
        this.resolutionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["c" /* ModalResolutionComponent */], {
            hasBackdrop: false,
            data: {
                shipping_points: this._model.customer.shipping_points,
                title: 'Agregar Resolución de controlado'
            }
        });
        this.resolutionDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (ctr_resolution) { return ctr_resolution; })).subscribe(function (ctr_resolution) {
            _this._model.customer.controlled_resolution.push(ctr_resolution);
        });
    };
    StakeholdersActionComponent.prototype.openControlledResolution = function (data) {
        this.resolutionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["c" /* ModalResolutionComponent */], {
            hasBackdrop: false,
            data: {
                shipping_points: this._model.customer.shipping_points,
                title: 'Agregar Resolución de controlado',
                data: data
            }
        });
    };
    StakeholdersActionComponent.prototype.openAddInstitucionalSale = function () {
        var _this = this;
        this.institutionalSaleDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["d" /* ModalInstitucionalSaleContractComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Agregar Contrato institucional'
            }
        });
        this.institutionalSaleDialogRef
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (institutional_sale_contract) { return institutional_sale_contract; }))
            .subscribe(function (institutional_sale_contract) {
            _this._model.customer.institutional_sale_contract.push(institutional_sale_contract);
        });
    };
    StakeholdersActionComponent.prototype.openInstitucionalSale = function (data, index) {
        var _this = this;
        var _data = Object.assign({}, data);
        var cloned = Object.assign({}, data);
        this.institutionalSaleDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["d" /* ModalInstitucionalSaleContractComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Agregar Contrato institucional',
                data: _data
            }
        });
        this.institutionalSaleDialogRef.afterClosed().subscribe(function (x) {
            if (x) {
                _this._model.customer.institutional_sale_contract[index] = x;
            }
            else {
                data = cloned;
            }
        });
    };
    StakeholdersActionComponent.prototype.openAddMonopolyResolution = function () {
        var _this = this;
        this.resolutionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["c" /* ModalResolutionComponent */], {
            hasBackdrop: false,
            data: {
                shipping_points: this._model.customer.shipping_points,
                title: 'Agregar Resolución de monopolio'
            }
        });
        this.resolutionDialogRef.afterClosed().pipe().subscribe(function (data) {
            if (data) {
                _this._model.customer.monopoly_resolution.push(data);
            }
            console.log(data);
        });
    };
    StakeholdersActionComponent.prototype.openMonopolyResolution = function (data, index) {
        var _this = this;
        var _data = Object.assign({}, data);
        var cloned = Object.assign({}, data);
        this.resolutionDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["c" /* ModalResolutionComponent */], {
            hasBackdrop: false,
            data: {
                shipping_points: this._model.customer.shipping_points,
                title: 'Agregar Resolución de monopolio',
                data: _data
            }
        });
        this.resolutionDialogRef.afterClosed().subscribe(function (x) {
            if (x) {
                _this._model.customer.monopoly_resolution[index] = x;
            }
            else {
                data = cloned;
            }
        });
    };
    StakeholdersActionComponent.prototype.openAddBankAccount = function () {
        var _this = this;
        this.bankAccountDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["e" /* ModalBankAccountComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Cuenta bancaria'
            }
        });
        this.bankAccountDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["filter"])(function (bank_account) { return bank_account; })).subscribe(function (bank_account) {
            _this._model.supplier.bank_accounts.push(bank_account);
        });
    };
    StakeholdersActionComponent.prototype.openBankAccount = function (data, index) {
        var _this = this;
        var _data = Object.assign({}, data);
        var cloned = Object.assign({}, data);
        this.bankAccountDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modals__["e" /* ModalBankAccountComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Cuenta bancaria',
                data: _data
            }
        });
        this.bankAccountDialogRef.afterClosed().subscribe(function (x) {
            if (x) {
                _this._model.supplier.bank_accounts[index] = x;
            }
            else {
                data = cloned;
            }
        });
    };
    StakeholdersActionComponent.prototype.zero_fill = function (i_valor, num_ceros) {
        var relleno = '';
        var i = 1;
        var salir = 0;
        while (!salir) {
            var total_caracteres = i_valor.length + i;
            if (i > num_ceros || total_caracteres > num_ceros) {
                salir = 1;
            }
            else {
                relleno = relleno + "0";
            }
            i++;
        }
        i_valor = relleno + i_valor;
        return i_valor;
    };
    StakeholdersActionComponent.prototype.getRutDigit = function () {
        if (this._model.stakeholders_info.document_type_id == 14 || this._model.stakeholders_info.rut) {
            var i_rut = this._model.stakeholders_info.document_number;
            var pesos = [71, 67, 59, 53, 47, 43, 41, 37, 29, 23, 19, 17, 13, 7, 3];
            var rut_fmt = this.zero_fill(i_rut, 15);
            var suma = 0;
            var digitov = void 0;
            for (var i = 0; i <= 14; i++) {
                suma += rut_fmt.substring(i, i + 1) * pesos[i];
            }
            var resto = suma % 11;
            if (resto === 0 || resto === 1) {
                digitov = resto;
            }
            else {
                digitov = 11 - resto;
            }
            this.document_number_digit = digitov;
        }
        else {
            this.document_number_digit = undefined;
        }
    };
    StakeholdersActionComponent.prototype.selectPersonType = function (est) {
        if (est === void 0) { est = true; }
        if (est) {
            this._model.stakeholders_info.rut = false;
            this._model.stakeholders_info.document_type_id = undefined;
        }
        if (this._model.stakeholders_info.person_type_id == 39) {
            this.document_type = this.document_type_j;
        }
        else {
            this.document_type = this.document_type_n;
        }
    };
    StakeholdersActionComponent.prototype.changeDocumentType = function () {
        this._model.stakeholders_info.rut = false;
    };
    var _a, _b, _c, _d, _e;
    StakeholdersActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'stakeholders-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders-action/stakeholders-action.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__stakeholders_component__["a" /* StakeholdersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stakeholders_component__["a" /* StakeholdersComponent */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatDialog */]) === "function" ? _e : Object])
    ], StakeholdersActionComponent);
    return StakeholdersActionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__bases_base_model__["a" /* BaseModel */]));

//# sourceMappingURL=stakeholders-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders-list/stakeholders-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"!noaction\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <!-- <th class=\"noAuto\" (click)=\"sort('i.id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='i.id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th (click)=\"sort('firstname')\">Nombre\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='firstname'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('document_number')\">Número de documento\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n\n                        <th (click)=\"sort('c.value')\">Ubicación\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='c.value'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('i.status')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='i.status'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                        <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">\n                        <td *ngIf=\"item.person_type_id === 38\">{{ item.name }}</td>\n                        <td *ngIf=\"item.person_type_id === 39\">{{ item.legalname }}</td>\n                        <td>{{ item.document_number }}</td>\n                        <td>{{ item.country }}<span *ngIf=\"item.department\">, {{ item.department }}</span><span *ngIf=\"item.department\">, {{ item.city }}</span></td>\n                        <td>{{ item.status ? 'Activo' : 'Inactivo' }}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"6\" [rotate]=\"true\"\n            [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders-list/stakeholders-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stakeholders_component__ = __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StakeholdersListComponent; });
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






var StakeholdersListComponent = /** @class */ (function (_super) {
    __extends(StakeholdersListComponent, _super);
    function StakeholdersListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        _this.urlApi = '/api/stakeholders';
        return _this;
    }
    StakeholdersListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    StakeholdersListComponent.prototype.CUD = function (action, row) {
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], StakeholdersListComponent.prototype, "select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
        __metadata("design:type", Boolean)
    ], StakeholdersListComponent.prototype, "noaction", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
        __metadata("design:type", String)
    ], StakeholdersListComponent.prototype, "type", void 0);
    StakeholdersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'stakeholders-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders-list/stakeholders-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__stakeholders_component__["a" /* StakeholdersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__stakeholders_component__["a" /* StakeholdersComponent */]) === "function" ? _d : Object])
    ], StakeholdersListComponent);
    return StakeholdersListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=stakeholders-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Terceros</h1>\n        </div>\n        <p class=\"hero-tagline\">A través de esta opción, usted podrá crear los clientes, proveedores, vendedores y empleados</p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <stakeholders-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></stakeholders-action-cmp>\n                    <stakeholders-list-cmp *ngIf=\"isOpenList\"></stakeholders-list-cmp>\n                </div>               \n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StakeholdersComponent; });
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


var StakeholdersComponent = /** @class */ (function (_super) {
    __extends(StakeholdersComponent, _super);
    function StakeholdersComponent() {
        return _super.call(this) || this;
    }
    StakeholdersComponent.prototype.ngOnInit = function () { };
    StakeholdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'stakeholders-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], StakeholdersComponent);
    return StakeholdersComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=stakeholders.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/stakeholders/stakeholders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stakeholders_component__ = __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stakeholders_action_stakeholders_action_component__ = __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders-action/stakeholders-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stakeholders_list_stakeholders_list_component__ = __webpack_require__("../../../../../src/app/smartity/stakeholders/stakeholders-list/stakeholders-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholdersModule", function() { return StakeholdersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__stakeholders_component__["a" /* StakeholdersComponent */] }];
var StakeholdersModule = /** @class */ (function () {
    function StakeholdersModule() {
    }
    StakeholdersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialogModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__stakeholders_component__["a" /* StakeholdersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stakeholders_action_stakeholders_action_component__["a" /* StakeholdersActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stakeholders_list_stakeholders_list_component__["a" /* StakeholdersListComponent */]
            ]
        })
    ], StakeholdersModule);
    return StakeholdersModule;
}());

//# sourceMappingURL=stakeholders.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map