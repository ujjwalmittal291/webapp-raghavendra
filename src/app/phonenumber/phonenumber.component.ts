import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {
  submitted = false;
  phoneNumberForm: FormGroup;
  formBuilder: FormBuilder
  phonenumber = new FormControl('');
  public sendOTPobj: any = {
    "mdn": "string",
    "otp": 0
  };
  
  constructor( 
    
    private http: HttpClient,
    private  fb : FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.phoneNumberForm = new FormGroup({
      phonenumber: this.phonenumber
      
   });
        
  }

  onSubmit(){
    this.submitted = true;
    if(this.phoneNumberForm.invalid){
      return;
    }
     console.log("onsubmit....",this.getPwdControls.phonenumber.value);
     this.router.navigate(['/inputotp']);
     const phonenumberObj : any = {
       mdn : this.phonenumber.value,
       otp : "1234"
     }
     this.http.post('https://test.dikshatech.com/windmill/user-services/v1/wm/guest/otp/send', phonenumberObj).subscribe((success) => {
      console.log("success...",success);
    })
  }

  get getPwdControls(){
  return this.phoneNumberForm.controls;
  }
}
