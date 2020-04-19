import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjeuRiqueComponent } from './enjeu-rique.component';

describe('EnjeuRiqueComponent', () => {
  let component: EnjeuRiqueComponent;
  let fixture: ComponentFixture<EnjeuRiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjeuRiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjeuRiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
