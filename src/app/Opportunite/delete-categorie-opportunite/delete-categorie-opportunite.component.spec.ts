import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategorieOpportuniteComponent } from './delete-categorie-opportunite.component';

describe('DeleteCategorieOpportuniteComponent', () => {
  let component: DeleteCategorieOpportuniteComponent;
  let fixture: ComponentFixture<DeleteCategorieOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategorieOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategorieOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
