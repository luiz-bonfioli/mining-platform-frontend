import { Component, Injector } from '@angular/core';
import { DetailBase } from 'src/app/core/detail-base.component';
import { State } from '../state';
import { StateService } from '../state.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss']
})
export class StateDetailComponent extends DetailBase<State, StateService> {

  constructor(service: StateService, injector: Injector) {
    super(service, State, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

}