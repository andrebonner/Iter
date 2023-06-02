import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  TitleStrategy,
  RouterStateSnapshot,
  RouterModule,
  Routes,
} from '@angular/router';
import { DashboardLayoutComponent } from './_layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './_pages/home/home.component';
import { DependentsComponent } from './_pages/dependents/dependents.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { PatientsComponent } from './_pages/patients/patients.component';
import { AppointmentsComponent } from './_pages/appointments/appointments.component';
import { PatientDetailsComponent } from './_pages/patient-details/patient-details.component';
import { ScheduleTimingsComponent } from './_pages/schedule-timings/schedule-timings.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Dashboard' },
      {
        path: 'dependents',
        component: DependentsComponent,
        title: 'Dashboard - Dependents',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Dashboard - Profile',
      },
      {
        path: 'patients',
        component: PatientsComponent,
        title: 'Dashboard - Patients',
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Dashboard - Appointments',
      },
      {
        path: 'patient/:id',
        component: PatientDetailsComponent,
        title: 'Patient Details',
      },
      {
        path: 'schedule-timings',
        component: ScheduleTimingsComponent,
        title: 'Schedule Timings',
      },
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
      this.title.setTitle(`Appointify Dashboard | ${title}`);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class DashboardRoutingModule {}
