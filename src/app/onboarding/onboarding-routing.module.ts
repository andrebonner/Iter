import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import {
  RouterModule,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { EmailComponent } from './_pages/email/email.component';
import { OnboardingLayoutComponent } from './_layouts/onboarding-layout/onboarding-layout.component';
import { EmailOtpComponent } from './_pages/email-otp/email-otp.component';
import { MobileComponent } from './_pages/mobile/mobile.component';
import { MobileOtpComponent } from './_pages/mobile-otp/mobile-otp.component';
import { PasswordComponent } from './_pages/password/password.component';
import { ProfilePhotoComponent } from './_pages/profile-photo/profile-photo.component';
import { PersonalDetailsComponent } from './_pages/personal-details/personal-details.component';
import { SelectMembersComponent } from './_pages/select-members/select-members.component';
import { DependentDetailsComponent } from './_pages/dependent-details/dependent-details.component';
import { OtherDetailsComponent } from './_pages/other-details/other-details.component';
import { UploadIdentityComponent } from './_pages/upload-identity/upload-identity.component';
import { DoctorVerificationComponent } from './_pages/doctor-verification/doctor-verification.component';
import { PreferencesComponent } from './_pages/preferences/preferences.component';

const onboardingRoutes = [
  {
    path: 'onboarding',
    component: OnboardingLayoutComponent,
    children: [
      { path: 'email', component: EmailComponent, title: 'Onboarding - Email' },
      {
        path: 'email-otp',
        component: EmailOtpComponent,
        title: 'Onboarding - Email OTP',
      },
      {
        path: 'mobile',
        component: MobileComponent,
        title: 'Onboarding - Mobile',
      },
      {
        path: 'mobile-otp',
        component: MobileOtpComponent,
        title: 'Onboarding - Mobile OTP',
      },
      {
        path: 'password',
        component: PasswordComponent,
        title: 'Onboarding - Create Password',
      },
      {
        path: 'profile-photo',
        component: ProfilePhotoComponent,
        title: 'Onboarding - Profile Photo',
      },
      {
        path: 'personal-details',
        component: PersonalDetailsComponent,
        title: 'Onboarding - Personal Details',
      },
      {
        path: 'select-members',
        component: SelectMembersComponent,
        title: 'Onboarding - Select Members',
      },
      {
        path: 'dependent-details',
        component: DependentDetailsComponent,
        title: 'Onboarding - Dependent Details',
      },
      {
        path: 'other-details',
        component: OtherDetailsComponent,
        title: 'Onboarding - Other Details',
      },
      {
        path: 'upload-identity',
        component: UploadIdentityComponent,
        title: 'Onboarding - Upload Identity',
      },
      {
        path: 'doctor-verification',
        component: DoctorVerificationComponent,
        title: 'Onboarding - Doctor Verification',
      },
      {
        path: 'preferences',
        component: PreferencesComponent,
        title: 'Onboarding - Preferences',
      },
    ],
  }, // otherwise redirect to onboarding
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
  imports: [CommonModule, RouterModule.forChild(onboardingRoutes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class OnboardingRoutingModule {}
