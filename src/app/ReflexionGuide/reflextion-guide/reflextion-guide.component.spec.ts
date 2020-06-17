import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflextionGuideComponent } from './reflextion-guide.component';

describe('ReflextionGuideComponent', () => {
  let component: ReflextionGuideComponent;
  let fixture: ComponentFixture<ReflextionGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflextionGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflextionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
