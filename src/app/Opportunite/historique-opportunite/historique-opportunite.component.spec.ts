import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueOpportuniteComponent } from './historique-opportunite.component';

describe('HistoriqueOpportuniteComponent', () => {
  let component: HistoriqueOpportuniteComponent;
  let fixture: ComponentFixture<HistoriqueOpportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueOpportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueOpportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
