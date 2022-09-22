import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  lista: any[];
  total: Number = 0;
  cliente : any ;
  constructor(private router : Router, private servicio : ServicioService,private alertController: AlertController) { }

  ngOnInit() {
    Preferences.get({ key: 'carrito' }).then(data => {
      let d =JSON.parse(data.value);
      
      if (d!=null) {
        this.lista = d.filter(item => item.estado == false)[0].lista;
        this.sumaTotal()
      }
    })

    Preferences.get({ key: 'cliente' }).then(data => {
      this.cliente = JSON.parse(data.value);
    })
  }

  sumaTotal() {
    this.total = this.lista.map(item => Number(item.cantidad) * Number(item.producto.precio)).reduce((a, b) => a + b, 0)
  }


  cantidad(item, modo) {
    item.cantidad = modo ? item.cantidad == 1 ? 1 : item.cantidad - 1 : item.cantidad + 1
    this.actualizarBolsa()
    this.sumaTotal()
  }

  eliminar(item) {
    this.lista = this.lista.filter(i => i.producto.idProducto != item.producto.idProducto)
    this.actualizarBolsa()
  }

  actualizarBolsa() {
    Preferences.get({ key: 'carrito' }).then(data => {
      let pedidos: any[] = data.value == null ? [] : JSON.parse(data.value);
      let list = pedidos.length == 0 ? [] : pedidos.filter(item => item.estado == false)[0].lista;
      let pos = pedidos.indexOf(pedidos.filter(item => item.estado == false)[0]);

      list = this.lista;
      let pedido = {
        estado: false,
        lista: list
      }
      if (pos == -1) {
        pedidos.push(pedido)
        Preferences.set({ key: 'carrito', value: JSON.stringify(pedidos) })
      } else {
        pedidos[pos] = pedido;
        Preferences.set({ key: 'carrito', value: JSON.stringify(pedidos) })
      }
    })
  }

  guardar(){

    let detalle = this.lista.map(a => {
      return {
        "idProducto": a.producto.idProducto,
        "precio": Number(a.producto.precio).toFixed(2),
        "cantidad": a.cantidad
    }
  });

     let datos ={
         descripcion : 'pedido app' ,
         pedido : new Date().toISOString().slice(0,17),
         entrega : new Date().toISOString().slice(0,17),
         total : Number(this.total).toFixed(2),
         estado : 1,
         idres : 1 ,
         idcli : this.cliente.idCliente,
         idop : 12 ,
         detalle : detalle
     }

     this.servicio.post('pedido',datos).subscribe(res=>{
        Preferences.remove({ key: 'carrito' });
        this.presentAlert()
     })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'EXITO',
      message: 'Pedido Guardado!',
      buttons: ['OK'],
    });

    await alert.present();
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }
}
