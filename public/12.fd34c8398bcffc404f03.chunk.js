webpackJsonp([12],{1406:function(n,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),o.d(r,"AuthenticationModule",function(){return m});var e=o(5),t=o(31),i=o(114),a=o(13),s=o(113),d=o(1438),c=o(1437),u=o(18),l=o(2),m=function(){function AuthenticationModule(){}return AuthenticationModule=e.a([o.i(l.NgModule)({imports:[u.a,i.a,i.f,d.a,a.FormsModule,t.CommonModule],exports:[],declarations:[c.a],providers:[s.a]})],AuthenticationModule)}()},1437:function(n,r,o){"use strict";o.d(r,"a",function(){return d});var e=o(5),t=o(113),i=o(26),a=o(2),s=o(18),d=function(){function PageLoginComponent(n,r,o){this.router=n,this.service=r,this.snackBar=o,this.model={},this.error="",this.btn_text="",this.views=[]}return PageLoginComponent.prototype.ngOnInit=function(){this.btn_text="Ingresar",this.service.logout()},PageLoginComponent.prototype.login=function(){var n=this;this.btn_text="Procesando...",this.service.login(this.model.username,this.model.password).subscribe(function(r){n.service.GET("login").subscribe(function(r){if(console.log(r),!r.usercompany)return n.snackBar.open("Usted no tiene una empresa asignada.","Error",{duration:3500}),!1;n.views=r.usercompany.userprofile.privileges,localStorage.setItem("view",JSON.stringify(n.views)),localStorage.setItem("objUser",JSON.stringify(r));var o=["/dashboard"];n.router.navigate(o)},function(r){n.snackBar.open("El usuario o la contraseña son incorrectos.","Error",{duration:3500})})},function(r){n.snackBar.open("El usuario o la contraseña son incorrectos.","Error",{duration:3500})})},PageLoginComponent=e.a([o.i(a.Component)({selector:"my-page-login",styles:[],template:o(1467)}),e.b("design:paramtypes",[i.a,t.a,s.c])],PageLoginComponent)}()},1438:function(n,r,o){"use strict";o.d(r,"a",function(){return a});var e=o(1437),t=o(26),i=[{path:"",children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:e.a}]}],a=t.g.forChild(i)},1467:function(n,r){n.exports='<div class="page-auth">\r\n  <div class="main-body">\r\n    <md-progress-bar *ngIf="btn_text == \'Procesando...\'" [color]="\'primary\'" [mode]="\'indeterminate\'" [value]="50" [bufferValue]="75"></md-progress-bar>\r\n    <div class="card card-white" style="margin: 0">\r\n      <div class="card-content">\r\n        <div class="logo">\r\n          <a [routerLink]="[\'/\']">Iniciar sesión</a>\r\n        </div>\r\n\r\n        <form name="form" class="md-form-auth form-validation" (ngSubmit)="loginForm.form.valid && login()" #loginForm="ngForm" novalidate>\r\n          <fieldset>\r\n            <div class="form-group">\r\n              <md-input-container class="full-width md-icon-left">\r\n                <md-icon class="material-icons">account_box</md-icon>\r\n                <input required mdInput type="text" name="username" placeholder="Usuario" [(ngModel)]="model.username" #username="ngModel">\r\n              </md-input-container>\r\n            </div>\r\n            <div class="form-group">\r\n              <md-input-container class="full-width md-icon-left">\r\n                <md-icon class="material-icons">lock_outline</md-icon>\r\n                <input required mdInput type="password" name="password" placeholder="Contraseña" [(ngModel)]="model.password"  #password="ngModel">\r\n              </md-input-container>\r\n            </div>\r\n            <div *ngIf="error" >{{error}}</div>\r\n            <button md-raised-button type="submit" color="primary" class="float-right">{{btn_text}}</button>\r\n          </fieldset>\r\n        </form>\r\n\r\n        \x3c!--div class="additional-info">\r\n          <a [routerLink]="[\'/extra/sign-up\']">Sign up</a>\r\n          <span class="divider-h"></span>\r\n          <a [routerLink]="[\'/extra/forgot-password\']">Forgot your password?</a>\r\n        </div--\x3e\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'}});
//# sourceMappingURL=12.fd34c8398bcffc404f03.chunk.js.map