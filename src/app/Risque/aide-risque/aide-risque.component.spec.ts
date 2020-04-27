import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideRisqueComponent } from './aide-risque.component';

describe('AideRisqueComponent', () => {
  let component: AideRisqueComponent;
  let fixture: ComponentFixture<AideRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
