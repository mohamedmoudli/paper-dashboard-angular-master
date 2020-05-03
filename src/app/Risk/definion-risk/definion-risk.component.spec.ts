import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinionRiskComponent } from './definion-risk.component';

describe('DefinionRiskComponent', () => {
  let component: DefinionRiskComponent;
  let fixture: ComponentFixture<DefinionRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinionRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinionRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
