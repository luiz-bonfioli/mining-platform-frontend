import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Team } from '../team';
import { TeamDetailDialogComponent } from '../team-detail-dialog/team-detail-dialog.component';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent extends ListBase<Team, TeamService> {

  constructor(service: TeamService, injector: Injector) {
    super(service, { "ROUTE": Routes.TEAM_ROUTE }, injector, TeamDetailDialogComponent);
  }

  public showItem(selected: Team): void {
    this.router.navigate([this.route['ROUTE'], selected.id])
  }

}
