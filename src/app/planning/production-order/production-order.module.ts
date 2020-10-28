import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductionOrderDetailDialogComponent } from './production-order-detail-dialog/production-order-detail-dialog.component';
import { ProductionOrderListComponent } from './production-order-list/production-order-list.component';
import { ProductionOrderRoutingModule } from './production-order-routing.module';



@NgModule({
  declarations: [ProductionOrderListComponent, ProductionOrderDetailDialogComponent],
  imports: [
    CommonModule,
    ProductionOrderRoutingModule,
    SharedModule
  ]
})
export class ProductionOrderModule { }
