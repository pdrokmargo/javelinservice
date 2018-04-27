webpackJsonp([1],{1430:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"UsersModule",function(){return u});var t=r(5),o=r(2),s=r(32),i=r(26),a=r(276),c=r(1444),l=r(593),d=r(1471),m=r(1472),p=[{path:"",component:c.a}],u=function(){function UsersModule(){}return UsersModule=t.a([r.i(o.NgModule)({imports:[s.CommonModule,i.g.forChild(p),a.a,l.a.forRoot()],declarations:[c.a,d.a,m.a]})],UsersModule)}()},1444:function(n,e,r){"use strict";r.d(e,"a",function(){return i});var t=r(5),o=r(2),s=r(594),i=function(n){function UsersComponent(){return n.call(this)||this}return t.c(UsersComponent,n),UsersComponent.prototype.ngOnInit=function(){},UsersComponent=t.a([r.i(o.Component)({selector:"users-cmp",template:r(1511),styles:[]}),t.b("design:paramtypes",[])],UsersComponent)}(s.a)},1471:function(n,e,r){"use strict";r.d(e,"a",function(){return m});var t=r(5),o=r(2),s=r(31),i=(r.n(s),r(18)),a=r(26),c=r(72),l=r(1444),d=r(20),m=function(n){function UserActionComponent(e,r,t,o,s,i){var a=n.call(this)||this;return a.loaderService=e,a.helperService=r,a.snackBar=t,a.route=o,a.router=s,a.comp=i,a.companies=[],a.user_profiles=[],a.model_user_company={},a.booEmailValid=!1,a.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",a}return t.c(UserActionComponent,n),UserActionComponent.prototype.ngOnInit=function(){this.clean(),this.getUserProfiles(),this.getCompanies(),void 0!=this.numId&&this.getDataById()},UserActionComponent.prototype.getUserProfiles=function(){var n=this;this.helperService.GET("/api/userprofile?all=1").map(function(e){var r=e.json();n.user_profiles=r.data}).subscribe(function(n){},function(n){})},UserActionComponent.prototype.getCompanies=function(){var n=this;this.helperService.GET("/api/company").map(function(e){var r=e.json();n.companies=r.data}).subscribe(function(n){},function(n){})},UserActionComponent.prototype.save=function(){var n=this;if(0===this.model.usersprivileges.length)return this.snackBar.open("Agregue una empresa para continuar.","Error",{duration:4e3}),!1;switch(this.loaderService.display(!0),this.strAction){case"Guardar":this.helperService.POST("/api/users",this.model).subscribe(function(e){var r=e.json();r.store&&(n.snackBar.open(r.message,"Guardado",{duration:4e3}),n.goList())},function(e){n.loaderService.display(!1),n.snackBar.open(e.message,"Guardado",{duration:4e3})});break;case"Actualizar":this.helperService.PUT("/api/users/"+this.numId,this.model).subscribe(function(e){var r=e.json();r.update&&(n.snackBar.open(r.message,"Actualización",{duration:4e3}),n.comp.openList())},function(e){n.loaderService.display(!1),n.snackBar.open(e.message,"Actualización",{duration:4e3})});break;case"Eliminar":this.helperService.DELETE("/api/users/"+this.numId).subscribe(function(e){var r=e.json();r.delete&&(n.snackBar.open(r.message,"Eliminación",{duration:4e3}),n.comp.openList())},function(e){n.loaderService.display(!1),n.snackBar.open(e.message,"Eliminación",{duration:4e3})})}},UserActionComponent.prototype.getDataById=function(){var n=this;this.loaderService.display(!0),this.helperService.GET("/api/users/"+this.numId).map(function(e){var r=e.json();n.model=r.data,n.refreshCompany()}).subscribe(function(e){n.loaderService.display(!1)},function(e){n.loaderService.display(!1)})},UserActionComponent.prototype.clean=function(){this.model={},this.model.usersprivileges=[],this.model.status=!0},UserActionComponent.prototype.refreshCompany=function(){var n=0;for(n=0;n<this.companies.length;n++){var e=0;for(e=0;e<this.model.usersprivileges.length;e++)this.model.usersprivileges[e].company_id===this.companies[n].id?this.companies[n].hide=!0:this.companies[n].hide=!1}},UserActionComponent.prototype.addCompany=function(){this.model_user_company.company_id=this.model_user_company.company.id,this.model_user_company.user_profile_id=this.model_user_company.userprofile.id,this.model.usersprivileges.push(this.model_user_company),this.model_user_company={},this.model_user_company.id=0,this.refreshCompany()},UserActionComponent.prototype.removeCompany=function(n){if(n.id>0&&n.company_id===this.model.company_default_id)return this.snackBar.open("Usted no puede remover una empresa activa!","Error",{duration:4e3}),!1;var e=this.model.usersprivileges.indexOf(n);this.model.usersprivileges.splice(e,1),this.refreshCompany()},UserActionComponent.prototype.goList=function(){this.comp.openList()},UserActionComponent=t.a([r.i(o.Component)({selector:"user-action-cmp",template:r(1509),styles:[]}),t.b("design:paramtypes",[d.a,d.b,i.c,a.b,a.a,l.a])],UserActionComponent)}(c.a)},1472:function(n,e,r){"use strict";r.d(e,"a",function(){return d});var t=r(5),o=r(2),s=r(31),i=(r.n(s),r(26)),a=r(71),c=r(20),l=r(1444),d=function(n){function UserListComponent(e,r,t,o){var s=n.call(this,e,r)||this;return s.loaderService=e,s.helperService=r,s.router=t,s.comp=o,s.urlApi="/api/users",s}return t.c(UserListComponent,n),UserListComponent.prototype.ngOnInit=function(){this.getAll()},UserListComponent.prototype.CUD=function(n,e){switch(this.comp.strAction=n,n){case"Guardar":this.comp.id=void 0;break;default:this.comp.id=e.id}this.comp.openActions()},UserListComponent=t.a([r.i(o.Component)({selector:"user-list-cmp",template:r(1510),styles:[]}),t.b("design:paramtypes",[c.a,c.b,i.a,l.a])],UserListComponent)}(a.a)},1509:function(n,e){n.exports='<div class="box-body">\r\n\r\n    \x3c!--FORM--\x3e\r\n\r\n    <form #modelForm="ngForm" autocomplete="off">\r\n        <div class="col-sm-12 margin-bottom">\r\n            <button md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n                <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n            </button>\r\n        </div>\r\n        <div class="col-sm-12 margin-bottom">\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <md-slide-toggle checked="true" id="status" name="status" [(ngModel)]="model.status"> Estado </md-slide-toggle>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="firstname" name="firstname" [(ngModel)]="model.firstname" mdInput placeholder="Nombres">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="lastname" name="lastname" [(ngModel)]="model.lastname" mdInput placeholder="Apellidos">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="nope" autocorrect="off" autocapitalize="off" spellcheck="false" required type="text" id="username" name="username"\r\n                    [(ngModel)]="model.username" mdInput placeholder="Nombre de Usuario">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false" [required]="!model.id" [disabled]="model.id"\r\n                    type="password" id="password" name="password" [(ngModel)]="model.password" mdInput placeholder="Contraseña"\r\n                    reverse="true">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input #email="ngModel" userEmailValid [pattern]="emailPattern" required type="email" id="email" name="email" [(ngModel)]="model.email"\r\n                    mdInput placeholder="Correo electrónico">\r\n                <md-icon *ngIf="booEmailValid" mdSuffix>cached</md-icon>\r\n                <md-error *ngIf="email.errors?.userEmailValid">Correo electrónico ya se encuentra registrado en el sistema</md-error>\r\n                <md-error *ngIf="email.errors?.pattern">Formato errado</md-error>\r\n            </md-input-container>\r\n        </div>\r\n\r\n\r\n\r\n    </form>\r\n\r\n\r\n</div>\r\n\r\n<div class="box-body">\r\n\r\n\r\n    <form #companyForm="ngForm" autocomplete="off">\r\n\r\n        \x3c!-- company --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-select required class="full-width" placeholder="Empresa" [(ngModel)]="model_user_company.company" name="company_id" id="company_id">\r\n                <md-option *ngFor="let item of companies" [value]="item" [hidden]="item.hide">{{item.name}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        \x3c!-- user profile --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-select required class="full-width" placeholder="Perfil de usuario" [(ngModel)]="model_user_company.userprofile" name="user_profile_id"\r\n                id="user_profile_id">\r\n                <md-option *ngFor="let item of user_profiles" [value]="item">{{item.up_description}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-4 margin-bottom">\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <button type="button" md-raised-button color="primary" class="btn-w-md no-margin-left" [disabled]="!companyForm.form.valid"\r\n                    (click)="addCompany()">Añadir Empresa</button>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n    <div class="col-sm-12">\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <td class="w-40" *ngIf="str_action == \'Actualizar\'"></td>\r\n                        <th>Empresa</th>\r\n                        <th>Perfil de Usuario</th>\r\n                        <th class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of model.usersprivileges">\r\n                        <td class="w-40" *ngIf="str_action == \'Actualizar\'">\r\n                            <md-icon title="Registro guardado" class="text-success" *ngIf="item.company_id == model.company_default_id">check</md-icon>\r\n                        </td>\r\n                        <td>{{ item.company?.name }}</td>\r\n                        <td>{{ item.userprofile?.up_description }}</td>\r\n\r\n                        <td class="w-40" title="Remover empresa">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="removeCompany(item)">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-12">\r\n        <button [disabled]="!modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="save()">{{strAction}}</button>\r\n    </div>\r\n\r\n\r\n</div>'},1510:function(n,e){n.exports='<div class="box-body">\r\n    \x3c!-- LIST --\x3e\r\n    <div class="row">\r\n        <div class="col-md-6">\r\n            <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n                <div style="width: 34px" class="input-group-addon">\r\n                    <a style="cursor:pointer" (click)="getAll()">\r\n                        <i class="fa fa-search"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n            <button *ngIf="actions[0].status" md-raised-button (click)="CUD(\'Guardar\')" color="primary" class="btn-w-md no-margin-left btn-right">\r\n                <md-icon>add_circle_outline</md-icon> Nuevo\r\n            </button>\r\n        </div>\r\n        <div class="col-sm-12">\r\n\r\n            <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n                <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="noAuto" (click)="sort(\'u.id\')">ID\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'username\')">Nombre de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'username\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'firstname\')">Nombre\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'firstname\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'up_description\')">Perfil de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'up_description\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'c.name\')">Empresa\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'c.name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            \x3c!--th (click)="sort(\'last_access\')">Ultimo Acceso\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'last_access\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th--\x3e\r\n                            <th (click)="sort(\'u.status\')">Estado\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.status\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th *ngIf="actions[2].status" class="w-40"></th>\r\n                            <th *ngIf="actions[3].status" class="w-40"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor="let item of list.data">\r\n                            <td class="noAuto">{{ item.id }}</td>\r\n                            <td>{{ item.username }}</td>\r\n                            <td>{{ item.firstname + \' \' + item.lastname }}</td>\r\n                            <td>{{ item.user_profile }}</td>\r\n                            <td>{{ item.company }}</td>\r\n                            \x3c!--td>{{ item.last_access }}</td--\x3e\r\n                            <td>{{ item.status ? \'Activo\' : \'Inactivo\' }}</td>\r\n                            <td *ngIf="actions[2].status" class="w-40">\r\n                                <button type="button" md-icon-button class="text-primary" (click)="CUD(\'Actualizar\',item)">\r\n                                    <md-icon>mode_edit</md-icon>\r\n                                </button>\r\n                            </td>\r\n                            <td *ngIf="actions[3].status" class="w-40">\r\n                                <button type="button" md-icon-button class="text-danger" (click)="CUD(\'Eliminar\',item)">\r\n                                    <md-icon>delete</md-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n            <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n                [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n        </div>\r\n    </div>\r\n</div>'},1511:function(n,e){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Usuarios</h1>\r\n        </div>\r\n        <p class="hero-tagline">\r\n            A través de esta opción, usted podrá administrar los usuario que acceden al sistema y definir perfiles que permitan limitar\r\n            el uso de las vistas no autorizadas.\r\n        </p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                \r\n                <user-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]="strAction"></user-action-cmp>\r\n                <user-list-cmp *ngIf="isOpenList"></user-list-cmp>\r\n\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=1.3274906c5adffe397e2d.chunk.js.map