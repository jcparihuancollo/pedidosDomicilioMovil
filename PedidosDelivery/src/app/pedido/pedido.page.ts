import { Router } from '@angular/router';
import { INTRO_KEY } from './../guard/login.guard';
import { ServicioService } from './../services/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  usuario : any;
  pedidos : any;
  constructor(private servicio : ServicioService,private router : Router) { }

  ngOnInit() {
    Preferences.get({key: 'usuario'}).then(data=>{
      this.usuario =JSON.parse(data.value);
      this.cargarLista()
    })
  }


  cargarLista(){
    let datos = {
      idop : this.usuario.idUsuario ,
      tipo : 1
    }
    this.servicio.get('pedido', datos).subscribe(res=>{
      this.pedidos = res
    })
  }

  doRefresh(event) {
    setTimeout(() => {
      this.cargarLista()
      event.target.complete();
    }, 1000);
  }

  actualizarPedido(item){
    let datos = {
      idpedido : item.idPedido ,
      estado : 3
    }

    this.servicio.put('pedido' , datos).subscribe(res=>{
      this.cargarLista()
    })
  }

  cerrarSesion(){
    Preferences.remove({ key: 'cliente' });
    Preferences.remove({key: INTRO_KEY});
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
