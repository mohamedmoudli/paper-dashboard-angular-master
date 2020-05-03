import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOpportunityComponent } from './category-opportunity.component';

describe('CategoryOpportunityComponent', () => {
  let component: CategoryOpportunityComponent;
  let fixture: ComponentFixture<CategoryOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
