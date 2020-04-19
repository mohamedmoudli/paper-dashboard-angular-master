import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategorieExternComponent } from './create-categorie-extern.component';

describe('CreateCategorieExternComponent', () => {
  let component: CreateCategorieExternComponent;
  let fixture: ComponentFixture<CreateCategorieExternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategorieExternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategorieExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
