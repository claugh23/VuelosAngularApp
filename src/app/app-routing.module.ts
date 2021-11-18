import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeVuelosComponent } from './components/home-vuelos/home-vuelos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {path:'Login-Access',component:LoginComponent},
  {path:'Register-Access',component:RegisterComponent},
  {path:'Forgot-Access',component:ForgotPasswordComponent},
  {path:'Home-Travelers',component:HomeVuelosComponent},
  {path:'**',redirectTo:'Login-Access'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
