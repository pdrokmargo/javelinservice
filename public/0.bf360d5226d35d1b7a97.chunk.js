webpackJsonp([0],{1431:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"WarehouseModule",function(){return m});var o=t(5),i=t(2),r=t(31),s=t(26),a=t(276),c=t(1445),d=t(1473),l=t(1474),p=t(593),u=[{path:"",component:c.a}],m=function(){function WarehouseModule(){}return WarehouseModule=o.a([t.i(i.NgModule)({imports:[r.CommonModule,s.g.forChild(u),a.a,p.a.forRoot()],declarations:[c.a,d.a,l.a]})],WarehouseModule)}()},1445:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t(5),i=t(2),r=t(594),s=function(e){function WarehouseComponent(){return e.call(this)||this}return o.c(WarehouseComponent,e),WarehouseComponent.prototype.ngOnInit=function(){},WarehouseComponent=o.a([t.i(i.Component)({selector:"warehouse-cmp",template:t(1514),styles:[]}),o.b("design:paramtypes",[])],WarehouseComponent)}(r.a)},1473:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var o=t(5),i=t(2),r=t(34),s=(t.n(r),t(18)),a=t(26),c=t(72),d=t(20),l=t(1445),p=function(e){function WarehouseActionComponent(n,t,o,r,s,a){var c=e.call(this)||this;return c.loaderService=n,c.helperService=t,c.snackBar=o,c.route=r,c.router=s,c.comp=a,c.select=new i.EventEmitter,c.countries=[],c.departments=[],c.cities=[],c.warehouses=[],c.operations_centre_groups=[],c}return o.c(WarehouseActionComponent,e),WarehouseActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),void 0!==this.numId&&this.getDataById()},WarehouseActionComponent.prototype.getCollection=function(){var e=this;this.loaderService.display(!0),this.helperService.POST("/api/collections",["COUNTRIES","OPERATIONS_CENTRE_GROUPS","WAREHOUSE_TYPE"]).subscribe(function(n){var t=n.json();e.countries=t.COUNTRIES,e.operations_centre_groups=t.OPERATIONS_CENTRE_GROUPS,e.warehouses=t.WAREHOUSE_TYPE,e.loaderService.display(!1)},function(n){console.log(n),e.loaderService.display(!1)})},WarehouseActionComponent.prototype.getDepartments=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/departamentos?pais_id="+this.model.country_id).subscribe(function(n){var t=n.json();e.departments=t.departamentos,e.loaderService.display(!1)},function(n){console.log(n),e.loaderService.display(!1)})},WarehouseActionComponent.prototype.getCities=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/ciudades?departamento_id="+this.model.department_id).subscribe(function(n){var t=n.json();e.cities=t.ciudades,e.loaderService.display(!1)},function(n){console.log(n),e.loaderService.display(!1)})},WarehouseActionComponent.prototype.save=function(){var e=this;switch(this.loaderService.display(!0),this.strAction){case"Guardar":this.helperService.POST("/api/warehouse",this.model).subscribe(function(n){var t=n.json();t.store&&(e.snackBar.open(t.message,"Guardado",{duration:4e3}),e.comp.openList())},function(n){e.snackBar.open(n.message,"Guardado",{duration:4e3}),e.loaderService.display(!1)});break;case"Actualizar":this.helperService.PUT("/api/warehouse/"+this.numId,this.model).subscribe(function(n){var t=n.json();t.update&&(e.snackBar.open(t.message,"Actualización",{duration:4e3}),e.comp.openList())},function(n){e.snackBar.open(n.message,"Actualización",{duration:4e3}),e.loaderService.display(!1)});break;case"Eliminar":this.helperService.DELETE("/api/warehouse/"+this.numId).subscribe(function(n){var t=n.json();t.delete&&(e.snackBar.open(t.message,"Eliminación",{duration:4e3}),e.comp.openList())},function(n){e.snackBar.open(n.message,"Eliminación",{duration:4e3}),e.loaderService.display(!1)})}},WarehouseActionComponent.prototype.getDataById=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/warehouse/"+this.numId).subscribe(function(n){var t=n.json();e.model=t.data,e.departments.push(e.model.geolocation.department),e.cities.push(e.model.geolocation.city),e.model.country_id=e.model.geolocation.country_id,e.model.department_id=e.model.geolocation.department_id,e.model.city_id=e.model.geolocation.city_id,e.loaderService.display(!1)},function(n){console.log(n),e.loaderService.display(!1)})},WarehouseActionComponent.prototype.clean=function(){this.cities=[],this.departments=[],this.model={},this.model.state=!0},WarehouseActionComponent.prototype.goList=function(){this.comp.openList()},o.a([t.i(i.Output)(),o.b("design:type",Object)],WarehouseActionComponent.prototype,"select",void 0),o.a([t.i(i.Input)(),o.b("design:type",Boolean)],WarehouseActionComponent.prototype,"noaction",void 0),WarehouseActionComponent=o.a([t.i(i.Component)({selector:"warehouse-action-cmp",template:t(1512),styles:[]}),o.b("design:paramtypes",[d.a,d.b,s.c,a.b,a.a,l.a])],WarehouseActionComponent)}(c.a)},1474:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(5),i=t(2),r=t(34),s=(t.n(r),t(26)),a=t(71),c=t(20),d=t(1445),l=function(e){function WarehouseListComponent(n,t,o,i){var r=e.call(this,n,t)||this;return r.loaderService=n,r.helperService=t,r.router=o,r.comp=i,r.urlApi="/api/warehouse",r}return o.c(WarehouseListComponent,e),WarehouseListComponent.prototype.ngOnInit=function(){this.getAll()},WarehouseListComponent.prototype.CUD=function(e,n){switch(this.comp.strAction=e,e){case"Guardar":this.comp.id=void 0;break;default:this.comp.id=n.id}this.comp.openActions()},WarehouseListComponent=o.a([t.i(i.Component)({selector:"warehouse-list-cmp",template:t(1513),styles:[]}),o.b("design:paramtypes",[c.a,c.b,s.a,d.a])],WarehouseListComponent)}(a.a)},1512:function(e,n){e.exports='\x3c!-- FORM --\x3e\r\n<form class="col-sm-12" #modelForm="ngForm" autocomplete="off">\r\n    <div class="row">\r\n        <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive" *ngIf="!noaction">\r\n            <button md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n                <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n            </button>\r\n        </div>\r\n\r\n        \x3c!-- name --\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre de la bodega">\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!--warehouse_type_id--\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Tipo de bodega" [(ngModel)]="model.warehouse_type_id" name="warehouse_type_id"\r\n                    id="warehouse_type_id">\r\n                    <md-option *ngFor="let i of warehouses" [value]="i.id">{{i.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- estado --\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-slide-toggle [labelPosition]="after" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- description --\x3e\r\n        <div class="col-sm-12 col-md-12">\r\n            <div class="box-body">\r\n                <md-input-container class="full-width">\r\n                    <textarea id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción"></textarea>\r\n                </md-input-container>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!--country --\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Pais" [(ngModel)]="model.country_id" name="country_id" (change)="getDepartments()"\r\n                    id="country_id">\r\n                    <md-option *ngFor="let item of countries" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!-- department --\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Departamento" [(ngModel)]="model.department_id" name="department_id" (change)="getCities()"\r\n                    id="department_id">\r\n                    <md-option *ngFor="let item of departments" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n        </div>\r\n\r\n        \x3c!--city --\x3e\r\n        <div class=\'col-sm-12 col-md-4\'>\r\n            <div class="box-body">\r\n                <md-select class="full-width" placeholder="Ciudad" [(ngModel)]="model.city_id" name="city_id" id="city_id">\r\n                    <md-option *ngFor="let item of cities" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n            <button [disabled]="!modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="save()">{{strAction}}</button>\r\n        </div>\r\n    </div>\r\n</form>'},1513:function(e,n){e.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button md-raised-button *ngIf="actions[0].status" (click)="CUD(\'Guardar\')" color="primary" class="btn-w-md no-margin-left btn-right">\r\n            <md-icon>add_circle_outline</md-icon> Nuevo\r\n        </button>\r\n    </div>\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'w.id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'w.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'name\')">Nombre\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'c.value\')">Ubicación\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'c.value\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th class="noAuto" (click)="sort(\'w.state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'w.state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th *ngIf="actions[2].status" class="w-40"></th>\r\n                        <th *ngIf="actions[3].status" class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.name }}</td>\r\n                        <td>{{ item.city }}</td>\r\n                        <td class="noAuto">{{ item.state ? \'Activa\' : \'Inactiva\' }}</td>\r\n                        <td *ngIf="actions[2].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="CUD(\'Actualizar\',item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                        <td *ngIf="actions[3].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="CUD(\'Eliminar\',item)">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n            [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1514:function(e,n){e.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Bodega</h1>\r\n        </div>\r\n        <p class="hero-tagline">We provide amazing solutions that you can\'t miss</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                    <warehouse-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]="strAction"></warehouse-action-cmp>\r\n                    <warehouse-list-cmp *ngIf="isOpenList"></warehouse-list-cmp>\r\n                </div>                 \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>                        '}});
//# sourceMappingURL=0.bf360d5226d35d1b7a97.chunk.js.map