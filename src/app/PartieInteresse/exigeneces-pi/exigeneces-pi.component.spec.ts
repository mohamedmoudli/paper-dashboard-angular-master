import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExigenecesPIComponent } from './exigeneces-pi.component';

describe('ExigenecesPIComponent', () => {
  let component: ExigenecesPIComponent;
  let fixture: ComponentFixture<ExigenecesPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExigenecesPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExigenecesPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
