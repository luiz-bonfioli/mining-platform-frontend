import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EquipmentListComponent, EquipmentDetailComponent],
  imports: [CommonModule, EquipmentRoutingModule, SharedModule]
})
export class EquipmentModule {}
