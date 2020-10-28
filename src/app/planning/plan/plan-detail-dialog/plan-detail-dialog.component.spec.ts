import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailDialogComponent } from './plan-detail-dialog.component';

describe('PlanDetailDialogComponent', () => {
  let component: PlanDetailDialogComponent;
  let fixture: ComponentFixture<PlanDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
