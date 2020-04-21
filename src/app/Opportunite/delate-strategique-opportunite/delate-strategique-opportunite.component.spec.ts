import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStrategiqueOpportuniteComponent } from './delate-strategique-opportunite.component';

describe('DelateStrategiqueOpportuniteComponent', () => {
  let component: DelateStrategiqueOpportuniteComponent;
  let fixture: ComponentFixture<DelateStrategiqueOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStrategiqueOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStrategiqueOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
