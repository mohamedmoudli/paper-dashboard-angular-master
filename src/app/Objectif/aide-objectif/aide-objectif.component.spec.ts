import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideObjectifComponent } from './aide-objectif.component';

describe('AideObjectifComponent', () => {
  let component: AideObjectifComponent;
  let fixture: ComponentFixture<AideObjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
