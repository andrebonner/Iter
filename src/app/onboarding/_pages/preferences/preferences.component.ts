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
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent implements OnInit {
  onboarding$: Observable<Onboarding>;
  user$: Observable<User>;
  constructor(
    private _router: Router,
    private store: Store<{ onboarding: Onboarding; user: User }>,
    private elementRef: ElementRef
  ) {
    this.onboarding$ = this.store.select('onboarding');
    this.user$ = this.store.select('user');
  }

  ngOnInit() {
    this.store.dispatch(setActiveStep({ step: 5 }));
  }

  doPreferences(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    // TODO: call api for preferences
    this._router.navigateByUrl(formAction);
    this.store.dispatch(setCompletedStep({ step: 5 }));
  }
}
