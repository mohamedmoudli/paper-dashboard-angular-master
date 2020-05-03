import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryOpportunityComponent } from './create-category-opportunity.component';

describe('CreateCategoryOpportunityComponent', () => {
  let component: CreateCategoryOpportunityComponent;
  let fixture: ComponentFixture<CreateCategoryOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
