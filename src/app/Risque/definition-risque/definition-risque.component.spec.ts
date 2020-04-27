import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionRisqueComponent } from './definition-risque.component';

describe('DefinitionRisqueComponent', () => {
  let component: DefinitionRisqueComponent;
  let fixture: ComponentFixture<DefinitionRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
