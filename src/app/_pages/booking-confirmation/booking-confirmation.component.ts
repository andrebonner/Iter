import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss'],
})
export class BookingConfirmationComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  modalTitle: string = '';
  modalContent: string = '';
  constructor(private modal: NzModalService) {}

  ngOnInit() {}
  showInfoModal(title: string, text: string) {
    this.modal.info({ nzTitle: title, nzContent: text });
  }

  confirmModal() {
    this.modal.success({
      nzTitle: 'Confirm Booking',
      nzContent: 'Appointment booked Successfully!',
    });
  }

  doSubmit(e: any) {
    this.confirmModal();
    console.log('doSubmit', e);
  }

  showModalTemplate(title: string, content: string) {
    this.isVisible = true;
    this.modalTitle = title;
    this.modalContent = content;
  }

  handleCancel() {
    this.isVisible = false;
  }
  handleOk() {
    this.isVisible = false;
  }
}
