import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateHistoricalInterestedPartyComponent } from './delate-historical-interested-party.component';

describe('DelateHistoricalInterestedPartyComponent', () => {
  let component: DelateHistoricalInterestedPartyComponent;
  let fixture: ComponentFixture<DelateHistoricalInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateHistoricalInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateHistoricalInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
