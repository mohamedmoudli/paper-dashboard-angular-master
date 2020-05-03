import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalObjectiveComponent } from './historical-objective.component';

describe('HistoricalObjectiveComponent', () => {
  let component: HistoricalObjectiveComponent;
  let fixture: ComponentFixture<HistoricalObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
