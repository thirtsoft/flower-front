import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    SuccessRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AuthModule { }
