import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpProcessComponent } from './help-process.component';

describe('HelpProcessComponent', () => {
  let component: HelpProcessComponent;
  let fixture: ComponentFixture<HelpProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
