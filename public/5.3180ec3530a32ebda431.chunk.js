webpackJsonp([5],{1424:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"ProductModule",function(){return h});var r=e(5),o=e(2),i=e(32),a=e(26),c=e(276),d=e(1441),l=e(592),s=e(1465),m=e(1466),p=e(18),u=[{path:"",component:d.a}],h=function(){function ProductModule(){}return ProductModule=r.a([e.i(o.NgModule)({imports:[i.CommonModule,a.g.forChild(u),c.a,l.a.forRoot(),p.g,p.a],declarations:[d.a,s.a,m.a]})],ProductModule)}()},1441:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var r=e(5),o=e(2),i=e(593),a=function(n){function ProductComponent(){return n.call(this)||this}return r.c(ProductComponent,n),ProductComponent.prototype.ngOnInit=function(){},ProductComponent=r.a([e.i(o.Component)({selector:"product-cmp",template:e(1502),styles:[]}),r.b("design:paramtypes",[])],ProductComponent)}(i.a)},1465:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e(5),o=e(2),i=e(31),a=(e.n(i),e(18)),c=e(26),d=e(21),l=e(1441),s=e(72),m=e(115),p=e(113),u=(e.n(p),function(n){function ProductActionComponent(t,e,r,o,i,a,c){var d=n.call(this)||this;return d.loaderService=t,d.helperService=e,d.snackBar=r,d.route=o,d.router=i,d.comp=a,d.dialog=c,d.action_active=!1,d.str_action="Guardar",d.content_unit=[],d.product_type=[],d.sanitary_registration_holder={},d.supplier={},d.manufacturer={},d.importer={},d}return r.c(ProductActionComponent,n),ProductActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),null!=this.numId&&""!==this.numId?(this.str_action="Actualizar",this.getDataById()):this.str_action="Guardar"},ProductActionComponent.prototype.getCollection=function(){var n=this;this.loaderService.display(!0),this.helperService.POST("/api/collections",["CONTENT_UNIT","PRODUCT_TYPE"]).map(function(t){var e=t.json();n.content_unit=e.CONTENT_UNIT,n.product_type=e.PRODUCT_TYPE}).subscribe(function(t){n.loaderService.display(!1)},function(t){n.loaderService.display(!1)})},ProductActionComponent.prototype.save=function(){var n=this;this.model.name="",""!==this.model.id?(this.loaderService.display(!0),this.helperService.PUT("/api/product/"+this.numId,this.model).map(function(t){var e=t.json();"success"===e.status&&(n.snackBar.open(e.message,"Actualización",{duration:3500}),n.comp.openList())}).subscribe(function(t){n.loaderService.display(!1)},function(t){n.loaderService.display(!1)})):(this.loaderService.display(!0),this.helperService.POST("/api/product",this.model).map(function(t){var e=t.json();"success"===e.status&&(n.snackBar.open(e.message,"Guardado",{duration:3500}),n.clean(),n.goList())}).subscribe(function(t){n.loaderService.display(!1)},function(t){n.loaderService.display(!1)}))},ProductActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/product/"+this.numId).map(function(t){var e=t.json();n.model=e.data,n.importer=e.data.importer||{},n.sanitary_registration_holder=e.data.sanitary_registration_holder||{},n.supplier=e.data.supplier||{},n.manufacturer=e.data.manufacturer||{}}).subscribe(function(t){n.loaderService.display(!1)},function(t){n.loaderService.display(!1)})},ProductActionComponent.prototype.clean=function(){this.model={},this.model.pharmaceutical_drugs=[],this.model.batch_control=!1,this.model.serials_control=!1,this.model.institutional_use=!1,this.model.comercial=!1,this.model.is_regulated=!1,this.model.state=!0,this.model.comercial_name=""},ProductActionComponent.prototype.goList=function(){this.comp.openList()},ProductActionComponent.prototype.openAddBankAccount=function(){var n=this;this.pharmaceuticalDialogRef=this.dialog.open(m.f,{hasBackdrop:!1,data:{title:"Medicamentos"}}),this.pharmaceuticalDialogRef.afterClosed().pipe(e.i(p.filter)(function(n){return n})).subscribe(function(t){console.log(t),n.model.pharmaceutical_drugs.push(t)})},ProductActionComponent.prototype.removePharmaceutical=function(n){var t=this.model.pharmaceutical_drugs.indexOf(n);this.model.pharmaceutical_drugs.splice(t,1)},ProductActionComponent.prototype.openAddSanitaryRegistration=function(){var n=this;this.modalStakeHolderDialogRef=this.dialog.open(m.t,{hasBackdrop:!1,data:{title:"Titular registro sanitario",option:"6"}}),this.modalStakeHolderDialogRef.afterClosed().pipe(e.i(p.filter)(function(n){return n})).subscribe(function(t){n.sanitary_registration_holder=t,n.model.sanitary_registration_holder_id=t.id})},ProductActionComponent.prototype.openAddSupplier=function(){var n=this;this.modalStakeHolderDialogRef=this.dialog.open(m.t,{hasBackdrop:!1,data:{title:"Proveedores",option:"2"}}),this.modalStakeHolderDialogRef.afterClosed().pipe(e.i(p.filter)(function(n){return n})).subscribe(function(t){n.supplier=t,n.model.supplier_id=t.id})},ProductActionComponent.prototype.openAddMaker=function(){var n=this;this.modalStakeHolderDialogRef=this.dialog.open(m.t,{hasBackdrop:!1,data:{title:"Fabricantes",option:"4"}}),this.modalStakeHolderDialogRef.afterClosed().pipe(e.i(p.filter)(function(n){return n})).subscribe(function(t){n.manufacturer=t,n.model.manufacturer_id=t.id})},ProductActionComponent.prototype.openAddImporter=function(){var n=this;this.modalStakeHolderDialogRef=this.dialog.open(m.t,{hasBackdrop:!1,data:{title:"Fabricantes",option:"5"}}),this.modalStakeHolderDialogRef.afterClosed().pipe(e.i(p.filter)(function(n){return n})).subscribe(function(t){n.importer=t,n.model.importer_id=t.id})},ProductActionComponent=r.a([e.i(o.Component)({selector:"product-action-cmp",template:e(1500),styles:[]}),r.b("design:paramtypes",[d.a,d.b,a.c,c.b,c.a,l.a,a.d])],ProductActionComponent)}(s.a))},1466:function(n,t,e){"use strict";e.d(t,"a",function(){return s});var r=e(5),o=e(2),i=e(31),a=(e.n(i),e(26)),c=e(71),d=e(21),l=e(1441),s=function(n){function ProductListComponent(t,e,r,o){var i=n.call(this,e,r)||this;return i.router=t,i.loaderService=e,i.helperService=r,i.comp=o,i.urlApi="/api/product",i}return r.c(ProductListComponent,n),ProductListComponent.prototype.ngOnInit=function(){this.getAll()},ProductListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id=""},ProductListComponent.prototype.view=function(n){this.comp.openActions(),this.comp.id=n.id},ProductListComponent=r.a([e.i(o.Component)({selector:"product-list-cmp",template:e(1501),styles:[]}),r.b("design:paramtypes",[a.a,d.a,d.b,l.a])],ProductListComponent)}(c.a)},1500:function(n,t){n.exports='<form #productForm="ngForm" autocomplete="off">\r\n    <div class="row">\r\n\r\n        <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n            <button type="button" md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n        </div>\r\n        \r\n        \x3c!-- state --\x3e\r\n        <div class=\'col-sm-12 margin-bottom\'>\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <md-slide-toggle [labelPosition]="\'before\'" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n            </div>\r\n        </div>\r\n        \r\n        \x3c!--product type --\x3e\r\n        <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n            <md-select class="full-width" placeholder="Tipo de producto" [(ngModel)]="model.product_profile_id" name="product_profile_id" id="product_profile_id">\r\n                <md-option *ngFor="let item of product_type" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        \x3c!-- medicamentos --\x3e\r\n        <div class="col-sm-12 margin-bottom" *ngIf="model.product_profile_id == 30">\r\n            <div class="flex margin-bottom">\r\n                <div class="box-header no-padding-h">Medicamentos</div>\r\n                <span class="flex-spacer"></span>\r\n                <button type="button" type="button" md-raised-button color="primary" class="btn-w-md no-margin-left" (click)="openAddBankAccount()">Añadir</button>\r\n            </div>\r\n            <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n                <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Nombre</th>\r\n                            <th>Vía Administración</th>\r\n                            <th>Forma Farmaceutica</th>\r\n                            <th class="w-40"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor="let item of model.pharmaceutical_drugs">\r\n                            <td>{{ item.name }}</td>\r\n                            <td>{{ item.routes_administration }}</td>\r\n                            <td>{{ item.dosage_form }}</td>\r\n                            <td class="w-40">\r\n                                <button type="button" type="button" md-icon-button (click)="removePharmaceutical(item)">\r\n                                    <md-icon>delete</md-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- description --\x3e\r\n        <div class=\'col-sm-12 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- comercial --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-slide-toggle [labelPosition]="\'after\'" id="comercial" name="comercial" [(ngModel)]="model.comercial" (change)="model.comercial_name = model.comercial ? model.comercial_name : \'\'">Comercial</md-slide-toggle>\r\n        </div>\r\n\r\n        \x3c!-- comercial_name --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\' *ngIf="model.comercial">\r\n            <md-input-container class="full-width">\r\n                <input type="text" id="comercial_name" name="comercial_name" [(ngModel)]="model.comercial_name" mdInput placeholder="Nombre comercial">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- content_unit_id --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-select class="full-width" placeholder="Unidad de contenido" [(ngModel)]="model.content_unit_id" name="content_unit_id" id="content_unit_id">\r\n                <md-option *ngFor="let i of content_unit" [value]="i.id">{{i.value}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        <span class="col-sm-12"></span>\r\n\r\n        \x3c!-- units --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="units" name="units" [(ngModel)]="model.units" mdInput placeholder="Unidades">\r\n            </md-input-container>\r\n        </div>\r\n\r\n         \x3c!-- delivery_fraction --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="delivery_fraction" name="delivery_fraction" [(ngModel)]="model.delivery_fraction" mdInput placeholder="Fracción de entrega">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- cum_code --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="cum_code" name="cum_code" [(ngModel)]="model.cum_code" mdInput placeholder="Código CUM">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- barcode --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="barcode" name="barcode" [(ngModel)]="model.barcode" mdInput placeholder="Código de barras">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!--lifetime --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input mdInput [mdDatepicker]="pickerLifetime" id="lifetime" name="lifetime" placeholder="Vida util" [(ngModel)]="model.lifetime">\r\n                <button type="button" mdSuffix [mdDatepickerToggle]="pickerLifetime"></button>\r\n            </md-input-container>\r\n            <md-datepicker #pickerLifetime></md-datepicker>\r\n        </div>\r\n\r\n        <span class="col-sm-12"></span>\r\n\r\n        \x3c!-- institutional_use --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-slide-toggle [labelPosition]="after" id="institutional_use" name="institutional_use" [(ngModel)]="model.institutional_use">Uso institucional</md-slide-toggle>\r\n        </div>\r\n\r\n         \x3c!-- serials_control --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-slide-toggle [labelPosition]="after" id="batch_control" name="serials_control" [(ngModel)]="model.serials_control">Controla serial</md-slide-toggle>\r\n        </div>\r\n\r\n        \x3c!-- batch_control --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-slide-toggle [labelPosition]="after" id="batch_control" name="batch_control" [(ngModel)]="model.batch_control">Controla lotes</md-slide-toggle>\r\n        </div>\r\n\r\n        \x3c!-- titular registro sanitario --\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input readonly mdInput type="text" placeholder="Titular registro sanitario" [(ngModel)]="sanitary_registration_holder.businessname" id="sanitary_registration_holder" name="sanitary_registration_holder" />\r\n                <md-icon mdSuffix class="wh-24 pointer" (click)="openAddSanitaryRegistration()">search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- sanitary_registration --\x3e\r\n        <div class=\'col-sm-12 col-md-3 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="sanitary_registration" name="sanitary_registration" [(ngModel)]="model.sanitary_registration" mdInput placeholder="Registro sanitario">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- validity_sanitary_registration --\x3e\r\n        <div class=\'col-sm-12 col-md-3 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input mdInput [mdDatepicker]="picker" id="validity_sanitary_registration" name="validity_sanitary_registration" placeholder="Vigencia de registro sanitario" [(ngModel)]="model.validity_sanitary_registration">\r\n                <button type="button" mdSuffix [mdDatepickerToggle]="picker"></button>\r\n            </md-input-container>\r\n            <md-datepicker #picker></md-datepicker>\r\n        </div>\r\n\r\n        \x3c!-- proveedor --\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input readonly mdInput type="text" placeholder="Proveedor" [(ngModel)]="supplier.businessname" id="supplier" name="supplier" />\r\n                <md-icon mdSuffix class="wh-24 pointer" (click)="openAddSupplier()">search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- fabricante --\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input readonly mdInput type="text" placeholder="Fabricante" [(ngModel)]="manufacturer.businessname" id="manufacturer" name="manufacturer" />\r\n                <md-icon mdSuffix class="wh-24 pointer" (click)="openAddMaker()">search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- importador --\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input readonly mdInput type="text" placeholder="Importador" [(ngModel)]="importer.businessname" id="importer" name="importer" />\r\n                <md-icon mdSuffix class="wh-24 pointer" (click)="openAddImporter()">search</md-icon>\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- security_time --\x3e\r\n        <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="security_time" name="security_time" [(ngModel)]="model.security_time" mdInput placeholder="Tiempo de seguridad">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- covered_period --\x3e\r\n        <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="covered_period" name="covered_period" [(ngModel)]="model.covered_period" mdInput placeholder="Periodo de cubrimiento">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        \x3c!-- replacment_time --\x3e\r\n        <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="replacment_time" name="replacment_time" [(ngModel)]="model.replacment_time" mdInput placeholder="Tiempo de reposición">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n            <button type="button" [disabled]="action_active ? false : !productForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n                (click)="save()">{{str_action}}</button>\r\n        </div>\r\n\r\n    </div>\r\n</form>'},1501:function(n,t){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th  (click)="sort(\'barcode\')">Código de barras\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'barcode\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'comercial_name\')">Nombre Comercial\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'comercial_name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'units\')">Inventario\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'units\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n\r\n                        <th (click)="sort(\'state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th class="w-40"></th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.barcode }}</td>\r\n                        <td>{{ item.comercial_name }}</td>\r\n                        <td>{{ item.units }}</td>\r\n                        <td>{{ item.status ? \'Activo\' : \'Inactivo\' }}</td>\r\n                        <td class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="view(item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="6" [rotate]="true"\r\n            [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1502:function(n,t){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Productos</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los productos de las cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                   \r\n                    <product-action-cmp *ngIf="isOpenActions" [numId]="id"></product-action-cmp>\r\n                    <product-list-cmp *ngIf="isOpenList"></product-list-cmp>\r\n                   \r\n                </div>               \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=5.3180ec3530a32ebda431.chunk.js.map