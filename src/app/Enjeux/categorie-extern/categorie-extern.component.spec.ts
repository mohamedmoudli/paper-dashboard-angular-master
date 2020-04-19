import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieExternComponent } from './categorie-extern.component';

describe('CategorieExternComponent', () => {
  let component: CategorieExternComponent;
  let fixture: ComponentFixture<CategorieExternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieExternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
