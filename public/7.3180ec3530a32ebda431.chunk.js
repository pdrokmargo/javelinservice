webpackJsonp([7],{1420:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"DeliveryPointsModule",function(){return u});var o=t(5),r=t(2),i=t(32),s=t(26),a=t(276),l=t(592),c=t(1438),d=t(1459),p=t(1458),m=[{path:"",component:c.a}],u=function(){function DeliveryPointsModule(){}return DeliveryPointsModule=o.a([t.i(r.NgModule)({imports:[i.CommonModule,s.g.forChild(m),a.a,l.a.forRoot()],declarations:[c.a,d.a,p.a]})],DeliveryPointsModule)}()},1438:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t(5),r=t(2),i=t(593),s=function(n){function DeliveryPointsComponent(){return n.call(this)||this}return o.c(DeliveryPointsComponent,n),DeliveryPointsComponent.prototype.ngOnInit=function(){},DeliveryPointsComponent=o.a([t.i(r.Component)({selector:"delivery-points-cmp",template:t(1492),styles:[]}),o.b("design:paramtypes",[])],DeliveryPointsComponent)}(i.a)},1458:function(n,e,t){"use strict";t.d(e,"a",function(){return v});var o=t(5),r=t(2),i=t(31),s=(t.n(i),t(18)),a=t(26),l=t(72),c=t(21),d=t(1438),p=t(600),m=t(113),u=(t.n(m),t(599)),v=function(n){function DeliveryPointsActionComponent(e,t,o,i,s,a,l){var c=n.call(this)||this;return c.snackBar=e,c.route=t,c.router=o,c.loaderService=i,c.helperService=s,c.comp=a,c.dialog=l,c.select=new r.EventEmitter,c.arrDelivery_point_group=[],c.str_action="Guardar",c.warehouse={},c.arrDelivery_contracts=[],c}return o.c(DeliveryPointsActionComponent,n),DeliveryPointsActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),void 0==this.numId||null==this.numId||""==this.numId?this.str_action="Guardar":(this.str_action="Actualizar",this.getDataById())},DeliveryPointsActionComponent.prototype.getCollection=function(){var n=this;this.helperService.POST("/api/collections",["DELIVERY_POINTS_GROUPS"]).subscribe(function(e){var t=e.json();n.arrDelivery_point_group=t.DELIVERY_POINTS_GROUPS},function(n){console.log(n)})},DeliveryPointsActionComponent.prototype.save=function(){var n=this;""==this.numId?(this.model.delivery_contracts="[]",this.loaderService.display(!0),this.helperService.POST("/api/delivery-points",this.model).subscribe(function(e){var t=e.json();t.store&&(n.snackBar.open(t.message,"Guardado",{duration:3500}),n.clean(),n.comp.openList(),n.loaderService.display(!1))},function(e){n.loaderService.display(!1)})):(this.loaderService.display(!0),this.helperService.PUT("/api/delivery-points/"+this.numId,this.model).subscribe(function(e){var t=e.json();t.update&&(n.snackBar.open(t.message,"Actualización",{duration:3500}),n.comp.openList())},function(e){n.loaderService.display(!1)}))},DeliveryPointsActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/delivery-points/"+this.numId).map(function(e){var t=e.json();n.model=t.data,console.log(n.model),console.log(n.model.contract_point),n.arrDelivery_contracts=[],n.model.contract_point.forEach(function(e){console.log(e),e.config=JSON.parse(e.config),n.arrDelivery_contracts.push({id:e.delivery_contracts.id,name:e.delivery_contracts.name,event:e.config.event||!1,capita:e.config.capita||!1,pgp:e.config.pgp||!1})}),n.warehouse=n.model.warehouses,n.model.operation_cost_centre_id=1==n.model.root?"co-"+n.model.operation_cost_centre_id:"cc-"+n.model.operation_cost_centre_id}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},DeliveryPointsActionComponent.prototype.clean=function(){this.model={},this.model.state=!0},DeliveryPointsActionComponent.prototype.goList=function(){this.comp.openList()},DeliveryPointsActionComponent.prototype.openModalWarehouse=function(){var n=this;this.modalWarehouse=this.dialog.open(p.a,{hasBackdrop:!1,data:{title:"Bodega"}}),this.modalWarehouse.afterClosed().pipe(t.i(m.filter)(function(n){return n})).subscribe(function(e){n.model.warehouse_id=e.id,n.warehouse=e})},DeliveryPointsActionComponent.prototype.openModalUsers=function(){var n=this;this.modalUsers=this.dialog.open(u.a,{hasBackdrop:!1,data:{title:"Usuarios",type:"regente"}}),this.modalUsers.afterClosed().pipe(t.i(m.filter)(function(n){return n})).subscribe(function(e){n.model.assigned_users||(n.model.assigned_users=[]),n.model.assigned_users.push(e),n.model.users||(n.model.users=[]),n.model.users.push({user_id:e.id})})},o.a([t.i(r.Output)(),o.b("design:type",Object)],DeliveryPointsActionComponent.prototype,"select",void 0),DeliveryPointsActionComponent=o.a([t.i(r.Component)({selector:"delivery-points-action-cmp",template:t(1490)}),o.b("design:paramtypes",[s.c,a.b,a.a,c.a,c.b,d.a,s.d])],DeliveryPointsActionComponent)}(l.a)},1459:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var o=t(5),r=t(2),i=t(31),s=(t.n(i),t(26)),a=t(71),l=t(21),c=t(1438),d=function(n){function DeliveryPointsListComponent(e,t,o,i){var s=n.call(this,t,o)||this;return s.router=e,s.loaderService=t,s.helperService=o,s.comp=i,s.select=new r.EventEmitter,s.urlApi="/api/delivery-points",s}return o.c(DeliveryPointsListComponent,n),DeliveryPointsListComponent.prototype.ngOnInit=function(){this.getAll()},DeliveryPointsListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id=""},DeliveryPointsListComponent.prototype.view=function(n){this.comp.id=n.id,this.comp.openActions()},o.a([t.i(r.Output)(),o.b("design:type",Object)],DeliveryPointsListComponent.prototype,"select",void 0),DeliveryPointsListComponent=o.a([t.i(r.Component)({selector:"delivery-points-list-cmp",template:t(1491)}),o.b("design:paramtypes",[s.a,l.a,l.b,c.a])],DeliveryPointsListComponent)}(a.a)},1490:function(n,e){n.exports='<form #modelForm="ngForm" autocomplete="off">\r\n    <div class="col-sm-12">\r\n        <div class="row">\r\n            <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n                <button type="button" md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n            </div>\r\n            \x3c!-- name --\x3e\r\n            <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n                <md-input-container class="full-width">\r\n                    <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre">\r\n                </md-input-container>\r\n            </div>\r\n            \x3c!-- instalado --\x3e\r\n            <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n                <div class="flex">\r\n                    <span class="flex-spacer"></span>\r\n                    <md-slide-toggle [labelPosition]="\'before\'" id="installed" name="installed" [(ngModel)]="model.installed">Instalado</md-slide-toggle>\r\n                </div>\r\n\r\n            </div>\r\n            \x3c!-- estado --\x3e\r\n            <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n                <div class="flex">\r\n                    <span class="flex-spacer"></span>\r\n                    <md-slide-toggle [labelPosition]="\'before\'" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n                </div>\r\n            </div>\r\n            \x3c!-- bodega --\x3e\r\n            <div class="col-sm-12 col-md-6 margin-bottom">\r\n                <md-input-container class="full-width">\r\n                    <input readonly mdInput type="text" placeholder="Bodega" [(ngModel)]="warehouse.name" id="warehouse" name="warehouse" />\r\n                    <md-icon mdSuffix class="wh-24 pointer" (click)="openModalWarehouse()">search</md-icon>\r\n                </md-input-container>\r\n            </div>\r\n            \x3c!-- grupo de punto de dispensacion --\x3e\r\n            <div class="col-sm-12 col-md-6 margin-bottom">\r\n                <md-select class="full-width" placeholder="Grupos de puntos de dispensación" [(ngModel)]="model.delivery_point_group_id" name="delivery_point_group_id"\r\n                    id="delivery_point_group_id">\r\n                    <md-option *ngFor="let item of arrDelivery_point_group" [value]="item.id">{{item.value}}</md-option>\r\n                </md-select>\r\n            </div>\r\n            \x3c!--contratos--\x3e\r\n            <div class="col-sm-12 col-md-6 margin-bottom">\r\n                <div class="row">\r\n                    <div class="col-sm-12">\r\n                        <div class="flex" style="margin-bottom: 15px;height: 51px;">\r\n                            <div class="box-header no-padding-h">Contratos</div>\r\n                        </div>\r\n                        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n                            <table class="mdl-data-table table-bordered table-striped no-margin">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Nombre</th>\r\n                                        <th>Evento</th>\r\n                                        <th>Cápita</th>\r\n                                        <th>PGP</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor="let item of arrDelivery_contracts">\r\n                                        <td>{{item.name}}</td>\r\n                                        <td class="text-center">\r\n                                            <md-icon>{{item.event ? \'check_circle\' : \'\'}}</md-icon>\r\n                                        </td>\r\n                                        <td class="text-center">\r\n                                            <md-icon>{{item.capita ? \'check_circle\' : \'\'}}</md-icon>\r\n                                        </td>\r\n                                        <td class="text-center">\r\n                                            <md-icon>{{item.pgp ? \'check_circle\' : \'\'}}</md-icon>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \x3c!--Usuario de regente--\x3e\r\n            <div class="col-sm-12 col-md-6 margin-bottom">\r\n                <div class="row">\r\n                    <div class="col-sm-12">\r\n                        <div class="flex margin-bottom">\r\n                            <div class="box-header no-padding-h">Usuario de regente</div>\r\n                            <span class="flex-spacer"></span>\r\n                            <button type="button" md-raised-button color="primary" class="btn-w-md no-margin-left" (click)="openModalUsers()">Añadir</button>\r\n                        </div>\r\n                        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n                            <table class="mdl-data-table table-bordered table-striped no-margin">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Nombre</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor="let item of model.assigned_users">\r\n                                        <td>{{item.firstname}} {{item.lastname}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \x3c!--description--\x3e\r\n            <div class=\'col-sm-12 margin-bottom\'>\r\n                <md-input-container class="full-width">\r\n                    <textarea type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción"></textarea>\r\n                </md-input-container>\r\n            </div>\r\n            <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n                <button type="button" [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n                    (click)="save()">{{str_action}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>'},1491:function(n,e){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button type="button" md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'name\')">Nombre\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'delivery_contract_id\')">Grupo\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'delivery_contract_id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'ct.state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'ct.state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf="list.data">\r\n                    <tr *ngFor="let item of list.data" (click)="view(item)">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.name }}</td>\r\n                        <td>{{ item.delivery_points_groups.value }}</td>\r\n                        <td>{{ item.state ? \'Activo\' : \'Inactiva\' }}</td>\r\n                        <td class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="view(item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n            [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1492:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Puntos de dispensación</h1>\r\n        </div>\r\n        <p class="hero-tagline"></p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                    \r\n                    <delivery-points-action-cmp *ngIf="isOpenActions" [numId]="id"></delivery-points-action-cmp>\r\n\r\n                    <delivery-points-list-cmp *ngIf="isOpenList"></delivery-points-list-cmp>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=7.3180ec3530a32ebda431.chunk.js.map