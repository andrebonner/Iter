import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  setActiveStep,
  setCompletedStep,
} from 'src/app/_store/actions/onboarding.actions';
import { Onboarding } from 'src/app/models/onboarding';

@Component({
  selector: 'app-other-details',
  templateUrl: './other-details.component.html',
  styleUrls: ['./other-details.component.scss'],
})
export class OtherDetailsComponent implements OnInit {
  onboarding$: Observable<Onboarding>;

  constructor(
    private _router: Router,
    private store: Store<{ onboarding: Onboarding }>,
    private elementRef: ElementRef
  ) {
    this.onboarding$ = this.store.select('onboarding');
  }

  ngOnInit() {
    this.store.dispatch(setActiveStep({ step: 6 }));
  }
  doOtherDetails(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    //TODO: call api for email otp
    this._router.navigateByUrl(formAction);
    this.store.dispatch(setCompletedStep({ step: 6 }));
  }
}
