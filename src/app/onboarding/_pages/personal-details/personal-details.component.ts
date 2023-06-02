import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  setActiveStep,
  setCompletedStep,
} from 'src/app/_store/actions/onboarding.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  onboarding$: Observable<{ activeStep: number }>;
  user$: Observable<User>;
  constructor(
    private _router: Router,
    private store: Store<{ onboarding: { activeStep: number }; user: User }>,
    private elementRef: ElementRef
  ) {
    this.onboarding$ = this.store.select('onboarding');
    this.user$ = this.store.select('user');
  }

  ngOnInit() {
    this.store.dispatch(setActiveStep({ step: 3 }));
  }

  doPersonalDetails(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    //TODO: call api for email otp
    this._router.navigateByUrl(formAction);
    this.store.dispatch(setCompletedStep({ step: 3 }));
  }

  isPatient(): boolean {
    let value: boolean = false;
    this.user$.subscribe((u) => {
      value = u.role === 'patient';
    });
    return value;
  }
}
