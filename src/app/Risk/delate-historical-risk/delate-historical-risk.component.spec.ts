import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateHistoricalRiskComponent } from './delate-historical-risk.component';

describe('DelateHistoricalRiskComponent', () => {
  let component: DelateHistoricalRiskComponent;
  let fixture: ComponentFixture<DelateHistoricalRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateHistoricalRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateHistoricalRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
