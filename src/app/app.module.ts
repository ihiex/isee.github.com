import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {Params} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterSuccessfullyComponent } from './component/register-successfully/register-successfully.component';
import { ResetPasswordsComponent } from './component/reset-passwords/reset-passwords.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';

import {HttpServiceService} from './service/http-service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterSuccessfullyComponent,
    ResetPasswordsComponent,
    ChangePasswordComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
