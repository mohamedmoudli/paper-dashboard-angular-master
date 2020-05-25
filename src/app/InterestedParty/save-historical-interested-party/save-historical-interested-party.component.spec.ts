import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHistoricalInterestedPartyComponent } from './save-historical-interested-party.component';

describe('SaveHistoricalInterestedPartyComponent', () => {
  let component: SaveHistoricalInterestedPartyComponent;
  let fixture: ComponentFixture<SaveHistoricalInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHistoricalInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHistoricalInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
