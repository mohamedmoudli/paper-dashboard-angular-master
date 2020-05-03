import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeRiskComponent } from './stake-risk.component';

describe('StakeRiskComponent', () => {
  let component: StakeRiskComponent;
  let fixture: ComponentFixture<StakeRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
