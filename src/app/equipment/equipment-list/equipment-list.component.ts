import { Component, Injector, OnInit } from '@angular/core';
import { Equipment } from '../equipment';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  public items: Equipment[] = [];
  public equipmentCategories: string[] = [];
  public newItem: boolean;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.items.push(this.createEquipment(i));
      if(i < 10)
      this.equipmentCategories.push("Category " + i);
    }    
  } 
  createEquipment(i: number): Equipment {
    return {
      id: "000" + i,
      name: "Equipment " +"000" + i,
      shortName: "EQP " + "000" + i
    }
  }

  toggleNewItem(){
    this.newItem = !this.newItem;
  }


  // constructor(public dialog: MatDialog, service: EquipmentService, injector: Injector) {
  //   super(service, { ROUTE: Routes.EQUIPMENT_ROUTE }, injector);
  // }

  // public newItem(): void {
  //   this.openDialog();
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EquipmentDetailComponent, {
  //     width: '250px',
  //     data: this.items[0]
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
