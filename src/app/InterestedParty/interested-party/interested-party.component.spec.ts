import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPartyComponent } from './interested-party.component';

describe('InterestedPartyComponent', () => {
  let component: InterestedPartyComponent;
  let fixture: ComponentFixture<InterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
