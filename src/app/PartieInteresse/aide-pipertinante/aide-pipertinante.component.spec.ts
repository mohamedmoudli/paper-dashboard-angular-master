import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidePIPertinanteComponent } from './aide-pipertinante.component';

describe('AidePIPertinanteComponent', () => {
  let component: AidePIPertinanteComponent;
  let fixture: ComponentFixture<AidePIPertinanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidePIPertinanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidePIPertinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
