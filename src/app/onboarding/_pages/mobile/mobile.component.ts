import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  constructor(private _router: Router, private elementRef: ElementRef) {}

  ngOnInit() {}
  doMobileOtp(form: NgForm) {
    const formAction = this.elementRef.nativeElement
      .querySelector('form')
      .getAttribute('action');
    //TODO: call api for email otp
    this._router.navigateByUrl(formAction);
  }
}
