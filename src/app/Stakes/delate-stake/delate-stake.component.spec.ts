import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStakeComponent } from './delate-stake.component';

describe('DelateStakeComponent', () => {
  let component: DelateStakeComponent;
  let fixture: ComponentFixture<DelateStakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
