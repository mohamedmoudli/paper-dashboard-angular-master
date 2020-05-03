import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalOpportunityComponent } from './historical-opportunity.component';

describe('HistoricalOpportunityComponent', () => {
  let component: HistoricalOpportunityComponent;
  let fixture: ComponentFixture<HistoricalOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
