import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeActionComponent } from './plan-de-action.component';

describe('PlanDeActionComponent', () => {
  let component: PlanDeActionComponent;
  let fixture: ComponentFixture<PlanDeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
