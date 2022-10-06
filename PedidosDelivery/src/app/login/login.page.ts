import { INTRO_KEY } from './../guard/login.guard';
import { ServicioService } from './../services/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private servicio : ServicioService,private alertController: AlertController) { }

  ngOnInit() {
  }

  login(form){
   this.servicio.get('usuario', form.value).subscribe((datos : any)=>{
      if (datos.length >0) {
        Preferences.set({key: INTRO_KEY, value: 'true'});
        Preferences.set({key: 'usuario', value: JSON.stringify(datos[0])});
      this.router.navigateByUrl('/pedido', { replaceUrl:true });
      } else {
        this.presentAlert()
      }
   })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario incorrecto!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
