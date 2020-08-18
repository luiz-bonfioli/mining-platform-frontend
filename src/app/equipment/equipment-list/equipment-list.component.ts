import { Component, Injector, OnInit } from '@angular/core';
import { Equipment } from '../equipment';
import { ListBase } from 'src/app/core/list-base.component';
import { EquipmentService } from '../equipment.service';
import { Routes } from 'src/app/core/routes';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent extends ListBase<Equipment, EquipmentService> {

  constructor(service: EquipmentService, injector: Injector) {
		super(service, { "ROUTE": Routes.EQUIPMENT_ROUTE }, injector);
  }
 
}
