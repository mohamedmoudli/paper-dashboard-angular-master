import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportuniteComponent } from './create-opportunite.component';

describe('CreateOpportuniteComponent', () => {
  let component: CreateOpportuniteComponent;
  let fixture: ComponentFixture<CreateOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
