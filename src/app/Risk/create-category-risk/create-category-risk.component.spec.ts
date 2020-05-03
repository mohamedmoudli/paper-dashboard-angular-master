import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryRiskComponent } from './create-category-risk.component';

describe('CreateCategoryRiskComponent', () => {
  let component: CreateCategoryRiskComponent;
  let fixture: ComponentFixture<CreateCategoryRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
