import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPIPertinanteComponent } from './definition-pipertinante.component';

describe('DefinitionPIPertinanteComponent', () => {
  let component: DefinitionPIPertinanteComponent;
  let fixture: ComponentFixture<DefinitionPIPertinanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionPIPertinanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionPIPertinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
