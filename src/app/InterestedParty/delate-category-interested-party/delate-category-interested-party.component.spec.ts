import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateCategoryInterestedPartyComponent } from './delate-category-interested-party.component';

describe('DelateCategoryInterestedPartyComponent', () => {
  let component: DelateCategoryInterestedPartyComponent;
  let fixture: ComponentFixture<DelateCategoryInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateCategoryInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateCategoryInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
