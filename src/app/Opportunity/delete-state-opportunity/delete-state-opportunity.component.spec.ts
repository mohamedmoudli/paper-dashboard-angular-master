import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStateOpportunityComponent } from './delete-state-opportunity.component';

describe('DeleteStateOpportunityComponent', () => {
  let component: DeleteStateOpportunityComponent;
  let fixture: ComponentFixture<DeleteStateOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStateOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
