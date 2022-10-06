import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.page.html',
  styleUrls: ['./lista-categoria.page.scss'],
})
export class ListaCategoriaPage implements OnInit {
  restaurantes : any = [];
  constructor(private parametro : ActivatedRoute,private servicio : ServicioService,private router: Router) { }

  ngOnInit() {
    this.parametro.queryParams.subscribe((params : any) => {
      this.restaurantes = JSON.parse(params.restaurantes)
    });
  }
  verProducto(restaurante){
    let datos ={
      idres : restaurante.idRestaurante
    }
    this.servicio.get('producto' , datos).subscribe(res=>{
      this.router.navigate(['/producto'],{ queryParams: {  producto : JSON.stringify(res)}} );
   })
    
  }
}
