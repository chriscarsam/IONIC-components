import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalINfoPageRoutingModule } from './modal-info-routing.module';

import { ModalINfoPage } from './modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalINfoPageRoutingModule
  ],
  declarations: [ModalINfoPage]
})
export class ModalINfoPageModule {}
