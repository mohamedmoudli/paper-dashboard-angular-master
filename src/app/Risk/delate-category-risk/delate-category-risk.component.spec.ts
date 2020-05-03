import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoryRiskComponent } from './delate-category-risk.component';

describe('DelateCategoryRiskComponent', () => {
  let component: DelateCategoryRiskComponent;
  let fixture: ComponentFixture<DelateCategoryRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoryRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoryRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
