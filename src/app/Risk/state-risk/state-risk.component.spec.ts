import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRiskComponent } from './state-risk.component';

describe('StateRiskComponent', () => {
  let component: StateRiskComponent;
  let fixture: ComponentFixture<StateRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
