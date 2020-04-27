import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanDeActionComponent } from './create-plan-de-action.component';

describe('CreatePlanDeActionComponent', () => {
  let component: CreatePlanDeActionComponent;
  let fixture: ComponentFixture<CreatePlanDeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlanDeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanDeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
