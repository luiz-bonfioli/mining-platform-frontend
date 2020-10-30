import { Component, Injector } from '@angular/core';
import { ListBase } from '../../../../core/list-base.component';
import { Routes } from '../../../../core/routes';
import { Operation } from '../operation';
import { OperationDetailDialogComponent } from '../operation-detail-dialog/operation-detail-dialog.component';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss']
})
export class OperationListComponent extends ListBase<Operation, OperationService> {

  constructor(service: OperationService, injector: Injector) {
    super(service, { "ROUTE": Routes.PRODUCTION_ORDER_ROUTE }, injector, OperationDetailDialogComponent)
  }

  showOperations(selected: Operation) {
    this.router.navigate([this.route['ROUTE'], selected.id, 'operation', 'list'])
  }

}