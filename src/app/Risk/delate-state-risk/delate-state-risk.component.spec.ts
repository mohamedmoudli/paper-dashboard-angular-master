import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStateRiskComponent } from './delate-state-risk.component';

describe('DelateStateRiskComponent', () => {
  let component: DelateStateRiskComponent;
  let fixture: ComponentFixture<DelateStateRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStateRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStateRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
