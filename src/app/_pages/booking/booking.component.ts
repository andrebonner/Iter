import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  visible: boolean = false;
  constructor(private _router: Router, private message: NzMessageService) {}

  ngOnInit() {}
  change(event: boolean) {
    this.visible = event;
  }
  clickMe() {
    this.visible = false;
  }
  showMessage(text: string) {
    this.message.info(text);
  }

  doBooking(e: any) {
    console.log(e);
    this._router.navigateByUrl('/booking-confirm');
  }
}
