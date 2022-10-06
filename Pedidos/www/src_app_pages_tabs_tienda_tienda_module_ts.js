"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tienda_tienda_module_ts"],{

/***/ 3117:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/tienda/tienda-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendaPageRoutingModule": () => (/* binding */ TiendaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tienda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tienda.page */ 2415);




const routes = [
    {
        path: '',
        component: _tienda_page__WEBPACK_IMPORTED_MODULE_0__.TiendaPage
    }
];
let TiendaPageRoutingModule = class TiendaPageRoutingModule {
};
TiendaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TiendaPageRoutingModule);



/***/ }),

/***/ 6205:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/tienda/tienda.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendaPageModule": () => (/* binding */ TiendaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tienda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tienda-routing.module */ 3117);
/* harmony import */ var _tienda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tienda.page */ 2415);







let TiendaPageModule = class TiendaPageModule {
};
TiendaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tienda_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiendaPageRoutingModule
        ],
        declarations: [_tienda_page__WEBPACK_IMPORTED_MODULE_1__.TiendaPage]
    })
], TiendaPageModule);



/***/ }),

/***/ 2415:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tienda/tienda.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiendaPage": () => (/* binding */ TiendaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tienda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tienda.page.html?ngResource */ 3766);
/* harmony import */ var _tienda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tienda.page.scss?ngResource */ 4564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicio.service */ 8657);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let TiendaPage = class TiendaPage {
    constructor(servicio, sanitizer, router) {
        this.servicio = servicio;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ngOnInit() {
        let datos = {
            id: 0
        };
        this.servicio.get('restaurante', datos).subscribe(respuesta => {
            this.restaurantes = respuesta;
        });
    }
    verProducto(restaurante) {
        let datos = {
            idres: restaurante.idRestaurante
        };
        this.servicio.get('producto', datos).subscribe(res => {
            this.router.navigate(['/producto'], { queryParams: { producto: JSON.stringify(res) } });
        });
    }
    carrito() {
        this.router.navigate(['/carrito']);
    }
};
TiendaPage.ctorParameters = () => [
    { type: src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
TiendaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tienda',
        template: _tienda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tienda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TiendaPage);



/***/ }),

/***/ 4564:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/tienda/tienda.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWVuZGEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3766:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/tienda/tienda.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tienda</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"carrito()\" >\n        <ion-icon slot=\"icon-only\"  name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>RESTAURANTES </ion-list-header>\n  <ion-list *ngFor=\"let item of restaurantes\" >\n    <ion-item button (click)=\"verProducto(item)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"https://picsum.photos/200/300\"/>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.nombre}}</h2>\n        <h3>Ubicacion : {{item.direccion}} </h3>\n        <p>Cel.:: : {{item.celular}} </p>\n        <p>Abre : {{item.horarioApertura}}  Cierra : {{item.horarioCierre}} </p>\n      </ion-label>\n    </ion-item>\n\n    \n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tienda_tienda_module_ts.js.map