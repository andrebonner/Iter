import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setActiveStep } from 'src/app/_store/actions/onboarding.actions';
import { Onboarding } from 'src/app/models/onboarding';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
})
export class OnboardingLayoutComponent implements OnInit {
  array = [1, 2, 3, 4];
  onboarding$: Observable<Onboarding>;
  user$: Observable<User>;
  constructor(private store: Store<{ onboarding: Onboarding; user: User }>) {
    this.onboarding$ = this.store.select('onboarding');
    this.user$ = this.store.select('user');
  }

  ngOnInit() {}

  setActiveStep(step: number) {
    this.store.dispatch(setActiveStep({ step }));
  }

  isCompleted(step: number): boolean {
    let value: boolean = false;
    this.onboarding$.subscribe((ob) => {
      value = ob?.completedSteps.findIndex((i) => i === step) > -1;
    });
    return value;
  }
}
