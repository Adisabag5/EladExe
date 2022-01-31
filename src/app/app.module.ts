import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HeaderComponent } from './appointments/header/header.component';
import { SideMenuComponent } from './appointments/side-menu/side-menu.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material.module';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppointmentsComponent,
    HeaderComponent,
    SideMenuComponent,
    AppointmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
