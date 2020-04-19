import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePIpertinanteComponent } from './historique-pipertinante.component';

describe('HistoriquePIpertinanteComponent', () => {
  let component: HistoriquePIpertinanteComponent;
  let fixture: ComponentFixture<HistoriquePIpertinanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquePIpertinanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePIpertinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
