webpackJsonp([7],{

/***/ "../../../../../src/app/smartity/product/product-action/product-action.component.html":
/***/ (function(module, exports) {

module.exports = "<form #productForm=\"ngForm\" autocomplete=\"off\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12 margin-bottom\">\n            <button type=\"button\" mat-raised-button color=\"secundary\" (click)=\"goList()\" class=\"btn-w-md no-margin-left\">Regresar</button>\n        </div>\n\n        <!-- state -->\n        <div class='col-sm-12 margin-bottom'>\n            <div class=\"flex\">\n                <span class=\"flex-spacer\"></span>\n                <mat-slide-toggle [labelPosition]=\"'before'\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\">Estado</mat-slide-toggle>\n            </div>\n        </div>\n\n        <!--product type -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n            <mat-select class=\"full-width\" placeholder=\"Tipo de producto\" [(ngModel)]=\"model.product_type_id\" name=\"product_type_id\"\n                id=\"product_profile_id\">\n                <mat-option *ngFor=\"let item of product_type\" [value]=\"item.id\">{{item.value}}</mat-option>\n            </mat-select>\n                </mat-form-field>\n        </div>\n\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n                    <input type=\"text\" id=\"sku\" name=\"sku\" [(ngModel)]=\"model.sku\" matInput placeholder=\"PLU\">\n                </mat-form-field>\n            </div>\n\n\n        <!-- medicamentos -->\n        <div class=\"col-sm-12 margin-bottom\" *ngIf=\"model.product_type_id == 30\">\n            <div class=\"flex margin-bottom\">\n                <div class=\"box-header no-padding-h\">Medicamento asociado</div>\n                <span class=\"flex-spacer\"></span>\n                <button *ngIf=\"model.product_detail.pharmaceuticaldrug == null\" type=\"button\" type=\"button\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left\" (click)=\"openAddPharmadrug()\">Añadir</button>\n            </div>\n            <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n                <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Vía Administración</th>\n                            <th>Forma Farmaceutica</th>\n                            <th class=\"w-40\"></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngIf=\"model.product_detail.pharmaceuticaldrug != null || model.product_detail.pharmaceuticaldrug != undefined\">\n                            <td>{{ model.product_detail.pharmaceuticaldrug.name || \"\" }}</td>\n                            <td>{{ model.product_detail.pharmaceuticaldrug.routes_administration.value || \"\" }}</td>\n                            <td>{{ model.product_detail.pharmaceuticaldrug.dosage_form.value || \"\" }}</td>\n                            <td class=\"w-40\">\n                                <button type=\"button\" type=\"button\" mat-icon-button (click)=\"removePharmaceutical()\">\n                                    <mat-icon>delete</mat-icon>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n         <!--description-->\n         <div class='col-sm-12 col-md-12 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n                    <textarea type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" matInput placeholder=\"Descripción\"></textarea>\n                </mat-form-field>\n            </div>\n\n        <!-- comercial -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-slide-toggle [labelPosition]=\"'after'\" id=\"comercial\" name=\"comercial\" [(ngModel)]=\"model.comercial\" (change)=\"model.comercial_name = model.comercial ? model.comercial_name : ''\">Comercial</mat-slide-toggle>\n        </div>\n\n        <!-- comercial_name -->\n        <div class='col-sm-12 col-md-4 margin-bottom' *ngIf=\"model.comercial\">\n            <mat-form-field class=\"full-width\">\n                <input type=\"text\" id=\"comercial_name\" name=\"comercial_name\" [(ngModel)]=\"model.comercial_name\" matInput placeholder=\"Nombre comercial\">\n            </mat-form-field>\n        </div>\n\n        <!-- content_unit_id -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n            <mat-select class=\"full-width\" placeholder=\"Unidad de contenido\" [(ngModel)]=\"model.product_detail.content_unit_id\" name=\"content_unit_id\"\n                id=\"content_unit_id\">\n                <mat-option *ngFor=\"let i of content_unit\" [value]=\"i.id\">{{i.value}}</mat-option>\n            </mat-select>\n                </mat-form-field>\n        </div>\n\n        <span class=\"col-sm-12\"></span>\n\n        <!-- units -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input NumberOnly required type=\"text\" id=\"units\" name=\"units\" [(ngModel)]=\"model.units\" matInput placeholder=\"Unidades\">\n            </mat-form-field>\n        </div>\n\n        <!-- delivery_fraction -->\n        <div class='col-sm-12 col-md-1 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"delivery_fraction\" name=\"delivery_fraction\" [(ngModel)]=\"model.product_detail.delivery_fraction\" matInput\n                    placeholder=\"Fracción de entrega\">\n            </mat-form-field>\n        </div>\n\n        <!-- cum_code -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"cum_invima_file_record\" name=\"cum_invima_file_record\" [(ngModel)]=\"model.product_detail.invima_file_record\" matInput placeholder=\"CUMS Expediente\">\n            </mat-form-field>\n        </div>\n        <!-- cum_code -->\n        <div class='col-sm-12 col-md-1 margin-bottom'>\n                <mat-form-field class=\"full-width\">\n                    <input required type=\"text\" id=\"cum_invima_file_record_consecutive\" name=\"cum_invima_file_record_consecutive\" [(ngModel)]=\"model.product_detail.invima_file_record_consecutive\" matInput placeholder=\"Consecutivo\">\n                </mat-form-field>\n            </div>\n\n        <!-- barcode -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input type=\"text\" id=\"barcode\" name=\"barcode\" [(ngModel)]=\"model.barcode\" matInput placeholder=\"Código de barras\">\n            </mat-form-field>\n        </div>\n\n        <!--lifetime -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"pickerLifetime\" id=\"lifetime\" name=\"lifetime\" placeholder=\"Vida util\" [(ngModel)]=\"model.lifetime\">\n                <!-- <button type=\"button\" mdSuffix [matDatepicker]=\"pickerLifetime\"></button> -->\n            </mat-form-field>\n            <mat-datepicker #pickerLifetime></mat-datepicker>\n        </div>\n\n        <span class=\"col-sm-12\"></span>\n\n        <!-- institutional_use -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-slide-toggle [labelPosition]=\"after\" id=\"institutional_use\" name=\"institutional_use\" [(ngModel)]=\"model.institutional_use\">Uso institucional</mat-slide-toggle>\n        </div>\n\n        <!-- serials_control -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-slide-toggle [labelPosition]=\"after\" id=\"batch_control\" name=\"serials_control\" [(ngModel)]=\"model.serials_control\">Controla serial</mat-slide-toggle>\n        </div>\n\n        <!-- batch_control -->\n        <div class='col-sm-12 col-md-4 margin-bottom'>\n            <mat-slide-toggle [labelPosition]=\"after\" id=\"batch_control\" name=\"batch_control\" [(ngModel)]=\"model.batch_control\">Controla lotes</mat-slide-toggle>\n        </div>\n\n        <!-- titular registro sanitario -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input readonly matInput type=\"text\" placeholder=\"Titular registro sanitario\" [(ngModel)]=\"sanitary_registration_holder.businessname\"\n                    id=\"sanitary_registration_holder\" name=\"sanitary_registration_holder\" />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openAddSanitaryRegistration()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n\n        <!-- sanitary_registration -->\n        <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input required type=\"text\" id=\"sanitary_registration\" name=\"sanitary_registration\" [(ngModel)]=\"model.product_detail.sanitary_registration\"\n                    matInput placeholder=\"Registro sanitario\">\n            </mat-form-field>\n        </div>\n\n        <!-- validity_sanitary_registration -->\n        <!-- <div class='col-sm-12 col-md-3 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input matInput [matDatepicker]=\"picker\" id=\"validity_sanitary_registration\" name=\"validity_sanitary_registration\" placeholder=\"Vigencia de registro sanitario\"\n                    [(ngModel)]=\"model.product_detail.validity_sanitary_registration\"> -->\n                <!-- <button type=\"button\" mdSuffix [matDatepicker]=\"picker\"></button> -->\n            <!-- </mat-form-field>\n            <mat-datepicker #picker></mat-datepicker>\n        </div> -->\n\n        <div class=\"col-md-3 margin-bottom\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"pickerValiditySanitaryRegistration\" placeholder=\"Vigencia de registro sanitario\"\n                    [(ngModel)]=\"model.product_detail.validity_sanitary_registration\" name=\"validity_sanitary_registration\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerValiditySanitaryRegistration\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerValiditySanitaryRegistration></mat-datepicker>\n            </mat-form-field>\n        </div>\n\n        <!-- proveedor\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input required readonly matInput type=\"text\" placeholder=\"Proveedor\" [(ngModel)]=\"supplier.businessname\" id=\"supplier\" name=\"supplier\"/>\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openAddSupplier()\">search</mat-icon>\n            </mat-form-field>\n        </div> -->\n\n        <!-- fabricante -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input readonly matInput type=\"text\" placeholder=\"Fabricante\" [(ngModel)]=\"manufacturer.businessname\" id=\"manufacturer\"\n                    name=\"manufacturer\" />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openAddMaker()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n\n        <!-- Laboratorio -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input required readonly matInput type=\"text\" placeholder=\"Laboratorio\" [(ngModel)]=\"laboratory\" id=\"laboratory\"\n                    name=\"laboratory\" />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"addLaboratory()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n\n        <!-- importador -->\n        <div class=\"col-sm-12 col-md-6 margin-bottom\">\n            <mat-form-field class=\"full-width\">\n                <input readonly matInput type=\"text\" placeholder=\"Importador\" [(ngModel)]=\"importer.businessname\" id=\"importer\" name=\"importer\"\n                />\n                <mat-icon matSuffix mdSuffix class=\"wh-24 pointer\" (click)=\"openAddImporter()\">search</mat-icon>\n            </mat-form-field>\n        </div>\n\n        <!-- security_time -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input NumberOnly type=\"text\" id=\"security_time\" name=\"security_time\" [(ngModel)]=\"model.security_time\" matInput\n                    placeholder=\"Tiempo de seguridad\">\n            </mat-form-field>\n        </div>\n\n        <!-- covered_period -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input NumberOnly type=\"text\" id=\"covered_period\" name=\"covered_period\" [(ngModel)]=\"model.covered_period\" matInput\n                    placeholder=\"Periodo de cubrimiento\">\n            </mat-form-field>\n        </div>\n\n        <!-- replacment_time -->\n        <div class='col-sm-12 col-md-6 margin-bottom'>\n            <mat-form-field class=\"full-width\">\n                <input NumberOnly type=\"text\" id=\"replacment_time\" name=\"replacment_time\" [(ngModel)]=\"model.replacment_time\" matInput\n                    placeholder=\"Tiempo de reposición\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <button type=\"button\" [disabled]=\"!productForm.form.valid\" mat-raised-button color=\"primary\" class=\"btn-w-md no-margin-left btn-right\"\n                (click)=\"save()\">{{strAction}}</button>\n        </div>\n\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/smartity/product/product-action/product-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_component__ = __webpack_require__("../../../../../src/app/smartity/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bases_base_model__ = __webpack_require__("../../../../../src/app/smartity/bases/base-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals__ = __webpack_require__("../../../../../src/app/smartity/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActionComponent; });
/* unused harmony export APP_DATE_FORMATS */
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









var ProductActionComponent = /** @class */ (function (_super) {
    __extends(ProductActionComponent, _super);
    function ProductActionComponent(loaderService, helperService, snackBar, route, router, comp, dialog) {
        var _this = _super.call(this) || this;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.snackBar = snackBar;
        _this.route = route;
        _this.router = router;
        _this.comp = comp;
        _this.dialog = dialog;
        _this.content_unit = [];
        _this.product_type = [];
        _this.sanitary_registration_holder = {};
        _this.supplier = {};
        _this.manufacturer = {};
        _this.laboratory = '';
        _this.importer = {};
        return _this;
    }
    ProductActionComponent.prototype.ngOnInit = function () {
        this.clean();
        this.getCollection();
        if (this.numId !== undefined) {
            this.getDataById();
        }
    };
    ProductActionComponent.prototype.getCollection = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.POST("/api/collections", ['CONTENT_UNIT', 'PRODUCT_TYPE']).subscribe(function (rs) {
            var res = rs.json();
            _this.content_unit = res.CONTENT_UNIT;
            _this.product_type = res.PRODUCT_TYPE;
            _this.loaderService.display(false);
        }, function (err) {
            _this.loaderService.display(false);
        });
    };
    ProductActionComponent.prototype.save = function () {
        var _this = this;
        var product_name = this.model.product_detail.pharmaceuticaldrug.name + ' - ' + this.laboratory;
        this.model.name = product_name;
        this.model.product_detail.name = product_name;
        if (this.model.product_detail.pharmaceuticaldrug === undefined) {
            this.model.product_detail.pharmaceuticaldrug = {};
        }
        if (this.model.product_detail.pharmaceuticaldrug == null && this.model.product_profile_id == 30) {
            this.snackBar.open('Seleccione por lo menos un medicamento', 'Error', { duration: 4000 });
        }
        else {
            this.loaderService.display(true);
            this.model.product_detail.pharmaceutical_drug_id = this.model.product_detail.pharmaceuticaldrug.id;
            switch (this.strAction) {
                case 'Guardar':
                    this.helperService.POST("/api/product", this.model).subscribe(function (rs) {
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
                    this.helperService.PUT("/api/product/" + this.numId, this.model).subscribe(function (rs) {
                        // const res = rs.text();
                        // console.log(res);
                        var res = rs.json();
                        if (res.update) {
                            _this.snackBar.open(res.message, 'Actualización', { duration: 4000 });
                            _this.comp.openList();
                        }
                    }, function (err) {
                        _this.snackBar.open(err.message, 'Actualización', { duration: 4000 });
                        _this.loaderService.display(false);
                    });
                    break;
                case 'Eliminar':
                    this.helperService.DELETE("/api/product/" + this.numId).subscribe(function (rs) {
                        var res = rs.json();
                        if (res.delete) {
                            _this.snackBar.open(res.message, 'Eliminación', { duration: 4000 });
                            _this.comp.openList();
                        }
                    }, function (err) {
                        _this.snackBar.open(err.message, 'Eliminación', { duration: 4000 });
                        _this.loaderService.display(false);
                    });
                    break;
            }
        }
    };
    ProductActionComponent.prototype.getDataById = function () {
        var _this = this;
        this.loaderService.display(true);
        this.helperService.GET("/api/product/" + this.numId).subscribe(function (rs) {
            var res = rs.json();
            _this.model = res['data'];
            // this.model.product_detail.pharmaceuticaldrug = this.model.product_detail.pharmaceuticaldrug != null ? JSON.parse(this.model.product_detail.pharmaceuticaldrug) : [];
            _this.importer = res['data']['importer'] || {};
            _this.sanitary_registration_holder = res['data']['product_detail']['sanitary_registration_holder'] || {};
            _this.supplier = res['data']['supplier'] || {};
            if (_this.supplier.businessname == '') {
                _this.supplier.businessname = _this.supplier.fullname;
            }
            _this.manufacturer = res['data']['manufacturer'] || {};
            _this.laboratory = res['data']['laboratory_name'] || {};
            _this.loaderService.display(false);
        }, function (err) {
            console.log(err);
            _this.loaderService.display(false);
        });
    };
    ProductActionComponent.prototype.clean = function () {
        this.model = { "product_detail": {} };
        this.model.batch_control = false;
        this.model.serials_control = false;
        this.model.institutional_use = false;
        this.model.comercial = false;
        this.model.is_regulated = false;
        this.model.state = true;
        this.model.comercial_name = '';
        this.model.product_detail.pharmaceuticaldrug = null;
    };
    ProductActionComponent.prototype.goList = function () {
        this.comp.openList();
    };
    ProductActionComponent.prototype.openAddPharmadrug = function () {
        var _this = this;
        this.pharmaceuticalDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["f" /* ModalPharmaceuticalComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Medicamentos'
            }
        });
        this.pharmaceuticalDialogRef
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (pharmaceuticalDrug) { return pharmaceuticalDrug; }))
            .subscribe(function (pharmaceuticalDrug) {
            _this.model.product_detail.pharmaceuticaldrug = pharmaceuticalDrug;
        });
    };
    ProductActionComponent.prototype.addLaboratory = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Laboratorio',
                option: '7'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            // if (stakeHolder.businessname == '') { stakeHolder.businessname = stakeHolder.name; }
            _this.laboratory = stakeHolder['fullname'];
            _this.model.product_detail.laboratory_id = stakeHolder.stk_id;
        });
    };
    ProductActionComponent.prototype.removePharmaceutical = function () {
        this.model.product_detail.pharmaceuticaldrug = null;
    };
    ProductActionComponent.prototype.openAddSanitaryRegistration = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Titular registro sanitario',
                option: '6'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.sanitary_registration_holder = stakeHolder;
            _this.model.sanitary_registration_holder_id = stakeHolder.id;
        });
    };
    ProductActionComponent.prototype.openAddSupplier = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Proveedores',
                option: '2'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.supplier = stakeHolder;
            _this.model.supplier_id = stakeHolder.id;
        });
    };
    ProductActionComponent.prototype.openAddMaker = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Fabricantes',
                option: '4'
            }
        });
        this.modalStakeHolderDialogRef
            .afterClosed()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; }))
            .subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.manufacturer = stakeHolder;
            _this.model.manufacturer_id = stakeHolder.id;
        });
    };
    ProductActionComponent.prototype.openAddImporter = function () {
        var _this = this;
        this.modalStakeHolderDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modals__["t" /* ModalStakeholderComponent */], {
            hasBackdrop: false,
            data: {
                title: 'Importador',
                option: '5'
            }
        });
        this.modalStakeHolderDialogRef.afterClosed().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (stakeHolder) { return stakeHolder; })).subscribe(function (stakeHolder) {
            if (stakeHolder.businessname == '') {
                stakeHolder.businessname = stakeHolder.name;
            }
            _this.importer = stakeHolder;
            _this.model.importer_id = stakeHolder.id;
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    ProductActionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'product-action-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/product/product-action/product-action.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__product_component__["a" /* ProductComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_component__["a" /* ProductComponent */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatDialog */]) === "function" ? _g : Object])
    ], ProductActionComponent);
    return ProductActionComponent;
}(__WEBPACK_IMPORTED_MODULE_6__bases_base_model__["a" /* BaseModel */]));

var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
//# sourceMappingURL=product-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIST -->\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Buscar\" [(ngModel)]=\"search\" (keydown)=\"enter($event)\">\n            <div style=\"width: 34px\" class=\"input-group-addon\">\n                <a style=\"cursor:pointer\" (click)=\"getAll()\">\n                    <i class=\"fa fa-search\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <button *ngIf=\"actions[0].status\" mat-raised-button (click)=\"CUD('Guardar')\" color=\"primary\" class=\"btn-w-md no-margin-left btn-right\">\n            <mat-icon>add_circle_outline</mat-icon> Nuevo\n        </button>\n    </div>\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"box box-default table-box table-responsive mdl-shadow--2dp\">\n\n            <table class=\"mdl-data-table table-bordered table-striped cf no-margin\">\n                <thead>\n                    <tr>\n                        <!-- <th class=\"noAuto\" (click)=\"sort('id')\">ID\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <!-- <th (click)=\"sort('barcode')\">Código de barras\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='barcode'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th> -->\n                        <th (click)=\"sort('sku')\">PLU\n                                <span class=\"glyphicon sort-icon\"></span>\n                        </th>\n                        <!-- <th>Cums\n                                <span class=\"glyphicon sort-icon\"></span>\n                        </th> -->\n                        <th (click)=\"sort('name')\">Nombre\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='comercial_name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('product_type_id')\">Tipo de Producto\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='state'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th (click)=\"sort('state')\">Estado\n                            <span class=\"glyphicon sort-icon\" *ngIf=\"key =='state'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span>\n                        </th>\n                        <th *ngIf=\"actions[2].status\" class=\"w-40\"></th>\n                        <th *ngIf=\"actions[3].status\" class=\"w-40\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of list.data\">                        \n                        <td>{{item.sku}}</td>\n                        <td >{{ item.display_name }} <span style=\"font-weight:bold;\" *ngIf=\"item.comercial\">({{item.comercial_name}})</span></td>\n                        <td>{{item.product_type.value}}</td>\n                        <td>{{ item.state ? 'Activo' : 'Inactivo' }}</td>\n                        <td *ngIf=\"actions[2].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-primary\" (click)=\"CUD('Actualizar',item)\">\n                                <mat-icon>mode_edit</mat-icon>\n                            </button>\n                        </td>\n                        <td *ngIf=\"actions[3].status\" class=\"w-40\">\n                            <button type=\"button\" mat-icon-button class=\"text-danger\" (click)=\"CUD('Eliminar',item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n        <ngb-pagination [pageSize]=\"pageSize\" [collectionSize]=\"paginationSize\" [(page)]=\"advancedPagination\" [maxSize]=\"6\" [rotate]=\"true\"\n            [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getAll()\"></ngb-pagination>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/smartity/product/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bases_base_list__ = __webpack_require__("../../../../../src/app/smartity/bases/base-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_component__ = __webpack_require__("../../../../../src/app/smartity/product/product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
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






var ProductListComponent = /** @class */ (function (_super) {
    __extends(ProductListComponent, _super);
    function ProductListComponent(router, loaderService, helperService, comp) {
        var _this = _super.call(this, loaderService, helperService) || this;
        _this.router = router;
        _this.loaderService = loaderService;
        _this.helperService = helperService;
        _this.comp = comp;
        _this.urlApi = '/api/product';
        return _this;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ProductListComponent.prototype.CUD = function (action, row) {
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
    ProductListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'product-list-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/product/product-list/product-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LoaderService */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* HelperService */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__product_component__["a" /* ProductComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_component__["a" /* ProductComponent */]) === "function" ? _d : Object])
    ], ProductListComponent);
    return ProductListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__bases_base_list__["a" /* BaseList */]));

//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n    <section class=\"hero\">\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Productos</h1>\n        </div>\n        <p class=\"hero-tagline\">A través de esta opción, usted podrá crear los productos de las cuales son necesarias para...</p>\n    </section>\n    <article class=\"article padding-lg-v article-dark article-bordered\">\n        <div class=\"container-fluid with-maxwidth\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                    <product-action-cmp *ngIf=\"isOpenActions\" [numId]=\"id\" [strAction]=\"strAction\"></product-action-cmp>\n                    <product-list-cmp *ngIf=\"isOpenList\"></product-list-cmp>\n                </div>               \n            </div>\n        </div>\n    </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/smartity/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bases_base__ = __webpack_require__("../../../../../src/app/smartity/bases/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
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


var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        return _super.call(this) || this;
    }
    ProductComponent.prototype.ngOnInit = function () { };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'product-cmp',
            template: __webpack_require__("../../../../../src/app/smartity/product/product.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}(__WEBPACK_IMPORTED_MODULE_1__bases_base__["a" /* Base */]));

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/smartity/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_component__ = __webpack_require__("../../../../../src/app/smartity/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_action_product_action_component__ = __webpack_require__("../../../../../src/app/smartity/product/product-action/product-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/smartity/product/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__product_component__["a" /* ProductComponent */] }];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatRippleModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_action_product_action_component__["a" /* ProductActionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_list_product_list_component__["a" /* ProductListComponent */]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map