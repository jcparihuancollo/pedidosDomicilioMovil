import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  restaurantes : any ;
  ventanas: number = 0;
  categoria : any ;
  constructor(private servicio : ServicioService,private router: Router) { }

  ngOnInit() {
    let datos ={
       id : 0
    }
    this.servicio.get('restaurante' , datos).subscribe((respuesta : any)=>{
       this.restaurantes = respuesta;
       this.categoria = Array.from(new Set(respuesta.map(s => s.categoria))).map(cat =>{
         return {
            categoria : cat ,
            restaurantes : respuesta.filter(i  => i.categoria == cat)
         }
       })
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
  verCategoria(restaurantes){
      this.router.navigate(['/lista-categoria'],{ queryParams: {  restaurantes : JSON.stringify(restaurantes)}} );
  }
 
}
