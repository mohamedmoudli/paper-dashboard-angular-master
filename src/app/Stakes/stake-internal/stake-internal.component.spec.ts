import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeInternalComponent } from './stake-internal.component';

describe('StakeInternalComponent', () => {
  let component: StakeInternalComponent;
  let fixture: ComponentFixture<StakeInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
