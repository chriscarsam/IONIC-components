import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalINfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarModal(){

    const modal = await this.modalCtrl.create({
      component: ModalINfoPage
    });
    
    await modal.present();

  }
}
