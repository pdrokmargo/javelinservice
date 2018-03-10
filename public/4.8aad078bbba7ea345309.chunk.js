webpackJsonp([4],{1401:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"ProductModule",function(){return v});var t=r(6),i=r(2),o=r(29),d=r(44),c=r(278),a=r(1415),l=r(592),s=r(1436),m=r(1437),p=r(50),u=[{path:"",component:a.a}],v=function(){function ProductModule(){}return ProductModule=t.a([r.i(i.NgModule)({imports:[o.CommonModule,d.g.forChild(u),c.a,l.a.forRoot(),p.g,p.a],declarations:[a.a,s.a,m.a]})],ProductModule)}()},1415:function(n,e,r){"use strict";r.d(e,"a",function(){return d});var t=r(6),i=r(2),o=r(594),d=function(n){function ProductComponent(){return n.call(this)||this}return t.c(ProductComponent,n),ProductComponent.prototype.ngOnInit=function(){},ProductComponent=t.a([r.i(i.Component)({selector:"product-cmp",template:r(1469),styles:[]}),t.b("design:paramtypes",[])],ProductComponent)}(o.a)},1436:function(n,e,r){"use strict";r.d(e,"a",function(){return u});var t=r(6),i=r(2),o=r(144),d=(r.n(o),r(50)),c=r(44),a=r(63),l=r(1415),s=r(593),m=r(596),p=r(595),u=(r.n(p),function(n){function ProductActionComponent(e,r,t,i,o,d,c){var a=n.call(this)||this;return a.loaderService=e,a.helperService=r,a.snackBar=t,a.route=i,a.router=o,a.comp=d,a.dialog=c,a.action_active=!1,a.str_action="Guardar",a.content_unit=[],a.product_type=[],a.makers=[],a.importers=[],a.suppliers=[],a.healthrecordholder=[],a}return t.c(ProductActionComponent,n),ProductActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),this.getMaker(),this.getImporter(),this.getSupplier(),this.getHealthRecordHolder(),null!=this.numId&&""!==this.numId?(this.str_action="Actualizar",this.getDataById()):this.str_action="Guardar"},ProductActionComponent.prototype.getCollection=function(){var n=this;this.loaderService.display(!0),this.helperService.POST("/api/collections",["CONTENT_UNIT","PRODUCT_TYPE"]).map(function(e){var r=e.json();n.content_unit=r.CONTENT_UNIT,n.product_type=r.PRODUCT_TYPE}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.getMaker=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/maker").map(function(e){var r=e.json();n.makers=r.data}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.getImporter=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/importer").map(function(e){var r=e.json();n.importers=r.data}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.getSupplier=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/supplier").map(function(e){var r=e.json();n.suppliers=r.data}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.getHealthRecordHolder=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/healthrecordholder").map(function(e){var r=e.json();n.healthrecordholder=r.data}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.save=function(){var n=this;this.model.id>0?(this.loaderService.display(!0),this.helperService.PUT("/api/product/"+this.numId,this.model).map(function(e){var r=e.json();"success"===r.status&&(n.snackBar.open(r.message,"Actualización",{duration:3500}),n.comp.openList())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})):(this.loaderService.display(!0),this.helperService.POST("/api/product",this.model).map(function(e){var r=e.json();"success"===r.status&&(n.snackBar.open(r.message,"Guardado",{duration:3500}),n.clean())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)}))},ProductActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/product/"+this.numId).map(function(e){var r=e.json();n.model=r.data}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},ProductActionComponent.prototype.clean=function(){this.model={},this.model.pharmaceutical_drugs=[],this.model.batch_control=!1,this.model.serials_control=!1,this.model.institutional_use=!1,this.model.comercial=!1,this.model.is_regulated=!1,this.model.state=!0},ProductActionComponent.prototype.goList=function(){this.comp.openList()},ProductActionComponent.prototype.openAddBankAccount=function(){var n=this;this.pharmaceuticalDialogRef=this.dialog.open(m.f,{hasBackdrop:!1,data:{title:"Medicamentos"}}),this.pharmaceuticalDialogRef.afterClosed().pipe(r.i(p.filter)(function(n){return n})).subscribe(function(e){n.model.pharmaceutical_drugs.push(e)})},ProductActionComponent.prototype.removePharmaceutical=function(n){var e=this.model.pharmaceutical_drugs.indexOf(n);this.model.pharmaceutical_drugs.splice(e,1)},ProductActionComponent=t.a([r.i(i.Component)({selector:"product-action-cmp",template:r(1467),styles:[]}),t.b("design:paramtypes",[a.a,a.b,d.c,c.b,c.a,l.a,d.f])],ProductActionComponent)}(s.a))},1437:function(n,e,r){"use strict";r.d(e,"a",function(){return s});var t=r(6),i=r(2),o=r(144),d=(r.n(o),r(44)),c=r(279),a=r(63),l=r(1415),s=function(n){function ProductListComponent(e,r,t,i){var o=n.call(this,r,t)||this;return o.router=e,o.loaderService=r,o.helperService=t,o.comp=i,o.urlApi="/api/product",o}return t.c(ProductListComponent,n),ProductListComponent.prototype.ngOnInit=function(){this.getAll()},ProductListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id=0},ProductListComponent.prototype.view=function(n){this.comp.openActions(),this.comp.id=n.id},ProductListComponent=t.a([r.i(i.Component)({selector:"product-list-cmp",template:r(1468),styles:[]}),t.b("design:paramtypes",[d.a,a.a,a.b,l.a])],ProductListComponent)}(c.a)},1467:function(n,e){n.exports='\x3c!-- FORM --\x3e\r\n\r\n<form #productForm="ngForm" autocomplete="off">\r\n\r\n    <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n        <button md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n        \x3c!-- name --\x3e\r\n        <div class=\'col-sm-12 col-md-6\'>\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre">\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!--product type --\x3e\r\n        <div class=\'col-sm-12 col-md-6\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Tipo de producto" [(ngModel)]="model.product_profile_id" name="product_profile_id"\r\n                    id="product_profile_id">\r\n                    <md-option *ngFor="let item of product_type" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-12">\r\n            <article class="article">\r\n                <div class="col-sm-12">\r\n                    <div class="col-sm-6">\r\n                        <div class="box-header no-padding-h">Medicamentos</div>\r\n                    </div>\r\n                    <div class="col-sm-6">\r\n                        <button md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="openAddBankAccount()">Añadir</button>\r\n                    </div>\r\n                </div>\r\n                <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n                    <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Nombre</th>\r\n                                <th>Concentración</th>\r\n                                <th colspan="2"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor="let item of model.pharmaceutical_drugs">\r\n                                <td>{{ item.name }}</td>\r\n                                <td>{{ item.concentration }}</td>\r\n                                <td class="text-center" title="Remover">\r\n                                    <a style="cursor: pointer;" class="text-danger" (click)="removePharmaceutical(item)">\r\n                                        <i class="fa fa-trash fa-2x"></i>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </article>\r\n        </div>\r\n\r\n        \x3c!-- description --\x3e\r\n        <div class=\'col-sm-12 col-md-12\'>\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción">\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- comercial_name --\x3e\r\n        <div class=\'col-sm-12 col-md-6\'>\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="comercial_name" name="comercial_name" [(ngModel)]="model.comercial_name" mdInput placeholder="Nombre comercial">\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- comercial --\x3e\r\n        <div class=\'col-sm-12 col-md-3\'>\r\n            <div class="box-body">\r\n                <md-slide-toggle [labelPosition]="after" id="comercial" name="comercial" [(ngModel)]="model.comercial">Comercial</md-slide-toggle>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- state --\x3e\r\n        <div class=\'col-sm-12 col-md-3\'>\r\n            <div class="box-body">\r\n                <md-slide-toggle [labelPosition]="after" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    \x3c!-- content_unit_id --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Unidad de contenido" [(ngModel)]="model.content_unit_id" name="content_unit_id"\r\n                id="content_unit_id">\r\n                <md-option *ngFor="let i of content_unit" [value]="i.id">{{i.value}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    \x3c!-- units --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="units" name="units" [(ngModel)]="model.units" mdInput placeholder="Unidades">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- delivery_fraction --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="delivery_fraction" name="delivery_fraction" [(ngModel)]="model.delivery_fraction" mdInput\r\n                    placeholder="Fracción de entrega">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- cum_code --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="cum_code" name="cum_code" [(ngModel)]="model.cum_code" mdInput placeholder="Código CUM">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- barcode --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="barcode" name="barcode" [(ngModel)]="model.barcode" mdInput placeholder="Código de barras">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--lifetime --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input mdInput [mdDatepicker]="pickerLifetime" id="lifetime" name="lifetime" placeholder="Vida util" [(ngModel)]="model.lifetime">\r\n                <button mdSuffix [mdDatepickerToggle]="pickerLifetime"></button>\r\n            </md-input-container>\r\n            <md-datepicker #pickerLifetime></md-datepicker>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- institutional_use --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="institutional_use" name="institutional_use" [(ngModel)]="model.institutional_use">Uso institucional</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- serials_control --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="batch_control" name="serials_control" [(ngModel)]="model.serials_control">Controla serial</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- batch_control --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="batch_control" name="batch_control" [(ngModel)]="model.batch_control">Controla lotes</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- sanitary_registration_holder_id --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Titular registro sanitario" [(ngModel)]="model.sanitary_registration_holder_id"\r\n                name="sanitary_registration_holder_id" id="sanitary_registration_holder_id">\r\n                <md-option *ngFor="let i of healthrecordholder" [value]="i.id">{{i.stakeholder_info.fullname}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- sanitary_registration --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="sanitary_registration" name="sanitary_registration" [(ngModel)]="model.sanitary_registration"\r\n                    mdInput placeholder="Registro sanitario">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- validity_sanitary_registration --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input mdInput [mdDatepicker]="picker" id="validity_sanitary_registration" name="validity_sanitary_registration" placeholder="Vigencia de registro sanitario"\r\n                    [(ngModel)]="model.validity_sanitary_registration">\r\n                <button mdSuffix [mdDatepickerToggle]="picker"></button>\r\n            </md-input-container>\r\n            <md-datepicker #picker></md-datepicker>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- supplier_id --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Proveedor" [(ngModel)]="model.supplier_id" name="supplier_id" id="supplier_id">\r\n                <md-option *ngFor="let item of suppliers" [value]="item.id">{{item.stakeholder_info.fullname}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- manufacturer_id --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Fabricante" [(ngModel)]="model.manufacturer_id" name="manufacturer_id" id="manufacturer_id">\r\n                <md-option *ngFor="let item of makers" [value]="item.id">{{item.stakeholder_info.fullname}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- importer_id --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Importador" [(ngModel)]="model.importer_id" name="importer_id" id="importer_id">\r\n                <md-option *ngFor="let item of importers" [value]="item.id">{{item.stakeholder_info.fullname}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- security_time --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="security_time" name="security_time" [(ngModel)]="model.security_time" mdInput placeholder="Tiempo de seguridad">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- covered_period --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="covered_period" name="covered_period" [(ngModel)]="model.covered_period" mdInput placeholder="Periodo de cubrimiento">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- replacment_time --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="replacment_time" name="replacment_time" [(ngModel)]="model.replacment_time" mdInput placeholder="Tiempo de reposición">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n        <button [disabled]="action_active ? false : !productForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n            (click)="save()">{{str_action}}</button>\r\n    </div>\r\n\r\n</form>'},1468:function(n,e){n.exports='\r\n            \x3c!-- LIST --\x3e\r\n            <div class="row">\r\n                <div class="col-md-6">\r\n                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">                                    \r\n                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar"\r\n                        [(ngModel)]="search" (keydown)="enter($event)">\r\n                        <div style="width: 34px" class="input-group-addon">\r\n                            <a style="cursor:pointer" (click)="getAll()"><i class="fa fa-search"></i></a> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="col-md-6">\r\n                    <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>                                                        \r\n                </div>  \r\n            \r\n            <div class="col-sm-12">\r\n                \r\n                <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n                    \r\n                    <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                    <thead>\r\n                        <tr>\r\n                            <th (click)="sort(\'barcode\')">Código de barras\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'sku\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'comercial_name\')">Nombre Comercial\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'comercial_name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'units\')">Inventario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'units\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                           \r\n                            <th (click)="sort(\'state\')">Estado\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>    \r\n                            <th></th>    \r\n                                                            \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor="let item of list.data">\r\n                            \x3c!-- <td>{{ item.id }}</td>--\x3e\r\n                            <td>{{ item.barcode }}</td>\r\n                            <td>{{ item.comercial_name }}</td>\r\n                            <td>{{ item.units }}</td>\r\n                            \x3c!-- <td>{{ item.cost | number }}</td> --\x3e\r\n                            <td>{{ item.status ? \'Activo\' : \'Inactivo\' }}</td>\r\n                            \x3c!-- <td>{{ item.state ? \'Activa\' : \'Inactiva\' }}</td> --\x3e\r\n                            <td class="text-center">\r\n                                <a style="color:#0a6ebd;cursor: pointer;" (click)="view(item)">\r\n                                    <i class="fa fa-pencil fa-2x"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>                                          \r\n                    </tbody>\r\n                    </table>\r\n                    \r\n                </div>\r\n                <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="6" [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n                \r\n            </div>\r\n        </div>                  \r\n            '},1469:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Productos</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los productos de las cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                   \r\n                    <product-action-cmp *ngIf="isOpenActions" [numId]="id"></product-action-cmp>\r\n                    <product-list-cmp *ngIf="isOpenList"></product-list-cmp>\r\n                   \r\n                </div>               \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=4.8aad078bbba7ea345309.chunk.js.map