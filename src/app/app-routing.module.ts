import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuritypinComponent } from './securitypin/securitypin.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { InputotpComponent } from './inputotp/inputotp.component';
import { IdcreationComponent } from './idcreation/idcreation.component';
import { PincreationComponent } from './pincreation/pincreation.component';
import { ReenterpinComponent } from './reenterpin/reenterpin.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { from } from 'rxjs';
// import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
    {
      path : '',
      component: NavbarComponent
    },
    {
      path : 'securitypincreation',
      component: SecuritypinComponent
    },
    {
     path : 'phonenumber',
     component : PhonenumberComponent
    },
    {
      path : 'inputotp',
      component : InputotpComponent
    },
    {
      path : 'idcreation',
      component : IdcreationComponent
    },
    {
      path : 'pincreation',
      component : PincreationComponent 
    },
    {
       path : 'reenterpin',

       component : ReenterpinComponent 

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
