import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStateOpportunityComponent } from './create-state-opportunity.component';

describe('CreateStateOpportunityComponent', () => {
  let component: CreateStateOpportunityComponent;
  let fixture: ComponentFixture<CreateStateOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStateOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
