import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail-dialog',
  templateUrl: './team-detail-dialog.component.html',
  styleUrls: ['./team-detail-dialog.component.scss']
})
export class TeamDetailDialogComponent extends DetailBase<Team, TeamService> {

  constructor(service: TeamService, injector: Injector,
    dialog: MatDialogRef<TeamDetailDialogComponent>) {
    super(service, Team, injector, dialog)
  }

  public createFormGroup(): FormGroup {

    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    })
  }

}