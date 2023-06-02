import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {}
  saveProfile(form: NgForm) {}
}
