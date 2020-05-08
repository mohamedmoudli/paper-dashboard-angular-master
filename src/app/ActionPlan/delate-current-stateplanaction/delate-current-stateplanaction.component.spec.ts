import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCurrentStateplanactionComponent } from './delate-current-stateplanaction.component';

describe('DelateCurrentStateplanactionComponent', () => {
  let component: DelateCurrentStateplanactionComponent;
  let fixture: ComponentFixture<DelateCurrentStateplanactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCurrentStateplanactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCurrentStateplanactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
