import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  restaurantes : any ;
  constructor(private servicio : ServicioService,private sanitizer:DomSanitizer,private router: Router) { }

  ngOnInit() {
    let datos ={
       id : 0
    }
    this.servicio.get('restaurante' , datos).subscribe(respuesta=>{
       this.restaurantes = respuesta;
    })
  }

  verProducto(restaurante){
    let datos ={
      idres : restaurante.idRestaurante
    }
    this.servicio.get('producto' , datos).subscribe(res=>{
      this.router.navigate(['/producto'],{ queryParams: {  producto : JSON.stringify(res)}} );
   })
    
  }

  carrito(){
    this.router.navigate(['/carrito'] );
  }
}
