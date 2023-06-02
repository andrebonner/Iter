import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { EmailComponent } from './_pages/email/email.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingLayoutComponent } from './_layouts/onboarding-layout/onboarding-layout.component';
import { EmailOtpComponent } from './_pages/email-otp/email-otp.component';
import { MobileComponent } from './_pages/mobile/mobile.component';
import { MobileOtpComponent } from './_pages/mobile-otp/mobile-otp.component';
import { PasswordComponent } from './_pages/password/password.component';
import { ProfilePhotoComponent } from './_pages/profile-photo/profile-photo.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { UploadOutline, CameraOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PersonalDetailsComponent } from './_pages/personal-details/personal-details.component';
import { SelectMembersComponent } from './_pages/select-members/select-members.component';
import { FormsModule } from '@angular/forms';
import { DependentDetailsComponent } from './_pages/dependent-details/dependent-details.component';
import { OtherDetailsComponent } from './_pages/other-details/other-details.component';
import { UploadIdentityComponent } from './_pages/upload-identity/upload-identity.component';
import { DoctorVerificationComponent } from './_pages/doctor-verification/doctor-verification.component';
import { PreferencesComponent } from './_pages/preferences/preferences.component';

const icons: IconDefinition[] = [UploadOutline, CameraOutline];

@NgModule({
  declarations: [
    OnboardingComponent,
    EmailComponent,
    OnboardingLayoutComponent,
    EmailOtpComponent,
    MobileComponent,
    MobileOtpComponent,
    PasswordComponent,
    ProfilePhotoComponent,
    PersonalDetailsComponent,
    SelectMembersComponent,
    DependentDetailsComponent,
    OtherDetailsComponent,
    UploadIdentityComponent,
    DoctorVerificationComponent,
    PreferencesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OnboardingRoutingModule,
    NzIconModule.forChild(icons),
  ],
  bootstrap: [OnboardingComponent],
})
export class OnboardingModule {}
