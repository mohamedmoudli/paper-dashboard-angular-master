import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpStakeComponent } from './help-stake.component';

describe('HelpStakeComponent', () => {
  let component: HelpStakeComponent;
  let fixture: ComponentFixture<HelpStakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpStakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
