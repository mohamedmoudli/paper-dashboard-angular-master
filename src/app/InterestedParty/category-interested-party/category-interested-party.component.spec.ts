import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInterestedPartyComponent } from './category-interested-party.component';

describe('CategoryInterestedPartyComponent', () => {
  let component: CategoryInterestedPartyComponent;
  let fixture: ComponentFixture<CategoryInterestedPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInterestedPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInterestedPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
