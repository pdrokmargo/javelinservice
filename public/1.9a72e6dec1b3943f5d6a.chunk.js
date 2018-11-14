webpackJsonp([1],{1421:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"UsersModule",function(){return u});var t=r(5),o=r(2),s=r(31),i=r(26),a=r(276),l=r(1435),c=r(591),d=r(1463),p=r(1464),m=[{path:"",component:l.a}],u=function(){function UsersModule(){}return UsersModule=t.a([r.i(o.NgModule)({imports:[s.CommonModule,i.g.forChild(m),a.a,c.a.forRoot()],declarations:[l.a,d.a,p.a]})],UsersModule)}()},1435:function(e,n,r){"use strict";r.d(n,"a",function(){return i});var t=r(5),o=r(2),s=r(592),i=function(e){function UsersComponent(){return e.call(this)||this}return t.c(UsersComponent,e),UsersComponent.prototype.ngOnInit=function(){},UsersComponent=t.a([r.i(o.Component)({selector:"users-cmp",template:r(1503),styles:[]}),t.b("design:paramtypes",[])],UsersComponent)}(s.a)},1463:function(e,n,r){"use strict";r.d(n,"a",function(){return p});var t=r(5),o=r(2),s=r(34),i=(r.n(s),r(18)),a=r(26),l=r(72),c=r(1435),d=r(20),p=function(e){function UserActionComponent(n,r,t,o,s,i){var a=e.call(this)||this;return a.loaderService=n,a.helperService=r,a.snackBar=t,a.route=o,a.router=s,a.comp=i,a._model={user:{status:!0},userprofiles:[]},a.ref=void 0,a.companies=[],a.userprofiles=[],a.company_userprofile={},a.booEmailValid=!1,a.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",a}return t.c(UserActionComponent,e),UserActionComponent.prototype.ngOnInit=function(){this.getUserProfiles(),this.getCompanies(),void 0!=this.numId&&this.getDataById()},UserActionComponent.prototype.getUserProfiles=function(){var e=this;this.helperService.GET("/api/userprofile?all=1").subscribe(function(n){var r=n.json();e.userprofiles=r.data},function(e){console.log(e)})},UserActionComponent.prototype.getCompanies=function(){var e=this;this.helperService.GET("/api/company").subscribe(function(n){var r=n.json();e.companies=r.data},function(e){console.log(e)})},UserActionComponent.prototype.save=function(){var e=this;if(0===this._model.userprofiles.length)return this.snackBar.open("El usuario debe estar vinculado por lo menos a una empresa","Error",{duration:4e3}),!1;switch(this._model.userprofiles.map(function(n){n.default&&(e._model.user.company_default_id=n.company_id,e._model.user.user_profile_id=n.user_profile_id)}),this.loaderService.display(!0),this.strAction){case"Guardar":this.helperService.POST("/api/users",this._model).subscribe(function(n){var r=n.json();r.store&&(e.snackBar.open(r.message,"Guardado",{duration:4e3}),e.goList())},function(n){e.loaderService.display(!1),e.snackBar.open(n.message,"Guardado",{duration:4e3})});break;case"Actualizar":this.helperService.PUT("/api/users/"+this.numId,this._model).subscribe(function(n){var r=n.json();r.update&&(e.snackBar.open(r.message,"Actualización",{duration:4e3}),e.comp.openList())},function(n){e.loaderService.display(!1),e.snackBar.open(n.message,"Actualización",{duration:4e3})});break;case"Eliminar":this.helperService.DELETE("/api/users/"+this.numId).subscribe(function(n){var r=n.json();r.delete&&(e.snackBar.open(r.message,"Eliminación",{duration:4e3}),e.comp.openList())},function(n){e.loaderService.display(!1),e.snackBar.open(n.message,"Eliminación",{duration:4e3})})}},UserActionComponent.prototype.getDataById=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/users/"+this.numId).subscribe(function(n){var r=n.json();e.ref=r.data.user.email,e._model=r.data,e._model.userprofiles.map(function(n){n.default=!1,n.company_id==e._model.user.company_default_id&&(n.default=!0)}),e.loaderService.display(!1)},function(n){e.loaderService.display(!1),console.log(n)})},UserActionComponent.prototype.isDefault=function(e){this._model.userprofiles.map(function(e){e.default=!1}),e.default=!0},UserActionComponent.prototype.addCompany=function(){var e=this,n={company_id:this.company_userprofile.company.id,company_name:this.company_userprofile.company.name,user_profile_id:this.company_userprofile.userprofile.id,user_profile_description:this.company_userprofile.userprofile.up_description,default:!1};if(0==this._model.userprofiles.length)n.default=!0,this._addCompany(n);else{var r=!1;this._model.userprofiles.forEach(function(t,o){t.company_id==n.company_id&&(r=!0),o==e._model.userprofiles.length-1&&(r?e.snackBar.open("El usuario ya tiene un perfil registrado en esta empresa","Error",{duration:4e3}):e._addCompany(n))})}},UserActionComponent.prototype._addCompany=function(e){this._model.userprofiles.push(e),this.company_userprofile={}},UserActionComponent.prototype.removeCompany=function(e){this._model.userprofiles.length>0&&e.default&&(this._model.userprofiles[0].default=!0),this._model.userprofiles.splice(this._model.userprofiles.indexOf(e),1)},UserActionComponent.prototype.goList=function(){this.comp.openList()},UserActionComponent=t.a([r.i(o.Component)({selector:"user-action-cmp",template:r(1501),styles:[".add-company-panel {\n            width: 100%;\n            max-width: 700px;\n            margin: 15px auto;\n            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n            padding: 20px 0;\n            border-radius: 4px;\n        }\n        .add-company-panel h3 {\n            color: #b7b7b7;\n            margin-top: 0;\n            font-size: 1.8em;\n        }\n        "]}),t.b("design:paramtypes",[d.a,d.b,i.c,a.b,a.a,c.a])],UserActionComponent)}(l.a)},1464:function(e,n,r){"use strict";r.d(n,"a",function(){return d});var t=r(5),o=r(2),s=r(34),i=(r.n(s),r(26)),a=r(71),l=r(20),c=r(1435),d=function(e){function UserListComponent(n,r,t,o){var s=e.call(this,n,r)||this;return s.loaderService=n,s.helperService=r,s.router=t,s.comp=o,s.urlApi="/api/users",s}return t.c(UserListComponent,e),UserListComponent.prototype.ngOnInit=function(){this.getAll()},UserListComponent.prototype.CUD=function(e,n){switch(this.comp.strAction=e,e){case"Guardar":this.comp.id=void 0;break;default:this.comp.id=n.id}this.comp.openActions()},UserListComponent=t.a([r.i(o.Component)({selector:"user-list-cmp",template:r(1502),styles:[]}),t.b("design:paramtypes",[l.a,l.b,i.a,c.a])],UserListComponent)}(a.a)},1501:function(e,n){e.exports='<form #modelForm="ngForm" autocomplete="off">\r\n    <div class="row">\r\n        <div class="col-sm-12 margin-bottom">\r\n            <button md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n                <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-sm-12 margin-bottom">\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <md-slide-toggle checked="true" id="status" name="status" [(ngModel)]="_model.user.status"> Estado </md-slide-toggle>\r\n            </div>\r\n        </div>\r\n        \x3c!--user.firstname--\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="firstname" name="firstname" [(ngModel)]="_model.user.firstname" mdInput placeholder="Nombres">\r\n            </md-input-container>\r\n        </div>\r\n        \x3c!--user.lastname--\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="lastname" name="lastname" [(ngModel)]="_model.user.lastname" mdInput placeholder="Apellidos">\r\n            </md-input-container>\r\n        </div>\r\n        <div class="col-sm-12 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input #email="ngModel" [userEmailValid]="ref" [pattern]="emailPattern" required type="email" id="email" name="email" [(ngModel)]="_model.user.email"\r\n                    mdInput placeholder="Correo electrónico">\r\n                <md-error *ngIf="email.errors?.userEmailValid">Correo electrónico ya se encuentra registrado en el sistema</md-error>\r\n                <md-error *ngIf="email.errors?.pattern">Formato errado</md-error>\r\n            </md-input-container>\r\n        </div>\r\n        \x3c!--user.username--\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="nope" autocorrect="off" autocapitalize="off" spellcheck="false" required type="text" id="username" name="username"\r\n                    [(ngModel)]="_model.user.username" mdInput placeholder="Nombre de Usuario">\r\n            </md-input-container>\r\n        </div>\r\n        \x3c!-- user.password --\x3e\r\n        <div class="col-sm-12 col-md-6 margin-bottom" *ngIf="strAction == \'Guardar\'">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false" required type="password" id="password"\r\n                    name="password" [(ngModel)]="_model.user.password" mdInput placeholder="Contraseña" reverse="true">\r\n            </md-input-container>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="row">\r\n        <div class="add-company-panel">\r\n            <div class="col-sm-12 margin-bottom">\r\n                <h3>Añadir Empresa</h3>\r\n            </div>\r\n            \x3c!-- company --\x3e\r\n            <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n                <md-select class="full-width" placeholder="Empresa" [(ngModel)]="company_userprofile.company" name="company_id" id="company_id">\r\n                    <md-option *ngFor="let item of companies" [value]="item" [hidden]="item.hide">{{item.name}}</md-option>\r\n                </md-select>\r\n            </div>\r\n            \x3c!-- user profile --\x3e\r\n            <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n                <md-select class="full-width" placeholder="Perfil de usuario" [(ngModel)]="company_userprofile.userprofile" name="user_profile_id"\r\n                    id="user_profile_id">\r\n                    <md-option *ngFor="let item of userprofiles" [value]="item">{{item.up_description}}</md-option>\r\n                </md-select>\r\n            </div>\r\n            <div class="col-sm-12 col-md-4 margin-bottom">\r\n                <div class="flex">\r\n                    <span class="flex-spacer"></span>\r\n                    <button [disabled]="!(company_userprofile.company && company_userprofile.userprofile)" type="button" md-raised-button color="primary"\r\n                        class="btn-w-md no-margin-left" (click)="addCompany()">Añadir</button>\r\n                </div>\r\n\r\n            </div>\r\n            <div class="col-sm-12">\r\n                <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n                    <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Empresa</th>\r\n                                <th>Perfil de Usuario</th>\r\n                                <th class="w-108"></th>\r\n                                <th class="w-40"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor="let item of _model.userprofiles">\r\n                                <td>{{ item.company_name }}</td>\r\n                                <td>{{ item.user_profile_description }}</td>\r\n                                <td class="w-108">\r\n                                    <button *ngIf="!item.default" type="button" md-button (click)="isDefault(item)">\r\n                                        <span style="color: #bfbaba">Default</span>\r\n                                    </button>\r\n                                    <button *ngIf="item.default" type="button" md-raised-button md-button (click)="isDefault(item)" color="primary"> Default </button>\r\n                                </td>\r\n                                <td class="w-40" title="Remover empresa">\r\n                                    <button type="button" md-icon-button class="text-danger" (click)="removeCompany(item)">\r\n                                        <md-icon>delete</md-icon>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-sm-12">\r\n            <button type="button" [disabled]="!modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n                (click)="save()">{{strAction}}</button>\r\n        </div>\r\n    </div>\r\n</form>'},1502:function(e,n){e.exports='    \x3c!-- LIST --\x3e\r\n    <div class="row">\r\n        <div class="col-md-6">\r\n            <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n                <div style="width: 34px" class="input-group-addon">\r\n                    <a style="cursor:pointer" (click)="getAll()">\r\n                        <i class="fa fa-search"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n            <button *ngIf="actions[0].status" md-raised-button (click)="CUD(\'Guardar\')" color="primary" class="btn-w-md no-margin-left btn-right">\r\n                <md-icon>add_circle_outline</md-icon> Nuevo\r\n            </button>\r\n        </div>\r\n        <div class="col-sm-12">\r\n\r\n            <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n                <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="noAuto" (click)="sort(\'u.id\')">ID\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'username\')">Nombre de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'username\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'firstname\')">Nombre\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'firstname\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'up_description\')">Perfil de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'up_description\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'c.name\')">Empresa\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'c.name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            \x3c!--th (click)="sort(\'last_access\')">Ultimo Acceso\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'last_access\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th--\x3e\r\n                            <th (click)="sort(\'u.status\')">Estado\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.status\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th *ngIf="actions[2].status" class="w-40"></th>\r\n                            <th *ngIf="actions[3].status" class="w-40"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor="let item of list.data">\r\n                            <td class="noAuto">{{ item.id }}</td>\r\n                            <td>{{ item.username }}</td>\r\n                            <td>{{ item.firstname + \' \' + item.lastname }}</td>\r\n                            <td>{{ item.user_profile }}</td>\r\n                            <td>{{ item.company }}</td>\r\n                            \x3c!--td>{{ item.last_access }}</td--\x3e\r\n                            <td>{{ item.status ? \'Activo\' : \'Inactivo\' }}</td>\r\n                            <td *ngIf="actions[2].status" class="w-40">\r\n                                <button type="button" md-icon-button class="text-primary" (click)="CUD(\'Actualizar\',item)">\r\n                                    <md-icon>mode_edit</md-icon>\r\n                                </button>\r\n                            </td>\r\n                            <td *ngIf="actions[3].status" class="w-40">\r\n                                <button type="button" md-icon-button class="text-danger" (click)="CUD(\'Eliminar\',item)">\r\n                                    <md-icon>delete</md-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n            <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n                [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n        </div>\r\n    </div>'},1503:function(e,n){e.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Usuarios</h1>\r\n        </div>\r\n        <p class="hero-tagline">\r\n            A través de esta opción, usted podrá administrar los usuario que acceden al sistema y definir perfiles que permitan limitar\r\n            el uso de las vistas no autorizadas.\r\n        </p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n                    <user-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]="strAction"></user-action-cmp>\r\n                    <user-list-cmp *ngIf="isOpenList"></user-list-cmp>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=1.9a72e6dec1b3943f5d6a.chunk.js.map