import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { EquipmentService } from '../equipment.service';
import { Routes } from 'src/app/core/routes';
import { Equipment } from '../equipment';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentDetailComponent } from '../equipment-detail/equipment-detail.component';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent extends ListBase<Equipment, EquipmentService> {
  constructor(public dialog: MatDialog, service: EquipmentService, injector: Injector) {
    super(service, { ROUTE: Routes.EQUIPMENT_ROUTE }, injector);
  }

  public newItem(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EquipmentDetailComponent, {
      width: '250px',
      data: this.items[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
