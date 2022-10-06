"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_carrito_carrito_module_ts"],{

/***/ 4026:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/carrito/carrito-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageRoutingModule": () => (/* binding */ CarritoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito.page */ 2627);




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_0__.CarritoPage
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ 4113:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/carrito/carrito.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPageModule": () => (/* binding */ CarritoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrito-routing.module */ 4026);
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page */ 2627);







let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarritoPageRoutingModule
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_1__.CarritoPage]
    })
], CarritoPageModule);



/***/ }),

/***/ 2627:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/carrito/carrito.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarritoPage": () => (/* binding */ CarritoPage)
/* harmony export */ });
/* harmony import */ var _Users_carlos_Desktop_Pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrito.page.html?ngResource */ 5450);
/* harmony import */ var _carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.page.scss?ngResource */ 50);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicio.service */ 8657);









let CarritoPage = class CarritoPage {
  constructor(router, servicio, alertController) {
    this.router = router;
    this.servicio = servicio;
    this.alertController = alertController;
    this.total = 0;
  }

  ngOnInit() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'carrito'
    }).then(data => {
      let d = JSON.parse(data.value);

      if (d != null) {
        this.lista = d.filter(item => item.estado == false)[0].lista;
        this.sumaTotal();
      }
    });
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'cliente'
    }).then(data => {
      this.cliente = JSON.parse(data.value);
    });
  }

  sumaTotal() {
    this.total = this.lista.map(item => Number(item.cantidad) * Number(item.producto.precio)).reduce((a, b) => a + b, 0);
  }

  cantidad(item, modo) {
    item.cantidad = modo ? item.cantidad == 1 ? 1 : item.cantidad - 1 : item.cantidad + 1;
    this.actualizarBolsa();
    this.sumaTotal();
  }

  eliminar(item) {
    this.lista = this.lista.filter(i => i.producto.idProducto != item.producto.idProducto);
    this.actualizarBolsa();
  }

  actualizarBolsa() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'carrito'
    }).then(data => {
      let pedidos = data.value == null ? [] : JSON.parse(data.value);
      let list = pedidos.length == 0 ? [] : pedidos.filter(item => item.estado == false)[0].lista;
      let pos = pedidos.indexOf(pedidos.filter(item => item.estado == false)[0]);
      list = this.lista;
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
      } else {
        pedidos[pos] = pedido;
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
          key: 'carrito',
          value: JSON.stringify(pedidos)
        });
      }
    });
  }

  guardar() {
    let detalle = this.lista.map(a => {
      return {
        "idProducto": a.producto.idProducto,
        "precio": Number(a.producto.precio).toFixed(2),
        "cantidad": a.cantidad
      };
    });
    let datos = {
      descripcion: 'pedido app',
      pedido: new Date().toISOString().slice(0, 17),
      entrega: new Date().toISOString().slice(0, 17),
      total: Number(this.total).toFixed(2),
      estado: 1,
      idres: 1,
      idcli: this.cliente.idCliente,
      idop: 12,
      detalle: detalle
    };
    this.servicio.post('pedido', datos).subscribe(res => {
      _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({
        key: 'carrito'
      });
      this.presentAlert();
    });
  }

  presentAlert() {
    var _this = this;

    return (0,_Users_carlos_Desktop_Pedidos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'EXITO',
        message: 'Pedido Guardado!',
        buttons: ['OK']
      });
      yield alert.present();

      _this.router.navigateByUrl('/tabs', {
        replaceUrl: true
      });
    })();
  }

};

CarritoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_services_servicio_service__WEBPACK_IMPORTED_MODULE_4__.ServicioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

CarritoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-carrito',
  template: _carrito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_carrito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CarritoPage);


/***/ }),

/***/ 50:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/carrito/carrito.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJyaXRvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5450:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/carrito/carrito.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>carrito</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let item of lista\">\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://picsum.photos/200/300\">\n        </ion-thumbnail>\n        <ion-toolbar>\n          <ion-label>\n            <ion-label  class=\"tx\">{{item.producto.nombre}}</ion-label>\n            <p>Cantidad : {{item.cantidad}}</p>\n            <p>{{item.producto.precio}}bs</p>\n          </ion-label>  \n          <ion-label  slot=\"secondary\">\n            <ion-buttons class=\"add\" slot=\"secondary\">\n              <ion-button (click)=\"cantidad(item,true)\">\n                <ion-icon  slot=\"icon-only\" color=\"primary\" name=\"remove-circle\"></ion-icon>\n              </ion-button>\n              <ion-button  (click)=\"cantidad(item,false)\">\n                <ion-icon slot=\"icon-only\" color=\"primary\" name=\"add-circle\"></ion-icon>\n              </ion-button>\n\n              <ion-button  (click)=\"eliminar(item)\">\n                <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-label>\n        </ion-toolbar>\n        \n      </ion-item>\n    </ion-card>\n\n  \n</ion-list>\n\n<ion-button  expand=\"block\" shape=\"round\" (click)=\"guardar()\">\n  Guardar Pedido <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n</ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Total</ion-title>\n    <ion-label  slot=\"secondary\">{{total}}   BS</ion-label>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_carrito_carrito_module_ts.js.map