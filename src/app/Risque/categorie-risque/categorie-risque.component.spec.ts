import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieRisqueComponent } from './categorie-risque.component';

describe('CategorieRisqueComponent', () => {
  let component: CategorieRisqueComponent;
  let fixture: ComponentFixture<CategorieRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
