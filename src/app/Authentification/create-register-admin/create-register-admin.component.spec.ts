import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterAdminComponent } from './create-register-admin.component';

describe('CreateRegisterAdminComponent', () => {
  let component: CreateRegisterAdminComponent;
  let fixture: ComponentFixture<CreateRegisterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegisterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
