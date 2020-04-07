import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieinteresseComponent } from './partieinteresse.component';

describe('PartieinteresseComponent', () => {
  let component: PartieinteresseComponent;
  let fixture: ComponentFixture<PartieinteresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartieinteresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieinteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
