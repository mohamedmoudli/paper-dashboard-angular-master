import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHistoricalOpportunityComponent } from './save-historical-opportunity.component';

describe('SaveHistoricalOpportunityComponent', () => {
  let component: SaveHistoricalOpportunityComponent;
  let fixture: ComponentFixture<SaveHistoricalOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHistoricalOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHistoricalOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
