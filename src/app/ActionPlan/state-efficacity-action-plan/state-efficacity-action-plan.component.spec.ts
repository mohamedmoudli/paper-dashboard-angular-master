import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateEfficacityActionPlanComponent } from './state-efficacity-action-plan.component';

describe('StateEfficacityActionPlanComponent', () => {
  let component: StateEfficacityActionPlanComponent;
  let fixture: ComponentFixture<StateEfficacityActionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateEfficacityActionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateEfficacityActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
