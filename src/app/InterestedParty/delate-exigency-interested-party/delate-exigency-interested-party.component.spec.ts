import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateExigencyInterestedPartyComponent } from './delate-exigency-interested-party.component';

describe('DelateExigencyInterestedPartyComponent', () => {
  let component: DelateExigencyInterestedPartyComponent;
  let fixture: ComponentFixture<DelateExigencyInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateExigencyInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateExigencyInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
