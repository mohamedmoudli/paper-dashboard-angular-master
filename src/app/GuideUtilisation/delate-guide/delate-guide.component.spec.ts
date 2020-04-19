import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateGuideComponent } from './delate-guide.component';

describe('DelateGuideComponent', () => {
  let component: DelateGuideComponent;
  let fixture: ComponentFixture<DelateGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelateGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelateGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
