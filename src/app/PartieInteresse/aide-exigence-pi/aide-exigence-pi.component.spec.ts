import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideExigencePIComponent } from './aide-exigence-pi.component';

describe('AideExigencePIComponent', () => {
  let component: AideExigencePIComponent;
  let fixture: ComponentFixture<AideExigencePIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideExigencePIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideExigencePIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
