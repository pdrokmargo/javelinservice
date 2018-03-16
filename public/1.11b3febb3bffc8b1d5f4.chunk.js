webpackJsonp([1],{1427:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"UserprofileModule",function(){return m});var i=r(5),t=r(2),o=r(30),s=r(29),a=r(284),c=r(1461),l=r(1460),p=r(1440),d=r(599),u=[{path:"",component:p.a}],m=function(){function UserprofileModule(){}return UserprofileModule=i.a([r.i(t.NgModule)({imports:[o.CommonModule,s.g.forChild(u),a.a,d.a.forRoot()],declarations:[p.a,c.a,l.a]})],UserprofileModule)}()},1440:function(e,n,r){"use strict";r.d(n,"a",function(){return a});var i=r(5),t=r(2),o=r(56),s=(r.n(o),r(147)),a=function(e){function UserprofileComponent(){return e.call(this)||this}return i.c(UserprofileComponent,e),UserprofileComponent.prototype.ngOnInit=function(){},UserprofileComponent=i.a([r.i(t.Component)({selector:"userprofile-cmp",template:r(1490),styles:[]}),i.b("design:paramtypes",[])],UserprofileComponent)}(s.a)},1460:function(e,n,r){"use strict";r.d(n,"a",function(){return d});var i=r(5),t=r(2),o=r(56),s=(r.n(o),r(36)),a=r(29),c=r(146),l=r(42),p=r(1440),d=function(e){function UserprofileActionComponent(n,r,i,t,o,s){var a=e.call(this)||this;return a.loaderService=n,a.helperService=r,a.snackBar=i,a.route=t,a.router=o,a.comp=s,a.viewactions=[],a.action_active=!1,a.str_action="Guardar",a.booActive=!1,a}return i.c(UserprofileActionComponent,e),UserprofileActionComponent.prototype.ngOnInit=function(){this.clean(),this.getViewActions(),this.numId>0?(this.str_action="Actualizar",this.getDataById()):this.str_action="Guardar"},UserprofileActionComponent.prototype.getViewActions=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/viewactions").map(function(n){var r=n.json();e.viewactions=r.data}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserprofileActionComponent.prototype.save=function(){var e=this;this.model.id>0?(this.model.privileges=[],this.viewactions.forEach(function(n){var r=0;n.actions.forEach(function(i){i.status&&0===r&&(e.model.privileges.push(n),r++)})}),this.loaderService.display(!0),this.helperService.PUT("/api/userprofile/"+this.numId,this.model).map(function(n){var r=n.json();"success"===r.status&&(e.snackBar.open(r.message,"Actualización",{duration:3500}),e.comp.openList())}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})):(this.viewactions.forEach(function(n){var r=0;n.actions.forEach(function(i){i.status&&0===r&&(e.model.privileges.push(n),r++)})}),this.helperService.POST("/api/userprofile",this.model).map(function(n){var r=n.json();"success"===r.status&&(e.snackBar.open(r.message,"Guardado",{duration:3500}),e.clean())}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)}))},UserprofileActionComponent.prototype.getDataById=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/userprofile/"+this.numId).map(function(n){var r=n.json();e.model=r.data,e.viewactions.forEach(function(n){n.actions.forEach(function(r){e.model.privileges.forEach(function(e){e.view_id===n.view_id&&e.actions.forEach(function(e){r.action===e.action&&(r.status=e.status)})})})})}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserprofileActionComponent.prototype.clean=function(){this.model={},this.model.up_state=!0,this.model.privileges=[]},UserprofileActionComponent.prototype.expandPrivileges=function(e){e.expand=!e.expand},UserprofileActionComponent.prototype.checkAll=function(e){e.actions.forEach(function(n){n.status=e.check})},UserprofileActionComponent.prototype.goList=function(){this.comp.openList()},UserprofileActionComponent=i.a([r.i(t.Component)({selector:"userprofile-action-cmp",template:r(1488),styles:[]}),i.b("design:paramtypes",[l.a,l.b,s.c,a.b,a.a,p.a])],UserprofileActionComponent)}(c.a)},1461:function(e,n,r){"use strict";r.d(n,"a",function(){return p});var i=r(5),t=r(2),o=r(56),s=(r.n(o),r(29)),a=r(112),c=r(42),l=r(1440),p=function(e){function UserprofileListComponent(n,r,i,t){var o=e.call(this,n,r)||this;return o.loaderService=n,o.helperService=r,o.router=i,o.comp=t,o.urlApi="/api/userprofile",o}return i.c(UserprofileListComponent,e),UserprofileListComponent.prototype.ngOnInit=function(){this.getAll()},UserprofileListComponent.prototype.NEW=function(e){this.comp.openActions(),this.comp.id=0},UserprofileListComponent.prototype.view=function(e){this.comp.openActions(),this.comp.id=e.id},UserprofileListComponent=i.a([r.i(t.Component)({selector:"userprofile-list-cmp",template:r(1489),styles:[]}),i.b("design:paramtypes",[c.a,c.b,s.a,l.a])],UserprofileListComponent)}(a.a)},1488:function(e,n){e.exports='\r\n\r\n\x3c!-- FORM --\x3e\r\n\r\n<form #modelForm="ngForm" autocomplete="off">\r\n\r\n    <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n        <button md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n    </div>                            \r\n    \r\n    \x3c!-- name --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="name" name="name" [(ngModel)]="model.up_description" mdInput placeholder="Nombre del Perfil de Usuario">\r\n            </md-input-container>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- estado --\x3e\r\n    <div class=\'col-sm-12 col-md-6\'>\r\n        <div class="box-body">\r\n            <md-slide-toggle [labelPosition]="after" id="up_state" name="up_state" [(ngModel)]="model.up_state">Estado</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n    \r\n    <article class="article">\r\n        <h2 class="article-title"></h2>                          \r\n            \r\n            <section class="hero">\r\n            <div class="hero-content">                                                \r\n                <h1 class="hero-title">Privilegios</h1>                                                \r\n            </div>\r\n            <p class="hero-tagline">Selecciona un componente sobre el cual desea modificar sus privilegios de acceso para este perfil</p>\r\n        </section>                                        \r\n\r\n            <div class="col-xl-12" *ngFor="let item of viewactions" >\r\n            <div class="box" *ngIf="item.views.link!=\'\'">\r\n                <div class="box-header bg-color-dark" style="cursor:pointer;" (click)="item.expand=!item.expand">\r\n                    <a style="cursor:pointer;" (click)="item.expand=!item.expand">\r\n                        <i class="fa fa-plus-square-o" [hidden]="item.expand" aria-hidden="true"></i>\r\n                        <i class="fa fa-minus-square-o" [hidden]="!item.expand" aria-hidden="true"></i>\r\n                    </a>\r\n                    {{ item.views.title }}\r\n\r\n                    <a style="cursor:pointer;" class="pull-right" style="cursor:pointer;" (click)="item.expand=!item.expand">\r\n                        <i [hidden]="item.expand" class="fa fa-angle-double-up" aria-hidden="true"></i>\r\n                        <i [hidden]="!item.expand" class="fa fa-angle-double-down" aria-hidden="true"></i>\r\n                    </a>\r\n                </div>\r\n                <div class="box-body bg-color-white" [hidden]="!item.expand">\r\n                    <p>\r\n                        <md-checkbox (change)="item.check=!item.check;checkAll(item)" [checked]="item.check">Seleccionar</md-checkbox>\r\n                    </p>\r\n                    <p *ngFor="let act of item.actions" >\r\n                        <md-checkbox (change)="act.status=!act.status;" [checked]="act.status">{{ act.action }}</md-checkbox>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            </div>\r\n                                                                                                                \r\n    </article>\r\n\r\n    <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n\r\n        <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary"\r\n        class="btn-w-md no-margin-left btn-right" (click)="save()">{{str_action}}</button>\r\n        \r\n    </div>\r\n    \r\n</form>\r\n\r\n'},1489:function(e,n){e.exports='\r\n\x3c!-- LIST --\x3e\r\n<div class="row">\r\n        <div class="col-md-6">\r\n            <div class="input-group mb-2 mr-sm-2 mb-sm-0">                                    \r\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar"\r\n                [(ngModel)]="search" (keydown)="enter($event)">\r\n                <div style="width: 34px" class="input-group-addon">\r\n                    <a style="cursor:pointer" (click)="getAll()"><i class="fa fa-search"></i></a> \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n            <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>                                                        \r\n        </div>  \r\n    \r\n    <div class="col-sm-12">\r\n        \r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n            \r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n            <thead>\r\n                <tr>\r\n                    <th (click)="sort(\'id\')">ID\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>                   \r\n                    <th (click)="sort(\'up_description\')">Perfil de Usuraio\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'up_description\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th (click)="sort(\'up_state\')">Estado\r\n                        <span class="glyphicon sort-icon" *ngIf="key ==\'up_state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                    </th>\r\n                    <th></th>                                        \r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor="let item of list.data">\r\n                    <td>{{ item.id }}</td>\r\n                    <td>{{ item.up_description }}</td>                                            \r\n                    <td>{{ item.state ? \'Activa\' : \'Inactiva\' }}</td>\r\n                    <td class="text-center">\r\n                        <a style="color:#0a6ebd;cursor: pointer;" (click)="view(item)">\r\n                            <i class="fa fa-pencil fa-2x"></i>\r\n                        </a>\r\n                    </td>\r\n                </tr>                                          \r\n            </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="6" [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n        \r\n    </div>\r\n</div>                  \r\n'},1490:function(e,n){e.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Perfiles de Usuario</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los perfiles de usuario de las cuales son necesarias para...</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n\r\n                    <userprofile-action-cmp [numId]="id" *ngIf="isOpenActions"></userprofile-action-cmp>\r\n                    <userprofile-list-cmp *ngIf="isOpenList"></userprofile-list-cmp>\r\n\r\n                </div>                     \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>    '}});
//# sourceMappingURL=1.11b3febb3bffc8b1d5f4.chunk.js.map