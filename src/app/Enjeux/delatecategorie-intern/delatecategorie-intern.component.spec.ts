import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelatecategorieInternComponent } from './delatecategorie-intern.component';

describe('DelatecategorieInternComponent', () => {
  let component: DelatecategorieInternComponent;
  let fixture: ComponentFixture<DelatecategorieInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelatecategorieInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelatecategorieInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
