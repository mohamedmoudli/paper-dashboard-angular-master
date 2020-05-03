import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExigencyInterestedPartyComponent } from './exigency-interested-party.component';

describe('ExigencyInterestedPartyComponent', () => {
  let component: ExigencyInterestedPartyComponent;
  let fixture: ComponentFixture<ExigencyInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExigencyInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExigencyInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
