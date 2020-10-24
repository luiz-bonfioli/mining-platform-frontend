import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { MaterialService } from '../material.service';
import { Routes } from 'src/app/core/routes';
import { Material } from '../material';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent extends ListBase<Material, MaterialService> {

  constructor(service: MaterialService, injector: Injector) {
    super(service, { "ROUTE": Routes.MATERIAL_ROUTE }, injector);
  }

}
