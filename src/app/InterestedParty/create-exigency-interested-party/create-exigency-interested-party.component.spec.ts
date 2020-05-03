import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExigencyInterestedPartyComponent } from './create-exigency-interested-party.component';

describe('CreateExigencyInterestedPartyComponent', () => {
  let component: CreateExigencyInterestedPartyComponent;
  let fixture: ComponentFixture<CreateExigencyInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExigencyInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExigencyInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
