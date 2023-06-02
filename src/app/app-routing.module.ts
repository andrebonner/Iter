import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

import { HomeComponent } from './_pages/home/home.component';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { SearchComponent } from './_pages/search/search.component';
import { DoctorProfileComponent } from './_pages/doctor-profile/doctor-profile.component';
import { BookingComponent } from './_pages/booking/booking.component';
import { BookingConfirmationComponent } from './_pages/booking-confirmation/booking-confirmation.component';
import { LoginComponent } from './_pages/login/login.component';
import { OtpComponent } from './_pages/otp/otp.component';
import { SignupComponent } from './_pages/signup/signup.component';

const appRoutes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Home' },
      { path: 'search', component: SearchComponent, title: 'Search' },
      {
        path: 'doctor-profile',
        component: DoctorProfileComponent,
        title: 'Doctor Profile',
      },
      { path: 'booking', component: BookingComponent, title: 'Booking' },
      {
        path: 'booking-confirm',
        component: BookingConfirmationComponent,
        title: 'Booking Confirmation',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'otp', component: OtpComponent },
  { path: 'signup', component: SignupComponent },
  // otherwise redirect to home
  { path: '*', redirectTo: '' },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Appointify | ${title}`);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
