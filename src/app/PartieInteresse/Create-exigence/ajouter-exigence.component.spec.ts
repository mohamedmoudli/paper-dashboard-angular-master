import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExigenceComponent } from './ajouter-exigence.component';

describe('AjouterExigenceComponent', () => {
  let component: AjouterExigenceComponent;
  let fixture: ComponentFixture<AjouterExigenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterExigenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterExigenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
