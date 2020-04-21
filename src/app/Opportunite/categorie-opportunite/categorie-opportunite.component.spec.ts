import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieOpportuniteComponent } from './categorie-opportunite.component';

describe('CategorieOpportuniteComponent', () => {
  let component: CategorieOpportuniteComponent;
  let fixture: ComponentFixture<CategorieOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
