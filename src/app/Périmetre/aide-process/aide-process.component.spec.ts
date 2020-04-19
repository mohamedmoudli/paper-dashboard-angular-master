import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AideProcessComponent } from './aide-process.component';

describe('AideProcessComponent', () => {
  let component: AideProcessComponent;
  let fixture: ComponentFixture<AideProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AideProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AideProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
