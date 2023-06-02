import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './_pages/forgot-password/forgot-password.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { SpecialtiesComponent } from './_pages/specialties/specialties.component';
import { DoctorsComponent } from './_pages/doctors/doctors.component';
import { PatientsComponent } from './_pages/patients/patients.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { ProfileComponent } from './_pages/profile/profile.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Home' },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Appointments',
      },
      {
        path: 'specialties',
        component: SpecialtiesComponent,
        title: 'Specialties',
      },
      { path: 'doctors', component: DoctorsComponent, title: 'Doctors' },
      { path: 'patients', component: PatientsComponent, title: 'Patients' },
      { path: 'settings', component: SettingsComponent, title: 'Settings' },
      { path: 'profile', component: ProfileComponent, title: 'Profile' },
    ],
  },
  {
    path: 'admin',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password',
      },
      { path: 'signup', component: SignupComponent, title: 'Sign Up' },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Appointify | Admin - ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AdminRoutingModule {}
