import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReevaluateOpportunityComponent } from './reevaluate-opportunity.component';

describe('ReevaluateOpportunityComponent', () => {
  let component: ReevaluateOpportunityComponent;
  let fixture: ComponentFixture<ReevaluateOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReevaluateOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReevaluateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
