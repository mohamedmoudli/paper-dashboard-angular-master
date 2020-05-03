import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStrategicOpportunityComponent } from './delate-strategic-opportunity.component';

describe('DelateStrategicOpportunityComponent', () => {
  let component: DelateStrategicOpportunityComponent;
  let fixture: ComponentFixture<DelateStrategicOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStrategicOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStrategicOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
