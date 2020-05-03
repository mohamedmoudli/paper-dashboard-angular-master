import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActionPlanComponent } from './create-action-plan.component';

describe('CreateActionPlanComponent', () => {
  let component: CreateActionPlanComponent;
  let fixture: ComponentFixture<CreateActionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateActionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
