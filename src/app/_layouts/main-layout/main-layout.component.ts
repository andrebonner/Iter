import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  menuVisible = true;
  constructor(private modal: NzModalService) {}

  ngOnInit() {}

  showInfoModal(title: string, text: string) {
    this.modal.info({ nzTitle: title, nzContent: text });
  }
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
