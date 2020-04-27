import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionEnjeuxComponent } from './definition-enjeux.component';

describe('DefinitionEnjeuxComponent', () => {
  let component: DefinitionEnjeuxComponent;
  let fixture: ComponentFixture<DefinitionEnjeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionEnjeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionEnjeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
