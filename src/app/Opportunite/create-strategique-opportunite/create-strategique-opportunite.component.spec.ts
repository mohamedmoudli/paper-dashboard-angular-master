import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStrategiqueOpportuniteComponent } from './create-strategique-opportunite.component';

describe('CreateStrategiqueOpportuniteComponent', () => {
  let component: CreateStrategiqueOpportuniteComponent;
  let fixture: ComponentFixture<CreateStrategiqueOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStrategiqueOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStrategiqueOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
