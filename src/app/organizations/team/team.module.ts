import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamDetailDialogComponent } from './team-detail-dialog/team-detail-dialog.component';


@NgModule({
  declarations: [TeamListComponent, TeamDetailComponent, TeamDetailDialogComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ]
})
export class TeamModule { }
