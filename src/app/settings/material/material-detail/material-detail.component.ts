import { Component, Injector } from '@angular/core';
import { Material } from '../material';
import { DetailBase } from 'src/app/core/detail-base.component';
import { MaterialService } from '../material.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']  
})
export class MaterialDetailComponent extends DetailBase<Material, MaterialService> {

  constructor(service: MaterialService, injector: Injector) {
		super(service, Material, injector);
  }
  
  protected createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });        
  }
  
}