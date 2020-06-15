import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEmailToResetComponent } from './check-email-to-reset.component';

describe('CheckEmailToResetComponent', () => {
  let component: CheckEmailToResetComponent;
  let fixture: ComponentFixture<CheckEmailToResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEmailToResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEmailToResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
