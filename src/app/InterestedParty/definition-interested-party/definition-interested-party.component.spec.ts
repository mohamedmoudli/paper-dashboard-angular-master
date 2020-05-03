import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionInterestedPartyComponent } from './definition-interested-party.component';

describe('DefinitionInterestedPartyComponent', () => {
  let component: DefinitionInterestedPartyComponent;
  let fixture: ComponentFixture<DefinitionInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
