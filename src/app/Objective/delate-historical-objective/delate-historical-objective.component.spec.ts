import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateHistoricalObjectiveComponent } from './delate-historical-objective.component';

describe('DelateHistoricalObjectiveComponent', () => {
  let component: DelateHistoricalObjectiveComponent;
  let fixture: ComponentFixture<DelateHistoricalObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateHistoricalObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateHistoricalObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
