import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOpportunityComponent } from './help-opportunity.component';

describe('HelpOpportunityComponent', () => {
  let component: HelpOpportunityComponent;
  let fixture: ComponentFixture<HelpOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
