import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgettPasswordComponent } from './forgett-password.component';

describe('ForgettPasswordComponent', () => {
  let component: ForgettPasswordComponent;
  let fixture: ComponentFixture<ForgettPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgettPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgettPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
