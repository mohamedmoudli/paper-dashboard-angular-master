import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateHistoricalOpportunityComponent } from './delate-historical-opportunity.component';

describe('DelateHistoricalOpportunityComponent', () => {
  let component: DelateHistoricalOpportunityComponent;
  let fixture: ComponentFixture<DelateHistoricalOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateHistoricalOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateHistoricalOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
