import { Component, Injector } from '@angular/core';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent extends DetailBase<Unit, UnitService> {

  constructor(service: UnitService, injector: Injector) {
		super(service, Unit, injector);
  }
  
  protected createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });        
  }
  
}