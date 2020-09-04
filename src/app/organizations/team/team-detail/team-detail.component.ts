import { Component, Injector } from '@angular/core';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent extends DetailBase<Team, TeamService> {

  constructor(service: TeamService, injector: Injector) {
    super(service, Team, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

}