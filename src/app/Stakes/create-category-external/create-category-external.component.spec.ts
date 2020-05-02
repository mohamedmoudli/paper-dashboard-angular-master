import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryExternalComponent } from './create-category-external.component';

describe('CreateCategoryExternalComponent', () => {
  let component: CreateCategoryExternalComponent;
  let fixture: ComponentFixture<CreateCategoryExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
