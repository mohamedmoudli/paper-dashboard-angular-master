import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideutilisationComponent } from './guideutilisation.component';

describe('GuideutilisationComponent', () => {
  let component: GuideutilisationComponent;
  let fixture: ComponentFixture<GuideutilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideutilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideutilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
