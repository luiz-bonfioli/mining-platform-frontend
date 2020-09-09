import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component'
import { Routes } from 'src/app/core/routes'
import { Checklist } from '../checklist'
import { ChecklistService } from '../checklist.service'
import { ChecklistItem } from '../checklist-item/checklist-item'
import { ChecklistItemService } from '../checklist-item/checklist-item.service'

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent extends ListBase<Checklist, ChecklistService> {

  selectedChecklistItem: ChecklistItem

  constructor(service: ChecklistService, private checklistItemService: ChecklistItemService, injector: Injector) {
    super(service, { "ROUTE": Routes.CHECKLIST_ROUTE }, injector)
  }

  addItem(checklist: Checklist){
    checklist.checklistItems.push(new ChecklistItem())   
  }

  onSaveItem(checklistId: string, checklistItem: ChecklistItem){
    checklistItem.checklist = new Checklist()
    checklistItem.checklist.id = checklistId
    this.checklistItemService.save(checklistItem).subscribe(response => {
      checklistItem.id = response.id
      this.selectedChecklistItem = null
    })
  }

  removeChecklistItem(checklist: Checklist, checklistItem: ChecklistItem){
    this.checklistItemService.delete(checklistItem).subscribe(response => {
      checklist.checklistItems.splice(checklist.checklistItems.indexOf(checklistItem), 1)

    })  
  }

  editChecklistItem(checklistItem: ChecklistItem){
    this.selectedChecklistItem = checklistItem
  }

}