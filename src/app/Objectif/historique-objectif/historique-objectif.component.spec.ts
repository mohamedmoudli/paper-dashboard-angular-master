import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueObjectifComponent } from './historique-objectif.component';

describe('HistoriqueObjectifComponent', () => {
  let component: HistoriqueObjectifComponent;
  let fixture: ComponentFixture<HistoriqueObjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
