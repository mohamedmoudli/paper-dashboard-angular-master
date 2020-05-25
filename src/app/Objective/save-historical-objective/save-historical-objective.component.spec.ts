import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHistoricalObjectiveComponent } from './save-historical-objective.component';

describe('SaveHistoricalObjectiveComponent', () => {
  let component: SaveHistoricalObjectiveComponent;
  let fixture: ComponentFixture<SaveHistoricalObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHistoricalObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHistoricalObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
