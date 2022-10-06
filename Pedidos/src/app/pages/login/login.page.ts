import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guard/login.guard';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private servicio : ServicioService,private alertController: AlertController) { }

  ngOnInit() {
  }

  async login(form){
    
    this.servicio.get('cliente',form.value).subscribe((res : any)=>{
      if (res.length >0) {
          Preferences.set({key: INTRO_KEY, value: 'true'});
          Preferences.set({key: 'cliente', value: JSON.stringify(res[0])});
         this.router.navigateByUrl('/tabs', { replaceUrl:true });
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
