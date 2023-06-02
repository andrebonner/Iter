import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
//import * as AllIcons from '@ant-design/icons-angular/icons';
import {
  MenuOutline,
  SearchOutline,
  DownOutline,
  CalendarOutline,
} from '@ant-design/icons-angular/icons';
import en from '@angular/common/locales/en';
import { IterNgZorroModule } from './iter-ng-zorro.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { HomeComponent } from './_pages/home/home.component';
import { SearchComponent } from './_pages/search/search.component';
import { DoctorProfileComponent } from './_pages/doctor-profile/doctor-profile.component';
import { BookingComponent } from './_pages/booking/booking.component';
import { LoginComponent } from './_pages/login/login.component';
import { OtpComponent } from './_pages/otp/otp.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { DialogComponent } from './_components/dialog/dialog.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './_store/reducers/counter.reducer';
import { userReducer } from './_store/reducers/user.reducer';
import { FormsModule } from '@angular/forms';
import { BookingConfirmationComponent } from './_pages/booking-confirmation/booking-confirmation.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { onboardingReducer } from './_store/reducers/onboarding.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';

registerLocaleData(en);

//const antDesignIcons = AllIcons as { [key: string]: IconDefinition };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
//   (key) => antDesignIcons[key]
// );

const icons: IconDefinition[] = [
  CalendarOutline,
  DownOutline,
  MenuOutline,
  SearchOutline,
];

@NgModule({
  declarations: [
    AppComponent,
    OtpComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    SignupComponent,
    DialogComponent,
    BookingConfirmationComponent,
    BookingComponent,
    MainLayoutComponent,
    DoctorProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IterNgZorroModule,
    NzIconModule.forRoot(icons),
    AppRoutingModule,
    OnboardingModule,
    DashboardModule,
    AdminModule,
    StoreModule.forRoot(
      {
        count: counterReducer,
        onboarding: onboardingReducer,
        user: userReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: true,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
