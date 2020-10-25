import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailDialogComponent } from './organization-detail-dialog.component';

describe('OrganizationDetailDialogComponent', () => {
  let component: OrganizationDetailDialogComponent;
  let fixture: ComponentFixture<OrganizationDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
