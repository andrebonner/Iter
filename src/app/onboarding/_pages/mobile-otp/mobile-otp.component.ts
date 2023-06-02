import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-mobile-otp',
  templateUrl: './mobile-otp.component.html',
  styleUrls: ['./mobile-otp.component.scss'],
})
export class MobileOtpComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private _router: Router,
    private store: Store<{ user: User }>,
    private elementRef: ElementRef
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {}
  verifyMobileOtp(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    //TODO: call api for email otp
    this._router.navigateByUrl(formAction);
  }
}
