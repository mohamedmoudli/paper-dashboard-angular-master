import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryInternalComponent } from './create-category-internal.component';

describe('CreateCategoryInternalComponent', () => {
  let component: CreateCategoryInternalComponent;
  let fixture: ComponentFixture<CreateCategoryInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
