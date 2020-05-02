import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoryExternalComponent } from './delate-category-external.component';

describe('DelateCategoryExternalComponent', () => {
  let component: DelateCategoryExternalComponent;
  let fixture: ComponentFixture<DelateCategoryExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoryExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoryExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
