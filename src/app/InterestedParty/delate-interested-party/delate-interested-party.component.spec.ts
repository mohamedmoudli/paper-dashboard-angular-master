import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateInterestedPartyComponent } from './delate-interested-party.component';

describe('DelateInterestedPartyComponent', () => {
  let component: DelateInterestedPartyComponent;
  let fixture: ComponentFixture<DelateInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
