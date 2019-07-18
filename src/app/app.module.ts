import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { SecuritypinComponent } from './securitypin/securitypin.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { InputotpComponent } from './inputotp/inputotp.component';
import { IdcreationComponent } from './idcreation/idcreation.component';
import { PincreationComponent } from './pincreation/pincreation.component';
import { ReenterpinComponent } from './reenterpin/reenterpin.component';
import { from } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    SecuritypinComponent,
    PhonenumberComponent,
    InputotpComponent,
    IdcreationComponent,
    PincreationComponent,
    ReenterpinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
