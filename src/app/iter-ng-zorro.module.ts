import { NgModule } from '@angular/core';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  exports: [
    NzMenuModule,
    NzDatePickerModule,
    NzPopoverModule,
    NzDropDownModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    NzMessageModule,
    NzModalModule,
    NzCarouselModule,
  ],
})
export class IterNgZorroModule {}
