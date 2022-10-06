import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private servicio : ServicioService,private nav : NavController,private alertController: AlertController) { }

  ngOnInit() {
  }


  register(form){
      this.servicio.post('cliente',form.value).subscribe(datos=>{
        this.presentAlert()
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'EXITO',
      message: 'Cliente Registrado!',
      buttons: ['OK'],
    });

    await alert.present();
    this.nav.back()
  }
}
