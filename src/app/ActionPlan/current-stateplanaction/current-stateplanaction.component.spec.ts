import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStateplanactionComponent } from './current-stateplanaction.component';

describe('CurrentStateplanactionComponent', () => {
  let component: CurrentStateplanactionComponent;
  let fixture: ComponentFixture<CurrentStateplanactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStateplanactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStateplanactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
