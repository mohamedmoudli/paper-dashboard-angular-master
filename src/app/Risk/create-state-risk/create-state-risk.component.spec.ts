import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStateRiskComponent } from './create-state-risk.component';

describe('CreateStateRiskComponent', () => {
  let component: CreateStateRiskComponent;
  let fixture: ComponentFixture<CreateStateRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStateRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStateRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
