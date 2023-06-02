import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { HomeComponent } from './_pages/home/home.component';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './_pages/login/login.component';
import { ForgotPasswordComponent } from './_pages/forgot-password/forgot-password.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { SpecialtiesComponent } from './_pages/specialties/specialties.component';
import { DoctorsComponent } from './_pages/doctors/doctors.component';
import { PatientsComponent } from './_pages/patients/patients.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { IterNgZorroModule } from '../iter-ng-zorro.module';
import { ProfileComponent } from './_pages/profile/profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    AppointmentsComponent,
    SpecialtiesComponent,
    DoctorsComponent,
    PatientsComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule, IterNgZorroModule],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
