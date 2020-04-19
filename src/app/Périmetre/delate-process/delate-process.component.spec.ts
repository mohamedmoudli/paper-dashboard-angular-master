import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateProcessComponent } from './delate-process.component';

describe('DelateProcessComponent', () => {
  let component: DelateProcessComponent;
  let fixture: ComponentFixture<DelateProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
