import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-detail-dialog',
  templateUrl: './plan-detail-dialog.component.html',
  styleUrls: ['./plan-detail-dialog.component.scss']
})
export class PlanDetailDialogComponent extends DetailBase<Plan, PlanService> {

  constructor(service: PlanService, injector: Injector,
    dialog: MatDialogRef<PlanDetailDialogComponent>) {
    super(service, Plan, injector, dialog)
  }

  public createFormGroup(): FormGroup {

    return this.formBuilder.group({
      id: [''],
      description: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      planStatus: ['', Validators.required]
    })
  }

}