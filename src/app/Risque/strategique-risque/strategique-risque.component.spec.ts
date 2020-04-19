import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiqueRisqueComponent } from './strategique-risque.component';

describe('StrategiqueRisqueComponent', () => {
  let component: StrategiqueRisqueComponent;
  let fixture: ComponentFixture<StrategiqueRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategiqueRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiqueRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
