import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalINfoPage } from './modal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModalINfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalINfoPageRoutingModule {}
