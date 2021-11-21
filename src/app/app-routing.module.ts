import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlainesComponent } from './components/airlaines/airlaines.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightsComponent } from './components/flights/flights.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GatesComponent } from './components/gates/gates.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { HomeVuelosComponent } from './components/home-vuelos/home-vuelos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SystemLogsComponent } from './components/system-logs/system-logs.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

const routes: Routes = [

  {path:'Login-Access',component:LoginComponent},
  {path:'Register-Access',component:RegisterComponent},
  {path:'Forgot-Access',component:ForgotPasswordComponent},
  {path:'Home-Travelers',component:HomeVuelosComponent},
  {path:'Current-Flights',component:FlightsComponent},
  {path:'Current-Flight-Search',component:FlightSearchComponent},
  {path:'Current-Airlines',component:AirlainesComponent},
  {path:'Current-Gates',component:GatesComponent},
  {path:'Current-Countries',component:CountriesComponent},
  {path:'Current-Logs',component:SystemLogsComponent},
  {path:'Current-Historical',component:HistoricalComponent},
  {path:'Current-User',component:UserInformationComponent},
  {path:'**',redirectTo:'Login-Access'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
