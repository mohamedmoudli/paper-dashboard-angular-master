import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategorieRisqueComponent } from './create-categorie-risque.component';

describe('CreateCategorieRisqueComponent', () => {
  let component: CreateCategorieRisqueComponent;
  let fixture: ComponentFixture<CreateCategorieRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategorieRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategorieRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
