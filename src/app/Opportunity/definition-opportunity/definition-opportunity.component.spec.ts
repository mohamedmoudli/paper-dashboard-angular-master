import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionOpportunityComponent } from './definition-opportunity.component';

describe('DefinitionOpportunityComponent', () => {
  let component: DefinitionOpportunityComponent;
  let fixture: ComponentFixture<DefinitionOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
