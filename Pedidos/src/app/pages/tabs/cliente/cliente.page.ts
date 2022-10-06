import { INTRO_KEY } from 'src/app/guard/login.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  cliente : any = {
    nombre : '' ,
    email : '' ,
    direccion : ''
  };
  constructor(private router : Router) { }

  ngOnInit() {
    Preferences.get({ key: 'cliente' }).then(data => {
      this.cliente =JSON.parse(data.value);
    })
  }
  cerrar(){
    Preferences.remove({ key: 'cliente' });
    Preferences.remove({key: INTRO_KEY});
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
