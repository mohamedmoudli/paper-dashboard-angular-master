import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStateEfficacityActionPlanComponent } from './delate-state-efficacity-action-plan.component';

describe('DelateStateEfficacityActionPlanComponent', () => {
  let component: DelateStateEfficacityActionPlanComponent;
  let fixture: ComponentFixture<DelateStateEfficacityActionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStateEfficacityActionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStateEfficacityActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
