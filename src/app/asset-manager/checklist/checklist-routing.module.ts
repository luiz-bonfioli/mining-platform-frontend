import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistDetailComponent } from './checklist-detail/checklist-detail.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ChecklistListComponent
  },
  {
    path: '',
    component: ChecklistDetailComponent
  },
  {
    path: ':id',
    component: ChecklistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
