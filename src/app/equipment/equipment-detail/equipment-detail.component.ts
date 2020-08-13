import { Component, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from '../equipment';
import { DetailBase } from 'src/app/core/detail-base.component';
import { EquipmentService } from '../equipment.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss'],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
})
export class EquipmentDetailComponent extends DetailBase<Equipment, EquipmentService> {
  constructor(service: EquipmentService, injector: Injector) {
    super(service, Equipment, injector);
  }

  public createFormControls(): Map<string, FormGroup | FormControl> {
    let map = new Map<string, FormGroup | FormControl>();
    map['id'] = new FormControl();
    map['name'] = new FormControl();
    map['shortName'] = new FormControl();

    return map;
  }

  beforeSave(): void {
    super.beforeSave();
    let a = this.currentItem.name;
  }

  // constructor(
  //   public dialogRef: MatDialogRef<EquipmentDetailComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Equipment) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
