import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOpportunityComponent } from './state-opportunity.component';

describe('StateOpportunityComponent', () => {
  let component: StateOpportunityComponent;
  let fixture: ComponentFixture<StateOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
