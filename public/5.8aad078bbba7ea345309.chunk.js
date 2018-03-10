webpackJsonp([5],{1399:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"OperationscentreModule",function(){return u});var o=t(6),r=t(2),i=t(29),s=t(44),c=t(278),a=t(1432),d=t(1433),l=t(1413),p=t(592),m=[{path:"",component:l.a}],u=function(){function OperationscentreModule(){}return OperationscentreModule=o.a([t.i(r.NgModule)({imports:[i.CommonModule,s.g.forChild(m),c.a,p.a.forRoot()],declarations:[l.a,a.a,d.a]})],OperationscentreModule)}()},1413:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var o=t(6),r=t(2),i=t(144),s=(t.n(i),t(594)),c=function(n){function OperationscentreComponent(){return n.call(this)||this}return o.c(OperationscentreComponent,n),OperationscentreComponent.prototype.ngOnInit=function(){},OperationscentreComponent=o.a([t.i(r.Component)({selector:"operationscentre-cmp",template:t(1463),styles:[]}),o.b("design:paramtypes",[])],OperationscentreComponent)}(s.a)},1432:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var o=t(6),r=t(2),i=t(144),s=(t.n(i),t(50)),c=t(44),a=t(593),d=t(63),l=t(1413),p=function(n){function OperationscentreActionComponent(e,t,o,r,i,s){var c=n.call(this)||this;return c.loaderService=e,c.helperService=t,c.snackBar=o,c.route=r,c.router=i,c.comp=s,c.countries=[],c.departments=[],c.cities=[],c.operations_centre_groups=[],c.str_action="Guardar",c}return o.c(OperationscentreActionComponent,n),OperationscentreActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),this.numId>0?(this.str_action="Actualizar",this.getDataById()):this.str_action="Guardar"},OperationscentreActionComponent.prototype.getCollection=function(){var n=this;this.helperService.POST("/api/collections",["COUNTRIES","OPERATIONS_CENTRE_GROUPS"]).map(function(e){var t=e.json();n.countries=t.COUNTRIES,n.operations_centre_groups=t.OPERATIONS_CENTRE_GROUPS}).subscribe(function(n){console.log(n)},function(n){})},OperationscentreActionComponent.prototype.getDepartments=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/departamentos?pais_id="+this.model.country_id).map(function(e){var t=e.json();console.log(t),n.departments=t.departamentos}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},OperationscentreActionComponent.prototype.getCities=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/ciudades?departamento_id="+this.model.department_id).map(function(e){var t=e.json();n.cities=t.ciudades}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},OperationscentreActionComponent.prototype.save=function(){var n=this;this.model.id>0?(this.loaderService.display(!0),this.helperService.PUT("/api/operationscentres/"+this.numId,this.model).map(function(e){var t=e.json();"success"===t.status&&(n.snackBar.open(t.message,"Actualización",{duration:3500}),n.comp.openList())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})):(this.loaderService.display(!0),this.helperService.POST("/api/operationscentres",this.model).map(function(e){var t=e.json();"success"===t.status&&(n.snackBar.open(t.message,"Guardado",{duration:3500}),n.clean())}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)}))},OperationscentreActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/operationscentres/"+this.numId).map(function(e){var t=e.json();n.model=t.data,n.departments.push(n.model.geolocation.department),n.cities.push(n.model.geolocation.city),n.model.country_id=n.model.geolocation.country_id,n.model.department_id=n.model.geolocation.department_id,n.model.city_id=n.model.geolocation.city_id}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},OperationscentreActionComponent.prototype.clean=function(){this.cities=[],this.departments=[],this.model={},this.model.code="co000",this.model.state=!0},OperationscentreActionComponent.prototype.goList=function(){this.comp.openList()},OperationscentreActionComponent=o.a([t.i(r.Component)({selector:"operationscentre-action-cmp",template:t(1461),styles:[]}),o.b("design:paramtypes",[d.a,d.b,s.c,c.b,c.a,l.a])],OperationscentreActionComponent)}(a.a)},1433:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var o=t(6),r=t(2),i=t(144),s=(t.n(i),t(44)),c=t(279),a=t(63),d=t(1413),l=function(n){function OperationscentreListComponent(e,t,o,r){var i=n.call(this,e,t)||this;return i.loaderService=e,i.helperService=t,i.router=o,i.comp=r,i.urlApi="/api/operationscentres",i}return o.c(OperationscentreListComponent,n),OperationscentreListComponent.prototype.ngOnInit=function(){this.getAll()},OperationscentreListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id=0},OperationscentreListComponent.prototype.view=function(n){this.comp.openActions(),this.comp.id=n.id},OperationscentreListComponent=o.a([t.i(r.Component)({selector:"operationscentre-list-cmp",template:t(1462),styles:[]}),o.b("design:paramtypes",[a.a,a.b,s.a,d.a])],OperationscentreListComponent)}(c.a)},1461:function(n,e){n.exports='<form #modelForm="ngForm" autocomplete="off">\r\n    \r\n    <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n        <button md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n    </div>                            \r\n    \r\n    \x3c!-- name --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre del centro de operaciones">\r\n            </md-input-container>\r\n        </div>\r\n    </div>   \r\n\r\n    \x3c!-- codigo --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input type="text" id="codigo" name="codigo" [(ngModel)]="model.code" mdInput placeholder="Código" readonly>\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- estado --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- description --\x3e\r\n    <div class=\'col-sm-12 col-md-12\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <textarea type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción">\r\n                </textarea>\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--country --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Pais" [(ngModel)]="model.country_id" name="country_id"\r\n            (change)="getDepartments()" id="country_id">\r\n                <md-option *ngFor="let item of countries" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- department --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Departamento" [(ngModel)]="model.department_id" name="department_id"\r\n            (change)="getCities()" id="department_id">\r\n                <md-option *ngFor="let item of departments" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--city --\x3e\r\n    <div class=\'col-sm-12 col-md-4\'>\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Ciudad" [(ngModel)]="model.city_id" name="city_id"\r\n            id="city_id">\r\n                <md-option *ngFor="let item of cities" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>  \r\n        </div> \r\n    </div>                                              \r\n\r\n    \x3c!-- address --\x3e\r\n    <div class=\'col-sm-12 col-md-12\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="address" name="address" [(ngModel)]="model.address" mdInput placeholder="Dirección">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- phone --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="phone" name="phone" [(ngModel)]="model.phone_number" mdInput placeholder="Teléfono">\r\n            </md-input-container>\r\n        </div>                            \r\n    </div>\r\n    \r\n    \x3c!-- withholding_income_sales_id --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">                                \r\n            <md-select class="full-width" placeholder="Grupo de Centro de Operaciones" [(ngModel)]="model.operationscentregroup_id" name="operationscentregroup_id"\r\n            id="operationscentregroup_id">\r\n                <md-option *ngFor="let item of operations_centre_groups" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>    \r\n        </div>                                                                    \r\n    </div>\r\n                                                                                        \r\n    <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n            \r\n        <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary"\r\n        class="btn-w-md no-margin-left btn-right" (click)="save()">{{str_action}}</button>\r\n        \x3c!-- <button *ngIf="strAction==\'\'" md-raised-button class="btn-w-md no-margin-left btn-right" (click)="DELETE()">Eliminar</button>\r\n        <button *ngIf="strAction==\'\'" md-raised-button class="btn-w-md no-margin-left btn-right" (click)="EDIT()">Editar</button>\r\n        <button *ngIf="!(strAction==\'\')" [disabled]="booActive ? false : !modelForm.form.valid" md-raised-button color="primary"\r\n            class="btn-w-md no-margin-left btn-right" (click)="actionCrud.event()">{{strAction}}</button>\r\n        <button *ngIf="!(strAction==\'\') && !(strAction==\'Guardar\')" md-raised-button class="btn-w-md no-margin-left btn-right" (click)="__cancel()">Cancelar</button> --\x3e\r\n    </div>\r\n\r\n</form>              '},1462:function(n,e){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n        <div class="col-md-6">\r\n            <div class="input-group mb-2 mr-sm-2 mb-sm-0">                                    \r\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar"\r\n                [(ngModel)]="search" (keydown)="enter($event)">\r\n                <div style="width: 34px" class="input-group-addon">\r\n                    <a style="cursor:pointer" (click)="getAll()"><i class="fa fa-search"></i></a> \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n            <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>                                                        \r\n        </div>  \r\n    \r\n    <div class="col-sm-12">\r\n        \r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n            \r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n            <thead>\r\n                <tr>\r\n                    <th (click)="sort(\'o.id\')">ID\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'o.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>                 \r\n                    <th (click)="sort(\'code\')">Código\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'code\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th (click)="sort(\'name\')">Nombre\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th (click)="sort(\'c.value\')">Ubicación\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'c.value\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th (click)="sort(\'cg.value\')">Grupo\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'cg.value\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th (click)="sort(\'state\')">Estado\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor="let item of list.data">    \r\n                    <td>{{ item.id }}</td>                                   \r\n                    <td>{{ item.code }}</td>\r\n                    <td>{{ item.name }}</td>     \r\n                    <td>{{ item.city }}</td>                                   \r\n                    <td>{{ item.group }}</td>                                        \r\n                    <td>{{ item.state ? \'Activa\' : \'Inactiva\' }}</td>\r\n                    <td class="text-center">\r\n                        <a style="color:#0a6ebd;cursor:pointer;" (click)="view(item)">\r\n                            <i class="fa fa-pencil fa-2x"></i>\r\n                        </a>\r\n                    </td>\r\n                </tr>                                          \r\n            </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize" [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n        \r\n    </div>\r\n</div>                  \r\n'},1463:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Centros de Operaciones</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los centros de operaciones de los cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n\r\n                    <operationscentre-action-cmp *ngIf="isOpenActions" [numId]="id"></operationscentre-action-cmp>\r\n                    <operationscentre-list-cmp *ngIf="isOpenList"></operationscentre-list-cmp>\r\n\r\n                </div>               \r\n            </div>\r\n\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=5.8aad078bbba7ea345309.chunk.js.map