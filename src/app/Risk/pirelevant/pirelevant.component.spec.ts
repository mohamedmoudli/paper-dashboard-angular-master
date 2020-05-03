import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIRelevantComponent } from './pirelevant.component';

describe('PIRelevantComponent', () => {
  let component: PIRelevantComponent;
  let fixture: ComponentFixture<PIRelevantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIRelevantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIRelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
