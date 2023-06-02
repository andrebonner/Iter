import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Onboarding } from 'src/app/models/onboarding';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.scss'],
})
export class EmailOtpComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private _router: Router,
    private store: Store<{ user: User }>,
    private elementRef: ElementRef
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {}
  verifyEmailOtp(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    //TODO: call api for email verify otp
    this._router.navigateByUrl(formAction);
  }
}
