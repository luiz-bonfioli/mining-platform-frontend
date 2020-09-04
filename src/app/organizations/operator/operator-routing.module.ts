import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorDetailComponent } from './operator-detail/operator-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: OperatorListComponent
  },

  {
    path: '',
    component: OperatorDetailComponent
  },

  {
    path: ':id',
    component: OperatorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
