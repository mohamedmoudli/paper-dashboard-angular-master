import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalRiskComponent } from './historical-risk.component';

describe('HistoricalRiskComponent', () => {
  let component: HistoricalRiskComponent;
  let fixture: ComponentFixture<HistoricalRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
