import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStrategiqueRisqueComponent } from './create-strategique-risque.component';

describe('CreateStrategiqueRisqueComponent', () => {
  let component: CreateStrategiqueRisqueComponent;
  let fixture: ComponentFixture<CreateStrategiqueRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStrategiqueRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStrategiqueRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
