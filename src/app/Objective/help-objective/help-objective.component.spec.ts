import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpObjectiveComponent } from './help-objective.component';

describe('HelpObjectiveComponent', () => {
  let component: HelpObjectiveComponent;
  let fixture: ComponentFixture<HelpObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
