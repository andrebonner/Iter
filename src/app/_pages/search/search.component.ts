import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = '';
  date = '';
  gender = '';
  specialities = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.search = this.route.snapshot.queryParamMap.get('text') || '';
    this.date = this.route.snapshot.queryParamMap.get('date') || '';
    this.gender =
      this.route.snapshot.queryParamMap.getAll('gender').join(',') || '';
    this.specialities =
      this.route.snapshot.queryParamMap.getAll('specialities').join(', ') || '';
    console.log(this.gender, this.specialities);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  doSearch(e: any) {
    console.log('search: ', e);
    this.router.navigateByUrl('/search');
  }
}
