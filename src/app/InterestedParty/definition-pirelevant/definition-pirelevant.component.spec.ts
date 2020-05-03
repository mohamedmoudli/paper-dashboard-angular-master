import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPIRelevantComponent } from './definition-pirelevant.component';

describe('DefinitionPIRelevantComponent', () => {
  let component: DefinitionPIRelevantComponent;
  let fixture: ComponentFixture<DefinitionPIRelevantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionPIRelevantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionPIRelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
