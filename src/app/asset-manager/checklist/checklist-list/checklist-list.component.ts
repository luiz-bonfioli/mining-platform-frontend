import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Checklist } from '../checklist';
import { ChecklistService } from '../checklist.service';
import { ChecklistItem } from '../checklist-item/checklist-item';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent extends ListBase<Checklist, ChecklistService> {

  constructor(service: ChecklistService, injector: Injector) {
    super(service, { "ROUTE": Routes.CHECKLIST_ROUTE }, injector)
  }

  addItem(checklist: Checklist){
    checklist.checklistItems.push(new ChecklistItem())   
  }

  onSaveItem(checklist: Checklist, checklistItem: ChecklistItem){
    console.log(checklistItem.name)
  }

}