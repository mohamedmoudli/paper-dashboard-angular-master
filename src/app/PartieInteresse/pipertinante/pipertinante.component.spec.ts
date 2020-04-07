import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipertinanteComponent } from './pipertinante.component';

describe('PipertinanteComponent', () => {
  let component: PipertinanteComponent;
  let fixture: ComponentFixture<PipertinanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipertinanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipertinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
