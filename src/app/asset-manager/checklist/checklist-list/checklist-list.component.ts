import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Checklist } from '../checklist';
import { ChecklistService } from '../checklist.service';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent extends ListBase<Checklist, ChecklistService> {

  constructor(service: ChecklistService, injector: Injector) {
    super(service, { "ROUTE": Routes.CHECKLIST_ROUTE }, injector);
  }

}