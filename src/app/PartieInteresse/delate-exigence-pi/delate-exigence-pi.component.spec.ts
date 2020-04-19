import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateExigencePIComponent } from './delate-exigence-pi.component';

describe('DelateExigencePIComponent', () => {
  let component: DelateExigencePIComponent;
  let fixture: ComponentFixture<DelateExigencePIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateExigencePIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateExigencePIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
