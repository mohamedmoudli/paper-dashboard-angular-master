import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStakeExternalComponent } from './create-stake-external.component';

describe('CreateStakeExternalComponent', () => {
  let component: CreateStakeExternalComponent;
  let fixture: ComponentFixture<CreateStakeExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStakeExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStakeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
