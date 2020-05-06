import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeExternalComponent } from './stake-external.component';

describe('StakeExternalComponent', () => {
  let component: StakeExternalComponent;
  let fixture: ComponentFixture<StakeExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
