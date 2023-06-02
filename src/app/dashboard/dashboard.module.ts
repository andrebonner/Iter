import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './_layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './_pages/home/home.component';
import { IterNgZorroModule } from '../iter-ng-zorro.module';
import { DependentsComponent } from './_pages/dependents/dependents.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './_pages/patients/patients.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { PatientDetailsComponent } from './_pages/patient-details/patient-details.component';
import { ScheduleTimingsComponent } from './_pages/schedule-timings/schedule-timings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLayoutComponent,
    HomeComponent,
    DependentsComponent,
    ProfileComponent,
    PatientsComponent,
    AppointmentsComponent,
    PatientDetailsComponent,
    ScheduleTimingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    IterNgZorroModule,
  ],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
