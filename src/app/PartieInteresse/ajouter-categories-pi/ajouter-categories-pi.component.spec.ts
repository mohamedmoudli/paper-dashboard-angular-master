import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCategoriesPIComponent } from './ajouter-categories-pi.component';

describe('AjouterCategoriesPIComponent', () => {
  let component: AjouterCategoriesPIComponent;
  let fixture: ComponentFixture<AjouterCategoriesPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCategoriesPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCategoriesPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
