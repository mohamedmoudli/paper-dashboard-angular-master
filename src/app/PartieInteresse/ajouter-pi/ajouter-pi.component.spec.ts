import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPIComponent } from './ajouter-pi.component';

describe('AjouterPIComponent', () => {
  let component: AjouterPIComponent;
  let fixture: ComponentFixture<AjouterPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
