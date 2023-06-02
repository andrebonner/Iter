/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobileOtpComponent } from './mobile-otp.component';

describe('MobileOtpComponent', () => {
  let component: MobileOtpComponent;
  let fixture: ComponentFixture<MobileOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
