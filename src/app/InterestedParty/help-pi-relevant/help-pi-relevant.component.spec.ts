import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPiRelevantComponent } from './help-pi-relevant.component';

describe('HelpPiRelevantComponent', () => {
  let component: HelpPiRelevantComponent;
  let fixture: ComponentFixture<HelpPiRelevantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPiRelevantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPiRelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
