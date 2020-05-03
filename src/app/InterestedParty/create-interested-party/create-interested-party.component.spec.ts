import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInterestedPartyComponent } from './create-interested-party.component';

describe('CreateInterestedPartyComponent', () => {
  let component: CreateInterestedPartyComponent;
  let fixture: ComponentFixture<CreateInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
