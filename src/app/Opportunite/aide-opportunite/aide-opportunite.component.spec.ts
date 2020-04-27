import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideOpportuniteComponent } from './aide-opportunite.component';

describe('AideOpportuniteComponent', () => {
  let component: AideOpportuniteComponent;
  let fixture: ComponentFixture<AideOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
