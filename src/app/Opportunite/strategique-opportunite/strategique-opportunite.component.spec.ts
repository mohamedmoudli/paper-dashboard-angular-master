import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiqueOpportuniteComponent } from './strategique-opportunite.component';

describe('StrategiqueOpportuniteComponent', () => {
  let component: StrategiqueOpportuniteComponent;
  let fixture: ComponentFixture<StrategiqueOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategiqueOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiqueOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
