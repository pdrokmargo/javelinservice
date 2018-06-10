webpackJsonp([9],{1411:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"CostscentresModule",function(){return u});var o=t(5),s=t(2),r=t(31),c=t(26),i=t(276),a=t(1427),l=t(591),d=t(1445),p=t(1446),m=[{path:"",component:a.a}],u=function(){function CostscentresModule(){}return CostscentresModule=o.a([t.i(s.NgModule)({imports:[r.CommonModule,c.g.forChild(m),i.a,l.a.forRoot()],declarations:[a.a,d.a,p.a]})],CostscentresModule)}()},1427:function(n,e,t){"use strict";t.d(e,"a",function(){return c});var o=t(5),s=t(2),r=t(592),c=function(n){function CostscentresComponent(){return n.call(this)||this}return o.c(CostscentresComponent,n),CostscentresComponent.prototype.ngOnInit=function(){},CostscentresComponent=o.a([t.i(s.Component)({selector:"costscentres-cmp",template:t(1478),styles:[]}),o.b("design:paramtypes",[])],CostscentresComponent)}(r.a)},1445:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var o=t(5),s=t(2),r=t(34),c=(t.n(r),t(18)),i=t(26),a=t(72),l=t(20),d=t(1427),p=function(n){function CostscentresActionComponent(e,t,o,s,r,c){var i=n.call(this)||this;return i.snackBar=e,i.route=t,i.router=o,i.loaderService=s,i.helperService=r,i.comp=c,i.tipos=[],i.costs_centres_groups=[],i.costs_centres_types=[],i.operations_costs_centres=[],i}return o.c(CostscentresActionComponent,n),CostscentresActionComponent.prototype.ngOnInit=function(){this.clean(),this.getCollection(),this.getCostCentres(),void 0!==this.numId&&this.getDataById()},CostscentresActionComponent.prototype.getCollection=function(){var n=this;this.loaderService.display(!0),this.helperService.POST("/api/collections",["COSTS_CENTRE_GROUPS","COSTS_CENTRE_TYPES"]).subscribe(function(e){var t=e.json();n.costs_centres_groups=t.COSTS_CENTRE_GROUPS,n.costs_centres_types=t.COSTS_CENTRE_TYPES,n.loaderService.display(!1)},function(e){console.log(e),n.loaderService.display(!1)})},CostscentresActionComponent.prototype.getCostCentres=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/costs_centre/operations_costs_centre").subscribe(function(e){var t=e.json();n.operations_costs_centres=t.data,n.loaderService.display(!1)},function(e){console.log(e),n.loaderService.display(!1)})},CostscentresActionComponent.prototype.save=function(){var n=this;switch(this.loaderService.display(!0),this.strAction){case"Guardar":this.helperService.POST("/api/costscentres",this.model).subscribe(function(e){var t=e.json();t.store&&(n.snackBar.open(t.message,"Guardado",{duration:4e3}),n.goList())},function(e){n.loaderService.display(!1),n.snackBar.open(e.message,"Guardado",{duration:4e3})});break;case"Actualizar":this.helperService.PUT("/api/costscentres/"+this.numId,this.model).subscribe(function(e){var t=e.json();t.update&&(n.snackBar.open(t.message,"Actualización",{duration:4e3}),n.comp.openList())},function(e){n.snackBar.open(e.message,"Guardado",{duration:4e3}),n.loaderService.display(!1)});break;case"Eliminar":this.helperService.DELETE("/api/costscentres/"+this.numId).subscribe(function(e){var t=e.json();t.delete&&(n.snackBar.open(t.message,"Eliminación",{duration:4e3}),n.comp.openList())},function(e){n.snackBar.open(e.message,"Eliminación",{duration:4e3}),n.loaderService.display(!1)})}},CostscentresActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/costscentres/"+this.numId).subscribe(function(e){var t=e.json();n.model=t.data,n.model.operation_cost_centre_id=1==n.model.root?"co-"+n.model.operation_cost_centre_id:"cc-"+n.model.operation_cost_centre_id,n.loaderService.display(!1)},function(e){console.log(e),n.loaderService.display(!1)})},CostscentresActionComponent.prototype.clean=function(){this.model={},this.model.state=!0},CostscentresActionComponent.prototype.goList=function(){this.comp.openList()},CostscentresActionComponent=o.a([t.i(s.Component)({selector:"costscentres-action-cmp",template:t(1476),styles:[]}),o.b("design:paramtypes",[c.c,i.b,i.a,l.a,l.b,d.a])],CostscentresActionComponent)}(a.a)},1446:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var o=t(5),s=t(2),r=t(34),c=(t.n(r),t(26)),i=t(71),a=t(20),l=t(1427),d=function(n){function CostscentresListComponent(e,t,o,s){var r=n.call(this,t,o)||this;return r.router=e,r.loaderService=t,r.helperService=o,r.comp=s,r.urlApi="/api/costscentres",r}return o.c(CostscentresListComponent,n),CostscentresListComponent.prototype.ngOnInit=function(){this.getAll()},CostscentresListComponent.prototype.CUD=function(n,e){switch(this.comp.strAction=n,n){case"Guardar":this.comp.id=void 0;break;default:this.comp.id=e.id}this.comp.openActions()},CostscentresListComponent=o.a([t.i(s.Component)({selector:"costscentres-list-cmp",template:t(1477),styles:[]}),o.b("design:paramtypes",[c.a,a.a,a.b,l.a])],CostscentresListComponent)}(i.a)},1476:function(n,e){n.exports='<form #modelForm="ngForm" autocomplete="off">\r\n\r\n    <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n        <button md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n            <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n        </button>\r\n    </div>\r\n\r\n    \x3c!-- name --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="name" name="name" [(ngModel)]="model.name" mdInput placeholder="Nombre del Centro de Costo">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- estado --\x3e\r\n    <div class=\'col-sm-12 col-md-3\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\'col-sm-12 col-md-12\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <textarea type="text" id="description" name="description" [(ngModel)]="model.description" mdInput placeholder="Descripción">\r\n                </textarea>\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--tipo --\x3e\r\n    <div class="col-sm-12 col-md-4 col-lg-4">\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Tipo" [(ngModel)]="model.costcentretype_id" name="costcentretype_id" id="costcentretype_id">\r\n                <md-option *ngFor="let item of costs_centres_types" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- operations/costs centres --\x3e\r\n    <div class="col-sm-12 col-md-4 col-lg-4">\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="C. Operation/Costos" [(ngModel)]="model.operation_cost_centre_id" name="operation_cost_centre_id"\r\n                id="operation_cost_centre_id">\r\n                <md-option *ngFor="let item of operations_costs_centres" [value]="item.id">{{item.name}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!--cost centre group --\x3e\r\n    <div class="col-sm-12 col-md-4 col-lg-4">\r\n        <div class="box-body">\r\n            <md-select class="full-width" placeholder="Grupo de Centro de Costo" [(ngModel)]="model.costcentregroup_id" name="costcentregroup_id"\r\n                id="costcentregroup_id">\r\n                <md-option *ngFor="let item of costs_centres_groups" [value]="item.id">{{item.value}}</md-option>\r\n            </md-select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="col-sm-12 col-md-12" [class.btn-action-container]="booActive">\r\n\r\n        <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n            (click)="save()">{{strAction}}</button>\r\n\r\n    </div>\r\n\r\n</form>'},1477:function(n,e){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button *ngIf="actions[0].status" md-raised-button (click)="CUD(\'Guardar\')" color="primary" class="btn-w-md no-margin-left btn-right">\r\n            <md-icon>add_circle_outline</md-icon> Nuevo\r\n        </button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'cc.id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'cc.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'code\')">Código\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'code\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'name\')">Nombre\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'operationcostcentres\')">C. Operaciones/Costos\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'operationcostcentres\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'ct.value\')">Tipo\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'ct.value\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'cg.value\')">Grupo\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'cg.value\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th *ngIf="actions[2].status" class="w-40"></th>\r\n                        <th *ngIf="actions[3].status" class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.code }}</td>\r\n                        <td>{{ item.name }}</td>\r\n                        <td>{{ item.operationcostcentres }}</td>\r\n                        <td>{{ item.costcentretype }}</td>\r\n                        <td>{{ item.costcentregroup }}</td>\r\n                        <td>{{ item.state ? \'Activo\' : \'Inactiva\' }}</td>\r\n                        <td *ngIf="actions[2].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="CUD(\'Actualizar\',item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                        <td *ngIf="actions[3].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="CUD(\'Eliminar\',item)">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n            [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1478:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Centros de Costos</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los centros de operaciones de los cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                    <costscentres-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]="strAction"></costscentres-action-cmp>\r\n                    <costscentres-list-cmp *ngIf="isOpenList"></costscentres-list-cmp>\r\n                </div>               \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=9.758288d23eccffe96c45.chunk.js.map