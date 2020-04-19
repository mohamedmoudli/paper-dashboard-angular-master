import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoriesPIComponent } from './delate-categories-pi.component';

describe('DelateCategoriesPIComponent', () => {
  let component: DelateCategoriesPIComponent;
  let fixture: ComponentFixture<DelateCategoriesPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoriesPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoriesPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
