webpackJsonp([14],{1420:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e.d(i,"ConfigurationModule",function(){return a});var r=e(5),o=e(2),t=e(32),s=e(26),d=e(276),c=e(1453),l=[{path:"",component:c.a}],a=function(){function ConfigurationModule(){}return ConfigurationModule=r.a([e.i(o.NgModule)({imports:[t.CommonModule,s.g.forChild(l),d.a],declarations:[c.a]})],ConfigurationModule)}()},1453:function(n,i,e){"use strict";e.d(i,"a",function(){return d});var r=e(5),o=e(2),t=e(114),s=e(18),d=function(){function ConfigurationComponent(n,i){var e=this;this.service=n,this.snackBar=i,this.config=[],this.model={business:{}},this.itemSelected="",this.foods=[],this.regimen=[],this.service.POST("collections",["PORTFOLIO_TYPE"]).subscribe(function(n){e.regimen=n.PORTFOLIO_TYPE})}return ConfigurationComponent.prototype.ngOnInit=function(){var n=this;this.service.GET("configurations").subscribe(function(i){n.config=i["user profiles"],n.itemSelected=n.config[0].code,n.config.forEach(function(i){switch(i.code){case"business":n.model.business=JSON.parse(i.value)}})})},ConfigurationComponent.prototype.selectItem=function(n){this.itemSelected=n.code},ConfigurationComponent.prototype.save=function(){var n=this;this.service.PUT("configurations/1",{business:JSON.stringify(this.model.business)}).subscribe(function(i){console.log(i),n.snackBar.open("Configuracion guardada correctamente","Actualización",{duration:3500})})},ConfigurationComponent=r.a([e.i(o.Component)({selector:"configuration-cmp",template:e(1483),styles:["\n  h3,.box-top { text-align: center; } \n  .justify-content-end { display: flex;justify-content: flex-end;}\n  .text-toggle { padding-right: 10px; }\n  "]}),r.b("design:paramtypes",[t.a,s.c])],ConfigurationComponent)}()},1483:function(n,i){n.exports='<section class="chapter">\r\n    <section class="hero">\r\n        <div class="hero-content">\r\n            <h1 class="hero-title">Configuración</h1>\r\n        </div>\r\n        \x3c!--p class="hero-tagline">We provide amazing solutions that you can\'t miss</p--\x3e\r\n    </section>\r\n    <article class="article padding-lg-v article-dark article-bordered">\r\n        <div class="container-fluid with-maxwidth">\r\n            <div class="row">\r\n                <div class="col-sm-12 margin-bootom">\r\n                    <button md-raised-button color="primary" class="btn-w-md no-margin-left btn-right" (click)="save()">Guardar configuraciones</button>\r\n                </div>\r\n                <div class="col-sm-12 col-md-4 col-lg-3">\r\n                    <div class="box box-default">\r\n                        <div class="box-body">\r\n                            <div class="ibox-plain">\r\n                                <md-nav-list>\r\n                                    <md-list-item *ngFor=\'let c of config\'>\r\n                                        <span md-list-item class="btn-w-md" (click)="selectItem(c)">{{c.display}}</span>\r\n                                    </md-list-item>\r\n                                </md-nav-list>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="col-sm-12 col-md-8 col-lg-9">\r\n                    <div class="box box-default">\r\n                        <div class="box-body">\r\n                            <div class="margin-bottom"></div>\r\n                            \x3c!--business--\x3e\r\n                            <div class="ibox-plain">\r\n                                <form #businessForm="ngForm" autocomplete="off">\r\n                                    <div class="row" [hidden]="itemSelected != \'business\'">\r\n\r\n                                        \x3c!--nombre de la empresa--\x3e\r\n                                        <div class="form-group col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="text" id="name" name="name" [(ngModel)]="model.business.name" mdInput placeholder="Nombre de la empresa">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        \x3c!--nit--\x3e\r\n                                        <div class="form-group col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="text" id="nit" name="nit" [(ngModel)]="model.business.nit" mdInput placeholder="NIT">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        \x3c!--address--\x3e\r\n                                        <div class="form-group col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="text" id="address" name="address" [(ngModel)]="model.business.address" mdInput placeholder="Dirección">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        \x3c!--phone_number--\x3e\r\n                                        <div class="form-group col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n                                            <md-input-container class="full-width">\r\n                                                <input required type="number" id="phone_number" name="phone_number" [(ngModel)]="model.business.phone_number" mdInput placeholder="Teléfono">\r\n                                            </md-input-container>\r\n                                        </div>\r\n                                        \x3c!--tax_regime_id--\x3e\r\n                                        <div class="form-group col-sm-12 col-md-6 col-lg-4 margin-bottom">\r\n                                            <md-select class="full-width" placeholder="Tipo de régimen" id="tax_regime_id" name="tax_regime_id" [(ngModel)]="model.business.tax_regime_id">\r\n                                                <md-option *ngFor="let r of regimen" [value]="r.id">\r\n                                                    {{ r.value }}\r\n                                                </md-option>\r\n                                            </md-select>\r\n                                        </div>\r\n                                        <div class="col-sm-12">\r\n                                            <div class="row">\r\n                                                <div class="col-sm-12 col-md-6">\r\n                                                    <div class="row">\r\n                                                        \x3c!--economic_activity--\x3e\r\n                                                        <div class="form-group col-sm-12">\r\n                                                            <md-input-container class="full-width">\r\n                                                                <input required type="text" id="economic_activity" name="economic_activity" [(ngModel)]="model.business.economic_activity"\r\n                                                                    mdInput placeholder="Actividad ecónomica">\r\n                                                            </md-input-container>\r\n                                                        </div>\r\n                                                        \x3c!--website--\x3e\r\n                                                        <div class="form-group col-sm-12">\r\n                                                            <md-input-container class="full-width">\r\n                                                                <input required type="text" id="website" name="website" [(ngModel)]="model.business.website" mdInput placeholder="Sitio web">\r\n                                                            </md-input-container>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class="col-sm-12 col-md-6">\r\n                                                    <div class="row">\r\n                                                        \x3c!--big_contributor--\x3e\r\n                                                        <div class="form-group col-sm-12 justify-content-end">\r\n                                                            <span class="text-toggle">Gran contribuyente</span>\r\n                                                            <md-slide-toggle id="big_contributor" name="big_contributor" [(ngModel)]="model.business.big_contributor"></md-slide-toggle>\r\n                                                        </div>\r\n                                                        \x3c!--selfholder--\x3e\r\n                                                        <div class="form-group col-sm-12 justify-content-end">\r\n                                                            <span class="text-toggle">Autorretenedor</span>\r\n                                                            <md-slide-toggle id="selfholder" name="selfholder" [(ngModel)]="model.business.selfholder"></md-slide-toggle>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n\r\n\r\n                                    </div>\r\n\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n</section>'}});
//# sourceMappingURL=14.f37bccbba8eac7dc383d.chunk.js.map