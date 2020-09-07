import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Operator } from '../operator';
import { OperatorService } from '../operator.service';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.scss']
})
export class OperatorDetailComponent extends DetailBase<Operator, OperatorService> {

  constructor(service: OperatorService, injector: Injector) {
    super(service, Operator, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      register: [null, Validators.required]
    });
  }

}
