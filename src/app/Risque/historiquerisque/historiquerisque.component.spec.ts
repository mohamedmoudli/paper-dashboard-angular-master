import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquerisqueComponent } from './historiquerisque.component';

describe('HistoriquerisqueComponent', () => {
  let component: HistoriquerisqueComponent;
  let fixture: ComponentFixture<HistoriquerisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquerisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquerisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
