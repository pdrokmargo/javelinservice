webpackJsonp([11],{1407:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"AffiliatesModule",function(){return u});var i=e(5),o=e(2),r=e(31),a=e(26),l=e(276),d=e(591),c=e(1425),s=e(1440),m=e(1439),p=[{path:"",component:c.a}],u=function(){function AffiliatesModule(){}return AffiliatesModule=i.a([e.i(o.NgModule)({imports:[r.CommonModule,a.g.forChild(p),l.a,d.a.forRoot()],declarations:[c.a,s.a,m.a]})],AffiliatesModule)}()},1425:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e(5),o=e(2),r=e(592),a=function(n){function AffiliatesComponent(){return n.call(this)||this}return i.c(AffiliatesComponent,n),AffiliatesComponent.prototype.ngOnInit=function(){},AffiliatesComponent=i.a([e.i(o.Component)({selector:"affiliates-cmp",template:e(1470),styles:[]}),i.b("design:paramtypes",[])],AffiliatesComponent)}(r.a)},1439:function(n,t,e){"use strict";e.d(t,"a",function(){return m});var i=e(5),o=e(2),r=e(34),a=(e.n(r),e(18)),l=e(26),d=e(72),c=e(20),s=e(1425),m=function(n){function AffiliatesActionComponent(t,e,i,o,r,a,l){var d=n.call(this)||this;return d.snackBar=t,d.route=e,d.router=i,d.loaderService=o,d.helperService=r,d.comp=a,d.dialog=l,d.arrDocument_type=[],d.arrGender=[],d.arrDelivery_contract=[],d.arrContracts_payment_method=[],d.arrAffiliate_condition=[],d.arrIps_network=[],d.arrAffiliate_type=[],d.arrPublic_health_condition=[],d.arrDepartment=[],d.arrCity=[],d.booGeolocation=!1,d.arrDelivery_point_group=[],d}return i.c(AffiliatesActionComponent,n),AffiliatesActionComponent.prototype.ngOnInit=function(){switch(this.clean(),this.getCollection(),this.loadDepartment(),this.strAction){case"Guardar":this.loadDeliveryContract();break;case"Actualizar":case"Eliminar":this.getDataById()}},AffiliatesActionComponent.prototype.getCollection=function(){var n=this;this.helperService.POST("/api/collections",["TYPES_OF_DOCUMENTS","PAYMENT_METHOD","AFFILIATE_TYPE","AFFILIATE_CONDITION","PUBLIC_HEALTH_CONDITION","GENDER"]).subscribe(function(t){var e=t.json();n.arrDocument_type=e.TYPES_OF_DOCUMENTS,n.arrGender=e.GENDER,n.arrContracts_payment_method=e.PAYMENT_METHOD,n.arrAffiliate_type=e.AFFILIATE_TYPE,n.arrAffiliate_condition=e.AFFILIATE_CONDITION,n.arrPublic_health_condition=e.PUBLIC_HEALTH_CONDITION},function(n){console.log(n)})},AffiliatesActionComponent.prototype.loadDepartment=function(){var n=this;this.arrCity=[],this.booGeolocation=!1,this.helperService.GET("/api/departamentos?pais_id=7").subscribe(function(t){var e=t.json();n.arrDepartment=e.departamentos},function(n){console.log(n)})},AffiliatesActionComponent.prototype.loadCity=function(){var n=this;this.helperService.GET("/api/ciudades?departamento_id="+this.model.department).subscribe(function(t){var e=t.json();n.arrCity=e.ciudades,n.model.city=n.model.geolocation.city},function(n){console.log(n)})},AffiliatesActionComponent.prototype.loadDeliveryContract=function(){var n=this;this.helperService.GET("/api/delivery-contracts").subscribe(function(t){var e=t.json();n.arrDelivery_contract=e.data},function(n){console.log(n)})},AffiliatesActionComponent.prototype.save=function(){var n=this;switch(this.loaderService.display(!0),this.model.geolocation=JSON.stringify({department:this.model.department,city:this.model.city}),this.strAction){case"Guardar":this.model.delivery_contracts="",this.helperService.POST("/api/affiliates",this.model).subscribe(function(t){var e=t.json();e.store&&(n.snackBar.open(e.message,"Guardado",{duration:3500}),n.clean(),n.loaderService.display(!1),n.comp.openList())},function(t){n.loaderService.display(!1)});break;case"Actualizar":this.helperService.PUT("/api/affiliates/"+this.numId,this.model).subscribe(function(t){var e=t.json();e.update&&(n.snackBar.open(e.message,"Actualización",{duration:3500}),n.comp.openList())},function(t){n.loaderService.display(!1)});break;case"Eliminar":this.helperService.DELETE("/api/affiliates/"+this.numId).subscribe(function(t){var e=t.json();e.delete&&(n.snackBar.open(e.message,"Eliminación",{duration:3500}),n.comp.openList())},function(t){n.loaderService.display(!1)})}},AffiliatesActionComponent.prototype.getDataById=function(){var n=this;this.helperService.GET("/api/delivery-contracts").subscribe(function(t){var e=t.json();n.arrDelivery_contract=e.data,n.loaderService.display(!0),n.helperService.GET("/api/affiliates/"+n.numId).map(function(t){var e=t.json();n.model=e.data,n.model.geolocation=JSON.parse(n.model.geolocation),n.model.department=n.model.geolocation.department,n.loadCity(),n.loadIpsNetword(n.arrDelivery_contract.filter(function(t){return t.id==n.model.delivery_contract_id})[0])}).subscribe(function(t){n.loaderService.display(!1)},function(t){n.loaderService.display(!1)})},function(n){console.log(n)})},AffiliatesActionComponent.prototype.clean=function(){this.model={},this.model.geolocation={},this.model.state=!0},AffiliatesActionComponent.prototype.goList=function(){this.comp.openList()},AffiliatesActionComponent.prototype.loadIpsNetword=function(n){this.arrIps_network=n.ips},AffiliatesActionComponent=i.a([e.i(o.Component)({selector:"affiliates-action-cmp",template:e(1468)}),i.b("design:paramtypes",[a.c,l.b,l.a,c.a,c.b,s.a,a.d])],AffiliatesActionComponent)}(d.a)},1440:function(n,t,e){"use strict";e.d(t,"a",function(){return s});var i=e(5),o=e(2),r=e(34),a=(e.n(r),e(26)),l=e(71),d=e(20),c=e(1425),s=function(n){function AffiliatesListComponent(t,e,i,o){var r=n.call(this,e,i)||this;return r.router=t,r.loaderService=e,r.helperService=i,r.comp=o,r.urlApi="/api/affiliates",r}return i.c(AffiliatesListComponent,n),AffiliatesListComponent.prototype.ngOnInit=function(){this.getAll()},AffiliatesListComponent.prototype.NEW=function(n){this.comp.openActions(),this.comp.id="",this.comp.strAction="Guardar"},AffiliatesListComponent.prototype.view=function(n,t){this.comp.id=n.id,this.comp.strAction=t,this.comp.openActions()},AffiliatesListComponent=i.a([e.i(o.Component)({selector:"affiliates-list-cmp",template:e(1469)}),i.b("design:paramtypes",[a.a,d.a,d.b,c.a])],AffiliatesListComponent)}(l.a)},1468:function(n,t){n.exports='<form #modelForm="ngForm" autocomplete="off">\r\n    <div class="col-sm-12 margin-bottom-40">\r\n        <button type="button" md-raised-button color="primary" (click)="goList()" class="btn-w-md no-margin-left">\r\n            <md-icon>keyboard_arrow_left</md-icon> Regresar\r\n        </button>\r\n    </div>\r\n    \x3c!-- document_type_id --\x3e\r\n    <div class="col-sm-12 col-md-6 margin-bottom">\r\n        <md-select required class="full-width" placeholder="Tipo de identificación" [(ngModel)]="model.document_type_id" name="document_type_id"\r\n            id="document_type_id">\r\n            <md-option *ngFor="let item of arrDocument_type" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    \x3c!-- document_number --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="document_number" name="document_number" [(ngModel)]="model.document_number" mdInput placeholder="Identificación">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- estado --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <div class="flex">\r\n            <span class="flex-spacer"></span>\r\n            <md-slide-toggle [labelPosition]="\'before\'" id="state" name="state" [(ngModel)]="model.state">Estado</md-slide-toggle>\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- firstname --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="firstname" name="firstname" [(ngModel)]="model.firstname" mdInput placeholder="Nombres">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- middlename --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input type="text" id="middlename" name="middlename" [(ngModel)]="model.middlename" mdInput>\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- lastname1 --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="lastname1" name="lastname1" [(ngModel)]="model.lastname1" mdInput placeholder="Apellidos">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- lastname2 --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input type="text" id="lastname2" name="lastname2" [(ngModel)]="model.lastname2" mdInput>\r\n        </md-input-container>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- birthday --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input mdInput [mdDatepicker]="pickerIssueDate5" id="birthday" name="birthday" placeholder="Fecha de nacimiento" [(ngModel)]="model.birthday">\r\n            <button mdSuffix [mdDatepickerToggle]="pickerIssueDate5"></button>\r\n        </md-input-container>\r\n        <md-datepicker #pickerIssueDate5></md-datepicker>\r\n    </div>\r\n    \x3c!-- gender_id --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select class="full-width" placeholder="Género" [(ngModel)]="model.gender_id" name="gender_id" id="gender_id">\r\n            <md-option *ngFor="let item of arrGender" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    \x3c!-- phone_number --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input NumberOnly required type="text" id="phone_number" name="phone_number" [(ngModel)]="model.phone_number" mdInput placeholder="Teléfono">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- mobile_number --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input NumberOnly required type="text" id="mobile_number" name="mobile_number" [(ngModel)]="model.mobile_number" mdInput placeholder="Celular">\r\n        </md-input-container>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- address --\x3e\r\n    <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="address" name="address" [(ngModel)]="model.address" mdInput placeholder="Dirección">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- conutry --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select [disabled]="arrDepartment.length == 0" class="full-width" placeholder="Departamento" [(ngModel)]="model.department"\r\n            name="department" id="department" (change)="loadCity()">\r\n            <md-option *ngFor="let item of arrDepartment" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n\r\n    </div>\r\n    \x3c!-- conutry --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select [disabled]="arrCity.length == 0" class="full-width" placeholder="Ciudad" [(ngModel)]="model.city" name="city"\r\n            id="city" (change)="booGeolocation=true">\r\n            <md-option *ngFor="let item of arrCity" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- attendant_name --\x3e\r\n    <div class=\'col-sm-12 col-md-6 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="attendant_name" name="attendant_name" [(ngModel)]="model.attendant_name" mdInput placeholder="Nombre acudiente">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- attendant_phone_number --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input NumberOnly required type="text" id="attendant_phone_number" name="attendant_phone_number" [(ngModel)]="model.attendant_phone_number"\r\n                mdInput placeholder="Teléfono acudiente">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- attendant_mobile_number --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-3 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input NumberOnly required type="text" id="attendant_mobile_number" name="attendant_mobile_number" [(ngModel)]="model.attendant_mobile_number"\r\n                mdInput placeholder="Celular acudiente">\r\n        </md-input-container>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- delivery_contract_id --\x3e\r\n    <div class="col-sm-12 col-md-6 margin-bottom">\r\n        <md-select class="full-width" placeholder="Contrato" [(ngModel)]="model.delivery_contract_id" name="delivery_contract_id" id="delivery_contract_id">\r\n            <md-option *ngFor="let item of arrDelivery_contract" [value]="item.id" (click)="loadIpsNetword(item)">{{item.name}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    \x3c!-- contracts_payment_method_id --\x3e\r\n    \x3c!--div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select class="full-width" placeholder="Modalidad de contratación" [(ngModel)]="model.contracts_payment_method_id" name="contracts_payment_method_id"\r\n            id="contracts_payment_method_id">\r\n            <md-option *ngFor="let item of arrContracts_payment_method" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div--\x3e\r\n    \x3c!-- affiliate_condition_id --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select class="full-width" placeholder="Condición de afiliado" [(ngModel)]="model.affiliate_condition_id" name="affiliate_condition_id"\r\n            id="affiliate_condition_id">\r\n            <md-option *ngFor="let item of arrAffiliate_condition" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    <div class="col-sm-12"></div>\r\n    \x3c!-- ips_network_id --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n        <md-select class="full-width" placeholder="Red adscrita" [(ngModel)]="model.ips_network_id" name="ips_network_id" id="ips_network_id">\r\n            <md-option *ngFor="let item of arrIps_network" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    \x3c!-- affiliate_level --\x3e\r\n    <div class=\'col-sm-12 col-md-6 col-lg-2 margin-bottom\'>\r\n        <md-input-container class="full-width">\r\n            <input required type="text" id="affiliate_level" name="affiliate_level" [(ngModel)]="model.affiliate_level" mdInput placeholder="Nivel de afiliado">\r\n        </md-input-container>\r\n    </div>\r\n    \x3c!-- affiliate_type --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select class="full-width" placeholder="Tipo de afiliado" [(ngModel)]="model.affiliate_type" name="affiliate_type" id="affiliate_type">\r\n            <md-option *ngFor="let item of arrAffiliate_type" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    \x3c!-- public_health_condition_id --\x3e\r\n    <div class="col-sm-12 col-md-6 col-lg-3 margin-bottom">\r\n        <md-select class="full-width" placeholder="Condición de salud pública" [(ngModel)]="model.public_health_condition_id" name="public_health_condition_id"\r\n            id="public_health_condition_id">\r\n            <md-option *ngFor="let item of arrPublic_health_condition" [value]="item.id">{{item.value}}</md-option>\r\n        </md-select>\r\n    </div>\r\n    <div class="col-sm-12">\r\n        <button [disabled]="action_active ? false : !modelForm.form.valid" md-raised-button color="primary" class="btn-w-md no-margin-left btn-right"\r\n            (click)="save()">{{strAction}}</button>\r\n    </div>\r\n</form>'},1469:function(n,t){n.exports='\x3c!-- LIST --\x3e\r\n<div class="row">\r\n    <div class="col-md-6">\r\n        <div class="input-group mb-2 mr-sm-2 mb-sm-0">\r\n            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar" [(ngModel)]="search" (keydown)="enter($event)">\r\n            <div style="width: 34px" class="input-group-addon">\r\n                <a style="cursor:pointer" (click)="getAll()">\r\n                    <i class="fa fa-search"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6" *ngIf="!noaction">\r\n        <button *ngIf="actions[0].status" md-raised-button (click)="NEW()" color="primary" class="btn-w-md no-margin-left btn-right">\r\n            <md-icon>add_circle_outline</md-icon> Nuevo\r\n        </button>\r\n    </div>\r\n\r\n    <div class="col-sm-12">\r\n\r\n        <div class="box box-default table-box table-responsive mdl-shadow--2dp">\r\n\r\n            <table class="mdl-data-table table-bordered table-striped cf no-margin">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="noAuto" (click)="sort(\'id\')">ID\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'document_type_id\')">Identificación\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'document_type_id\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th (click)="sort(\'contract\')">Contrato\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'contract\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        \x3c!--th (click)="sort(\'contract\')">Modalidad\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'contract\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th--\x3e\r\n                        <th (click)="sort(\'state\')">Estado\r\n                            <span class="glyphicon sort-icon" *ngIf="key ==\'ct.state\'" [ngClass]="{\'glyphicon-chevron-up\':reverse,\'glyphicon-chevron-down\':!reverse}"></span>\r\n                        </th>\r\n                        <th *ngIf="actions[2].status" class="w-40"></th>\r\n                        <th *ngIf="actions[3].status" class="w-40"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody *ngIf="list.data">\r\n                    <tr *ngFor="let item of list.data">\r\n                        <td class="noAuto">{{ item.id }}</td>\r\n                        <td>{{ item.name }}</td>\r\n                        <td>{{ item.contract }}</td>\r\n                        \x3c!--td>{{item.contracts_payment_method}}</td--\x3e\r\n                        <td>{{ item.state ? \'Activo\' : \'Inactiva\' }}</td>\r\n                        <td *ngIf="actions[2].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-primary" (click)="view(item,\'Actualizar\')">\r\n                                <md-icon>mode_edit</md-icon>\r\n                            </button>\r\n                        </td>\r\n                        <td *ngIf="actions[3].status" class="w-40">\r\n                            <button type="button" md-icon-button class="text-danger" (click)="view(item, \'Eliminar\')">\r\n                                <md-icon>delete</md-icon>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <ngb-pagination [pageSize]="pageSize" [collectionSize]="paginationSize" [(page)]="advancedPagination" [maxSize]="maxSize"\r\n            [rotate]="true" [ellipses]="false" [boundaryLinks]="true" (pageChange)="getAll()"></ngb-pagination>\r\n\r\n    </div>\r\n</div>'},1470:function(n,t){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Afiliados</h1>\r\n        </div>\r\n        <p class="hero-tagline"></p>\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="box box-default">\r\n                <div class="box-body">\r\n\r\n                    <affiliates-action-cmp *ngIf="isOpenActions" [numId]="id" [strAction]=\'strAction\'></affiliates-action-cmp>\r\n\r\n                    <affiliates-list-cmp *ngIf="isOpenList"></affiliates-list-cmp>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=11.27f16e26170f515cd797.chunk.js.map