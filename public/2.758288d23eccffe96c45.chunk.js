webpackJsonp([2],{1420:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"UserprofileModule",function(){return u});var r=t(5),i=t(2),o=t(31),s=t(26),a=t(276),c=t(1462),l=t(1461),d=t(1434),p=t(591),m=[{path:"",component:d.a}],u=function(){function UserprofileModule(){}return UserprofileModule=r.a([t.i(i.NgModule)({imports:[o.CommonModule,s.g.forChild(m),a.a,p.a.forRoot()],declarations:[d.a,c.a,l.a]})],UserprofileModule)}()},1434:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(5),i=t(2),o=t(34),s=(t.n(o),t(592)),a=function(e){function UserprofileComponent(){return e.call(this)||this}return r.c(UserprofileComponent,e),UserprofileComponent.prototype.ngOnInit=function(){},UserprofileComponent=r.a([t.i(i.Component)({selector:"userprofile-cmp",template:t(1500),styles:[]}),r.b("design:paramtypes",[])],UserprofileComponent)}(s.a)},1461:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r=t(5),i=t(2),o=t(34),s=(t.n(o),t(18)),a=t(26),c=t(72),l=t(20),d=t(1434),p=function(e){function UserprofileActionComponent(n,t,r,i,o,s){var a=e.call(this)||this;return a.loaderService=n,a.helperService=t,a.snackBar=r,a.route=i,a.router=o,a.comp=s,a.viewactions=[],a.booActive=!1,a}return r.c(UserprofileActionComponent,e),UserprofileActionComponent.prototype.ngOnInit=function(){this.clean(),this.getViewActions()},UserprofileActionComponent.prototype.getViewActions=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/viewactions").map(function(n){var t=n.json();e.viewactions=t.data,void 0!=e.numId&&e.getDataById()}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserprofileActionComponent.prototype.save=function(){var e=this;switch(this.loaderService.display(!0),this.strAction){case"Guardar":this.viewactions.forEach(function(n){var t=0;n.actions.forEach(function(r){r.status&&0===t&&(e.model.privileges.push(n),t++)})}),this.helperService.POST("/api/userprofile",this.model).subscribe(function(n){var t=n.json();t.store&&(e.snackBar.open(t.message,"Guardado",{duration:4e3}),e.comp.openList(),e.loaderService.display(!1))},function(n){e.snackBar.open(n.message,"Guardado",{duration:4e3}),e.loaderService.display(!1)});break;case"Actualizar":this.model.privileges=[],this.viewactions.forEach(function(n){var t=0;n.actions.forEach(function(r){r.status&&0===t&&(e.model.privileges.push(n),t++)})}),this.helperService.PUT("/api/userprofile/"+this.numId,this.model).subscribe(function(n){var t=n.json();t.update&&(e.snackBar.open(t.message,"Actualización",{duration:4e3}),e.comp.openList())},function(n){e.snackBar.open(n.message,"Actualización",{duration:4e3}),e.loaderService.display(!1)});break;case"Eliminar":this.helperService.DELETE("/api/userprofile/"+this.numId).subscribe(function(n){var t=n.json();t.update&&(e.snackBar.open(t.message,"Eliminación",{duration:4e3}),e.comp.openList())},function(n){e.snackBar.open(n.message,"Eliminación",{duration:4e3}),e.loaderService.display(!1)})}},UserprofileActionComponent.prototype.getDataById=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/userprofile/"+this.numId).map(function(n){var t=n.json();e.model=t.data,e.viewactions.forEach(function(n){n.actions.forEach(function(t){e.model.privileges.forEach(function(e){e.view_id===n.view_id&&(n.expand=!0,e.actions.forEach(function(e){t.action===e.action&&(t.status=e.status)}))})})})}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserprofileActionComponent.prototype.clean=function(){this.model={},this.model.up_state=!0,this.model.privileges=[]},UserprofileActionComponent.prototype.expandPrivileges=function(e){e.expand=!e.expand},UserprofileActionComponent.prototype.checkAll=function(e){e.actions.forEach(function(n){n.status=e.check})},UserprofileActionComponent.prototype.goList=function(){this.comp.openList()},UserprofileActionComponent=r.a([t.i(i.Component)({selector:"userprofile-action-cmp",template:t(1498),styles:[]}),r.b("design:paramtypes",[l.a,l.b,s.c,a.b,a.a,d.a])],UserprofileActionComponent)}(c.a)},1462:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(5),i=t(2),o=t(34),s=(t.n(o),t(26)),a=t(71),c=t(20),l=t(1434),d=function(e){function UserprofileListComponent(n,t,r,i){var o=e.call(this,n,t)||this;return o.loaderService=n,o.helperService=t,o.router=r,o.comp=i,o.urlApi="/api/userprofile",o}return r.c(UserprofileListComponent,e),UserprofileListComponent.prototype.ngOnInit=function(){this.getAll()},UserprofileListComponent.prototype.CUD=function(e,n){switch(this.comp.strAction=e,e){case"Guardar":this.comp.id=void 0;break;default:this.comp.id=n.id}this.comp.openActions()},UserprofileListComponent=r.a([t.i(i.Component)({selector:"userprofile-list-cmp",template:t(1499),styles:[]}),r.b("design:paramtypes",[c.a,c.b,s.a,l.a])],UserprofileListComponent)}(a.a)},1498:function(e,n){e.exports='\x3c!-- FORM --\x3e\r\n\r\n<form #modelForm="ngForm" autocomplete="off">\r\n\r\n    <div class="col-sm-12 margin-bottom-40">\r\n        <button md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n            <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n        </button>\r\n    </div>\r\n\r\n    \x3c!-- name --\x3e\r\n    <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="name" name="name" [(ngModel)]="model.up_description" mdInput placeholder="Nombre del Perfil de Usuario">\r\n        </md-input-container>\r\n    </div>\r\n\r\n    \x3c!-- estado --\x3e\r\n    <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n        <div class="flex">\r\n            <span class="flex-spacer"></span>\r\n            <md-slide-toggle [labelPosition]="after" id="up_state" name="up_state" [(ngModel)]="model.up_state">Estado</md-slide-toggle>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n        <div class="max-width-700">\r\n            <h3>Modulos</h3>\r\n            <p class="hero-tagline">\r\n                Seleccione los permisos de las vistas al cual tendrá acceso el perfil de usuario\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-12" *ngFor="let item of viewactions">\r\n        <div class="max-width-700" [ngStyle]="{ \r\n            \'margin-bottom\' : (!item.expand ? \'10px\' : \'0px\'), \r\n            \'padding\': (item.views.have_child ? \'0px\' : \'0px 25px\') \r\n        }">\r\n            <button class="full-width" type="button" md-raised-button color="{{ item.expand ? \'primary\' : \'secundary\' }}" (click)="item.expand = !item.expand">\r\n                <span class="flex flex-center">\r\n                    <div class="flex-spacer text-left">\r\n                        {{ item.views.title }}\r\n                    </div>\r\n                    <md-icon> {{item.expand ? \'keyboard_arrow_up\' : \'keyboard_arrow_down\'}} </md-icon>\r\n                </span>\r\n            </button>\r\n            <div class="box-body" style="background: #f0f0f0; margin-bottom: 10px" [hidden]="!item.expand">\r\n                <div class="col-sm-12">\r\n                    <md-checkbox class="margin-bottom" (change)="item.check=!item.check; checkAll(item)" [checked]="item.check">Seleccionar</md-checkbox>\r\n                    <div class="flex space-between">\r\n                        <span *ngFor="let act of item.actions">\r\n                            <md-checkbox (change)="act.status =! act.status;" [checked]="act.status">{{ act.action }}</md-checkbox>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    \x3c!--\r\n        <div class="col-sm-12" *ngFor="let item of viewactions">\r\n        <div class="max-width-700" [ngStyle]="{ \'margin-bottom\' : (!item.expand ? \'10px\' : \'0px\'), \'padding\': (item.views.have_child ? \'0px\' : \'0px 25px\') }">\r\n            <button class="full-width" type="button" md-raised-button color="{{ item.expand ? \'primary\' : \'secundary\' }}" (click)="item.expand = item.views.have_child ? false : !item.expand">\r\n                <span class="flex flex-center">\r\n                    <div class="flex-spacer text-left">\r\n                        {{ item.views.title }}\r\n                    </div>\r\n                    <md-icon *ngIf="!item.views.have_child"> {{item.expand ? \'keyboard_arrow_up\' : \'keyboard_arrow_down\'}} </md-icon>\r\n                </span>\r\n            </button>\r\n            <div *ngIf="!item.views.have_child" class="box-body" style="background: #f0f0f0; margin-bottom: 10px" [hidden]="!item.expand">\r\n                <div class="col-sm-12">\r\n                    <md-checkbox class="margin-bottom" (change)="item.check=!item.check;checkAll(item)" [checked]="item.check">Seleccionar</md-checkbox>\r\n                    <div class="flex space-between">\r\n                        <span *ngFor="let act of item.actions">\r\n                            <md-checkbox (change)="act.status=!act.status;" [checked]="act.status">{{ act.action }}</md-checkbox>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    --\x3e\r\n    <div class="col-sm-12">\r\n\r\n        <button [disabled]="!modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="save()">{{strAction}}</button>\r\n\r\n    </div>\r\n\r\n</form>'},1499:function(e,n){e.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n        <button *ngIf="actions[0].status" md-raised-button (click)="CUD(\'Guardar\')" color="primary" class="btn-w-md no-margin-left btn-right">\r\n            <md-icon>add_circle_outline</md-icon> Nuevo\r\n        </button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'up_description\')">Perfil de Usuraio\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'up_description\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th class="noAuto" (click)="sort(\'up_state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'up_state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th *ngIf="actions[2].status" class="w-40"></th>\r\n                        <th *ngIf="actions[3].status" class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.up_description }}</td>\r\n                        <td class="noAuto">{{ item.up_state ? \'Activa\' : \'Inactiva\' }}</td>\r\n                        <td *ngIf="actions[2].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="CUD(\'Actualizar\', item)">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                        <td *ngIf="actions[3].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="CUD(\'Eliminar\', item)">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="6" [rotate]="true"\r\n            [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1500:function(e,n){e.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Perfiles de Usuario</h1>\r\n        </div>\r\n        <p class="hero-tagline">A través de esta opción, usted podrá crear los perfiles de usuario de las cuales son necesarias para acceder a todas las opciones del sistema.</p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n\r\n                    <userprofile-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]="strAction"></userprofile-action-cmp>\r\n                    <userprofile-list-cmp *ngIf="isOpenList"></userprofile-list-cmp>\r\n\r\n                </div>                     \r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>    '}});
//# sourceMappingURL=2.758288d23eccffe96c45.chunk.js.map