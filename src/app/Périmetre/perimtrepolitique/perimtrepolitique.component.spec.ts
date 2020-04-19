import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimtrepolitiqueComponent } from './perimtrepolitique.component';

describe('PerimtrepolitiqueComponent', () => {
  let component: PerimtrepolitiqueComponent;
  let fixture: ComponentFixture<PerimtrepolitiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerimtrepolitiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimtrepolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
