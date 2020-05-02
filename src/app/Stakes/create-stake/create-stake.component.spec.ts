import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStakeComponent } from './create-stake.component';

describe('CreateStakeComponent', () => {
  let component: CreateStakeComponent;
  let fixture: ComponentFixture<CreateStakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
