import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/_store/actions/user.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private store: Store<{ user: User }>
  ) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {}
  setUserRole(role: string) {
    this.store.dispatch(UserActions.setRole({ role: role }));
  }
  doSignUp(form: any) {
    this._router.navigateByUrl('/onboarding/email');
  }
}
