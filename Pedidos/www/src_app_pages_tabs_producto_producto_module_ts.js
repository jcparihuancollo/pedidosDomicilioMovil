"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_producto_producto_module_ts"],{

/***/ 9914:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/producto/producto-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageRoutingModule": () => (/* binding */ ProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page */ 2298);




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_0__.ProductoPage
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ 9079:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/producto/producto.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageModule": () => (/* binding */ ProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-routing.module */ 9914);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page */ 2298);







let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoPageRoutingModule
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_1__.ProductoPage]
    })
], ProductoPageModule);



/***/ }),

/***/ 2298:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/producto/producto.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPage": () => (/* binding */ ProductoPage)
/* harmony export */ });
/* harmony import */ var _Users_carlos_Desktop_Pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page.html?ngResource */ 6120);
/* harmony import */ var _producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.page.scss?ngResource */ 9947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);








let ProductoPage = class ProductoPage {
  constructor(parametro, toastController, router) {
    this.parametro = parametro;
    this.toastController = toastController;
    this.router = router;
  }

  ngOnInit() {
    this.parametro.queryParams.subscribe(params => {
      this.productos = JSON.parse(params.producto);
      this.busquedas = this.productos;
    });
  }

  carrito() {
    this.router.navigate(['/carrito']);
  }

  adicionarCarrito(producto) {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'carrito'
    }).then(data => {
      let pedidos = data.value == null ? [] : JSON.parse(data.value);
      let list = pedidos.length == 0 ? [] : pedidos.filter(item => item.estado == false)[0].lista;
      let pos = pedidos.indexOf(pedidos.filter(item => item.estado == false)[0]);
      let i = list.filter(bus => bus.producto.idProducto == producto.idProducto);

      if (i.length > 0) {
        this.presentToast('Producto ya existe en la Bolsa.');
      } else {
        list.push({
          producto: producto,
          cantidad: 1
        });
        let pedido = {
          estado: false,
          lista: list
        };

        if (pos == -1) {
          pedidos.push(pedido);
          _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
            key: 'carrito',
            value: JSON.stringify(pedidos)
          });
          this.presentToast('Adicionado a la bolsa.');
        } else {
          pedidos[pos] = pedido;
          _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
            key: 'carrito',
            value: JSON.stringify(pedidos)
          });
          this.presentToast('Adicionado a la bolsa.');
        }
      }
    });
  }

  presentToast(sms) {
    var _this = this;

    return (0,_Users_carlos_Desktop_Pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: sms,
        duration: 4000
      });
      toast.present();
    })();
  }

  busqueda(evento) {
    this.busquedas = this.productos.filter(item => item.nombre.toLowerCase().indexOf(evento.target.value.toLowerCase()) > -1);
  }

};

ProductoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

ProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-producto',
  template: _producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductoPage);


/***/ }),

/***/ 9947:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/producto/producto.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6120:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/producto/producto.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">producto</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"carrito()\" >\n        <ion-icon slot=\"icon-only\"  name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar >\n    <ion-searchbar (ionInput)=\"busqueda($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of busquedas\" >\n        <ion-card style=\"border-radius: 15px; \" >\n          <ion-card-header>\n            <ion-card-title style=\" white-space: initial; font-size: small; \">{{item.nombre}} </ion-card-title>\n          </ion-card-header>\n          <ion-img  src=\"https://picsum.photos/200/300\"></ion-img>\n          <ion-card-content >\n          <ion-toolbar>\n            <p  style=\"font-weight: bold;\" > {{item.precio}} BS</p>\n            <ion-buttons slot=\"secondary\">\n              <ion-button (click)=\"adicionarCarrito(item)\">\n                <ion-icon  slot=\"icon-only\" color=\"primary\" name=\"bag-handle-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_producto_producto_module_ts.js.map