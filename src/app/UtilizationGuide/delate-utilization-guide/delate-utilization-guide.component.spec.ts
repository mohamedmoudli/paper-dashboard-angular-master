import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateUtilizationGuideComponent } from './delate-utilization-guide.component';

describe('DelateUtilizationGuideComponent', () => {
  let component: DelateUtilizationGuideComponent;
  let fixture: ComponentFixture<DelateUtilizationGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateUtilizationGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateUtilizationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
