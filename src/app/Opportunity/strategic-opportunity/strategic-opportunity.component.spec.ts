import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicOpportunityComponent } from './strategic-opportunity.component';

describe('StrategicOpportunityComponent', () => {
  let component: StrategicOpportunityComponent;
  let fixture: ComponentFixture<StrategicOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
