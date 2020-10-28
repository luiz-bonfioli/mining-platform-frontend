import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Plan } from '../plan';
import { PlanDetailDialogComponent } from '../plan-detail-dialog/plan-detail-dialog.component';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent extends ListBase<Plan, PlanService> {

  displayedColumns: string[] = ['description', 'start_date', 'end_date', 'status'];

  constructor(service: PlanService, injector: Injector) {
    super(service, { "ROUTE": Routes.PLAN_ROUTE }, injector, PlanDetailDialogComponent);
  }

  public showItem(selected: Plan): void {
    this.router.navigate([this.route['ROUTE'], selected.id])
  }

}