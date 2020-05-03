import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilizationGuideComponent } from './create-utilization-guide.component';

describe('CreateUtilizationGuideComponent', () => {
  let component: CreateUtilizationGuideComponent;
  let fixture: ComponentFixture<CreateUtilizationGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtilizationGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilizationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
