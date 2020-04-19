import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjeuForceComponent } from './enjeu-force.component';

describe('EnjeuForceComponent', () => {
  let component: EnjeuForceComponent;
  let fixture: ComponentFixture<EnjeuForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjeuForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjeuForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
