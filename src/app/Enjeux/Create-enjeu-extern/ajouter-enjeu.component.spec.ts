import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEnjeuComponent } from './ajouter-enjeu.component';

describe('AjouterEnjeuComponent', () => {
  let component: AjouterEnjeuComponent;
  let fixture: ComponentFixture<AjouterEnjeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEnjeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEnjeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
