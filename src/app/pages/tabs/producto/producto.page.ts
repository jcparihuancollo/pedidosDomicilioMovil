import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private parametro : ActivatedRoute,public toastController: ToastController,private router : Router) { }
  productos : any[];
  busquedas : any[];
  ngOnInit() {
    this.parametro.queryParams.subscribe((params : any) => {
      this.productos = JSON.parse(params.producto)
      this.busquedas =this.productos;
    });
  }

  carrito(){
    this.router.navigate(['/carrito'] );
  }
  adicionarCarrito(producto){
    Preferences.get({key : 'carrito'}).then(data =>{
       let pedidos : any[]  = data.value == null ? [] :  JSON.parse(data.value);
       let list = pedidos.length == 0 ? [] : pedidos.filter(item => item.estado == false)[0].lista;
       let pos = pedidos.indexOf( pedidos.filter(item => item.estado == false)[0]);

       let i = list.filter( bus=> bus.producto.idProducto == producto.idProducto);
       if (i.length > 0) {
        this.presentToast('Producto ya existe en la Bolsa.');
       } else {
            list.push({ producto : producto , cantidad : 1  })
          let pedido = {
            estado : false ,
            lista : list
          }
          if (pos == -1) {
              pedidos.push(pedido)
              Preferences.set({ key : 'carrito' , value : JSON.stringify(pedidos) })
              this.presentToast('Adicionado a la bolsa.');
          } else {
              pedidos[pos] = pedido;
              Preferences.set({ key : 'carrito' , value : JSON.stringify(pedidos) })
              this.presentToast('Adicionado a la bolsa.');
          }
       }
    })

  }




  async presentToast(sms) {
    const toast = await this.toastController.create({
      message: sms,
      duration: 4000
    });
    toast.present();
  }
  busqueda(evento){
    this.busquedas = this.productos.filter(item => item.nombre.toLowerCase().indexOf(evento.target.value.toLowerCase()) > -1)
  }

}
