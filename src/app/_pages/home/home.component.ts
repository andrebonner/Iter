import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
} from 'src/app/_store/actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  count$: Observable<number>;
  constructor(
    private _router: Router,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
    console.log(this.count$);
  }

  search(e: any) {
    console.log(e.controls);
    this._router.navigateByUrl('/search?text=' + this.searchValue);
  }
}
