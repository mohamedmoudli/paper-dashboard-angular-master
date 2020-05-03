import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionStakeComponent } from './definition-stake.component';

describe('DefinitionStakeComponent', () => {
  let component: DefinitionStakeComponent;
  let fixture: ComponentFixture<DefinitionStakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionStakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionStakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
