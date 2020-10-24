import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: UnitListComponent
  },

  {
    path: '',
    component: UnitDetailComponent
  },

  {
    path: ':id',
    component: UnitDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule { }
