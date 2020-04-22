import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObjectifComponent } from './create-objectif.component';

describe('CreateObjectifComponent', () => {
  let component: CreateObjectifComponent;
  let fixture: ComponentFixture<CreateObjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
