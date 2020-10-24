import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { UnitService } from '../unit.service';
import { Unit } from '../unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent extends ListBase<Unit, UnitService> {

  constructor(service: UnitService, injector: Injector) {
    super(service, { "ROUTE": Routes.UNIT_ROUTE }, injector);
  }

}