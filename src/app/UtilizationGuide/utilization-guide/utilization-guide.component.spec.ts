import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationGuideComponent } from './utilization-guide.component';

describe('UtilizationGuideComponent', () => {
  let component: UtilizationGuideComponent;
  let fixture: ComponentFixture<UtilizationGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizationGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
