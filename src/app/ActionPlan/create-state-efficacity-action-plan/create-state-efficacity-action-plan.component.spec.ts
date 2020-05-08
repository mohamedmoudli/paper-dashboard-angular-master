import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStateEfficacityActionPlanComponent } from './create-state-efficacity-action-plan.component';

describe('CreateStateEfficacityActionPlanComponent', () => {
  let component: CreateStateEfficacityActionPlanComponent;
  let fixture: ComponentFixture<CreateStateEfficacityActionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStateEfficacityActionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStateEfficacityActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
