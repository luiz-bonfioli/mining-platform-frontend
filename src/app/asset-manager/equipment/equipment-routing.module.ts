import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: EquipmentListComponent
  },

  {
    path: '',
    component: EquipmentListComponent
  },

  {
    path: ':id',
    component: EquipmentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule {}
