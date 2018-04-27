webpackJsonp([13],{1424:function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"MyProfileModule",function(){return c});var o=e(5),i=e(2),a=e(32),s=e(26),t=e(276),d=e(1460),l=[{path:"",component:d.a}],c=function(){function MyProfileModule(){}return MyProfileModule=o.a([e.i(i.NgModule)({imports:[a.CommonModule,s.g.forChild(l),t.a],declarations:[d.a]})],MyProfileModule)}()},1460:function(r,n,e){"use strict";e.d(n,"a",function(){return t});var o=e(5),i=e(2),a=e(18),s=e(20),t=function(){function MyProfileComponent(r,n,e){this.loaderService=r,this.helperService=n,this.snackBar=e,this.formActive="form",this.model={},this.pass={password1:"",password2:""},this.password={confirm:""}}return MyProfileComponent.prototype.ngOnInit=function(){var r=this;this.loaderService.display(!0),this.helperService.GET("/api/profile").map(function(n){var e=n.json();r.model=e.data}).subscribe(function(n){r.loaderService.display(!1)},function(n){r.loaderService.display(!1)})},MyProfileComponent.prototype.updatePass=function(){var r=this;this.loaderService.display(!0);var n=JSON.parse(localStorage.getItem("currentUser")).username;this.helperService.PUT("/api/users/change/password/"+n,this.pass).map(function(n){var e=n.json();"success"===e.status&&(r.formActive="form",r.snackBar.open(e.message,"Actualización",{duration:3500}))}).subscribe(function(n){r.loaderService.display(!1)},function(n){r.loaderService.display(!1)})},MyProfileComponent.prototype.updateProfile=function(){var r=this;this.loaderService.display(!0),this.helperService.PUT("/api/users/"+this.model.id,this.model).map(function(n){var e=n.json();if("success"===e.status){r.snackBar.open(e.message,"Actualización",{duration:3500});var o=e.data.usercompany.userprofile.privileges;localStorage.setItem("view",JSON.stringify(o)),localStorage.setItem("objUser",JSON.stringify(e.data)),window.location.reload()}}).subscribe(function(n){r.loaderService.display(!1)},function(n){r.loaderService.display(!1)})},MyProfileComponent=o.a([e.i(i.Component)({selector:"my-profile-cmp",template:e(1493),styles:[]}),o.b("design:paramtypes",[s.a,s.b,a.c])],MyProfileComponent)}()},1493:function(r,n){r.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Mi perfil</h1>\r\n        </div>\r\n        <p class="hero-tagline">\r\n            A través de esta opción, usted podrá administrar la información de usuario.\r\n        </p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="row">\r\n                <div class="col-sm-12">\r\n                    <div class="box box-default">\r\n                        <div class="box-body">\r\n                            <div class="ibox-plain">\r\n\r\n                                <form [hidden]="formActive == \'formPass\'" #modelForm="ngForm" autocomplete="off">\r\n                                    <div class="row">\r\n\r\n                                        <div class="col-sm-12 col-md-6 col-lg-6">\r\n                                            <div class="box-body">    \r\n                                                <md-input-container class="full-width">\r\n                                                    <input type="text" readonly id="firstname" name="firstname" [(ngModel)]="model.firstname" mdInput placeholder="Nombres">\r\n                                                </md-input-container>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-12 col-md-6 col-lg-6">\r\n                                            <div class="box-body">    \r\n                                                <md-input-container class="full-width">\r\n                                                    <input type="text" readonly id="lastname" name="lastname" [(ngModel)]="model.lastname" mdInput placeholder="Apellidos">\r\n                                                </md-input-container>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-12 col-md-6 col-lg-6">\r\n                                            <div class="box-body">    \r\n                                                <md-input-container class="full-width">\r\n                                                    <input type="text" readonly id="username" name="username" [(ngModel)]="model.username" mdInput placeholder="Usuario">\r\n                                                </md-input-container>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class="col-sm-12 col-md-6 col-lg-6">\r\n                                            <div class="box-body">    \r\n                                                <md-input-container class="full-width">\r\n                                                    <input type="email" readonly id="email" name="email" [(ngModel)]="model.email" mdInput placeholder="Correo electronico">\r\n                                                </md-input-container>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\'col-sm-12 col-md-6\'>\r\n                                            <div class="box-body">                                \r\n                                                <md-select required class="full-width" placeholder="Empresa por defecto" [(ngModel)]="model.company_default_id" name="company_default_id"\r\n                                                id="company_default_id">\r\n                                                    <md-option *ngFor="let item of model.usersprivileges" [value]="item.company.id">{{item.company.name}}</md-option>\r\n                                                </md-select>    \r\n                                            </div>                                                                    \r\n                                        </div>\r\n\r\n                                        <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n                                                \r\n                                            <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary"\r\n                                            class="btn-w-md no-margin-left btn-right" (click)="updateProfile()">Guardar</button>\r\n                                          \r\n                                            <button md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="formActive = \'formPass\'">Cambiar contraseña</button>\r\n\r\n                                        </div>\r\n                                     \r\n                                        \x3c!--div class="col-sm-12 btn-right">\r\n                            <button md-raised-button color="primary" class="btn-w-md" [disabled]="!myprofileForm.form.valid">Actualizar</button>\r\n                        </div--\x3e\r\n                                    </div>\r\n                                </form>\r\n                                <form [hidden]="formActive == \'form\'" #updatePassForm="ngForm" autocomplete="off">\r\n                                    <div class="row">\r\n                                        <div class="col-sm-12">\r\n                                            <h5>Actualiza contraseña</h5>\r\n                                        </div>\r\n                                        <div class="form-group col-sm-12 col-md-6">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="password" id="password1" name="password1" [(ngModel)]="pass.password1" mdInput placeholder="Contraseña"\r\n                                                    validateEqual="password2" reverse="true">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        <div class="form-group col-sm-12 col-md-6">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="password" #password2="ngModel" id="password2" name="password2" [(ngModel)]="pass.password2" mdInput\r\n                                                    placeholder="Confirmar" validateEqual="password1" reverse="false">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        <div class="col-sm-12">\r\n                                            <small [hidden]="password2.valid || (password2.pristine && !updatePassForm.submitted)" class="text-danger">La contraseña no son iguales</small>\r\n                                        </div>\r\n                                        <div class="col-sm-12 btn-right">\r\n                                            <button md-raised-button color="primary" class="btn-w-md" [disabled]="!updatePassForm.form.valid" (click)="updatePass()">Actualiza</button>\r\n                                            <button md-raised-button color="secondary" class="btn-w-md" (click)="formActive = \'form\'; pass = {}; updatePassForm.reset();">Regresar</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=13.3274906c5adffe397e2d.chunk.js.map