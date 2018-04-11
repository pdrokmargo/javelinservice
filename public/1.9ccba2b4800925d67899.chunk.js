webpackJsonp([1],{1423:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"UsersModule",function(){return m});var t=r(5),o=r(2),i=r(31),s=r(30),a=r(276),c=r(1440),l=r(592),p=r(1467),d=r(1468),u=[{path:"",component:c.a}],m=function(){function UsersModule(){}return UsersModule=t.a([r.i(o.NgModule)({imports:[i.CommonModule,s.g.forChild(u),a.a,l.a.forRoot()],declarations:[c.a,p.a,d.a]})],UsersModule)}()},1427:function(e,n){"function"==typeof Object.create?e.exports=function(e,n){e.super_=n,e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,n){e.super_=n;var r=function(){};r.prototype=n.prototype,e.prototype=new r,e.prototype.constructor=e}},1428:function(e,n){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},1429:function(e,n,r){(function(e,t){function inspect(e,r){var t={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),isBoolean(r)?t.showHidden=r:r&&n._extend(t,r),isUndefined(t.showHidden)&&(t.showHidden=!1),isUndefined(t.depth)&&(t.depth=2),isUndefined(t.colors)&&(t.colors=!1),isUndefined(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=stylizeWithColor),formatValue(t,e,t.depth)}function stylizeWithColor(e,n){var r=inspect.styles[n];return r?"["+inspect.colors[r][0]+"m"+e+"["+inspect.colors[r][1]+"m":e}function stylizeNoColor(e,n){return e}function arrayToHash(e){var n={};return e.forEach(function(e,r){n[e]=!0}),n}function formatValue(e,r,t){if(e.customInspect&&r&&isFunction(r.inspect)&&r.inspect!==n.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(t,e);return isString(o)||(o=formatValue(e,o,t)),o}var i=formatPrimitive(e,r);if(i)return i;var s=Object.keys(r),a=arrayToHash(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),isError(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return formatError(r);if(0===s.length){if(isFunction(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(isRegExp(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(isDate(r))return e.stylize(Date.prototype.toString.call(r),"date");if(isError(r))return formatError(r)}var l="",p=!1,d=["{","}"];if(isArray(r)&&(p=!0,d=["[","]"]),isFunction(r)){l=" [Function"+(r.name?": "+r.name:"")+"]"}if(isRegExp(r)&&(l=" "+RegExp.prototype.toString.call(r)),isDate(r)&&(l=" "+Date.prototype.toUTCString.call(r)),isError(r)&&(l=" "+formatError(r)),0===s.length&&(!p||0==r.length))return d[0]+l+d[1];if(t<0)return isRegExp(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var u;return u=p?formatArray(e,r,t,a,s):s.map(function(n){return formatProperty(e,r,t,a,n,p)}),e.seen.pop(),reduceToSingleString(u,l,d)}function formatPrimitive(e,n){if(isUndefined(n))return e.stylize("undefined","undefined");if(isString(n)){var r="'"+JSON.stringify(n).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return isNumber(n)?e.stylize(""+n,"number"):isBoolean(n)?e.stylize(""+n,"boolean"):isNull(n)?e.stylize("null","null"):void 0}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,n,r,t,o){for(var i=[],s=0,a=n.length;s<a;++s)hasOwnProperty(n,String(s))?i.push(formatProperty(e,n,r,t,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(formatProperty(e,n,r,t,o,!0))}),i}function formatProperty(e,n,r,t,o,i){var s,a,c;if(c=Object.getOwnPropertyDescriptor(n,o)||{value:n[o]},c.get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),hasOwnProperty(t,o)||(s="["+o+"]"),a||(e.seen.indexOf(c.value)<0?(a=isNull(r)?formatValue(e,c.value,null):formatValue(e,c.value,r-1),a.indexOf("\n")>-1&&(a=i?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),isUndefined(s)){if(i&&o.match(/^\d+$/))return a;s=JSON.stringify(""+o),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function reduceToSingleString(e,n,r){var t=0;return e.reduce(function(e,n){return t++,n.indexOf("\n")>=0&&t++,e+n.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===n?"":n+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+n+" "+e.join(", ")+" "+r[1]}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isSymbol(e){return"symbol"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}function timestamp(){var e=new Date,n=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),a[e.getMonth()],n].join(" ")}function hasOwnProperty(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var o=/%[sdj%]/g;n.format=function(e){if(!isString(e)){for(var n=[],r=0;r<arguments.length;r++)n.push(inspect(arguments[r]));return n.join(" ")}for(var r=1,t=arguments,i=t.length,s=String(e).replace(o,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch(e){return"[Circular]"}default:return e}}),a=t[r];r<i;a=t[++r])isNull(a)||!isObject(a)?s+=" "+a:s+=" "+inspect(a);return s},n.deprecate=function(r,o){function deprecated(){if(!i){if(t.throwDeprecation)throw new Error(o);t.traceDeprecation?console.trace(o):console.error(o),i=!0}return r.apply(this,arguments)}if(isUndefined(e.process))return function(){return n.deprecate(r,o).apply(this,arguments)};if(!0===t.noDeprecation)return r;var i=!1;return deprecated};var i,s={};n.debuglog=function(e){if(isUndefined(i)&&(i=r.i({ENV:void 0}).NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var o=t.pid;s[e]=function(){var r=n.format.apply(n,arguments);console.error("%s %d: %s",e,o,r)}}else s[e]=function(){};return s[e]},n.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=isArray,n.isBoolean=isBoolean,n.isNull=isNull,n.isNullOrUndefined=isNullOrUndefined,n.isNumber=isNumber,n.isString=isString,n.isSymbol=isSymbol,n.isUndefined=isUndefined,n.isRegExp=isRegExp,n.isObject=isObject,n.isDate=isDate,n.isError=isError,n.isFunction=isFunction,n.isPrimitive=isPrimitive,n.isBuffer=r(1428);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",timestamp(),n.format.apply(n,arguments))},n.inherits=r(1427),n._extend=function(e,n){if(!n||!isObject(n))return e;for(var r=Object.keys(n),t=r.length;t--;)e[r[t]]=n[r[t]];return e}}).call(n,r(99),r(594))},1440:function(e,n,r){"use strict";r.d(n,"a",function(){return s});var t=r(5),o=r(2),i=r(593),s=function(e){function UsersComponent(){return e.call(this)||this}return t.c(UsersComponent,e),UsersComponent.prototype.ngOnInit=function(){},UsersComponent=t.a([r.i(o.Component)({selector:"users-cmp",template:r(1507),styles:[]}),t.b("design:paramtypes",[])],UsersComponent)}(i.a)},1467:function(e,n,r){"use strict";r.d(n,"a",function(){return u});var t=r(5),o=r(2),i=r(38),s=(r.n(i),r(19)),a=r(30),c=r(84),l=r(1440),p=r(22),d=r(1429),u=(r.n(d),function(e){function UserActionComponent(n,r,t,i,s,a){var c=e.call(this)||this;return c.loaderService=n,c.helperService=r,c.snackBar=t,c.route=i,c.router=s,c.comp=a,c.select=new o.EventEmitter,c.companies=[],c.user_profiles=[],c.str_action="Guardar",c.model_user_company={},c}return t.c(UserActionComponent,e),UserActionComponent.prototype.ngOnInit=function(){this.clean(),this.getUserProfiles(),this.getCompanies(),r.i(d.isNullOrUndefined)(this.numId)||""===this.numId?this.str_action="Guardar":(this.str_action="Actualizar",this.getDataById())},UserActionComponent.prototype.getUserProfiles=function(){var e=this;this.helperService.GET("/api/userprofile?all=1").map(function(n){var r=n.json();e.user_profiles=r.data}).subscribe(function(e){},function(e){})},UserActionComponent.prototype.getCompanies=function(){var e=this;this.helperService.GET("/api/company").map(function(n){var r=n.json();e.companies=r.data}).subscribe(function(e){},function(e){})},UserActionComponent.prototype.save=function(){var e=this;if(0===this.model.usersprivileges.length)return this.snackBar.open("Agregue una empresa para continuar.","Error",{duration:3500}),!1;if(r.i(d.isNullOrUndefined)(this.model.id)||""===this.model.id){if(0===this.model.usersprivileges.length)return this.snackBar.open("Agregue una empresa para continuar.","Error",{duration:3500}),!1;this.loaderService.display(!0),this.helperService.POST("/api/users",this.model).map(function(n){var r=n.json();"success"===r.status&&(e.snackBar.open(r.message,"Guardado",{duration:3500}),e.clean(),e.noaction&&e.select.emit(r.data))}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})}else this.loaderService.display(!0),this.helperService.PUT("/api/users/"+this.numId,this.model).map(function(n){var r=n.json();"success"===r.status&&(e.snackBar.open(r.message,"Actualización",{duration:3500}),e.comp.openList())}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserActionComponent.prototype.getDataById=function(){var e=this;this.loaderService.display(!0),this.helperService.GET("/api/users/"+this.numId).map(function(n){var r=n.json();e.model=r.data,e.refreshCompany()}).subscribe(function(n){e.loaderService.display(!1)},function(n){e.loaderService.display(!1)})},UserActionComponent.prototype.clean=function(){this.model={},this.model.usersprivileges=[],this.model.status=!0},UserActionComponent.prototype.refreshCompany=function(){var e=0;for(e=0;e<this.companies.length;e++){var n=0;for(n=0;n<this.model.usersprivileges.length;n++)this.model.usersprivileges[n].company_id===this.companies[e].id?this.companies[e].hide=!0:this.companies[e].hide=!1}},UserActionComponent.prototype.addCompany=function(){this.model_user_company.company_id=this.model_user_company.company.id,this.model_user_company.user_profile_id=this.model_user_company.userprofile.id,this.model.usersprivileges.push(this.model_user_company),this.model_user_company={},this.model_user_company.id=0,this.refreshCompany()},UserActionComponent.prototype.removeCompany=function(e){if(e.id>0&&e.company_id===this.model.company_default_id)return this.snackBar.open("Usted no puede remover una empresa activa!","Error",{duration:3500}),!1;var n=this.model.usersprivileges.indexOf(e);this.model.usersprivileges.splice(n,1),this.refreshCompany()},UserActionComponent.prototype.goList=function(){this.comp.openList()},t.a([r.i(o.Output)(),t.b("design:type",Object)],UserActionComponent.prototype,"select",void 0),t.a([r.i(o.Input)(),t.b("design:type",Boolean)],UserActionComponent.prototype,"noaction",void 0),UserActionComponent=t.a([r.i(o.Component)({selector:"user-action-cmp",template:r(1505),styles:[]}),t.b("design:paramtypes",[p.a,p.b,s.e,a.b,a.a,l.a])],UserActionComponent)}(c.a))},1468:function(e,n,r){"use strict";r.d(n,"a",function(){return p});var t=r(5),o=r(2),i=r(38),s=(r.n(i),r(30)),a=r(71),c=r(22),l=r(1440),p=function(e){function UserListComponent(n,r,t,o){var i=e.call(this,n,r)||this;return i.loaderService=n,i.helperService=r,i.router=t,i.comp=o,i.urlApi="/api/users",i}return t.c(UserListComponent,e),UserListComponent.prototype.ngOnInit=function(){this.getAll()},UserListComponent.prototype.NEW=function(e){this.comp.openActions(),this.comp.id=void 0},UserListComponent.prototype.view=function(e){this.comp.openActions(),this.comp.id=e.id},UserListComponent=t.a([r.i(o.Component)({selector:"user-list-cmp",template:r(1506),styles:[]}),t.b("design:paramtypes",[c.a,c.b,s.a,l.a])],UserListComponent)}(a.a)},1505:function(e,n){e.exports='<div class="box-body">\r\n\r\n    \x3c!--FORM--\x3e\r\n\r\n    <form #modelForm="ngForm" autocomplete="off">\r\n        <div class="col-sm-12 margin-bottom" [class.btn-action-container]="booActive">\r\n            <button md-raised-button color="secundary" (click)="goList()" class="btn-w-md no-margin-left">Regresar</button>\r\n        </div>\r\n        <div class="col-sm-12 margin-bottom">\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <md-slide-toggle checked="true" id="status" name="status" [(ngModel)]="model.status"> Estado </md-slide-toggle>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="firstname" name="firstname" [(ngModel)]="model.firstname" mdInput placeholder="Nombres">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="text" id="lastname" name="lastname" [(ngModel)]="model.lastname" mdInput placeholder="Apellidos">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="nope" autocorrect="off" autocapitalize="off" spellcheck="false" required type="text" id="username" name="username"\r\n                    [(ngModel)]="model.username" mdInput placeholder="Nombre de Usuario">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false" [required]="!model.id" [disabled]="model.id"\r\n                    type="password" id="password" name="password" [(ngModel)]="model.password" mdInput placeholder="Contraseña"\r\n                    reverse="true">\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-6 margin-bottom">\r\n            <md-input-container class="full-width">\r\n                <input required type="email" id="email" name="email" [(ngModel)]="model.email" mdInput placeholder="Correo electrónico">\r\n            </md-input-container>\r\n        </div>\r\n\r\n\r\n\r\n    </form>\r\n\r\n\r\n</div>\r\n\r\n<div class="box-body">\r\n\r\n\r\n    <form #companyForm="ngForm" autocomplete="off">\r\n\r\n        \x3c!-- company --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-select required class="full-width" placeholder="Empresa" [(ngModel)]="model_user_company.company" name="company_id" id="company_id">\r\n                <md-option *ngFor="let item of companies" [value]="item" [hidden]="item.hide">{{item.name}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        \x3c!-- user profile --\x3e\r\n        <div class=\'col-sm-12 col-md-4 margin-bottom\'>\r\n            <md-select required class="full-width" placeholder="Perfil de usuario" [(ngModel)]="model_user_company.userprofile" name="user_profile_id"\r\n                id="user_profile_id">\r\n                <md-option *ngFor="let item of user_profiles" [value]="item">{{item.up_description}}</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        <div class="col-sm-12 col-md-4 margin-bottom">\r\n            <div class="flex">\r\n                <span class="flex-spacer"></span>\r\n                <button type="button" md-raised-button color="primary" class="btn-w-md no-margin-left" [disabled]="!companyForm.form.valid"\r\n                    (click)="addCompany()">Añadir Empresa</button>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n    <div class="col-sm-12">\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <td class="w-40" *ngIf="str_action == \'Actualizar\'"></td>\r\n                        <th>Empresa</th>\r\n                        <th>Perfil de Usuario</th>\r\n                        <th class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor="let item of model.usersprivileges">\r\n                        <td class="w-40" *ngIf="str_action == \'Actualizar\'">\r\n                            <md-icon title="Registro guardado" class="text-success" *ngIf="item.company_id == model.company_default_id">check</md-icon>\r\n                        </td>\r\n                        <td>{{ item.company?.name }}</td>\r\n                        <td>{{ item.userprofile?.up_description }}</td>\r\n\r\n                        <td class="w-40" title="Remover empresa">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="removeCompany(item)">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-12" [class.btn-action-container]="booActive">\r\n        <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n            (click)="save()">{{str_action}}</button>\r\n    </div>\r\n\r\n\r\n</div>'},1506:function(e,n){e.exports='<div class="box-body">\r\n    \x3c!-- LIST --\x3e\r\n    <div class="row">\r\n        <div class="col-md-6">\r\n            <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n                <div style="width: 34px" class="input-group-addon">\r\n                    <a style="cursor:pointer" (click)="getAll()">\r\n                        <i class="fa fa-search"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n            <button md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">Nuevo</button>\r\n        </div>\r\n        <div class="col-sm-12">\r\n\r\n            <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n                <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="noAuto" (click)="sort(\'u.id\')">ID\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'username\')">Nombre de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'username\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'firstname\')">Nombre\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'firstname\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'up_description\')">Perfil de Usuario\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'up_description\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'c.name\')">Empresa\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'c.name\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'last_access\')">Ultimo Acceso\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'last_access\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th (click)="sort(\'u.status\')">Estado\r\n                                <span class="glyphicon sort-icon" *ngIf="key ==\'u.status\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                            </th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor="let item of list.data" (click)="view(item)">\r\n                            <td class="noAuto">{{ item.id }}</td>\r\n                            <td>{{ item.username }}</td>\r\n                            <td>{{ item.firstname + \' \' + item.lastname }}</td>\r\n                            <td>{{ item.user_profile }}</td>\r\n                            <td>{{ item.company }}</td>\r\n                            <td>{{ item.last_access }}</td>\r\n                            <td>{{ item.status ? \'Activo\' : \'Inactivo\' }}</td>\r\n                            <td class="w-40">\r\n                                <button type="button" md-icon-button class="text-primary" (click)="view(item)">\r\n                                    <md-icon>mode_edit</md-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n            <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n                [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n        </div>\r\n    </div>\r\n</div>'},1507:function(e,n){e.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Usuarios</h1>\r\n        </div>\r\n        <p class="hero-tagline">\r\n            A través de esta opción, usted podrá administrar los usuario que acceden al sistema y definir perfiles que permitan limitar\r\n            el uso de las vistas no autorizadas.\r\n        </p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                \r\n                <user-action-cmp [numId]="id" *ngIf="isOpenActions"></user-action-cmp>\r\n                <user-list-cmp *ngIf="isOpenList"></user-list-cmp>\r\n\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=1.9ccba2b4800925d67899.chunk.js.map