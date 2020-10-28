import { Component, Injector } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { DetailBase } from 'src/app/core/detail-base.component'
import { ProductionOrder } from '../production-order'
import { ProductionOrderService } from '../production-order.service'

@Component({
  selector: 'app-production-order-detail-dialog',
  templateUrl: './production-order-detail-dialog.component.html',
  styleUrls: ['./production-order-detail-dialog.component.scss']
})
export class ProductionOrderDetailDialogComponent extends DetailBase<ProductionOrder, ProductionOrderService> {

  constructor(service: ProductionOrderService, injector: Injector,
    dialog: MatDialogRef<ProductionOrderDetailDialogComponent>) {
    super(service, ProductionOrder, injector, dialog)
  }

  public createFormGroup(): FormGroup {

    return this.formBuilder.group({
      id: [''],
      description: ['', Validators.required],
      plan: [null]
    })
  }

}