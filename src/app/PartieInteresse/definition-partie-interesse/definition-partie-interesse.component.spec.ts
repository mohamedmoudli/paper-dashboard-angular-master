import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPartieInteresseComponent } from './definition-partie-interesse.component';

describe('DefinitionPartieInteresseComponent', () => {
  let component: DefinitionPartieInteresseComponent;
  let fixture: ComponentFixture<DefinitionPartieInteresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionPartieInteresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionPartieInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
