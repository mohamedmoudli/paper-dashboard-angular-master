import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReevaluerOpportuniteComponent } from './reevaluer-opportunite.component';

describe('ReevaluerOpportuniteComponent', () => {
  let component: ReevaluerOpportuniteComponent;
  let fixture: ComponentFixture<ReevaluerOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReevaluerOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReevaluerOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
