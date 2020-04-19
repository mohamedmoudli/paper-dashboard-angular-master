import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseEnjeuComponent } from './synthese-enjeu.component';

describe('SyntheseEnjeuComponent', () => {
  let component: SyntheseEnjeuComponent;
  let fixture: ComponentFixture<SyntheseEnjeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseEnjeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseEnjeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
