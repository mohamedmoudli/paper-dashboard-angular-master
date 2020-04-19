import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategorieRisqueComponent } from './delate-categorie-risque.component';

describe('DelateCategorieRisqueComponent', () => {
  let component: DelateCategorieRisqueComponent;
  let fixture: ComponentFixture<DelateCategorieRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategorieRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategorieRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
