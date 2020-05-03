import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalInterestedPartyComponent } from './historical-interested-party.component';

describe('HistoricalInterestedPartyComponent', () => {
  let component: HistoricalInterestedPartyComponent;
  let fixture: ComponentFixture<HistoricalInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
