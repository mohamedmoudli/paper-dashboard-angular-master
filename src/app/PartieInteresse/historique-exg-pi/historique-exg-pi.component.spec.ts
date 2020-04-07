import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueExgPIComponent } from './historique-exg-pi.component';

describe('HistoriqueExgPIComponent', () => {
  let component: HistoriqueExgPIComponent;
  let fixture: ComponentFixture<HistoriqueExgPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueExgPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueExgPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
