"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_pedido_pedido_module_ts"],{

/***/ 6713:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/pedido/pedido-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPageRoutingModule": () => (/* binding */ PedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.page */ 4243);




const routes = [
    {
        path: '',
        component: _pedido_page__WEBPACK_IMPORTED_MODULE_0__.PedidoPage
    }
];
let PedidoPageRoutingModule = class PedidoPageRoutingModule {
};
PedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PedidoPageRoutingModule);



/***/ }),

/***/ 3084:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/pedido/pedido.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPageModule": () => (/* binding */ PedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido-routing.module */ 6713);
/* harmony import */ var _pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page */ 4243);







let PedidoPageModule = class PedidoPageModule {
};
PedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidoPageRoutingModule
        ],
        declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_1__.PedidoPage]
    })
], PedidoPageModule);



/***/ }),

/***/ 4243:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/pedido/pedido.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoPage": () => (/* binding */ PedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido.page.html?ngResource */ 5630);
/* harmony import */ var _pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido.page.scss?ngResource */ 7786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicio.service */ 8657);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);






let PedidoPage = class PedidoPage {
    constructor(servicio) {
        this.servicio = servicio;
    }
    ngOnInit() {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({ key: 'cliente' }).then(data => {
            this.cliente = JSON.parse(data.value);
            this.getlista();
        });
    }
    getlista() {
        let datos = {
            idcli: this.cliente.idCliente
        };
        this.servicio.get('pedido', datos).subscribe(res => {
            this.pedidos = res;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getlista();
            event.target.complete();
        }, 1000);
    }
};
PedidoPage.ctorParameters = () => [
    { type: src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService }
];
PedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pedido',
        template: _pedido_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pedido_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PedidoPage);



/***/ }),

/***/ 7786:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/pedido/pedido.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5630:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/pedido/pedido.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n</ion-refresher>\n  <ion-accordion-group expand=\"inset\" *ngFor=\"let item of pedidos\">\n    <ion-accordion value=\"first\">\n      <ion-item slot=\"header\" color=\"light\">\n        <ion-label>\n          <h2>{{item.descripcion}}</h2>\n          <h3>fecha : {{item.fechaHoraPedido | date: 'yyyy-MM-dd HH:mm:ss'}} </h3>\n          <p>Total : {{item.precioTotal}} </p>\n        </ion-label>\n      </ion-item>\n      <div slot=\"content\">\n        <ion-list *ngFor=\"let g of item.detalle\">\n            <ion-item>\n              <ion-label>\n                <h2>Producto {{g.nombre}}</h2>\n                <h2>cantidad {{g.cantidad }}  precio : {{g.precio}} </h2>\n              </ion-label>\n            </ion-item>\n        </ion-list>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_pedido_pedido_module_ts.js.map