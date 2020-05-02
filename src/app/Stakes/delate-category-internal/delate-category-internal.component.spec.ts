import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoryInternalComponent } from './delate-category-internal.component';

describe('DelateCategoryInternalComponent', () => {
  let component: DelateCategoryInternalComponent;
  let fixture: ComponentFixture<DelateCategoryInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoryInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoryInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
