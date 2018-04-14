webpackJsonp([10],{1416:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"CompanyModule",function(){return u});var o=i(5),t=i(2),r=i(32),d=i(26),a=i(276),s=i(1432),c=i(592),l=i(1448),m=i(1449),p=[{path:"",component:s.a}],u=function(){function CompanyModule(){}return CompanyModule=o.a([i.i(t.NgModule)({imports:[r.CommonModule,d.g.forChild(p),a.a,c.a.forRoot()],declarations:[s.a,l.a,m.a]})],CompanyModule)}()},1432:function(n,e,i){"use strict";i.d(e,"a",function(){return a});var o=i(5),t=i(2),r=i(31),d=(i.n(r),i(593)),a=function(n){function CompanyComponent(){return n.call(this)||this}return o.c(CompanyComponent,n),CompanyComponent.prototype.ngOnInit=function(){},CompanyComponent=o.a([i.i(t.Component)({selector:"company-cmp",template:i(1480),styles:[]}),o.b("design:paramtypes",[])],CompanyComponent)}(d.a)},1448:function(n,e,i){"use strict";i.d(e,"a",function(){return m});var o=i(5),t=i(2),r=i(31),d=(i.n(r),i(18)),a=i(26),s=i(21),c=i(1432),l=i(72),m=function(n){function CompanyActionComponent(e,i,o,t,r,d){var a=n.call(this)||this;return a.loaderService=e,a.helperService=i,a.snackBar=o,a.route=t,a.router=r,a.comp=d,a.countries=[],a.departments=[],a.cities=[],a.tax_regime=[],a.withholding=[],a.action_active=!1,a.str_action="Guardar",a}return o.c(CompanyActionComponent,n),CompanyActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),this.numId>0?(this.str_action="Actualizar",this.getDataById()):this.str_action="Guardar"},CompanyActionComponent.prototype.getCollection=function(){var n=this;this.helperService.POST("/api/collections",["COUNTRIES","TAX_REGIME","WITHHOLDING_TYPE"]).map(function(e){var i=e.json();n.countries=i.COUNTRIES,n.tax_regime=i.TAX_REGIME,n.withholding=i.WITHHOLDING_TYPE}).subscribe(function(n){},function(n){})},CompanyActionComponent.prototype.getDepartments=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/departamentos?pais_id="+this.model.country_id).map(function(e){var i=e.json();n.departments=i.departamentos}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},CompanyActionComponent.prototype.getCities=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/ciudades?departamento_id="+this.model.department_id).map(function(e){var i=e.json();n.cities=i.ciudades}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},CompanyActionComponent.prototype.save=function(){var n=this;this.model.id>0?(this.loaderService.display(!0),this.helperService.PUT("/api/company/"+this.numId,this.model).map(function(e){var i=e.json();"success"===i.status&&(n.snackBar.open(i.message,"Actualización",{duration:3500}),n.comp.openList())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})):(this.loaderService.display(!0),this.helperService.POST("/api/company",this.model).map(function(e){var i=e.json();"success"===i.status&&(n.snackBar.open(i.message,"Guardado",{duration:3500}),n.clean())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)}))},CompanyActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/company/"+this.numId).map(function(e){var i=e.json();n.model=i.data,n.departments.push(n.model.geolocation.department),n.cities.push(n.model.geolocation.city),n.model.country_id=n.model.geolocation.country_id,n.model.department_id=n.model.geolocation.department_id,n.model.city_id=n.model.geolocation.city_id}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},CompanyActionComponent.prototype.clean=function(){this.cities=[],this.departments=[],this.model={},this.model.big_contributor=!0,this.model.selfholder=!0},CompanyActionComponent.prototype.goList=function(){this.comp.openList()},CompanyActionComponent=o.a([i.i(t.Component)({selector:"company-action-cmp",template:i(1478),styles:[]}),o.b("design:paramtypes",[s.a,s.b,d.c,a.b,a.a,c.a])],CompanyActionComponent)}(l.a)},1449:function(n,e,i){"use strict";i.d(e,"a",function(){return l});var o=i(5),t=i(2),r=i(31),d=(i.n(r),i(26)),a=i(71),s=i(21),c=i(1432),l=function(n){function CompanyListComponent(e,i,o,t){var r=n.call(this,e,i)||this;return r.loaderService=e,r.helperService=i,r.router=o,r.comp=t,r.urlApi="/api/company",r}return o.c(CompanyListComponent,n),CompanyListComponent.prototype.ngOnInit=function(){this.getAll()},CompanyListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id=0},CompanyListComponent.prototype.view=function(n){this.comp.openActions(),this.comp.id=n.id},CompanyListComponent=o.a([i.i(t.Component)({selector:"company-list-cmp",template:i(1479),styles:[]}),o.b("design:paramtypes",[s.a,s.b,d.a,c.a])],CompanyListComponent)}(a.a)},1478:function(n,e){n.exports='\r\n\x3c!-- FORM --\x3e\r\n\r\n<form #companyForm="ngForm" autocomplete="off">\r\n\r\n    <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n        <button md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n    </div>                            \r\n\r\n    \x3c!-- name --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- nit --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="nit" name="nit" [(ngModel)]="model.nit" mdInput placeholder="Nit">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- description --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción">\r\n            </md-input-container>\r\n        </div>\r\n    </div>  \r\n\r\n    \x3c!-- email --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="email" name="email" [(ngModel)]="model.email" mdInput placeholder="Correo Eletrónico">\r\n            </md-input-container>\r\n        </div>\r\n    </div>                                    \r\n\r\n    \x3c!--country --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Pais" [(ngModel)]="model.country_id" name="country_id"\r\n            (change)="getDepartments()" id="country_id">\r\n                <md-option *ngFor="let item of countries" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div>\r\n    </div>  \r\n\r\n    \x3c!-- department --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Departamento" [(ngModel)]="model.department_id" name="department_id"\r\n            (change)="getCities()" id="department_id">\r\n                <md-option *ngFor="let item of departments" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--city --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Ciudad" [(ngModel)]="model.city_id" name="city_id"\r\n            id="city_id">\r\n                <md-option *ngFor="let item of cities" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div>    \r\n    </div>\r\n\r\n    \x3c!-- address --\x3e\r\n    <div class=\'col-sm-12 col-md-12\'>\r\n        <div class="box-body">                              \r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="address" name="address" [(ngModel)]="model.address" mdInput placeholder="Dirección">\r\n            </md-input-container>                               \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- website --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="website" name="website" [(ngModel)]="model.website" mdInput placeholder="Sitio web">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- phone number --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="phone_number" name="phone_number" [(ngModel)]="model.phone_number" mdInput placeholder="Teléfono">\r\n            </md-input-container>\r\n        </div>                                \r\n    </div>\r\n\r\n    <div class="col-sm-12 col-md-12">\r\n        \x3c!-- economic activity --\x3e\r\n        <div class=\'col-sm-12 col-md-6\'>\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="economic_activity" name="economic_activity" [(ngModel)]="model.economic_activity" mdInput placeholder="Actividad económica">\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- tax regimen --\x3e\r\n        <div class=\'col-sm-12 col-md-6\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Tipo de régimen" [(ngModel)]="model.tax_regime_id" name="tax_regime_id"\r\n                id="tax_regime_id">\r\n                    <md-option *ngFor="let item of tax_regime" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>    \r\n            </div>                                    \r\n        </div>                            \r\n    </div>  \r\n\r\n    \x3c!-- withholding_income_sales_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reterenta en Ventas" [(ngModel)]="model.withholding_income_sales_id" name="withholding_income_sales_id"\r\n            id="withholding_income_sales_id">\r\n                <md-option *ngFor="let i of withholding" [value]="i.id">{{i.value}}</md-option>\r\n            </md-select>    \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- withholding_income_purchases_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reterenta en compras" [(ngModel)]="model.withholding_income_purchases_id" name="withholding_income_purchases_id"\r\n            id="withholding_income_purchases_id">\r\n                <md-option *ngFor="let item of withholding" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>                            \r\n    </div>\r\n\r\n    \x3c!-- withholding_vat_sales_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reteiva en Ventas" [(ngModel)]="model.withholding_vat_sales_id" name="withholding_vat_sales_id"\r\n            id="withholding_vat_sales_id">\r\n                <md-option *ngFor="let item of withholding" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- withholding_vat_purchases_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reteiva en compras" [(ngModel)]="model.withholding_vat_purchases_id" name="withholding_vat_purchases_id"\r\n            id="withholding_vat_purchases_id">\r\n                <md-option *ngFor="let item of withholding" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>                            \r\n    </div>                           \r\n\r\n    \x3c!-- withholding_vat_sales_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reteica en Ventas" [(ngModel)]="model.withholding_ica_sales_id" name="withholding_ica_sales_id"\r\n            id="withholding_ica_sales_id">\r\n                <md-option *ngFor="let item of withholding" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- withholding_vat_purchases_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Reteica en compras" [(ngModel)]="model.withholding_ica_purchases_id" name="withholding_ica_purchases_id"\r\n            id="withholding_ica_purchases_id">\r\n                <md-option *ngFor="let item of withholding" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>                            \r\n    </div>                    \r\n\r\n    \x3c!-- big_contributor --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="big_contributor" name="big_contributor" [(ngModel)]="model.big_contributor">Gran contribuyente</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- selfholder --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="selfholder" name="selfholder" [(ngModel)]="model.selfholder">Autoretenedor</md-slide-toggle>\r\n        </div>                            \r\n    </div>                            \r\n\r\n    \x3c!-- big_contributor_resolution --\x3e\r\n    <div class=\'col-sm-12 col-md-6\' *ngIf="model.big_contributor">\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                 <input required type="text" id="big_contributor_resolution" name="big_contributor_resolution" [(ngModel)]="model.big_contributor_resolution" mdInput placeholder="Resolución No.">\r\n            </md-input-container>                                        \r\n        </div>\r\n    </div>\r\n    \r\n    <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n        <button [disabled]="action_active ? false : !companyForm.form.valid" md-raised-button color="primary"\r\n        class="btn-w-md no-margin-left btn-right" (click)="save()">{{str_action}}</button>\r\n    </div>\r\n\r\n</form>\r\n                   \r\n               '},1479:function(n,e){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'nit\')">Nit\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'nit\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'name\')">Nombre de Empresa\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th></th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.nit }}</td>\r\n                        <td>{{ item.name }}</td>\r\n                        <td>{{ item.state ? \'Activa\' : \'Inactiva\' }}</td>\r\n                        <td class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="view(item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="6" [rotate]="true"\r\n            [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1480:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Empresas</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear las empresa de las cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                   \r\n                    <company-action-cmp *ngIf="isOpenActions" [numId]="id"></company-action-cmp>\r\n                    <company-list-cmp *ngIf="isOpenList"></company-list-cmp>\r\n                   \r\n                </div>               \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=10.ecf5ce34a60421b97fc9.chunk.js.map