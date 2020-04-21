import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategorieOpportuniteComponent } from './create-categorie-opportunite.component';

describe('CreateCategorieOpportuniteComponent', () => {
  let component: CreateCategorieOpportuniteComponent;
  let fixture: ComponentFixture<CreateCategorieOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategorieOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategorieOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
