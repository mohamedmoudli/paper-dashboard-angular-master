import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStakeInternalComponent } from './create-stake-internal.component';

describe('CreateStakeInternalComponent', () => {
  let component: CreateStakeInternalComponent;
  let fixture: ComponentFixture<CreateStakeInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStakeInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStakeInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
