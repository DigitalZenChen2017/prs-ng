import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrApproveRejectComponent } from './pr-approve-reject.component';

describe('PrApproveRejectComponent', () => {
  let component: PrApproveRejectComponent;
  let fixture: ComponentFixture<PrApproveRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrApproveRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrApproveRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
