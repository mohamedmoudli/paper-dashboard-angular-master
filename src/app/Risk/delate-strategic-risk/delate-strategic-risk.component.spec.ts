import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStrategicRiskComponent } from './delate-strategic-risk.component';

describe('DelateStrategicRiskComponent', () => {
  let component: DelateStrategicRiskComponent;
  let fixture: ComponentFixture<DelateStrategicRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStrategicRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStrategicRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
