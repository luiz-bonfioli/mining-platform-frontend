import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: StateListComponent
  },
  {
    path: '',
    component: StateDetailComponent
  },
  {
    path: ':id',
    component: StateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
