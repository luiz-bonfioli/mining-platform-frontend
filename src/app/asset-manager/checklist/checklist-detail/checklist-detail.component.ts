import { Component, OnInit, Injector } from '@angular/core';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Checklist } from '../checklist';
import { ChecklistService } from '../checklist.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checklist-detail',
  templateUrl: './checklist-detail.component.html',
  styleUrls: ['./checklist-detail.component.scss']
})
export class ChecklistDetailComponent extends DetailBase<Checklist, ChecklistService> {

  constructor(service: ChecklistService, injector: Injector) {
    super(service, Checklist, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

}