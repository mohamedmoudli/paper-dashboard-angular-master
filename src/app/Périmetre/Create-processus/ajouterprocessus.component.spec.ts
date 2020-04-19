import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterprocessusComponent } from './ajouterprocessus.component';

describe('AjouterprocessusComponent', () => {
  let component: AjouterprocessusComponent;
  let fixture: ComponentFixture<AjouterprocessusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterprocessusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterprocessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
