import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieInternComponent } from './categorie-intern.component';

describe('CategorieInternComponent', () => {
  let component: CategorieInternComponent;
  let fixture: ComponentFixture<CategorieInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
