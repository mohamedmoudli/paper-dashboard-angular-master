import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIpertinanteComponent } from './pipertinante.component';

describe('PIpertinanteComponent', () => {
  let component: PIpertinanteComponent;
  let fixture: ComponentFixture<PIpertinanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIpertinanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIpertinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
