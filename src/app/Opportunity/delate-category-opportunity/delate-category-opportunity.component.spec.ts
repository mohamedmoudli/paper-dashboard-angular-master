import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoryOpportunityComponent } from './delate-category-opportunity.component';

describe('DelateCategoryOpportunityComponent', () => {
  let component: DelateCategoryOpportunityComponent;
  let fixture: ComponentFixture<DelateCategoryOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoryOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoryOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
