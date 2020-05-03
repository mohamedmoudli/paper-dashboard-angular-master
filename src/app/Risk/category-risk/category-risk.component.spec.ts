import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRiskComponent } from './category-risk.component';

describe('CategoryRiskComponent', () => {
  let component: CategoryRiskComponent;
  let fixture: ComponentFixture<CategoryRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
