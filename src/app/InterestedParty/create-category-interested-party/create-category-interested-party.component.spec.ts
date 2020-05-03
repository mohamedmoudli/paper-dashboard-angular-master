import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryInterestedPartyComponent } from './create-category-interested-party.component';

describe('CreateCategoryInterestedPartyComponent', () => {
  let component: CreateCategoryInterestedPartyComponent;
  let fixture: ComponentFixture<CreateCategoryInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
