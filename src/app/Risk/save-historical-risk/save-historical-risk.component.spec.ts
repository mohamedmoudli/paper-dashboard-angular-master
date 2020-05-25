import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHistoricalRiskComponent } from './save-historical-risk.component';

describe('SaveHistoricalRiskComponent', () => {
  let component: SaveHistoricalRiskComponent;
  let fixture: ComponentFixture<SaveHistoricalRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHistoricalRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHistoricalRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
