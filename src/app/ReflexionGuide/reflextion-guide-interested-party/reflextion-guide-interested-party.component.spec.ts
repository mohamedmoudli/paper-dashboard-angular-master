import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflextionGuideInterestedPartyComponent } from './reflextion-guide-interested-party.component';

describe('ReflextionGuideInterestedPartyComponent', () => {
  let component: ReflextionGuideInterestedPartyComponent;
  let fixture: ComponentFixture<ReflextionGuideInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflextionGuideInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflextionGuideInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
