import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { MaterialService } from '../material.service';
import { Routes } from 'src/app/core/routes';
import { Material } from '../material';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent extends ListBase<Material, MaterialService> {

  constructor(public dialog: MatDialog, service: MaterialService, injector: Injector) {
    super(service, { "ROUTE": Routes.MATERIAL_ROUTE }, injector);
  }

}
