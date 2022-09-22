import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  cliente : any;
  pedidos : any;
  constructor(private servicio : ServicioService) { }

  ngOnInit() {
    Preferences.get({ key: 'cliente' }).then(data => {
      this.cliente =JSON.parse(data.value);
      this.getlista()
    })
    
  }
  getlista(){
    let datos ={
      idcli : this.cliente.idCliente
    }
    this.servicio.get('pedido' , datos).subscribe(res=>{
      this.pedidos = res;
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getlista()
      event.target.complete();
    }, 1000);
  }
}
