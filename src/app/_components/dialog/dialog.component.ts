import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `<div nz-modal nzTitle="Custom Modal Title">
    <div *nzModalContent>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
    </div>
    <div *nzModalFooter>
      <span>Modal Footer:</span>
      <button nz-button nzType="default">Custom Callback</button>
      <button nz-button nzType="primary">Custom Submit</button>
    </div>
  </div>`,
  styles: [],
})
export class DialogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
