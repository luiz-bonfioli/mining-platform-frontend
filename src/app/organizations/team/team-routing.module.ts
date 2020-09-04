import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: TeamListComponent
  },

  {
    path: '',
    component: TeamDetailComponent
  },

  {
    path: ':id',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
