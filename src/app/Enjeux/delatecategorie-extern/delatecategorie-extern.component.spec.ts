import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelatecategorieExternComponent } from './delatecategorie-extern.component';

describe('DelatecategorieExternComponent', () => {
  let component: DelatecategorieExternComponent;
  let fixture: ComponentFixture<DelatecategorieExternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelatecategorieExternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelatecategorieExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
