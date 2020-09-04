import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { OperatorService } from '../operator.service';
import { Operator } from '../operator';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent extends ListBase<Operator, OperatorService> {

  constructor(service: OperatorService, injector: Injector) {
    super(service, { "ROUTE": Routes.OPERATOR_ROUTE }, injector);
  }

}
