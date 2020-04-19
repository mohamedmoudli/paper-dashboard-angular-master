import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateStrategiqueRisqueComponent } from './delate-strategique-risque.component';

describe('DelateStrategiqueRisqueComponent', () => {
  let component: DelateStrategiqueRisqueComponent;
  let fixture: ComponentFixture<DelateStrategiqueRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateStrategiqueRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateStrategiqueRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
