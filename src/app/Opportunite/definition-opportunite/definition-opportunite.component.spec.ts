import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionOpportuniteComponent } from './definition-opportunite.component';

describe('DefinitionOpportuniteComponent', () => {
  let component: DefinitionOpportuniteComponent;
  let fixture: ComponentFixture<DefinitionOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
