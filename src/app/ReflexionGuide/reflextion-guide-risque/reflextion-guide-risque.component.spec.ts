import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflextionGuideRisqueComponent } from './reflextion-guide-risque.component';

describe('ReflextionGuideRisqueComponent', () => {
  let component: ReflextionGuideRisqueComponent;
  let fixture: ComponentFixture<ReflextionGuideRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflextionGuideRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflextionGuideRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
