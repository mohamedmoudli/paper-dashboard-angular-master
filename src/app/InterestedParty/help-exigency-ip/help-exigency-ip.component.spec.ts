import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpExigencyIpComponent } from './help-exigency-ip.component';

describe('HelpExigencyIpComponent', () => {
  let component: HelpExigencyIpComponent;
  let fixture: ComponentFixture<HelpExigencyIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpExigencyIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpExigencyIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
