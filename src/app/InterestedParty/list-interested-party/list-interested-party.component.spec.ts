import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInterestedPartyComponent } from './list-interested-party.component';

describe('ListInterestedPartyComponent', () => {
  let component: ListInterestedPartyComponent;
  let fixture: ComponentFixture<ListInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
