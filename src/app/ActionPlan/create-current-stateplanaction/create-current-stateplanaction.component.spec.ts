import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCurrentStateplanactionComponent } from './create-current-stateplanaction.component';

describe('CreateCurrentStateplanactionComponent', () => {
  let component: CreateCurrentStateplanactionComponent;
  let fixture: ComponentFixture<CreateCurrentStateplanactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCurrentStateplanactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCurrentStateplanactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
