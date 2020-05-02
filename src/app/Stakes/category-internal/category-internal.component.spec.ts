import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInternalComponent } from './category-internal.component';

describe('CategoryInternalComponent', () => {
  let component: CategoryInternalComponent;
  let fixture: ComponentFixture<CategoryInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
