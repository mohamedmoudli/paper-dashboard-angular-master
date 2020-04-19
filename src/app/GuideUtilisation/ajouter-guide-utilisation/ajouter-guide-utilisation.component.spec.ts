import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGuideUtilisationComponent } from './ajouter-guide-utilisation.component';

describe('AjouterGuideUtilisationComponent', () => {
  let component: AjouterGuideUtilisationComponent;
  let fixture: ComponentFixture<AjouterGuideUtilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterGuideUtilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGuideUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
