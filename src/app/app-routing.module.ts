import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//配置路由
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {RegisterComponent} from './component/register/register.component';
import {RegisterSuccessfullyComponent} from './component/register-successfully/register-successfully.component';
import {ChangePasswordComponent} from './component/change-password/change-password.component';
import {ResetPasswordsComponent} from './component/reset-passwords/reset-passwords.component';

const routes: Routes = [
  {path:"login",
  component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'registerSuccessfully/:phone',
    component:RegisterSuccessfullyComponent
  },
  {
    path:'resetPasswords/:phone',
    component:ResetPasswordsComponent
  },
  {
    path:'changePassword',
    component:ChangePasswordComponent
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
