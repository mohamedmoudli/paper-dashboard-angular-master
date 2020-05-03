import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRiskComponent } from './help-risk.component';

describe('HelpRiskComponent', () => {
  let component: HelpRiskComponent;
  let fixture: ComponentFixture<HelpRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
