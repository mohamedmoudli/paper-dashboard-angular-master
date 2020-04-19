import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateenjeuComponent } from './delateenjeu.component';

describe('DelateenjeuComponent', () => {
  let component: DelateenjeuComponent;
  let fixture: ComponentFixture<DelateenjeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateenjeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateenjeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
