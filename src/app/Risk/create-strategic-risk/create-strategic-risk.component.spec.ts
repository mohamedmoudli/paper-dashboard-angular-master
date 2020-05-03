import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStrategicRiskComponent } from './create-strategic-risk.component';

describe('CreateStrategicRiskComponent', () => {
  let component: CreateStrategicRiskComponent;
  let fixture: ComponentFixture<CreateStrategicRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStrategicRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStrategicRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
