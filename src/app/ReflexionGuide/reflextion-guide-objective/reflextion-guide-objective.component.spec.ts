import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflextionGuideObjectiveComponent } from './reflextion-guide-objective.component';

describe('ReflextionGuideObjectiveComponent', () => {
  let component: ReflextionGuideObjectiveComponent;
  let fixture: ComponentFixture<ReflextionGuideObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflextionGuideObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflextionGuideObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
