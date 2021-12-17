import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeVuelosComponent } from './components/home-vuelos/home-vuelos.component';

import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeSideNavbarComponent } from './components/home-side-navbar/home-side-navbar.component';
import { FlightsComponent } from './components/flights/flights.component';
import { AirlainesComponent } from './components/airlaines/airlaines.component';
import { GatesComponent } from './components/gates/gates.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SystemLogsComponent } from './components/system-logs/system-logs.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { BuyFlightComponent } from './components/buy-flight/buy-flight.component';
import { CreditCardPaymentComponent } from './components/credit-card-payment/credit-card-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeVuelosComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeSideNavbarComponent,
    FlightsComponent,
    AirlainesComponent,
    GatesComponent,
    CountriesComponent,
    SystemLogsComponent,
    HistoricalComponent,
    UserInformationComponent,
    FlightSearchComponent,
    BuyFlightComponent,
    CreditCardPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
