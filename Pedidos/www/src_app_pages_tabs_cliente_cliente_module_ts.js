"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_cliente_cliente_module_ts"],{

/***/ 3559:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/cliente/cliente-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageRoutingModule": () => (/* binding */ ClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.page */ 1045);




const routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_0__.ClientePage
    }
];
let ClientePageRoutingModule = class ClientePageRoutingModule {
};
ClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientePageRoutingModule);



/***/ }),

/***/ 842:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/cliente/cliente.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageModule": () => (/* binding */ ClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-routing.module */ 3559);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page */ 1045);







let ClientePageModule = class ClientePageModule {
};
ClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientePageRoutingModule
        ],
        declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_1__.ClientePage]
    })
], ClientePageModule);



/***/ }),

/***/ 1045:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/cliente/cliente.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePage": () => (/* binding */ ClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.page.html?ngResource */ 524);
/* harmony import */ var _cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page.scss?ngResource */ 8492);
/* harmony import */ var src_app_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guard/login.guard */ 4859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);







let ClientePage = class ClientePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({ key: 'cliente' }).then(data => {
            this.cliente = JSON.parse(data.value);
        });
    }
    cerrar() {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({ key: 'cliente' });
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({ key: src_app_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__.INTRO_KEY });
        this.router.navigateByUrl('/login', { replaceUrl: true });
    }
};
ClientePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cliente',
        template: _cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientePage);



/***/ }),

/***/ 8492:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/cliente/cliente.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 524:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/cliente/cliente.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row color=\"primary\" justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div padding>\n          <ion-item>\n            <ion-label>Nombre</ion-label>\n            <ion-label>{{cliente.nombre}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Correo</ion-label>\n            <ion-label>{{cliente.email}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Direccion</ion-label>\n            <ion-label>{{cliente.direccion}}</ion-label>\n          </ion-item>\n        </div>\n        <div padding>\n          <ion-button size=\"large\" (click)=\"cerrar()\" expand=\"block\">Cerrar Sesion</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_cliente_cliente_module_ts.js.map