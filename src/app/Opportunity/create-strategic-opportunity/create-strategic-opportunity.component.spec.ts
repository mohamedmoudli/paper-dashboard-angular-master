import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStrategicOpportunityComponent } from './create-strategic-opportunity.component';

describe('CreateStrategicOpportunityComponent', () => {
  let component: CreateStrategicOpportunityComponent;
  let fixture: ComponentFixture<CreateStrategicOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStrategicOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStrategicOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
