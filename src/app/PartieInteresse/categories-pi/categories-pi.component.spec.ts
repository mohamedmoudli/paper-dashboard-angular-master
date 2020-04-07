import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPIComponent } from './categories-pi.component';

describe('CategoriesPIComponent', () => {
  let component: CategoriesPIComponent;
  let fixture: ComponentFixture<CategoriesPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
