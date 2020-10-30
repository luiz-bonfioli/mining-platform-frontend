import { Component, Injector } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { DetailBase } from 'src/app/core/detail-base.component'
import { ModelBase } from '../../../../core/model-base'
import { ProductionOrder } from '../../production-order'
import { Operation } from '../operation'
import { OperationService } from '../operation.service'

@Component({
  selector: 'app-operation-detail-dialog',
  templateUrl: './operation-detail-dialog.component.html',
  styleUrls: ['./operation-detail-dialog.component.scss']
})
export class OperationDetailDialogComponent extends DetailBase<Operation, OperationService> {

  constructor(service: OperationService, injector: Injector,
    dialog: MatDialogRef<OperationDetailDialogComponent>) {
    super(service, Operation, injector, dialog)
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      productionOrder: [null]
    })
  }

  protected setParent(parent: ModelBase): void {
    this.currentItem.productionOrder = parent as ProductionOrder
    this.formDetail.patchValue(this.currentItem);
  }

}