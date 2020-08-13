import { Component, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from '../material';
import { DetailBase } from 'src/app/core/detail-base.component';
import { MaterialService } from '../material.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss'],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {}}]
})
export class MaterialDetailComponent extends DetailBase<Material, MaterialService> {

  constructor(service: MaterialService, injector: Injector) 
	{
		super(service, Material, injector);
	}

  public createFormControls(): Map<string, FormGroup | FormControl> {
    let map = new Map<string, FormGroup | FormControl>();
    map['id'] = new FormControl();
    map['name'] = new FormControl();

    return map;
  }

}