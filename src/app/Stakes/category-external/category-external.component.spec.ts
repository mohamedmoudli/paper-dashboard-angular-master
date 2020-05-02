import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExternalComponent } from './category-external.component';

describe('CategoryExternalComponent', () => {
  let component: CategoryExternalComponent;
  let fixture: ComponentFixture<CategoryExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
